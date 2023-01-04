import app from "./fbaseconfig";
import { getDatabase, ref, set, onValue, push, remove } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";


const database = getDatabase(app)

const auth =getAuth(app)


// send data
let senddata = (data) =>{
    return new Promise((resolve, reject)=>{
        
        let reference = ref(database, `path/${data}`)

        set(reference, data)
        .then(()=>{
            resolve(data)
        })
        .catch(()=>{
            reject('Error from database')
        })
    })
}

// get data
let getdata = (path) =>{
    const reference = ref(database, path);
    return new Promise((resolve, reject)=>{
onValue(reference, (data)=>{
    const value = data.val()
    resolve(value)
})
    })
}

// delete data
let del = (path) =>{
    const reference = ref(database, `${path}`);
    return new Promise((resolve, reject)=>{
set(reference, null)
    })
}

// edit data
let edit = (data,path) =>{
    const reference = ref(database, `${path}`);
    return new Promise((resolve, reject)=>{
set(reference, data)
.then((success)=>{
    resolve(success)
})
.catch((error)=>{
    reject(error)
})
    })
}

// signup
let signup = (email, password, name) =>{
    return new Promise((resolve, reject)=>{

    let data = {email: email, password: password, name: name}

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCreds)=>{
            const user = userCreds.user
        
            let reference = ref(database, `users/${user.uid}`)
        
            set(reference, data)
            .then(()=>{
                
                resolve(data)
            })
            .catch(()=>{
                reject('Error from database')
            })
        
        })
        
        .catch(()=>{
            reject('Error')
        })
       

    })
}

// login
let login = (email, password)=>{
    return new Promise((resolve, reject)=>{
 
     signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             const user = userCredential.user
             const reference = ref(database, `users/${user.uid}`)
 
             onValue(reference, (userdata)=>{
                 let userstatus = userdata.exists()
                 if(userstatus){
                     resolve(userdata.val())
                 }
                 else{
                     reject('User not found')
                 }
             })
         })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             reject(error,)
         })
 
 
     })
 }

// checkuser
let checkuser = () =>{
return new Promise((resolve,reject)=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          resolve(uid)
        } else {

            reject('No user is logged in')

        }
      });

})
}

// logout
let logout = () =>{
    return new Promise((resolve, reject)=>{
        signOut(auth)
        .then(() => {
resolve('logged out')
        }).catch((error) => {
reject('An error happened')
          });
    })
}

// change password
let changepw = (newpw) =>{
    return new Promise((resolve, reject)=>{

        const user = auth.currentUser

    const reference = ref(database, `users/${user.uid}/password`);

        updatePassword(user, newpw).then(() => {

            set(reference, newpw)
            .then((success)=>{

            resolve(success)
})
            .catch((error)=>{
    reject(error)
})
    })
            // Update successful.
          }).catch((error) => {
            // An error ocurred
            // ...
          });

    
}


export { senddata, getdata, signup, login, checkuser, logout, del, edit, changepw }

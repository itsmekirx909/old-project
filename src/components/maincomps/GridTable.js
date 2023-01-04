import { SignalCellularNull } from "@mui/icons-material"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

export default function GridTable(props){
    let thead = props.head
    let tbody = props.body
    return(

        <>

<TableContainer component={Paper}>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

{thead?

thead.map((e,i)=>


<TableCell key={i} align="center">
              <Typography variant='h6' sx={{fontSize: 'medium', fontWeight: 'bolder' }}>
              {e}
              </Typography>
              </TableCell>

)

:
null}


            </TableRow>
            </TableHead>
  
            <TableBody>

{tbody?
tbody.map((e, i)=>

<TableRow key={i}>
  <TableCell align="center">{e.b1}</TableCell>
  <TableCell align="center">{e.b2}</TableCell>
  <TableCell align="center">{e.b3}</TableCell>
  <TableCell align="center">{e.b4}</TableCell>

  </TableRow>

)
:
null}

  </TableBody>

</Table>
</TableContainer>
        </>

    )
}
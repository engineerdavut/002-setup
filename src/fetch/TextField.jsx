import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const TextField=()=>{

    return (
        <div>
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name" label="Product Name" variant="outlined" />
      <TextField id="price" label="Product Price" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
        </div>
    )
}
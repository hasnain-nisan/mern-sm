import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material'

const Input = ({half, name, placeholder, label}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
            name={name}
            placeholder={placeholder}
            label={label}
            fullWidth={true}
            // onChange={}
            variant="outlined"
            required={true}
        />
    </Grid>
  )
}

export default Input
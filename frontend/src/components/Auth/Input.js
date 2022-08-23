import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const Input = ({half, name, placeholder, label, autoFocus, type, handleShowPassword}) => {
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
            autoFocus={autoFocus}
            type={type}
            inputProps={ name === 'password' && {
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword}>
                    {type === 'password' ? <MdVisibility/> : <MdVisibilityOff/>}
                  </IconButton>
                </InputAdornment>
              )
            }}
        />
    </Grid>
  )
}

export default Input
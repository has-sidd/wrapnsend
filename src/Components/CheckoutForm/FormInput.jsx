import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {
    const { control, register } = useFormContext();
  return (
    <>
        <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                name={name}
                render={({field}) => (
                  <TextField
                  fullWidth
                  label={label}
                  required
                  defaultValue=""
                  {...register(name)}
                  />
                )}                
            />
        </Grid>
    </>
  );
};

export default FormInput;


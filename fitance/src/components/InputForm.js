import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@material-ui/core/TextField';

const InputForm = () => {
  const formik = useFormik({
    initialValues: {
      age: '',
      height: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField 
            fullWidth 
            id="age" 
            label="Age as number" 
            variant="outlined"
            margin="dense"
            value={formik.values.age}
            onChange={formik.handleChange} 
        />
        <TextField 
            fullWidth 
            id="height" 
            label="Height in cm" 
            variant="outlined"
            margin="dense"
            value={formik.values.height}
            onChange={formik.handleChange} 
        />
        <Button primary={true} title={'Submit your Data'} type={'submit'} />
      </form>
    </div>
  );
};

export default InputForm;
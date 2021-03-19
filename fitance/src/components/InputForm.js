import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux'
import {
  SetFormValues,
  selectFormValues,
} from '../redux/features/vitals/vitalSlice';

const InputForm = () => {
  const dispatch = useDispatch();
  const test = useSelector(selectFormValues);
  const formik = useFormik({
    initialValues: {
      age: '',
      height: '',
    },
    onSubmit: (values) => {
      dispatch(SetFormValues(values))
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
        {test ? 'Its true!!!' : 'Its not true!!!'}
        <Button primary={true} title={'Submit your Data'} type={'submit'} />
      </form>
    </div>
  );
};

export default InputForm;
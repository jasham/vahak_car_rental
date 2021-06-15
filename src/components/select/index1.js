import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Select } from 'formik-material-ui';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root : {
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink  ' : {
            backgroundColor : '#FFFFFF !important',
        },
        '& .MuiSelect-outlined.MuiSelect-outlined' : {
            fontWeight : 600,
        },
        marginBottom : 15
    }
})

const CustomSelect = ({ label, id, name, options, styles, required }) =>  {
    const classes = useStyles()
    return <FormControl className={clsx(classes.root,styles)} variant="outlined" size="small" required={required}>
  <InputLabel htmlFor={id}>{label}</InputLabel>
  <Field
    component={Select}
    name={name}
    inputProps={{
      id: id,
    }}
  >
    {
        options.map((data, index) => {
            return <MenuItem key={index+data.value} value={data.value}>{data.label}</MenuItem>
        })
    }
  </Field>
</FormControl>

}

export default CustomSelect
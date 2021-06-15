import React from 'react'
import { TextField } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx';

const styles = (theme) => ({
    root : {
        '& .MuiOutlinedInput-input' : {
            fontWeight : 600
        },
        marginBottom : 15,
    }
})

const CustomTextField = (props) => <TextField {...props} size="small" variant="outlined" className={clsx(props.classes.root,props.classesstyle)} />


export default withStyles(styles)(CustomTextField)
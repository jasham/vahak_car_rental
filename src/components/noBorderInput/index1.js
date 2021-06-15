import { InputAdornment, InputBase, withStyles } from '@material-ui/core'
import React from 'react'

const styles = (theme) => ({
    root : {
        border : "0px solid white",
        fontSize : (props) => props.fontSize,
    }
})

const CusInput = (props) => <InputBase name={props.name} {...props} startAdornment={<InputAdornment position="start">{props.iconlabel}</InputAdornment>} />


export default withStyles(styles)(CusInput)
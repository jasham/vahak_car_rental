import { Button } from '@material-ui/core'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const styles = (theme) => ({
    root : {
        textTransform : 'none',
        color : '#2355FC',
        padding : 0,
    }
})
const Buttons = (props) => <Button {...props} startIcon={props.startIcon} className={clsx(props.classes.root, props.stylecls)}>{props.children}</Button>


export default withStyles(styles)(Buttons)
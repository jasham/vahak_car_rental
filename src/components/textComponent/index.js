import React from 'react'
import { Typography } from '@material-ui/core';
import {  withStyles } from '@material-ui/core/styles';
import { string } from 'prop-types'

const styles = (theme) => ({
    textStyle : {
        fontFamily: (props) => props.ffamily ? props.ffamily : "inherit",
        color: (props) => props.color,
        fontWeight: (props) => props.fweight ? props.fweight : "normal",
        lineHeight: (props) => props.lineheight ? props.lineheight : "auto",
        '&:hover': {
            color: (props) => props.hoverColor 
        },
    }
})

const TextComponent = ({ variant, children, classes, component}) => <Typography className={classes.textStyle} variant={variant} component={component}>{children}</Typography>


TextComponent.propTypes = {
    variant : string,
    component : string
}

export default withStyles(styles)(TextComponent)
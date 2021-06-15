import { Box } from '@material-ui/core'
import {  makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root : {
        backgroundColor : '#08123B',
        [theme.breakpoints.down('sm')] : {
            height : 130
        },
        [theme.breakpoints.up('sm')] : {
            height : 180
        }
    }
}))

const StageComponent = ({ children }) => {
    const classes = useStyles()

    return <Box className={classes.root} display="flex" alignItems="center" justifyContent="center">
        {children}
    </Box>
}

export default StageComponent
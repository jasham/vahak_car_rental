import React from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import { Box, Container } from '@material-ui/core'

const useStyles = makeStyles({
    root : {
        backgroundColor : "#FFFFFF"
    },
    mainWrapper : {
        height : 70,
    }

})

const Header = () => {
    const classes = useStyles()
    return <Box className={classes.root}>
        <Container>
            <Box className={classes.mainWrapper} display="flex" alignItems="center">
                <a href="https://www.vahak.in/">
                    <img alt="Vahak_Blue.png" src="https://d1rgemtytdlz2g.cloudfront.net/Vahak_Blue.png" width={100}/>
                </a>
            </Box>
        </Container>
    </Box>
}

export default Header
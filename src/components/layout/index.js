import { Box } from '@material-ui/core'
import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => <Box> <Header /> {children} <Footer /></Box>

export default Layout
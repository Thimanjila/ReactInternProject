import { Box, Container } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MainLayout = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{ flexShrink: 0 }}>
                <Header />
            </Box>
            <Container sx={{ flexGrow: 1, py: 2, mt: 8 }}>{children}</Container>
            <Box sx={{ flexShrink: 0 }}>
                <Footer />
            </Box>
        </Box>
    )
}

export default MainLayout

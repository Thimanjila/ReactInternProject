import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 'auto',
                backgroundColor: 'primary.main',
                color: 'white',
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#" variant="body2" color="inherit">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="body2" color="inherit">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="body2" color="inherit">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Social Media
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#" variant="body2" color="inherit">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="body2" color="inherit">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="body2" color="inherit">
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                >
                    {'Copyright © '}
                    <Link color="inherit" href="#">
                        Login Register Form
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer

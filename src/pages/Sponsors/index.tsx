import React from 'react'
import {
    Typography,
    Box,
    Divider,
    Card,
    Grid,
    CardContent,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { SponsorsData } from './Data'

export default function Sponsers(): JSX.Element {
    return (
        <Box width="90%" margin="auto">
            <Typography variant="h3">More Sponsors</Typography>
            <Divider sx={{ width: '92.5%', marginTop: '1%' }} />
            <Grid container spacing={2}>
                {SponsorsData.map((item) => (
                    <Grid
                        sx={{ mt: '2%', bt: '2%' }}
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={4}
                    >
                        <Link to="/sponsor-details">
                            <Card
                                sx={{
                                    width: '100%',
                                    background: '#F1F1F1',
                                    borderRadius: '10px',
                                }}
                            >
                                <CardContent>
                                    <img
                                        src={item.img}
                                        style={{ width: '100%' }}
                                        alt="img"
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

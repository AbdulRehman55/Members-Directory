import React, { useContext, useEffect, useState } from 'react'
import {
    Grid,
    Typography,
    Box,
    useMediaQuery,
    useTheme,
    IconButton,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import { useLocation } from 'react-router-dom'
import SearchBar from '../../../components/SearchBar'
import { drawerContext } from '../../../context'

const HeaderBox = styled(Box)(({ theme }) => ({
    boxShadow: theme.shadows[1],
    backgroundColor: '#F3F4F6',
    zIndex: 2,
    top: 0,
    position: 'sticky',
    padding: '1rem 0',
}))

export default function Header(): JSX.Element {
    const location = useLocation()
    const [header, setHeader] = useState('')
    const theme = useTheme()
    const { open, setOpen } = useContext(drawerContext)
    const { breakpoints } = theme
    const IsSmDown = useMediaQuery(breakpoints.down('sm'))
    const IsMdDown = useMediaQuery(breakpoints.down('md'))
    const IsLgDown = useMediaQuery(breakpoints.down('lg'))
    const IsXsDown = useMediaQuery(breakpoints.down('xs'))
    const handleVariant = (): any => {
        let variant = 'h5'
        if (IsSmDown || IsXsDown) {
            variant = 'h6'
        } else if (IsMdDown || IsLgDown) {
            variant = 'h5'
        }
        return variant
    }
    const drawerToggle = (): any => {
        setOpen(!open)
    }
    const getHeader = (): any => {
        if (location.pathname === '/member-directory') {
            setHeader('Member Directory')
        } else {
            setHeader('Profile')
        }
    }
    useEffect(() => {
        getHeader()
    }, [location])
    return (
        <HeaderBox>
            <Grid container alignItems="center">
                <Grid
                    textAlign="center"
                    item
                    xs={2}
                    sm={12}
                    md={5}
                    xl={3}
                    sx={{ display: { sm: 'none' } }}
                >
                    <IconButton onClick={drawerToggle}>
                        <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={10} sm={12} md={5} xl={3}>
                    <Typography variant={handleVariant()} sx={{ ml: 3 }}>
                        {header}
                    </Typography>
                </Grid>
                <Grid
                    sx={{ px: { xs: 2, md: 2 }, py: { xs: 2, md: 0 } }}
                    item
                    xs={12}
                    sm={12}
                    md={7}
                    xl={9}
                >
                    <SearchBar />
                </Grid>
            </Grid>
        </HeaderBox>
    )
}

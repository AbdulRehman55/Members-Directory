import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function DashboardLayout(): JSX.Element {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/member-directory')
        }
    }, [location])

    const SidebarBox = styled(Box)`
        @media (max-width: 599px) {
            width: 0;
        }
    `
    return (
        <Box>
            <Box minHeight="100vh" display="flex">
                <SidebarBox>
                    <Sidebar />
                </SidebarBox>
                <Box
                    width="100%"
                    position="relative"
                    display="flex"
                    flexDirection="column"
                >
                    <Header />
                    <Box flex={1}>
                        <Outlet />
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
}

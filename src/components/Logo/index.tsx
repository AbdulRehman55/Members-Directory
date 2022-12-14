import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import LogoIcon from '../../img/Logo.png'

export default function Logo(): JSX.Element {
    return (
        <Box sx={{ pt: 1 }}>
            <Link to="/member-directory">
                <img style={{ width: '100%' }} src={LogoIcon} alt="Logo" />
            </Link>
        </Box>
    )
}

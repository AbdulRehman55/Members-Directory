import React, { useEffect, useState } from 'react'
import { Box, Typography, Divider, Avatar, Grid, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { getMemberProfileById } from '../../Services'

export default function Card({
    img,
    practiceName,
    companyName,
    firstName,
    lastName,
    id,
}): JSX.Element {
    const [data, setData] = useState()
    const navigate = useNavigate()
    const Btn = styled(Button)`
        color: #015790;
        background: #d9d9d9;
        border-radius: 24px;
        padding: 10px 22px;
        margin: 1rem auto !important;
    `
    return (
        <Box
            sx={{
                mt: 2,
                width: '300px',
                height: '450px',
                padding: '2rem 1rem',
                margin: '1rem 1rem',
                border: '2px solid #efefef',
                borderRadius: '10px',
            }}
        >
            <Avatar
                alt="avatar"
                style={{ width: '100px', height: '100px', margin: 'auto' }}
                src={img}
            />
            <Box display="flex" alignItems="center" flexDirection="column">
                <Typography variant="h6" sx={{ pt: 1, whiteSpace: 'nowrap' }}>
                    {firstName && firstName} {lastName && lastName}
                </Typography>
                <Divider sx={{ width: '50%' }} />
                <Typography
                    variant="subtitle1"
                    sx={{
                        pt: 1,
                        textAlign: 'center',
                        height: '85px',
                    }}
                >
                    {practiceName && practiceName}
                </Typography>
                <Typography sx={{ height: '42px', fontSize: '14px' }}>
                    {companyName && companyName}
                </Typography>
            </Box>
            <Btn
                sx={{ py: 0, display: 'block', margin: 'auto' }}
                onClick={() => {
                    navigate(`/member-directory/${id}`)
                }}
            >
                Read More
            </Btn>
        </Box>
    )
}

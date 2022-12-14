import React from 'react'
import { Typography, Box, styled } from '@mui/material'

export default function Footer(): JSX.Element {
    const FooterBox = styled(Box)`
        position: sticky;
        background-color: #f3f4f6;
        bottom: 0px;
        width: 100%;
        display: flex;
        border-top: 1px solid #d9d9d9;
        justify-content: center;
    `
    const FooterText = styled(Typography)`
    font-family:Roboto;
    text-align:center;
    font-weight:400;
    margin:1rem 0px;
    }
`
    return (
        <FooterBox>
            <FooterText variant="subtitle1">
                Copyright © 2022 All rights reserved.
            </FooterText>
        </FooterBox>
    )
}

import { Avatar, Box, List, styled } from '@mui/material'

export const MainBox = styled(Box)`
    display: flex;
    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
    }
`
export const AvatarBox = styled(Avatar)`
    width: 100px;
    height: 100px;
    @media only screen and (max-width: 600px) {
        margin: auto;
    }
`
export const HeadingAndIconBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
export const HeadingBox = styled(Box)`
    @media only screen and (max-width: 600px) {
        margin: 1rem 0;
    }
`

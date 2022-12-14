import { Box } from '@mui/material'
import { useEffect } from 'react'
import { getMemberProfileById } from '../../Services'
import Profile from '../Profile'

export default function OneMemberDirectory(): JSX.Element {
    // async function getData(): Promise<any> {
    //     const oneMember = await getMemberProfileById('00043701')
    //     console.log(oneMember, 'your one  member')
    //     // setData(members)
    // }

    return (
        <Box>
            <Profile />
        </Box>
    )
}

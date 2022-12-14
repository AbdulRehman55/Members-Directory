import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import MemberDirectory from '../../../img/MemberDirectory.png'
import Profile from '../../../img/Profile.png'
import Sponsers from '../../../img/Sponsers.png'
import Logout from '../../../img/Logout.png'

export const sideBarList = [
    {
        text: 'Member Directory',
        icon: MemberDirectory,
        path: '/member-directory',
    },
    { text: 'Profile', icon: Profile, path: '/profile' },
    // { text: 'More Sponsors', icon: Sponsers, path: '/sponsors' },
    { text: 'Logout', icon: Logout, path: '/login' },
]

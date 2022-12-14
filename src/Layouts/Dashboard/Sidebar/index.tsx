import React, { useContext } from 'react'
import {
    Box,
    Drawer,
    List,
    Divider,
    Toolbar,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    Typography,
    ListItem,
    IconButton,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../components/Logo'
import { sideBarList } from './Data'
import { logOut } from '../../../Services'
import { drawerContext } from '../../../context'

const DRAWER_WIDTH = 300
interface Props {
    window?: () => Window
}

export default function Sidebar({ window }: Props): JSX.Element {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const { open, setOpen } = useContext(drawerContext)
    if (open) console.log(open)
    const location = useLocation()

    const handleDrawerToggle = (): any => {
        setOpen(false)
    }
    const activeTab = (currPath, itemPath): boolean => {
        return currPath === itemPath
    }
    const renderContent = (
        <>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mt: 0, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Logo />
            </Toolbar>
            <Box>
                <List sx={{ pt: 8 }}>
                    {sideBarList.map((item, index) => (
                        <Link to={item.path}>
                            <ListItem key={`icon-${index + 1}`} sx={{ p: 1 }}>
                                <ListItemButton
                                    onClick={() => {
                                        setOpen(false)
                                        logOut(item)
                                    }}
                                >
                                    <ListItemIcon>
                                        <img
                                            src={item.icon}
                                            alt={item.text}
                                            style={{
                                                filter:
                                                    activeTab(
                                                        location.pathname,
                                                        item.path
                                                    ) && 'brightness(0)',
                                            }}
                                        />
                                    </ListItemIcon>
                                    <Typography
                                        sx={{
                                            color: '#121828',
                                        }}
                                        variant={
                                            activeTab(
                                                location.pathname,
                                                item.path
                                            )
                                                ? 'body1'
                                                : 'body2'
                                        }
                                    >
                                        {item.text}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            {index !== sideBarList.length - 1 && (
                                <Divider
                                    sx={{ width: '204px' }}
                                    variant="inset"
                                />
                            )}
                        </Link>
                    ))}
                </List>
            </Box>
        </>
    )
    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Box
            component="nav"
            sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer
                container={container}
                variant="temporary"
                open={open}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: DRAWER_WIDTH,
                        background: '#F1F1F1',
                    },
                }}
            >
                {renderContent}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: DRAWER_WIDTH,
                        background: '#F1F1F1',
                    },
                }}
                open
            >
                {renderContent}
            </Drawer>
        </Box>
    )
}

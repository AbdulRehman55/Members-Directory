import * as React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Routes from './routes/Routes'
import { userContext, searchContext, drawerContext } from './context'
import { getProfileAccess } from './Services'

import './css/style.css'
import Loader from './components/Loader/Index'

export default function App(): ReactNode {
    const [user, setUser] = useState(null)
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const profile = getProfileAccess()
        if (profile) {
            setUser(profile)
        }
        setLoading(false)
    }, [])

    return (
        <HelmetProvider>
            <BrowserRouter>
                <userContext.Provider value={{ user, setUser }}>
                    <searchContext.Provider value={{ value, setValue }}>
                        <drawerContext.Provider value={{ open, setOpen }}>
                            {loading ? <Loader /> : <Routes />}
                        </drawerContext.Provider>
                    </searchContext.Provider>
                </userContext.Provider>
            </BrowserRouter>
        </HelmetProvider>
    )
}

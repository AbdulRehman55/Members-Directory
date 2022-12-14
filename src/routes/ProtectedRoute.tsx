import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userContext } from '../context/UserContext'
import { getProfileAccess } from '../Services'

export const ProtectedRoute = ({ children }): JSX.Element => {
    const user = getProfileAccess()

    return <>{!user ? <Navigate to="/login" /> : <>{children}</>}</>
}

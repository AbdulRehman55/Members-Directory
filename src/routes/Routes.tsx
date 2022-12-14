/* eslint-disable prettier/prettier */
import * as React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import MemberDirectory from '../pages/MemberDirectory'
import NotFound from '../pages/NotFound/NotFound'
import Profile from '../pages/Profile'
import Sponsors from '../pages/Sponsors'
import SponsorDetails from '../pages/SponsorDetails'
import DashboardLayout from '../Layouts'
import OneMemberDirectory from '../pages/oneMemberDirectory'
import { ProtectedRoute } from './ProtectedRoute'

export default function Routes(): ReactNode {
    return useRoutes([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <DashboardLayout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/member-directory',
                    element: <MemberDirectory />,
                },
                {
                    path: '/member-directory/:id',
                    element: <OneMemberDirectory />,
                },
                {
                    path: '/profile',
                    element: <Profile />,
                },
                {
                    path: '/sponsors',
                    element: <Sponsors />,
                },
                {
                    path: '/sponsor-details',
                    element: <SponsorDetails />,
                },
            ],
        },
        { path: '404', element: <NotFound /> },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}

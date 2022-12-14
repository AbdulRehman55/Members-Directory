/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable camelcase */
import axios from 'axios'
import { callApi } from '../Services'

function getProfileAccess() {
    return JSON.parse(window.localStorage.getItem('access_profile'))
}

function setSession(access_profile) {
    if (access_profile) {
        localStorage.setItem('access_profile', access_profile)
        axios.defaults.headers.common.Authorization = access_profile
    } else {
        localStorage.removeItem('access_profile')
        delete axios.defaults.headers.common.Authorization
        // window.location.reload()
    }
}

// eslint-disable-next-line consistent-return
async function logIn(username, password): Promise<any> {
    try {
        const res = await callApi({
            method: 'POST',
            path: '/getUserProfile',
            body: {
                Username: username,
                Password: password,
            },
        })

        if (res) {
            return res
        }
    } catch (err) {
        throw new Error(err)
    }
}

function logOut(item) {
    if (item.text === 'Logout') {
        setSession(null)
        window.location.reload()
    }
}

export { logIn, setSession, getProfileAccess, logOut }

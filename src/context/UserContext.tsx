import { createContext } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const userContext = createContext({
    user: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setUser: (loggedInUser: any) => {},
})
export { userContext }

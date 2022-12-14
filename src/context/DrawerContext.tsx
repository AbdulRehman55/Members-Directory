import { createContext } from 'react'

const drawerContext = createContext({
    open: false,
    setOpen: null,
})
export { drawerContext }

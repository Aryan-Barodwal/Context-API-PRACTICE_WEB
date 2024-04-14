import React from 'react'
import { UserContext } from "./context"
import { useState } from 'react'
import { useEffect } from 'react'

const UserContextProvider = ({ children }) => {

    const [User, setUser] = useState('')

    const [themeMode, setthemeMode] = useState('light')

    const lighttheme = () => {
        setthemeMode("light")
    }
    const darktheme = () => {
        setthemeMode("dark")
    }

    useEffect(() => {
    
        document.querySelector('html').classList.remove("hydrated", "light", "dark")

        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])


    return (
        <UserContext.Provider value={{ User, setUser, themeMode, lighttheme, darktheme }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider

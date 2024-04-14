import { useContext } from "react";
import React from "react";

export const UserContext = React.createContext({
    themeMode: "light",
    lighttheme: () => { },
    darktheme: () => { }
});

// export const UserContextProvider = UserContext.Provider


// export const UserProvider = ({ children }) => {
//     const [User, setUser] = useState(null);
//     const [themeMode, setThemeMode] = useState("light");

//     const lighttheme = () => {
//         setThemeMode("light");
//     };

//     const darktheme = () => {
//         setThemeMode("dark");
//     };

//     return (
//         <UserContext.Provider value={{ User, setUser, themeMode, lighttheme, darktheme }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

export default function useTheme() {
    return useContext(UserContext);
    
}


// const { setUser } = useContext(UserContext);




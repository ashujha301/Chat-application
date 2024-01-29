// import { createContext,useState } from "react";

// export const authContext = createContext();

// export const authContextProvider = ({children}) =>{
//     const [user, setUser] = useState(null);
//     const [registerInfo, setRegisterInfo] = useState({
//         name:"",
//         email:"",
//         password:""
//     });

//     return(
//         <authContext.Provider
//         value={{
//             user,
//             registerInfo,
//         }}
//         >
//             {children}
//         </authContext.Provider>
//     );
// };
import React from "react";
import UserContex from "./UserContext";

const UserContextProvider =({children}) =>{
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>     // after rap kai value ecess karavo chho value in property props(data pass)
          {children}          //Provider thi rap karyu  children
        </UserContext.Provider>
    )
}

export default UserContextProvider
// how to data access(data levo)

import React, { useContext } from "react";
import UserContex  from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContex)

    if(!user) return <div>please login</div>

    return <div  className="text-2xl font-semibold text-center text-green-700 mt-6"> Welcome {user.username}</div>
}

export default Profile
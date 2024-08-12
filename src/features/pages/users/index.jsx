import React from "react";
import { Link } from 'react-router-dom';

function Users() {
    return (
        <div>
            This is user page<Link to="/"> go to dashboard</Link>
        </div>
    )
}

export default Users;
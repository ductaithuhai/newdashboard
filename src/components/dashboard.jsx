import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <p>this is dash board</p> <Link to='/users'>go to User Page</Link>
        </div>
    )
}

export default Dashboard;
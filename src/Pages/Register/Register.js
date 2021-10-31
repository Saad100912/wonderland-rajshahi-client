import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="container">
            <h2>This is the register page</h2>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Register;

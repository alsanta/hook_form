import React, { useState } from 'react';

const Login = (props) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <>
            <div class="container">
                <form action="">
                    <div className="form-group mb-3">
                        <label >First Name:</label>
                        <input onChange={(e) => setFname(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Last Name:</label>
                        <input onChange={(e) => setLname(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Password:</label>
                        <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Confirm Password:</label>
                        <input onChange={(e) => setConfirm(e.target.value)} className="form-control" type="text" />
                    </div>
                </form>
            </div>
            <h5>Form Data:</h5>
            <p>Name: {fname} {lname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </>
    );
}

export default Login;
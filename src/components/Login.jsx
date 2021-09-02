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
                        { fname.length < 2 && fname.length != ""
                        ?<p className="text-danger">First name must be at least 2 characters long.</p>
                        :""
                        }
                        <input onChange={(e) => setFname(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Last Name:</label>
                        { lname.length < 2 && lname.length != ""
                        ?<p className="text-danger">Last name must be at least 2 characters long.</p>
                        :""
                        }
                        <input onChange={(e) => setLname(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Email:</label>
                        { email.length < 5 && email.length != ""
                        ?<p className="text-danger">Email must be at least 5 characters long.</p>
                        :""
                        }
                        <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Password:</label>
                        { password.length < 8 && password.length != ""
                        ?<p className="text-danger">Password must be at least 8 characters long.</p>
                        :""
                        }
                        <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Confirm Password:</label>
                        { confirm != password && confirm.length != ""
                        ?<p className="text-danger">Password doesn't match.</p>
                        :""
                        }
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
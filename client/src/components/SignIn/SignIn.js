import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInEmployee } from '../../axios/instance';
import { ToastContainer, toast } from 'react-toastify';
import "./SignIn.css";

const SignIn = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        const res = await SignInEmployee({name, password});
        console.log(res);

        try{
            if (!res.data.error)
            {
               toast.success("You are logged in successfully");
               navigate('/menudetails');
               setName("");
               setPassword("");
            }
         } catch (err) {
            if (err.response)
            {
              toast.error(`${ err.response.data.error }`);
            }
         }

    }

    return (
        <div className="login-page-outer">
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input 
                           type="text" 
                           placeholder="Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                        />
                        <ToastContainer position="bottom-right" bodyClassName="toastBody"/>
                        <input 
                           type="password" 
                           placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="viewall-btn" onClick={handleSignIn}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
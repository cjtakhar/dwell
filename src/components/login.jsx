import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
       
        navigate('/listings');
      };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="login-title">login.</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-input">
                        <label className="login-label"></label>
                        <input className="login-field" type="text" placeholder="username" value={username} onChange={handleUsernameChange} />

                        <label className="login-label"></label>
                        <input className="login-field" type="password" placeholder="password" value={password} onChange={handlePasswordChange} />

                        <input className="login-button" type="submit" value="login" />
                    </div>
                </form>
            </div>
          </div>

)}

export default Login;
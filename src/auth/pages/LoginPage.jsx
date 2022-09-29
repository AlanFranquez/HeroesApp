import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

  const {login} = useContext(AuthContext)

  const navigate = useNavigate();

  const onLogin = () => {

    // Para recordar lo que habia puesto antes de deslogearme
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Alan Fránquez')

    navigate(lastPath, {
      replace: true
    })
  }


  return (
    
    <div className="container mt-5">
        <h1>Login</h1>
        <hr></hr>


        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
    </div>
  )
}

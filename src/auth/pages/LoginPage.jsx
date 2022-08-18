import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'


    login('Facundo Flores');
    
    navigate(lastPath, { replace: true })
  }

  return (
    <div className="full-page login-page">
      <div className='login-card'>
        <h1>HEROES APP</h1>
        
        <button className="btn btn-outline-light mt-5" onClick={ onLogin }>
          Login
        </button>
      </div>
    </div>
  )
}

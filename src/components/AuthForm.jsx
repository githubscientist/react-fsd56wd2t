import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {

  const navigate = useNavigate();

  return (
    <div className="authForms">
              <div>
                  <button
                      style={{ width: '200px' }}
                      onClick={() => {
                        //   window.location.href = '/register';
                          navigate('/register');
                      }}
                  >
                    Register
                  </button>
              </div>
                <div style={{textAlign: 'center'}}>
                  <p>or</p>
                </div>
              <div>
                  <button
                      style={{ width: '200px' }}
                      onClick={() => {
                          navigate('/login');
                      }}
                  >Login</button>
              </div>
      </div>
  )
}

export default AuthForm
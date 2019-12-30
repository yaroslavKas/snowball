import React, {useState, useEffect} from 'react';
import useHttp from '../hooks/http.hook';

const AuthPage = () =>  {
  const {loading, error, request, clearError} = useHttp();
  const [form, setForm] = useState({
    email:'', password:''
  });

  useEffect(() => {
    console.log(error)
  }, [error]);

  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      console.log(data)
    } catch(e) {}
  };

  return (
    <div className="auth">
      <h1>Сократи ссылку</h1>
      <div className="auth-block">
        <h3 className="auth-title">Authorization</h3>
        <div className="input-block">
          <p className="input-block__label">E-mail</p>
          <input
            placeholder="Введите email"
            type="text"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="input-block">
          <p className="input-block__label">Password</p>
          <input
            placeholder="Введите пароль"
            type="password"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div className="auth-buttons">
          <button
            type="button"
            disabled={loading}
          >LogIn</button>
          <button
            type="button"
            onClick={registerHandler}
            disabled={loading}
          >Registration</button>
        </div>
      </div>
    </div>
  )
};

export default AuthPage;
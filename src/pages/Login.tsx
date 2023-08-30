import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitUserData } from '../redux/actions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const { email, password } = login;

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setLogin({ ...login, [targetName]: value });
  };

  const isEmailValid = (emailInput: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(emailInput);
  };

  const isPasswordValid = (passwordInput: string) => {
    return passwordInput.length >= 6;
  };

  const isLoginValid = () => {
    if (isEmailValid(email) && isPasswordValid(password)) {
      return true;
    }
  };

  return (
    <div>
      <h1>
        <span>Trybe</span>
        <span>Wallet</span>
      </h1>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          dispatch(submitUserData(login));
          navigate('/carteira');
        } }
      >
        <label>
          Email:
          <input
            type="text"
            data-testid="email-input"
            name="email"
            placeholder="Digite seu email"
            required
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="password"
            required
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ !isLoginValid() }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;

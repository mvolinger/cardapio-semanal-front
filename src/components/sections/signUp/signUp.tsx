import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigatorMenu from '../navigatorMenu/NavigatorMenu';
import logo from './LogoSignUp.svg';
import SignUpPost from '../../Services/createUser/SignUpPost';

type UserLogginFunctions = {
  setuserIdLogged: Function
  setuserIsLogged: Function
  setuserNameLogged: Function
}

export default function SignUp(props:UserLogginFunctions) {
    const [signUpName, setSignUpName] = useState('');
    

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        SignUpPost(signUpName,navigate);
        setSignUpName('');
        }

    const navigate = useNavigate();
    return (
        <div>
          <NavigatorMenu setuserIdLogged={props.setuserIdLogged} setuserIsLogged={props.setuserIsLogged} setuserNameLogged={props.setuserNameLogged}></NavigatorMenu>
          <div className='MainDiv' id='SmallMainDiv'>
              <img src={logo} alt="SignUpImg"/>
              <h4>Cadastrar-se no Cardápio Semanal</h4>
              <form onSubmit={handleSubmit}>
              <div className='SigUpInputDiv'>
                <input type='text' className='userId' id='userIdSignUp' placeholder='Nome do usuário' onChange={event => setSignUpName(event.target.value)}
                value={signUpName}></input>
              </div>
                  <button className='NormalButton' type='submit'>Cadastrar</button>
              </form>
          </div>
        </div>
    )
    


  
}
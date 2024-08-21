import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigatorMenu from '../navigatorMenu/NavigatorMenu';
import logo from './LogoSignIn.svg';
import GetUser from '../../Services/getUser/GetUser';

type UserLogginFunctions = {
    setuserIdLogged: Function
    setuserIsLogged: Function
    setuserNameLogged: Function
}

export default function SignIn(props:UserLogginFunctions) {

    const [signInName, setSignInName] = useState('');
    
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        GetUser(signInName).then(user => {
            if (user.name!== '' && user.name!== undefined){
                props.setuserIsLogged(true);
                props.setuserIdLogged(user.userId);
                props.setuserNameLogged(user.name)
            }
            else{navigate("/signUp")}
        });
        }

    const navigate = useNavigate();

    return (
        <div>
            <NavigatorMenu setuserIdLogged={props.setuserIdLogged} setuserIsLogged={props.setuserIsLogged} setuserNameLogged={props.setuserNameLogged}></NavigatorMenu>
        <div className='MainDiv' id='SmallMainDiv'>
            <img src={logo} alt="SignInImg"/>
            <h4>Entre no seu Cardápio Semanal</h4>
            <form onSubmit={handleSubmit}>
            <div className='SigInInputDiv'>
                <input type='text' className='userId' id='userId' placeholder='Nome do usuário' onChange={event => setSignInName(event.target.value)} value={signInName}></input>
            </div>
            <div className='logInButtons'>
                <button className='NormalButton' type='submit'>Entrar</button>
                <button className='AlternateButton' onClick={() =>{navigate("/signUp")}}>Cadastro</button>
            </div>
            </form>
        </div>
        </div>
    )
}
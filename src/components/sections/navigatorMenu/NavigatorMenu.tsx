import React, { useContext } from 'react';
import { LoggedUserContext, UserNameContext } from '../../Services/Context/LoggedUserContext';
import SignOut from '../signOut/signOut';
import { Link } from 'react-router-dom';
import './style.css'

type UserLogginFunctions = {
    setuserIdLogged: Function
    setuserIsLogged: Function
    setuserNameLogged: Function
}

export default function NavigatorMenu(props:UserLogginFunctions) {
    let name  = useContext(UserNameContext)
    return(
        <div className="NavigatorMenu">
            {useContext(LoggedUserContext) ? 
                <>
                    <SignOut setuserIdLogged={props.setuserIdLogged} setuserIsLogged={props.setuserIsLogged} setuserNameLogged={props.setuserNameLogged}/>
                    <h1>{'Olá, ' + name + '   '}</h1>
                </>:
                <></>
            }
            {useContext(LoggedUserContext) ? 
                <>
                    <Link to="/createMenu">Criar Cardápio</Link>
                    <Link to="/getMeals">Meus Cardápios</Link>
                </>:
                <>
                    <Link to='/' >Entrar</Link>
                    <Link to='/signUp'>Cadastro</Link>
                </>
            }
        </div>
    )
}
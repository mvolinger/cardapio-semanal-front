import React, { useContext, useState } from 'react';
import { UserIdContext } from '../../Services/Context/LoggedUserContext';
import { useNavigate } from 'react-router-dom';
import NavigatorMenu from '../navigatorMenu/NavigatorMenu';
import logo from './LogoCreateNew.svg';
import CreateMenuPost from '../../Services/CreateMenu/CreateMenuPost';
import { wait } from '@testing-library/user-event/dist/utils';

type UserLogginFunctions = {
  setuserIdLogged: Function
  setuserIsLogged: Function
  setuserNameLogged: Function
}

export default function CreateNewMenu(props:UserLogginFunctions) {

    const [menuDescriptionName, setmenuDescriptionName] = useState('');

    const [ResultDiv, setResultDiv] = useState(<><h4>Crie um novo Cardápio</h4></>);

    let userId = useContext(UserIdContext)
    
    const navigate = useNavigate();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      CreateMenuPost(menuDescriptionName,userId,navigate,setResultDiv);
    }

    return (
        <div className='CreateNewMenu'>
          <NavigatorMenu setuserIdLogged={props.setuserIdLogged} setuserIsLogged={props.setuserIsLogged} setuserNameLogged={props.setuserNameLogged}></NavigatorMenu>
          <div className='MainDiv' id='SmallMainDiv'>            
            <img src={logo} alt="CreateMealImg"/>
            {ResultDiv}
            <form onSubmit={handleSubmit}>
              <div> 
                <input type='text' placeholder='Descrição' onChange={event => setmenuDescriptionName(event.target.value)} value={menuDescriptionName}></input>
              </div>
              <button className='NormalButton' type='submit'>Criar novo Cardápio</button>
            </form>
          </div>
        </div>
    )
}

export {}
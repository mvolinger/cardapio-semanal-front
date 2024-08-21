import React, { useContext, useState } from 'react';
import { UserIdContext } from '../../Services/Context/LoggedUserContext';
import { useNavigate } from 'react-router-dom';
import NavigatorMenu from '../navigatorMenu/NavigatorMenu';
import GetMenus from '../../Services/GetMenus/GetMenus';

type UserLogginFunctions = {
  setuserIdLogged: Function
  setuserIsLogged: Function
  setuserNameLogged: Function
}

export default function GetMealsByUserId(props:UserLogginFunctions) {

    let userId = useContext(UserIdContext)

    const [weaklymenusDiv, setweaklymenusDiv] = useState(<div></div>);

    const navigate = useNavigate();

    return (
        <div>
          <NavigatorMenu setuserIdLogged={props.setuserIdLogged} setuserIsLogged={props.setuserIsLogged} setuserNameLogged={props.setuserNameLogged}></NavigatorMenu>
          <div className='MainDiv' id='NormalMainDiv'>
              <h4>Consulte todos os seus menus</h4>
                  <button className='NormalButton' onClick={() => GetMenus(userId, navigate).then(response =>{setweaklymenusDiv(response)})}>Consultar</button>
              {weaklymenusDiv}
          </div>
        </div>
        

    )
  }
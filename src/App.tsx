import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import SignIn from './components/sections/signIn/signIn';
import { LoggedUserContext, UserIdContext, UserNameContext } from './components/Services/Context/LoggedUserContext';
import SignUp from './components/sections/signUp/signUp';
import GetMealsByUserId from './components/sections/getMealById/getMealByUserId';
import './App.css';
import CreateNewMenu from './components/sections/createNewMenu/CreateNewMenu';

const App: React.FC = () => {
  const [userIsLogged, setuserIsLogged] = useState(false);
  const [userIdLogged, setuserIdLogged] = useState('');
  const [userNameLogged, setuserNameLogged] = useState('');
  return (
    <div className='SPA'>
      <UserNameContext.Provider value={userNameLogged}>
        <LoggedUserContext.Provider value={userIsLogged}>
          <UserIdContext.Provider value={userIdLogged}>
            <Router>
              <Routes>
                <Route path='/' element={userIsLogged ? <Navigate to="/getmeals"/> : <SignIn setuserIdLogged={setuserIdLogged} setuserIsLogged={setuserIsLogged} setuserNameLogged={setuserNameLogged}></SignIn>}/>
                <Route path="/signUp" element={userIsLogged ? <Navigate to="/getmeals"/> : <SignUp setuserIdLogged={setuserIdLogged} setuserIsLogged={setuserIsLogged} setuserNameLogged={setuserNameLogged}/>} />
                <Route path="/getMeals" element={userIsLogged ? <GetMealsByUserId setuserIdLogged={setuserIdLogged} setuserIsLogged={setuserIsLogged} setuserNameLogged={setuserNameLogged}></GetMealsByUserId> : <Navigate to="/"/>} />
                <Route path="/createMenu" element={userIsLogged ? <CreateNewMenu setuserIdLogged={setuserIdLogged} setuserIsLogged={setuserIsLogged} setuserNameLogged={setuserNameLogged}></CreateNewMenu> : <Navigate to="/"/>}/>
              </Routes>
            </Router>
          </UserIdContext.Provider>
        </LoggedUserContext.Provider>
      </UserNameContext.Provider>
    </div>
  );
};
export default App;

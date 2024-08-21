import DayDisplay from '../dayDisplay/DayDisplay';
import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { WeaklyMenu } from '../../Services/Interfaces/Interface';
import DeleteMenu from '../../Services/DeleteMenu/Deletemenu';


type MenuProps = {
    Menu: WeaklyMenu
    Menunumber: number
}

const MenuDisplay = (props:MenuProps) => {

    let dayArray = []
    const chunkSize = 4;
    for (let a = 0; a < props.Menu.meals.length; a += chunkSize) {
        let day = props.Menu.meals.slice(a, a + chunkSize);
        dayArray.push(day)
    }
    let daynumber = 1;
    const listDays = dayArray.map( (day, i) => <DayDisplay key={i++} day={day} dayNumber={daynumber++}></DayDisplay>)

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
      setIsActive(!isActive);
    }

    const navigate = useNavigate();

    return(
        <div className='Menu'>
          <div className={'MenuButtonDiv'}>
            <button className='descriptionButton' onClick={() =>{toggleClass()}}>
              <h2>{props.Menu.description}</h2>
            </button>
            <button className={'DeleteButton'} onClick={() => {
            DeleteMenu(props.Menu.weekMenuId)
            navigate('/')
            }}> Deletar cardápio</button>
          </div>
          <div className={isActive ? 'Menu-visible' : 'Menu-hidden'} >
            {listDays}
          </div>
        </div>
    )
}

export default MenuDisplay;

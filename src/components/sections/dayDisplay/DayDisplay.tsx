import MealDisplay from "../mealDisplay/mealDisplay"
import './style.css';
import {Meal} from "../../Services/Interfaces/Interface";

type DayProps = {
    day: Array<Meal>
    dayNumber: number
}

const DayDisplay = (props:DayProps) => {

  const listMeals = props.day.map( (meal, i) => <MealDisplay key={i++} meal={meal} mealNumber={i}></MealDisplay>)

  return(
    <div className="DayDiv">
      <h4 className="DayNumber">{"Dia " + props.dayNumber}</h4>
      <div className="row">
        {listMeals}
      </div>
    </div>
  )
}

export default DayDisplay;
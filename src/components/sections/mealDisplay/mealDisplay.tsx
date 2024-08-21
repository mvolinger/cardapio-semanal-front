import React from 'react';
import './style.css';
import { Meal, Ingredient } from '../../Services/Interfaces/Interface';

type MealProps = {
    meal: Meal
    mealNumber: number;
  };


const MealDisplay = (props:MealProps) => {
    try {
        let mealtype = 'null'
        if (props.meal.mealType.breakfast) {
          mealtype='Café da manhã'
        }
        if (props.meal.mealType.dinner) {
          mealtype='Jantar'
        }
        if (props.meal.mealType.lunch) {
          mealtype='Almoço'
        }
        if (props.meal.mealType.snack) {
          mealtype='Lanche'
        }
        let mealarray = Array(6).fill(1)
        // eslint-disable-next-line array-callback-return
        props.meal.ingredients.map( (ingredient: Ingredient) => {
          if (ingredient.ingredientType.animalProtein) {mealarray[1] = ingredient}
          if (ingredient.ingredientType.carbohydrate) {mealarray[0] = ingredient}
          if (ingredient.ingredientType.fruit) {mealarray[5] = ingredient}
          if (ingredient.ingredientType.leafVegetable) {mealarray[3] = ingredient}
          if (ingredient.ingredientType.plantProtein) {mealarray[2] = ingredient}
          if (ingredient.ingredientType.rootVegetable) {mealarray[4] = ingredient}
        } );

        const listIngredients = mealarray.map( (ingredient: any,i) => <p key={i++}>{ingredient.name}</p>);

        return(
            <div className='column'>
                <div className='card'>  
                  <h4>{mealtype}</h4>
                  <div>
                      {listIngredients}
                  </div>
                </div>
            </div>
        
    )      
    } catch (error) {
        return null
    }
    
    
}

export default MealDisplay;
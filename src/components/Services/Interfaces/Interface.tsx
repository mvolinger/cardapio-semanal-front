export interface Meal {
    description: string;
    ingredients: Array<Ingredient>;
    mealId: string;
    mealType: MealType;
    user: User;
}

export interface Ingredient {
    name: string;
    description: string;
    dietType: DietType;
    ingredientId: string;
    ingredientType: IngredientType;
    mealType: MealType;
}

export interface MealType {
    breakfast: boolean;
    dinner: boolean;
    lunch: boolean;
    snack: boolean;
    mealTypeId: string;
}

export interface DietType {
    celiacDisease: boolean
    diabetes: boolean
    dietTypeId: string
    lactoseIntolerance: boolean
    lactovegetarian: boolean
    omnivorous: boolean
    ovolactovegetarian: boolean
    ovovegetarian: boolean
    pescetarian: boolean
    vegan: boolean
}

export interface IngredientType {
    animalProtein: boolean
    carbohydrate: boolean
    fruit: boolean
    leafVegetable: boolean
    plantProtein: boolean
    rootVegetable: boolean
    ingredientTypeId: string
}

export interface User {
    dietType: DietType
    email: string
    lastname: string
    name: string
    password: string
    userId: string
}

export interface WeaklyMenu {
    description: string;
    meals: Array<Meal>;
    user: User;
    weekMenuId: string;
  }

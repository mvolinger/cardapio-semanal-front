import { User } from "../Interfaces/Interface";

export default async function GetUser(signInName:string) {
  let a:User = {
  dietType: {
    celiacDisease: false,
    diabetes: false,
    dietTypeId: '',
    lactoseIntolerance: false,
    lactovegetarian: false,
    omnivorous: false,
    ovolactovegetarian: false,
    ovovegetarian: false,
    pescetarian: false,
    vegan: false},
  email: '',
  lastname:'',
  name:'',
  userId:'',
  password:''
  }

  let b = await fetch('https://wue0h09e48.execute-api.sa-east-1.amazonaws.com/api/users/name/' + signInName,{ 
  method: 'GET',
  headers: {'accept': '*/*'},
  mode: "cors"})
  .then(response => {
  return response.json();
  })
  .then(data =>{
  let user: User = data
  return user
  })
  .catch(error => {
   return a
  });

  return b
}
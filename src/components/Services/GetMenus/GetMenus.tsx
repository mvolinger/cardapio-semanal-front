import { WeaklyMenu } from "../Interfaces/Interface";
import GetSingleMenu from "../getMeal/GetMealById";

export default async function GetMenus(userId:String, navigate: Function) {
    return await fetch('https://wue0h09e48.execute-api.sa-east-1.amazonaws.com/api/menus/user/' + userId, {
      method: 'GET',
      headers: {
        'accept': '*/*',
      },
      mode: "cors",
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response not ok');
      }
      return response.json();
      })
      .then(data => {
        let menu: Array<WeaklyMenu> = data;
        let menuNumber = 1;
        const weaklyMenusDiv = menu.map((weaklyMenu: WeaklyMenu, i) => <GetSingleMenu key={i} menuId={weaklyMenu.weekMenuId} menuNumber={menuNumber++}></GetSingleMenu>)
        return <div className='MenuLists' id='MenuLists'>{weaklyMenusDiv}</div>
      })        
      .catch(error => {
        navigate("/createMenu")
        return <div></div>;
      });
  }
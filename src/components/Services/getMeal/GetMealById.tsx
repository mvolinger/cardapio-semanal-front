import { useEffect, useState } from "react";
import MenuDisplay from "../../sections/weeklyMenuDisplay/menu";

type WeaklyMenuProps = {
  menuId:String
  menuNumber:number
}

const GetSingleMenu = (props: WeaklyMenuProps) => {

  const [weaklymenuDiv, setWeaklyMenuDiv] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('https://wue0h09e48.execute-api.sa-east-1.amazonaws.com/api/menus/' + props.menuId, {
          method: 'GET',
          headers: {
            'accept': '*/*',
          },
          mode: "cors"
        });
        if (!response.ok) {
          throw new Error('Network response not ok');
        }
        const data = await response.json();
        setWeaklyMenuDiv(
            <MenuDisplay Menu={data} Menunumber={props.menuNumber}></MenuDisplay>
        );
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [props.menuId, props.menuNumber]);
  
  return <div id={"Menu_" + props.menuNumber}>{weaklymenuDiv}</div>
};

export default GetSingleMenu;
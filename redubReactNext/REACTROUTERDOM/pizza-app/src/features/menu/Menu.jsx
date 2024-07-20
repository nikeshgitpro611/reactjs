import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItems from "./MenuItems";

const Menu = () => {
  const menu = useLoaderData();
  // console.log('Menu : ', menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItems pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};
export const loder = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;

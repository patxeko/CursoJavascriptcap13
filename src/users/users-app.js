import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) => {
    element.innerHTML = 'Loading...';
    element.style.color = 'white'; // Cambia el color de la fuente a blanco
    await usersStore.loadNextPage();
    //console.log(usersStore.getUsers);
    element.innerHTML = '';
      element.style.color = 'black'; // Cambia el color de la fuente a blanco
    renderTable(element);
}
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) => {
    element.innerHTML = 'Loading...';
    element.style.color = 'white'; // Cambia el color de la fuente a blanco
    await usersStore.loadNextPage();

}
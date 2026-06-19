
/**
 * 
 * @param {number} page 
 * @returns
 */
export const loadUsersByPage = async( page = 1) => {
    //const url = `${ import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
    const url = `http://localhost:5174/users?_page=2`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    console.log(`${ import.meta.env.VITE_BASE_URL}/users?_page=${ page }`);
}
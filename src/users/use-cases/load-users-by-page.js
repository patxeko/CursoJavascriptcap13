
import { localhostUserToModel } from "../mappers/localhost-user.mapper";


/**
 * 
 * @param {number} page 
 * @returns {Promise<Users[]}
 */
export const loadUsersByPage = async( page = 1) => {
    const url = `${ import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
    //const url = `https://api.fas.usda.gov/api/esr/regions`;
    const res = await fetch(url);
    const data = await res.json();

    //const users = data.map(userLike =>localhostUserToModel(userLike));
    //const users = data.map(localhostUserToModel);
    const users = data.data.map(localhostUserToModel);
    console.log(users);
    //console.log(data);
    //console.log(`${ import.meta.env.VITE_BASE_URL}/users?_page=${ page }`);
    return(users);
}
import { User } from "../models/users"

/**
 * 
 * @param {like<User>} localhostUser 
 * @returns 
 */
export const localhostUserToModel = (localhostUser) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });

}
import jwt from 'jsonwebtoken';
import { Logout } from './index'
export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.data) {
        let token = user.data.token;
        let decodedToken = jwt.decode(token, { complete: true });
        let date = new Date();
        if (!(decodedToken.exp < date.getTime())) {
            return { 'Authorization': `Bearer ${token}` };
        } 
        else {
            Logout();
        }
    }
}
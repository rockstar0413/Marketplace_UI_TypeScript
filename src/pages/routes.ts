import Frontline from './home';
import Governance from './governance';
import Profile from './profile';
type route = {
    path:string,
    title:string,
    description:string,
    requireLogin:boolean,
    Page:Function,
}
const appRoutes:Array<route> = [
    {
        path: '/about',
        title: 'Frontline Charities',
        description: 'Frontline Charities',
        requireLogin: true,
        Page: Frontline,
    },
    {
        path: '/dogs',
        title: 'Governance',
        description: 'Governance',
        requireLogin: true,
        Page: Governance,
    },
    {
        path: '/profile',
        title: 'Profile',
        description: 'Profile',
        requireLogin: true,
        Page: Profile,
    }
];
export default appRoutes;
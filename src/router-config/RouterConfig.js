import {default as Home} from '../home/Home';
import {default as About} from '../about/About';

const routerConfig = [
    {
        path: '/',
        component: Home,
        childRoutes: [
            {path: 'home', component: Home},
            {path: 'about', component: About}
        ]
    }
];

export default routerConfig;
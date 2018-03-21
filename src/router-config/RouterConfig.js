import {default as Home} from '../lib/home/Home';
import {default as About} from '../lib/about/About';

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
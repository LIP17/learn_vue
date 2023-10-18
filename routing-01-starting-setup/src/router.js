import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {   
            name: 'teams',
            path: '/teams', 
            meta: { needsAuth: true },
            components: {
                default: TeamsList,
                footer: TeamsFooter,
            },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // /teams/t1
            ]
        },
        { 
            name: 'users',
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter,
            },
            beforeEnter(to, from, next) {
                // route navigation guard
                next();
            },
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {left: 0, top: 0}; // jump to the top of the page
    }
});

// navigation guard
router.beforeEach(function(to, from, next) {
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({name: 'team-members', params: {teamId: 't2'}}); // always redirect to team-members page
    // }
    if (to.meta.needsAuth) {
        console.log('Needs auth!');
    }
    next();
});

router.afterEach(function(to, from) {
    // called after each routed
    console.log(to, from);
});

export default router;
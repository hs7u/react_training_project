import { Suspense, lazy, useContext } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import AuthContext from '../util/AuthContext';

const ShopRoute = [
    {
        path: '/',
        index: true,
        component: lazy(() => import('../pages/IndexPage')),
        children: [],
    },
    {
        path: '/login',
        component: lazy(() => import('../pages/LoginPage')),
        children: [],
    },    
    {
        path: '*',
        component: lazy(() => import('../pages/Error')),
        children: [],
    },
];
const DashBoardRoute = [
    {
        path: '/Admin/login',
        component: lazy(() => import('../pages/LoginPage')),
        children: [],
    },
    {
        path: '/Admin/DashBoard',
        component: lazy(() => import('../pages/MainContent')),
        children: [
            {
                // otherwise will show the blank
                path: '',
                component: lazy(() => import('../pages/main/Main')),
                children: [],
            },
            {
                path: 'main',
                component: lazy(() => import('../pages/main/Main')),
                children: [],
            },
            {
                path: 'course',
                component: lazy(() => import('../pages/Banana')),
                children: [
                    {
                        path: 'addNewCourse',
                        component: null,
                    },
                ],
            },
            {
                path: 'product',
                component: null,
                children: [
                    {
                        path: 'addNewProduct',
                        component: null,
                    },
                ],
            },
            {
                path: 'order',
                component: null,
                children: [],
            },
            {
                path: 'qa',
                component: null,
                children: [],
            },
            {
                path: 'customers',
                component: null,
                children: [],
            },
        ],
    },
];

const RouteTable = [].concat(ShopRoute, DashBoardRoute);

const SyncRouter = (table, regexArray) => {
    const mRouteTable = [];
    table.forEach((route) => {
        if (route.path.match(regexArray) !== null && route.component !== null) {
            mRouteTable.push({
                path: route.path,
                index: 'index' in route && route.index,
                element: (
                    <Suspense fallback={<div>router loding...</div>}>
                        <route.component />
                    </Suspense>
                ),
                children: route.children && SyncRouter(route.children),
            });
        } else {
            mRouteTable.push({
                path: route.path,
                element: <Navigate to="/403" replace />,
            });
        }
    });
    return mRouteTable;
};

const RouterFn = () => {
    const { state: context } = useContext(AuthContext);
    const { permissionList } = context;
    const regexArray = new RegExp(permissionList.join('|'), 'gi');
    return useRoutes(SyncRouter(RouteTable, regexArray));
};

export default RouterFn;

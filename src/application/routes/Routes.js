import React from 'react';

const WelcomePage 	        = React.lazy(() => import('../views/pages/Welcome'))
const RegisterPage 	        = React.lazy(() => import('../views/pages/Register'))
const LoginPage 	        = React.lazy(() => import('../views/pages/Login'))
const SearchPage            = React.lazy(() => import('../views/pages/Search'))
const ViewVehiclePage       = React.lazy(() => import('../views/pages/ViewVehicle'))
const UserAddVehiclePage    = React.lazy(() => import('../views/pages/user/AddVehicle'))
const UserEditVehiclePage   = React.lazy(() => import('../views/pages/user/EditVehicle'))
const UserViewVehiclesPage  = React.lazy(() => import('../views/pages/user/ViewVehicles'))
const Page404               = React.lazy(() => import('../views/pages/NotFound'))

export default [
	{
        path: "/",
        component: WelcomePage,
        private: false
    },
    {
        path: "/register",
        component: RegisterPage,
        private: false
    },
    {
        path: "/login",
        component: LoginPage,
        private: false
    },
    {
        path: "/search",
        component: SearchPage,
        private: false
    },
    {
        path: "/vehicle",
        component: ViewVehiclePage,
        private: false
    },
    {
        path: "/user/vehicle/add",
        component: UserAddVehiclePage,
        private: false
    },
    {
        path: "/user/vehicle/edit",
        component: UserEditVehiclePage,
        private: false
    },
    {
        path: "/user/vehicle/view",
        component: UserViewVehiclesPage,
        private: false
    },
    {
        path: "*",
        component: Page404,
        private: false
    },
]
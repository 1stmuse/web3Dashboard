import Dashboard from "../pages/Dashboard"
import Favourites from "../pages/Favourites"
import Market from "../pages/Market"
import Portfolio from "../pages/Portfolio"
import Settings from "../pages/Settings"
import {  Route, Routes} from "react-router-dom"
import Home from "../pages/Home"

const routes = [
    {
        path:"/",
        component: Home
    },
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/favourites",
        component: Favourites
    },
    {
        path: "/market",
        component: Market
    },
    {
        path: "/portfolio",
        component: Portfolio
    },
    {
        path: "/settings",
        component: Settings
    }
]

const AuthRoutes = () => {

    return (
        <Routes>
            {routes.map(({path, component:Component}) => <Route path={path} element={<Component/>} />)}
            {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        </Routes>
    )

}

export default AuthRoutes
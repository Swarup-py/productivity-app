import Dashboard from "../pages/Dashboard";
import Setting from "../pages/Setting";
import Statistics from "../pages/Statistics";
import Transaction from "../pages/Transaction";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/transaction",
        element: <Transaction/>
    },
    {
        path: "/statistics",
        element: <Statistics/>
    },
    {
        path: "/setting",
        element: <Setting/>
    }
])


export default router;
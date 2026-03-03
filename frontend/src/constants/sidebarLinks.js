import { DASHBOARD_ROUTE, PRODUCT_MANAGEMENT_ROUTE, USER_MANAGEMENT_ROUTE, ORDER_MANAGEMENT_ROUTE } from "./routes";
import { FaChartPie, FaShoppingBag, FaShoppingCart, FaUsersCog } from "react-icons/fa";

const sidebarLinks = [
    {
        Icon: FaChartPie,
        label: "Dashboard",
        route: DASHBOARD_ROUTE
    },
    {
        Icon: FaUsersCog,
        label: "User",
        route: USER_MANAGEMENT_ROUTE
    },
    {
        Icon: FaShoppingBag,
        label: "Product",
        route: PRODUCT_MANAGEMENT_ROUTE
    },
    {
        Icon: FaShoppingCart,
        label: "Order",
        route: ORDER_MANAGEMENT_ROUTE
    },
]

export default sidebarLinks;
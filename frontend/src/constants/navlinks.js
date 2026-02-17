import { HOME_ROUTE, PRODUCT_ROUTE, BLOG_ROUTE, OFFERS_ROUTE }  from "./routes";

const navlinks = [
    // {
    //     label: "Shop",
    //     route: 'javascript:void(0)'
    // }, 
    {
        label: "Skincare",
        route: PRODUCT_ROUTE
    }, 
        {
        label: "Offers",
        route: OFFERS_ROUTE
    },
    {
        label: "Fashion",
        route: PRODUCT_ROUTE
    },
    {
        label: "Blog",
        route: BLOG_ROUTE
    },
]

export default navlinks;
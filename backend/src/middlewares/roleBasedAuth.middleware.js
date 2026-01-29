const roleBasedAuth = (role) => {
    return (req, res, next) => {
        if (req.roles?.includes(role)) {
            return next();
        };
        return res.status(403).send("Access Denined.!");
    };
};

export default roleBasedAuth;

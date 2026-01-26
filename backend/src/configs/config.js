const config = {
    api: {
        name: process.env.NAME || "",
        version: process.env.VERSION || "",
        status: process.env.STATUS || "",
        port: process.env.PORT || "",
    },
    mongodb_url: process.env.MONGO_DB_URI || "",

    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expiry: process.env.ACCESS_TOKEN_EXPIRY,
    
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expiry: process.env.REFRESH_TOKEN_EXPIRY,
}

export default config;
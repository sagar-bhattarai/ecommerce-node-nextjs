const config = {
    api: {
        name:process.env.NAME || "",
        version:process.env.VERSION || "",
        status:process.env.STATUS || "",
        port:process.env.PORT || "",
    },
    mongodb_url: process.env.MONGO_DB_URI || "",
}

export default config;
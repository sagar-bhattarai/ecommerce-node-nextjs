import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import config from "../configs/config.js";

cloudinary.config({
    cloud_name: config.cloudinaray_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = cloudinary.uploader.upload(localFilePath, { resource_type: "auto", });

        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export default uploadOnCloudinary;
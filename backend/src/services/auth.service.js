import UserModel from "../models/User.model.js";

const generateTokens = async (user) => {
    try {
        const refreshToken = await user.generateRefreshToken();
        const accessToken = await user.generateAccessToken();

        user.refreshToken = refreshToken;

        await user.save({ validateBeforeSave: false });
        return { refreshToken, accessToken };

    } catch (error) {
        throw {
            customStatus: 400,
            customMessage: `Error while generating tokens. ${error}`,
        };
    }
};

const register = async (req) => {
    const existingUser = await UserModel.findOne({ email: req.email });

    if (existingUser) {
        throw {
            customStatus: 400,
            customMessage: "Duplicate entry.",
        };
    }

    if (req.profileImage) {
        // cloudinary function
    }

    const newUser = await UserModel(req);
    return newUser.save();
};

const login = async (req) => {
    const user = await UserModel.findOne({ email: req.email });

    if (!user) {
        throw {
            customStatus: 400,
            customMessage: "Invalid credentials.",
        };
    }

    const { refreshToken, accessToken } = await generateTokens(user);
    const loggedInUser = await UserModel.findById(user._id).select("-userPassword -refreshToken -createdAt -updatedAt -__v");

    return {
        loggedInUser,
        refreshToken,
        accessToken,
    }
};

export default { register, login };

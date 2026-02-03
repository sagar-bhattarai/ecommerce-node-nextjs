// import * as z from "zod";
import { z } from "zod";

const userSchema = z.object({
    userName: z.string().toLowerCase().min(3, "Name is required"),
    userEmail: z.email().toLowerCase().nonempty("Email is required"),
    userPassword: z.string().min(4, "Password is required"),
    userAddress: z.string().nonempty("Address is required"),
});

export default userSchema;
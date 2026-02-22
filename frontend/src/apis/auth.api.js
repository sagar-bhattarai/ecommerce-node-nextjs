import axios from "axios";
import config from "@/config/config";

export const login = async ({userEmail, userPassword}) => {
   const response = await axios.post(`${config.apiUrl}/users/login`, 
       {userEmail, userPassword} 
   );
   return response.data;
};
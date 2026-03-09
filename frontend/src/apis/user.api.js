import axios from "axios";
import config from "@/config/config";

export const addUser = async (data) => {
    const authToken = localStorage.getItem("accessToken");

    const response = await axios.post(
        `${config.apiUrl}/users/add`,
        data,
        {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
    );

    return response.data.result.data;
};


// export const fetchAllUsers = async (searchParams) => {
//     const sort = (await searchParams)?.sort ?? ""
//     const min = (await searchParams)?.min ?? ""
//     const max = (await searchParams)?.max ?? ""
//     const category = (await searchParams)?.category ?? ""
//     const brands = (await searchParams)?.brands ?? ""
//     const name = (await searchParams)?.name ?? ""

//     const response = await axios.get(`${config.apiUrl}/users?sort=${sort}&min=${min}&max=${max}&category=${category}&brands=${brands}&name=${name}`);
//     return response.data.result.data;
// };

export const getUserById = async (id) => {

    const response = await axios.get(`${config.apiUrl}/users/user/${id}`);
    return response.data;
};

export const updateUser = async (id, data) => {
    const authToken = localStorage.getItem("accessToken");

    const response = await axios.patch(
        `${config.apiUrl}/users/update/${id}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
    );

    return response.data.result.data;
};


/*    suggestion from Ai */ 

export const fetchAllUsers = async (searchParams) => {
  const sort = searchParams?.sort ?? "";
  const min = searchParams?.min ?? "";
  const max = searchParams?.max ?? "";
  const name = searchParams?.name ?? "";

  const queryParams = new URLSearchParams({
    sort, min, max, name
  }).toString();

  const response = await axios.get(`${config.apiUrl}/users?${queryParams}`);
  return response.data.result;
};


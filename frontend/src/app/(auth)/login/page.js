"use client";

import Image from "next/image";
import loginBg from "../../../../public/purple.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { login } from "@/apis/auth.api";


const loginPage = () => {
  const { register, handleSubmit } = useForm();
  // const { name, ref, onChange, onBlur } = register("");

  const submitForm = async (data) => {
    try {
      const result = await login(data);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      localStorage.setItem("accessToken", result.data.accessToken);
    } catch (error) {
      if (error.response) {
        console.log("Server error message:", error.response.data);
      } else {
        console.log("Axios config error:", error.message);
      }
    }
  }

  return (
    <div className="flex min-h-full justify-center items-center">
      <div className="flex justify-center items-center">
        <section className=" m-10 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
            {/* <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=purple&shade=700" alt="Your Company" className="mx-auto h-10 w-auto" /> */}
            <Image src={loginBg} height={100} width={200} alt="login" className="" />
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm shadow-md p-10 dark:bg-[#0e041a] light:bg-[#f8f8ff] rounded-md">
            <h2 className="mb-10 text-center text-2xl/9 font-bold tracking-tight dark:text-gray-600 light:text-dark">Sign in to your account</h2>
            <form onSubmit={handleSubmit(submitForm)} action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-600">Email address</label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    {...register("userEmail")}
                    required
                    autoComplete="email"
                    className="dark:text-gray-600 light:text-dark block w-full border dark:border-gray light:border-gray-300 rounded-md bg-white/5 px-3 py-1.5 text-base light:text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-600">Password</label>
                  <div className="text-sm">
                    <Link href="#" className="font-semibold text-primary hover:text-purple-400">Forgot password?</Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    {...register("userPassword")}
                    required
                    autoComplete="current-password"
                    className="dark:text-gray-600 light:text-dark block w-full rounded-md border dark:border-gray light:border-gray-300 bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-primary cursor-pointer px-3 py-1.5 text-sm/6 font-semibold dark:text-black light:text-white  hover:bg-purple-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500">Sign in</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-600">
              Not a member?
              <Link href="#" className="font-semibold text-primary hover:text-purple-400"> Sign Up</Link>
            </p>
          </div>
        </section>
      </div>
    </div>

  )
}

export default loginPage

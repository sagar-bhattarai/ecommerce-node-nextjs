"use client";

import Image from "next/image";
import loginBg from "../../../../public/purple.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUp } from "@/apis/auth.api";

const registerPage = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    try {
      const result = await signUp(data);
      console.log("register success");
    } catch (error) {;
      if (error.response) {
        console.log("Server error message:", error.response.data);
      }else {
        console.log("Axios config error:", error.message);
      }
    }
  };

  return (
    <div className="flex min-h-full justify-center items-center ">
      <div className="flex justify-center items-center ">
        <section className="pt-2 mb-10 ">
          <div className="flex flex-col justify-center items-center">
            {/* <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=purple&shade=700" alt="Your Company" className="mx-auto h-10 w-auto" /> */}
            <Image
              src={loginBg}
              height={100}
              width={200}
              alt="login"
              className=""
            />
          </div>

          <div className="shadow-md p-10  bg-[#f8f8ff] rounded-md">
            <h2 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-dark">
              Sign up your account
            </h2>
            <form
              onSubmit={handleSubmit(submitForm)}
              action="#"
              method="POST"
              className="space-y-6 "
            >
              <div className="flex items-center justify-center gap-5">
                <div >
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <div className="mt-2 min-w-80">
                    <input
                      id="name"
                      type="name"
                      {...register("userName")}
                      required
                      autoComplete="name"
                      className="block w-full border border-gray-300 rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-600"
                  >
                    Email address
                  </label>
                  <div className="mt-2 min-w-80">
                    <input
                      id="email"
                      type="email"
                      {...register("userEmail")}
                      required
                      autoComplete="email"
                      className="block w-full border border-gray-300 rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-600"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2 min-w-80">
                    <input
                      id="password"
                      type="password"
                      {...register("userPassword")}
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border border-gray-300 bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="confirm_password"
                      className="block text-sm/6 font-medium text-gray-600"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-2 min-w-80">
                    <input
                      id="confirm_password"
                      type="password"
                      {...register("confirmPassword")}
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border border-gray-300 bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm/6 font-medium text-gray-600"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div className="mt-2 min-w-80">
                    <input
                      id="phone"
                      type="text"
                      {...register("userPhone")}
                      required
                      autoComplete="phone"
                      className="block w-full rounded-md border border-gray-300 bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm/6 font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <div className="mt-2 min-w-80">
                    <input
                      id="address"
                      type="address"
                      {...register("userAddress")}
                      required
                      autoComplete="address"
                      className="block w-full border border-gray-300 rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary cursor-pointer px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-purple-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-600">
              Already a member?
              <Link
                href="#"
                className="font-semibold text-primary hover:text-purple-400"
              >
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default registerPage;

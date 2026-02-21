import Image from "next/image";
import loginBg from "../../../../public/purple.png"
import Link from "next/link";

export const metadata = {
  title: "login | Ecommerce",
  description: "login | Ecommerce",
};

const login = () => {
  return (
    <div className="flex min-h-full justify-center items-center py-20 ">
      <div className="flex justify-center items-center bg-[#eaf2f2e0] shadow-md rounded-md">
        <div>
          <Image src={loginBg} height={200} width={300} alt="login" className="" />
        </div>
        <section className="p-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=purple&shade=700" alt="Your Company" className="mx-auto h-10 w-auto" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-dark">Sign in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-600">Email address</label>
                <div className="mt-2">
                  <input id="email" type="email" name="email" required autoComplete="email" className="block w-full border border-gray-300 rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6" />
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
                  <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md border border-gray-300 bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-primary cursor-pointer px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-purple-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500">Sign in</button>
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

export default login

import { loginWithCreds } from "@/actions/auth"
import AuthButton from "./AuthButton"

const LoginForm = () => {
  return (
    <div>
        <form action={loginWithCreds} className="w-full flex flex-col gap-4" >
            <div>
                <label className="block text-sm font-medium text-gray-200">
                Email
                </label>
                <input type="text" className="mt-1 w-full px-4 p-2 h-10
                 rounded-md border border-gray-200 text-black" placeholder="email" 
                 name="email"
                 id="email"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-200">
                Password
                </label>
                <input type="password" className="mt-1 w-full px-4 p-2 h-10
                 rounded-md border border-gray-200 text-black" placeholder="Password" 
                 name="password"
                 id="Password"
                />
                </div>
                <div className="mt-4 ">
                    <AuthButton />
                </div>
        </form>
    </div>
  )
}

export default LoginForm
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./Logout";
const Navbar = async () => {
    const session=await auth();
  return (
    <nav className="border-b bg-background w-full items-center">
        <div className="flex w-full items-center justify-between my-4">
            <Link className="font-bold" href="/">Home</Link>
        
        <div className="flex items-center gap-x-5">
        <Link href="/middleware">MiddleWare</Link>
        <Link href="/server">server</Link>
        </div>
        <div className="flex items-center gap-x-5">
            {!session?.user?(
              <Link href="/sign-in"><div className="bg-cyan-300 text-white text-sm px-4 py-2 rounded-sm ">Login</div></Link>
            ):(
              <div className="flex items-center gap-x-2 text-sm">
                {session.user?.name}
                {session.user?.image&&
                (
                  <Image className="rounded-full" width={30} height={30} alt="User Avatar" src={session.user?.image||""}/>
                )}
                <Logout/></div>
              

            )}
        
        </div>
        </div>
    </nav>
  )
}

export default Navbar
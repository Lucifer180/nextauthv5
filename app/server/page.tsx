import { auth } from "@/auth";
import { redirect } from 'next/navigation';


const page = async() => {
    const session=await auth();
    if(!session?.user){
        redirect("/");
    }
  return (
   <div className="flex h-full items-center justify-center flex-col gap-2">
    <h1 className="text-3xl"> Server Page</h1>
    <p className="text-lg">{session?.user?.email}</p>
   </div>
  )
}

export default page
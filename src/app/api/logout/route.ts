import {session} from "@/app/libs/session";
import {redirect} from "next/navigation";
import { revalidatePath } from "next/cache"; 

export async function GET(){
    await session().destroy();
    revalidatePath('/')
    redirect('/?logged-out=1');
}
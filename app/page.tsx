import AuthPage from "@/components/AuthPage";
import { logout } from "../actions/auth";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <form action={logout}>
          <button className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out" type="submit">
            logout
          </button>
        </form>
        <div className="text-4xl">Hai ca avem de munca</div>
        <AuthPage />
      </main>
      
    </div>
  );
}
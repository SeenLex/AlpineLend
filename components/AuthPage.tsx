import { createClient } from "@/utils/supabase/server";
import { getUserByEmail } from "../actions/user";

export default async function AuthPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const dbUser = await getUserByEmail(data.user!.email!);

  return (
    <div>
      <div>
        <p>Welcome, {dbUser?.email}</p>
        {/* <p>Role: {dbUser?.role}</p>
        <p>Gender: {dbUser?.gender}</p> */}
      </div>
    </div>
  );
}

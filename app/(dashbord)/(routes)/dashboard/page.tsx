
import ECommerce from "@/components/dashboard/Dashboard/E-commerce";
import { fetchUsers } from "@/lib/actions/user.actions";


export default async function Home() {
  const users = await fetchUsers()
  console.log(users)

  return (
    <>
      <ECommerce users={users} />
    </>
  );
}

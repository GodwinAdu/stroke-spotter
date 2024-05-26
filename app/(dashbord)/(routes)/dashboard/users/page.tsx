import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { DataTable } from "@/components/table/data-table";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/hooks/intial-profile";
import { fetchUsers } from "@/lib/actions/user.actions";
import Link from "next/link";
import { columns } from "./_components/column";

const Users = async () => {
  const users = await fetchUsers();
  const currentUser = await currentProfile();

  return (
    <>
      <Breadcrumb pageName="All Users" />
      <Separator />
      <DataTable data={users} searchKey="name" columns={columns} />
       
    </>
  );
};

export default Users;

import { fetchUsers } from "@/lib/actions/user.actions";
import { currentProfile } from "@/hooks/intial-profile";
import ModernPageHeader from "@/components/dashboard/modern/ModernPageHeader";
import ModernDataTable from "@/components/dashboard/modern/ModernDataTable";

const Users = async () => {
  const users = await fetchUsers();
  const currentUser = await currentProfile();

  return (
    <div className="space-y-6">
      <ModernPageHeader
        title="User Management"
        description="Manage platform users, roles, and permissions"
        count={users.length}
        showSearch={false}
      />
      
      <ModernDataTable 
        data={users} 
        title="All Users"
        description={`${users.length} registered users on the platform`}
      />
    </div>
  );
};

export default Users;

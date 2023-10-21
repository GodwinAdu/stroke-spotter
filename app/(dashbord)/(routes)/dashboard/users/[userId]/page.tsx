import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import UserDetail from "@/components/dashboard/user/UserDetail";
import MemberID from "@/components/profile/MemberID";
import { fetchUser } from "@/lib/actions/user.actions";

const UserDetails = async ({ params }: { params: { userId: string } }) => {
  const user = await fetchUser(params.userId);

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Breadcrumb pageName={`${user.username} Details`} />
      <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow-xl rounded-lg p-4">
          <div className="text-center">
            <img
              src={user.image}
              alt={user.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h3 className="mb-2 text-3xl font-semibold text-black dark:text-white">
              {user.name}
            </h3>
            <p className="text-lg font-medium mb-4 text-gray-600 dark:text-gray-400">
              {user.profession}
            </p>
            <MemberID memberId={user.memberId} duesPay={user.duesPay} />
          </div>
          <div className="mt-4">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Email: {user.email}
              </p>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Phone Number: {user.phoneNumber}
              </p>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Country: {user.country}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <UserDetail user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

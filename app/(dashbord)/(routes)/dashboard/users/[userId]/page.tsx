import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import UserDetail from "@/components/dashboard/user/UserDetail";
import MemberID from "@/components/profile/MemberID";
import { fetchUser } from "@/lib/actions/user.actions";


const UserDetails = async ({ params }: { params: { userId: string } }) => {
  const user = await fetchUser(params.userId);

  return (
    <>
      <Breadcrumb pageName={`${user.username} details`} />
      <div className=" shadow-xl rounded-lg p-4  w-full px-4 mx-auto">
        <div className="text-center">
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
            {user.name}
          </h3>
          <p className="font-medium mb-4">{user.profession}</p>
          <MemberID memberId={user.memberId} duesPay={user.duesPay} />
        </div>
        <div>

        </div>

        <div className="mt-4 flex flex-col justify-center items-center">
          

            <UserDetail user={user} />
          
        </div>
      </div>
    </>
  );
};

export default UserDetails;

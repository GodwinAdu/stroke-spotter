import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { currentProfile } from "@/hooks/intial-profile";
import { fetchUsers } from "@/lib/actions/user.actions";
import Link from "next/link";

const Users = async () => {
  const users = await fetchUsers();
  const currentUser = await currentProfile();

  return (
    <>
      <Breadcrumb pageName="All Users" />
      <div>
        <div className="flex flex-col gap-4 justify-center items-center">
          {users.map((user) => (
            <>
              {user.id !== currentUser.id && (
                <>
                  <div key={user.id} className="bg-white shadow-xl rounded-lg p-4 w-full rounded-md max-w-3xl px-5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden">
                          <img
                            src={user.image}
                            alt={user.name}
                            className="shadow-lg rounded-full"
                          />
                        </div>
                        <div className="ml-4">
                          <h2 className="text-xs md:text-xl font-semibold">
                            {user.name}
                          </h2>
                        </div>
                      </div>
                      <Link
                        href={`/dashboard/users/${user.id}`}
                        className="bg-indigo/50 text-white px-2 py-1 rounded-lg shadow-lg"
                      >
                        details
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;

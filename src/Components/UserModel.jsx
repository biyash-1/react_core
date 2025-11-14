const UserModel = ({ user, post,onclose }) => {
  return (
    <div className=" fixed inset-0 px-4 mx-auto border flex items-center justify-center z-50">
        <div className="bg-white px-4 py-2 w-[400px] relative">
<button
          className="absolute top-2 right-3 text-xl font-bold text-gray-600" onClick={onclose}
        >
          ✖
        </button>
         <h1 className="text-2xl font-bold">Name: {user.name}</h1>
        <p>Email: {user.email}</p>

        <h2 className="mt-2 font-semibold">Address:</h2>
        <p>Street: {user.address.street}</p>
        <p>City: {user.address.city}</p>

        <p className="font-semibold mt-3">
          Number of posts: {post}
        </p>
        </div>
    </div>
  );
};

export default UserModel;

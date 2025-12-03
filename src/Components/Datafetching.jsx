import { useEffect, useState } from "react";
import UserModel from "./UserModel";
import { useDebounce } from "use-debounce";
const Datafetching = () => {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserPostCount, setSelectedUserPostCount] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [sortBy, setSortBy] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("error fetching users", error);
    }
    setLoading(false);
  }

  async function fetchPost() {
    setLoading(true);
    try {
      const post = await fetch("https://jsonplaceholder.typicode.com/posts");
      const postData = await post.json();
      setPost(postData);
    } catch (error) {
      console.error("error fetching posts", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    fetchPost();
  }, []);

  const handleReload = () => {
    fetchData();
    fetchPost();
  };

  const showUserModel = (user) => {
    setShowModel(true);
    setSelectedUser(user);

    const count = post.filter((p) => p.userId === user.id).length;
    setSelectedUserPostCount(count);
  };

  const onClose = () => {
    setShowModel(false);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "name-dsc") {
      return b.name.localeCompare(a.name);
    }
    if (sortBy === "post-asc") {
      const aCount = post.filter((p) => p.userId === a.id).length;
      const bCount = post.filter((p) => p.userId === b.id).length;
      return aCount - bCount;
    }

    if (sortBy === "post-desc") {
      const aCount = post.filter((p) => p.userId === a.id).length;
      const bCount = post.filter((p) => p.userId === b.id).length;
      return bCount - aCount;
    }
    return 0;
  });

  return (
    <div className="mx-auto h-screen">
      <h1 className="text-center text-3xl">
        Data fetching interview questions
      </h1>
      <div className="flex items-center justify-center gap-4 mt-6 *:">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="bg-gray-200 px-2 py-2 rounded-3xl"
          placeholder="search for User"
        />

        <select value={sortBy} onChange= {(e) =>setSortBy(e.target.value)}>
          <option value="">Sort user</option>
          <option value="name-asc">Name A to z</option>
          <option value="name-desc">Name Z to A</option>
          <option value="post-asc">posts low to high </option>
          <option value="post-desc">Post high to low</option>
        </select>

        <button onClick={handleReload} className="bg-green-500 rounded-2xl p-2">
          Reload data
        </button>
      </div>

      {loading && (
        <div className="h-24 w-48 bg-gray-200 animate-pulse rounded-lg"></div>
      )}

      <div className="flex flex-wrap gap-4 justify-center max-w-6xl mx-auto py-5">
        {!loading &&
          sortedUsers.map((user) => {
            const postCount = post.filter((p) => p.userId === user.id).length;

            return (
              <div
                onClick={() => showUserModel(user)}
                key={user.id}
                className="hover:-translate-y-1.5 cursor-pointer shadow-md flex flex-col justify-center items-center border py-2 px-2 rounded-xl h-[200px] w-[200px] bg-cyan-200"
              >
                <h1 className="text-xl font-bold">{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.address.street}</p>
                <p>{postCount}</p>
              </div>
            );
          })}
      </div>

      {showModel && (
        <UserModel
          user={selectedUser}
          post={selectedUserPostCount}
          onclose={onClose}
        />
      )}
    </div>
  );
};

export default Datafetching;

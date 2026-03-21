import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { debounce } from "./debounce";

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Remove duplicate console.log
  // console.log("Component rendered"); // REMOVE THIS

  // Create debounced function
  const debouncedSetSearch = useCallback(
    debounce((value) => {
      console.log("Debounce executed with value:", value);
      setDebouncedSearchTerm(value);
    }, 500),
    [],
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    console.log("Input changed:", value);
    setSearchTerm(value);
    debouncedSetSearch(value);
  };

  // Filtered users with useMemo - only runs when needed
  const filteredUsers = useMemo(() => {
    console.log("Filtering with term:", debouncedSearchTerm);
    if (!debouncedSearchTerm) return users;
    return users.filter((user) =>
      user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
  }, [users, debouncedSearchTerm]); // Only runs when users or debouncedSearchTerm changes

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data Search functionality with Debounce</h1>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {searchTerm && <p>⌨️ Currently typing: "{searchTerm}"</p>}

      {searchTerm !== debouncedSearchTerm && searchTerm && (
        <p>⏳ Waiting for you to stop typing...</p>
      )}

      {debouncedSearchTerm && <p>🔍 Searching for: "{debouncedSearchTerm}"</p>}

      <p>
        Showing {filteredUsers.length} of {users.length} users
      </p>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDirectory;

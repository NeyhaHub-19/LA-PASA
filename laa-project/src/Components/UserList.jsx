import React from 'react';

function UserList({ users, setCurrentUser }) {
  return (
    <div>
      <h2>View Users</h2>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} - {user.email} - Last Accessed: {user.lastAccess}
              <button onClick={() => setCurrentUser(user)}>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
}

export default UserList;

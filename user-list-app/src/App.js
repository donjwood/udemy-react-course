import React, { useState } from 'react';

import AddUser from './components/AddUserForm/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const onAddUserHandler = (userInput) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.push({
        ...userInput,
        key: prevUsers.length + 1
      });
      return updatedUsers;
    });
  }

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      {users.length > 0 && <UsersList users={users}/>}
    </div>
  );
}

export default App;

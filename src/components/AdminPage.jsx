import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { auth } from '../firebase/firebase.utils';
// import UsersTable from './UsersTable';
// import EditUserModal from './EditUserModal';
 // import AnalyticsChart from './components/AnalyticsChart';

const AdminPage = () => {
  const [currentUser ] = useState(null);
  const [isAdmin ] = useState(false);
  const [setUsers ] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditUserModal, setShowEditUserModal, EditUserModal] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user);
//       setIsAdmin(user && user.admin);
//     });

    // Fetch users from API
//     fetch('/api/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error(error));

//     return () => unsubscribe();
//   }, []);

//   const handleUserSelection = user => {
//     setSelectedUser(user);
//     setShowEditUserModal(true);
//   };

  const handleEditUser = user => {
    // Update user on API
    fetch(`/api/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        // Update user in state
        setUsers(users => users.map(u => (u.id === data.id ? data : u)));
        setSelectedUser(null);
        setShowEditUserModal(false);
      })
      .catch(error => console.error(error));
  };

  if (!currentUser) {
    return <Navigate to='/login' />;
  }

  if (!isAdmin) {
    return <Navigate to='/' />;
  }

  return (
    <div className='admin-page'>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {currentUser.displayName}!</p>
      <h2>Users</h2>
      {/* <UsersTable users={users} onUserSelection={handleUserSelection} /> */}
      {showEditUserModal && (
        <EditUserModal user={selectedUser} onSave={handleEditUser} onClose={() => setShowEditUserModal(false)} />
      )}
      <h2>Analytics</h2>
      {/* <AnalyticsChart /> */}
    </div>
  );
};

export default AdminPage;

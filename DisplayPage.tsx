
import React, { useContext } from 'react';
import { UserContext } from './App';

function DisplayPage() {
  const { userData } = useContext(UserContext);

  return (
    <div style={{
      backgroundColor: '#00CED1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: '600px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User Details</h2>
        <p>Full Name: {userData.fullName}</p>
        <p>Email: {userData.email}</p>
        <p>Phone Number: {userData.phoneNumber}</p>
        <p>Age: {userData.age}</p>
        <p>Favorite Programming Language: {userData.favoriteLanguage}</p>
      </div>
    </div>
  );
}

export default DisplayPage;

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
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
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome to the User Data App</h1>
        <Link to="/form">
          <button style={{
            backgroundColor: '#00008B',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            marginBottom: '10px',
          }}>
            Fill Form
          </button>
        </Link>
        <br />
        <Link to="/display">
          <button style={{
            backgroundColor: '#00008B',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}>
            View Filled Data
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
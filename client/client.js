import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

function App() {
  useEffect(() => {
    const socket = io('http://localhost:3001');
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h1>Settlers of Catan Online</h1>
      <p>If you see this, you’re ready to build!</p>
    </div>
  );
}

export default App;
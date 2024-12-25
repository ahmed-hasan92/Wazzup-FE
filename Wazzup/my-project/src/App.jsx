import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import { checkToken } from './api/auth';
import UserContext from './context/UserContext';
import ChatroomContext from './context/ChatroomContext';
import { socket } from './api/socket';

function App() {
  const [user, setUser] = useState({
    isUser: false,
    userId: null,
  });

  const [currentChatroom, setCurrentChatroom] = useState(() => {
    return localStorage.getItem('currentChatroom') || null;
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const validToken = checkToken();

    if (validToken) {
      setUser({ isUser: true, userId: validToken._id });
      socket.emit('user_connected', validToken._id);
    } else {
      setUser({ isUser: false, userId: null });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (currentChatroom) {
      localStorage.setItem('currentChatroom', currentChatroom);

      // Emit the `join_room` event whenever currentChatroom changes
      socket.emit('join_room', currentChatroom);
      console.log(`Joined chatroom: ${currentChatroom}`);
    } else {
      localStorage.removeItem('currentChatroom');
    }
  }, [currentChatroom]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route
          path="/home"
          element={
            <ChatroomContext.Provider
              value={{ currentChatroom, setCurrentChatroom }}
            >
              <Layout>
                <Home />
              </Layout>
            </ChatroomContext.Provider>
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

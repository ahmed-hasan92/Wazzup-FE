import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import { checkToken } from './api/auth';
import UserContext from './context/UserContext';

function App() {
  const [user, setUser] = useState({
    isUser: false,
    userId: null,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const validToken = checkToken();

    if (validToken) {
      setUser({ isUser: true, userId: validToken._id });
    } else {
      setUser({ isUser: false, userId: null });
    }
    setLoading(false);
  }, []);
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
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

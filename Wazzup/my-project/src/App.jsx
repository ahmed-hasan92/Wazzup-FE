import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Layout from './components/Layout';
import Home from './pages/home/Home';

function App() {
  return (
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
  );
}

export default App;

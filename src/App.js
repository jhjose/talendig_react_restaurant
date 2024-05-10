import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './index';
import AppRoutes from './router/AppRoutes';
import Login from './views/auth/Login';
import Register from './views/auth/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_in" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

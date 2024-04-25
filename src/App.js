import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AppRoutes from './router/AppRoutes';
import Login from './views/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

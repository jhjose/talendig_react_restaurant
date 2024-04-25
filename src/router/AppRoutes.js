import {Routes, Route} from 'react-router-dom';
import Home from '../views/Home';
import UserView from '../views/UserView';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserView />} />
        </Routes>
    )
}
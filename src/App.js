import './App.css';
import UserHome from './components/UserHome';
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './css/common.css'
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<UserHome />}></Route>
        <Route path={'/edituser/:id'} element={<EditUser />}></Route>
        <Route path={'/adduser'} element={<AddUser />}></Route>

      </Routes>
    </div>
  );
}

export default App;

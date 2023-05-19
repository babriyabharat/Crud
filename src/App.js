import './App.css';
import CreatStu from '../src/component/CreatStudent/CreatStu';
import EditStu from './component/EditStudent/EditStu';
import ViewStudent from './component/ViewStudent/ViewStudent';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import SignUp from './component/SignUp/SignUp';
import LogIn from './component/LogIn/LogIn';

function App() {

  const [isEdit, setisEdit] = useState(false)

  const handleEdit = () => {

    setisEdit(!isEdit)
  }
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<ViewStudent handleEdit={handleEdit} />} />
      <Route path='/createStu' element={<CreatStu img='img/student.png' />} />
      <Route path='/EditStu' element={<EditStu handleEdit={handleEdit} img='img/student.png' />} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path='/logIn' element={<LogIn/>} />
    </Routes>
    </>
  );
}

export default App;
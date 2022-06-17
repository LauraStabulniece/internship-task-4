import React from 'react';
import './App.css';
import Content from './components/Content';
import Login from './Pages/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './app/reducers/userSlice';

  const App: React.FC = () => {
    const isLoggedIn = useSelector(selectUser);
    return (
        <div>
            {isLoggedIn ? <Content/>  : <Login/>}
        </div>
      )
  }
  
  export default App


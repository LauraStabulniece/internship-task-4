// import React, { useCallback, useEffect } from 'react';
import './App.css';
// import { getGames } from './features/games/gameSlice';
// import { useAppDispatch } from './store/store';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Content from './components/Content';
// import GamesPage from './features/games/GamePage';

function App() {
  // const dispatch = useAppDispatch();

  // const initApp = useCallback(async () => {
  //   await dispatch(getGames());
  // }, [dispatch]);

  // useEffect(() => {
  //   initApp();
  // }, [])

  return (
    <div>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

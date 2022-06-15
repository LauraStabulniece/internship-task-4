// import React, { useCallback, useEffect } from 'react';
import './App.css';
// import { getGames } from './features/games/gameSlice';
// import { useAppDispatch } from './store/store';
import Footer from './components/Footer';
import Content from './components/Content';
import Header from './components/Header';
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
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

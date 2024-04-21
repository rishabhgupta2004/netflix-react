import React from 'react';
import Header from './header';
import useNowPlayingMovies from '../hooks/usenowplayingmovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './secondarycontainer';
import usePopularMovies from "../hooks/usePopularMovies";
const Browse = () => {
useNowPlayingMovies();
usePopularMovies();

  return (
    <div>
      <Header />
      <Maincontainer />
      <SecondaryContainer />
      
    </div>
  );
};

export default Browse;

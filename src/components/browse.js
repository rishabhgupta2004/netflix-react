import React from 'react';
import Header from './header';
import useNowPlayingMovies from '../hooks/usenowplayingmovies';
import Maincontainer from './Maincontainer';
import secondarycontainer from './secondarycontainer';
const Browse = () => {
useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <secondarycontainer />
      
    </div>
  );
};

export default Browse;

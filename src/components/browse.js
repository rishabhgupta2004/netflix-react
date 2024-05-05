import React from 'react';
import Header from './header';
import useNowPlayingMovies from '../hooks/usenowplayingmovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './secondarycontainer';
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showgptsearch=useSelector(store=>store.gpt.showGptSearch)
useNowPlayingMovies();
usePopularMovies();

  return (
    <div>
      <Header />
      {
        showgptsearch?(
        <GptSearch/>
        ):(
        <>
        <Maincontainer />
        <SecondaryContainer />
        </>
        )
      }
      
      
      
    </div>
  );
};

export default Browse;

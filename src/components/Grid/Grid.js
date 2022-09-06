import React from 'react';
import { BlackPanther, BlackXWidow, GuiltyPleasures, Uncharted, HaldInfinite, CallOfDuty, OmahLay, MayzeeXZlatan, Richboys } from '../Poster/Poster.stories';
import { Movies, Music, VideoGames } from '../Title/Title.stories';
import './Grid.css';

const Grid = () => {
  return (
    <div>
        <Movies />
        <div className='poster-grid'>
            <BlackPanther />
            <BlackXWidow />
            <GuiltyPleasures />
        </div>

        <Music />
        <div className='poster-grid'>
            <OmahLay />
            <MayzeeXZlatan />
            <Richboys />
        </div>

        <VideoGames />
        <div className='poster-grid'>
            <Uncharted />
            <HaldInfinite />
            <CallOfDuty />
        </div>
    </div>
  );
}

export default Grid;
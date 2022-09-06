import React from 'react';
import Poster from './Poster';
import { images } from '../../constants';


export default {
    title: 'Poster',
    component: Poster
}


export const BlackPanther = () => {
    return (
        <Poster>
            <img src={images.movieImg1} alt='' />
            <h4>Black Panther</h4>
        </Poster>
    );
}
export const BlackXWidow = () => {
    return (
        <Poster>
            <img src={images.movieImg2} alt='' />
            <h4>Black X Widow</h4>
        </Poster>
    );
}
export const GuiltyPleasures = () => {
    return (
        <Poster>
            <img src={images.movieImg3} alt='' />
            <h4>Guilty Pleasures</h4>
        </Poster>
    );
}




export const OmahLay = () => {
    return (
        <Poster>
            <img src={images.musicImg1} alt='' />
            <h4>Omah Lay Hits</h4>
        </Poster>
    );
}
export const MayzeeXZlatan = () => {
    return (
        <Poster>
            <img src={images.musicImg2} alt='' />
            <h4>Mayzee X Zlatan</h4>
        </Poster>
    );
}
export const Richboys = () => {
    return (
        <Poster>
            <img src={images.musicImg3} alt='' />
            <h4>Richboys songs</h4>
        </Poster>
    );
}




export const Uncharted = () => {
    return (
        <Poster>
            <img src={images.vgImg1} alt='' />
            <h4>Uncharted</h4>
        </Poster>
    );
}
export const HaldInfinite = () => {
    return (
        <Poster>
            <img src={images.vgImg2} alt='' />
            <h4>Hald Infinite</h4>
        </Poster>
    );
}
export const CallOfDuty = () => {
    return (
        <Poster>
            <img src={images.vgImg3} alt='' />
            <h4>Call Of Duty</h4>
        </Poster>
    );
}


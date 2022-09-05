import React from 'react';
import Poster from './Poster';


export default {
    title: 'Poster',
    component: Poster
}

export const Primary = () => <Poster variant='primary'>Primary</Poster>
export const Secondary = () => <Poster variant='secondary'>Secondary</Poster>
export const Success = () => <Poster variant='success'>Success</Poster>
export const Danger = () => <Poster variant='danger'>Danger</Poster>
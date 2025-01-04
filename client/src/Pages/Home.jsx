import React from 'react'
import { Hero } from '../components/Hero';
import { Team } from '../components/Team';
import { Features } from '../components/Features';  
import { Chat } from './Chat.jsx';

export const Home = () => {
  return (
    <>
    <Hero/>
    <Features/>
    <Chat/>
    <Team/>
    </> 
  )
}


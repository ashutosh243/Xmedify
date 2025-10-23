import React from 'react';
import Card from './Card';
import CardImage from '../assets/card.png';

const Blog=()=>{
  
  return (<div className='containe w-[80vw] m-auto'>
          
          <h1 className='font-bold text-3xl text-center mt-5 text-[#025590]'>Read Our Latest News</h1>
          <div className='flex '>
             <Card link={CardImage}></Card>
             <Card link={CardImage}></Card>
             <Card link={CardImage}></Card>
          </div>
  </div>)
}

export default Blog
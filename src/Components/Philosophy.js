import React from 'react';

export default function Philosophy() {
    
   
    const Image = (Images) => {
      return (
        <img src='https://images.pexels.com/photos/15495017/pexels-photo-15495017/free-photo-of-model-in-jacket-with-glamour-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
      )
    }
    
  return (
    <div className='philsection'>
      <div className='left'>
        <h1>"Where philosophy</h1>
        <h1 className='gray'> meets technology</h1>
        <h1 className='gray'>Creativity Sparks"</h1>
        <p><i>by some wise guy</i></p>
      </div>
      <div className='right'>
        <Image />
      </div>
    </div>
  )
}

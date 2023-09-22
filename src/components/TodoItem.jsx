import React from 'react'
import CheckeableIcon from './Icons/CheckeableIcon';
import deleteIcon from '../assets/svg/close.svg';
import SpotifyComponent from './SpotifyComponent/SpotifyComponent';

function TodoItem(props) {
  const {text, completed, color} = props;

  const DarkOverlay = () => {
    return (
      <div className='z-10 absolute h-20  bg-stone-950 pointer-events-none p-6 items-center justify-between flex  rounded-2xl  shadow-lg mt-5 w-full opacity-20'>
        
      </div>
    )
  }
  
  return (
    <div className='relative w-4/5'>
      {completed && <DarkOverlay/>}
      <li className='p-6 items-center justify-between flex bg-white rounded-2xl h-20 shadow-lg mt-5 '>
        <CheckeableIcon
          color = {color}
          completed = {completed}
        />
        <p className={completed ? 'line-through' : ''}>{text}</p>

        <SpotifyComponent
          text = {text}
        />

        <img src={deleteIcon} alt="close button" />
      </li>
    </div>
  )
}

export default TodoItem
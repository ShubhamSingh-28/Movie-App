import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//import React from 'react'

export default function CircleRating({rating}) {
  return (
    <div className=' rounded-[50%] p-[2px] bg-white text-black'>
        <CircularProgressbar 
        className=' text-2xl font-[900] text-black'
        value={rating} 
        maxValue={10}
        text={rating}
        styles={buildStyles({
            pathColor: rating < 5 ?"red": rating < 7 ? "orange" : "green"
        })} />
    </div>
  )
}

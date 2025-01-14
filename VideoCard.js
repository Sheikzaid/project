import React from 'react'
import {Avatar} from '@mui/material'
import './VideoCard.css'
function VideoCard({image,title,channel,timestamp,channelImage,views}) {
  return (
    <div className='videoCard'>
      <img className='videoCard_thumbnail' src={image} alt="" />
      <div className='videoCard_info'>
        <Avatar
         className='videoCard_avatar'
         alt={channel}
         src={channelImage}
         />
         <div className='videoCard_text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}  . {timestamp}
          </p>
          
         </div>

      </div>
      
    </div>
  )
}

export default VideoCard

import React from 'react'
import {Avatar} from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import './ChannelRow.css'
function ChannelRow({image,channel,subs,noOfVideos, verified,description}) {
  return (
    <div className='channelRow'>
      <Avatar
         className='channelRow_logo'
         alt={channel}
         src={image}
         />
         <div className='channelRow_text'>
            <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon/>}</h4>
            <p>
              {subs} subscribers .{noOfVideos} videos
            </p>
            <p>
              {description}
            </p>
         </div>
      
    </div>
  )
}

export default ChannelRow

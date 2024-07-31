import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
        <TuneOutlinedIcon/>
      </div>
      <hr/>
      <ChannelRow
         image="https://yt3.ggpht.com/KFgRtMD1rJBtRz7Dj0C_CYB82_fy5reDlp17LLT5KCWYV1OIQZtBjtCETt-t8fl539t4YhcfOkA=s88-c-k-c0x00ffffff-no-rj"
         channel="s8ul"
         subs="1.25M"
         noOfVideos={242}
         verified
         description="You can find some awesome gaming contents"
      />
      <hr/>
      <VideoRow
         image="https://img.youtube.com/vi/acQT1iITmaY/maxresdefault.jpg
"
         title="YOUTUBERS CONTROL WHAT S8UL EAT FOR THE DAY"
         views="2.3M views"
         timestamp="3 days ago"
         channel="s8ul"
         description="fun vlog"
         subs="1.25M"
      
      />
      <VideoRow
    image="https://img.youtube.com/vi/86qQPh24SZg/maxresdefault.jpg
"
    title="TOP 10 GAMING MOMENTS OF THE YEAR"
    views="3.2M views"
    timestamp="2 weeks ago"
    channel="s8ul"
    description="Our top gaming moments from the past year"
    subs="1.25M"
/>

<VideoRow
    image="https://img.youtube.com/vi/de52xPM2pp4/maxresdefault.jpg
"
    title="GAMER CHALLENGE: 24 HOURS WITH NO INTERNET"
    views="1.1M views"
    timestamp="1 month ago"
    channel="s8ul"
    description="Can we survive a day without internet?"
    subs="1.25M"
/>

<VideoRow
    image="https://img.youtube.com/vi/XueHGL4Fis4/maxresdefault.jpg
"
    title="HOW TO MASTER YOUR FAVORITE GAME"
    views="2.8M views"
    timestamp="3 weeks ago"
    channel="s8ul"
    description="Tips and tricks to become a pro gamer"
    subs="1.25M"
/>

<VideoRow
    image="https://img.youtube.com/vi/qIW2ligRzRQ/maxresdefault.jpg
"
    title="GAMING SETUP TOUR 2024"
    views="1.7M views"
    timestamp="5 days ago"
    channel="s8ul"
    description="Check out our updated gaming setup"
    subs="1.25M"
/>

<VideoRow
    image="https://img.youtube.com/vi/Z7-5X0AjfPo/maxresdefault.jpg
"
    title="UNBOXING THE LATEST GAMING TECH"
    views="950K views"
    timestamp="2 days ago"
    channel="s8ul"
    description="Unboxing and reviewing the newest gaming gear"
    subs="1.25M"
/>

<VideoRow
    image="https://img.youtube.com/vi/y2CAc6HEzhg/maxresdefault.jpg
"
    title="BEST GAMING MOMENTS COMPILATION"
    views="4.0M views"
    timestamp="1 month ago"
    channel="s8ul"
    description="A compilation of the best moments from our streams"
    subs="1.25M"
/>

<VideoRow
    image="https://img.youtube.com/vi/hrGUj8ORhvQ/maxresdefault.jpg
"
    title="GAMING WITH CELEBRITIES: EPISODE 3"
    views="2.4M views"
    timestamp="4 days ago"
    channel="s8ul"
    description="Playing games with your favorite celebrities"
    subs="1.25M"
/>
    </div>
  )
}

export default SearchPage

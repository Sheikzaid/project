import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import './Upper.css'
import { Link } from 'react-router-dom';

function Upper() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className='upper'>
     <div className='upper_left'>
       <MenuIcon />
       <Link to="/">
        <img className='upper-logo'src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" 
        alt="YouTube Logo"
        style={{ width: '50px', height: 'auto' }} 
      
         />
         </Link>
     </div>
      <div className='upper_input'>
          <input onChange={(e) =>setInputSearch(e.target.value)} value={inputSearch}placeholder='search' type="text"/>
          <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='upperinput_icon'/>
          </Link>
      </div>
     <div className='upper_right'>
         <VideoCallOutlinedIcon className='upper_icon'/>
         <NotificationsNoneSharpIcon className='upper_icon'/>
     </div>
     
    </div>
  )
}

export default Upper

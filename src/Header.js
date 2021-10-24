import React from 'react'
import "./Header.css"
// import PersonIcon from '@material-ui/icons/Person';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
          <IconButton>
          <PersonIcon fontsize="large" className="header__icon" /> 
          </IconButton>

          <img
            class="header__logo" 
            src= "https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" 
            alt=''
            />
          <IconButton>
          <ForumIcon fontsize="large" className="header__icon"/>
          </IconButton>

        </div>

    )
}

export default Header

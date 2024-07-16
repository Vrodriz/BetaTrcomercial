"use client"
import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import logo from '../Assets/Logo.png'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import { IoIosDocument } from "react-icons/io";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon  from '@mui/icons-material/ShoppingCartCheckoutRounded'
import { text } from 'stream/consumers'


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [ 
    { 
      text:"Home",
      icon:<HomeIcon/>
    },
    { 
      text:"Sobre",
      icon:<InfoIcon/>
    },
    { 
      text:"Produtos",
      icon:<CommentRoundedIcon/>
    },
    { 
      text:"Catálogo",
      icon:<IoIosDocument/>
    },
    { 
      text:"Contato",
      icon:<PhoneRoundedIcon/>
    },
  ]


  return ( <nav>  
    <div className='nav-logo-container'>
      <img className='logo-navbar' src='./Logo.PNG' alt="" />
    </div>
    <div className='navbar-links-container'> 
      <a href="">Home</a>
      <a href="">Sobre</a>
      <a href="">Produtos</a>
      <a href="">Catálogo</a> 
      <button className='primary-button'>  
        Contato
      </button>
    </div>
    <div className='navbar-menu-container'> 
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
      anchor='right'>  
      <Box 
      sx={{  width: 250 }}
      role="presentation"
      onClick={() => setOpenMenu(false)}  
      onKeyDown={() => setOpenMenu(false)}
      > 
          <List>
            {menuOptions.map((item) => (  
              <ListItem key={item.text} disablePadding >  
                <ListItemButton>  
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}></ListItemText>
                </ListItemButton>
              </ListItem>
            )  
            )}  

          </List>

      </Box>
    </Drawer>
  </nav>
)
}

export default Navbar
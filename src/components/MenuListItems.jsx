import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';


const icons=()=>[
    {
    title:"Anasayfa |",
    icon: <DashboardIcon/>,
    url:"/",
     },
    {
    title:"Hakkımızda |",
    icon: <DirectionsCarFilledIcon/>,
    url:"/cars",
    },
   
    {
    title:"Popüler Bölgeler",
    icon: <BookOnlineIcon/>,
    url:"/bolgeler",
    },
    {
    title:"Blog",
    icon: <InfoIcon/>,
    url:"/blog",
    },
    {
    title:"Sık Sorulanlar",
    icon: <LiveHelpIcon/>,
    url:"/faq",
    },
    {
    title:"Yorumlar",
    icon: <LiveHelpIcon/>,
    url:"/yorum",
    },

]

const MenuListItems = () => {
    const navigate=useNavigate()
  return (    
         <List>
        {icons().map((item, index) => (
          <ListItem 
        sx={{
            color:"white",
             "&:hover": {color:"greenyellow"}, 
             "&:hover .MuiSvgIcon-root": {color:"greenyellow"},
             "& .MuiSvgIcon-root": {color:"white"},
          }} 
          key={index} disablePadding onClick={()=>navigate(item.url)}>
            <ListItemButton>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>    
  )
}

export default MenuListItems
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.svg';
import '../css/nav.css';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export default function Nav(props){
    const [userAuth, setUserAuth] = useState({state: false});
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="d-flex flex-row align-items-center justify-content-between">
            <div>
                <img src={Logo} alt="" />
            </div>

            <div className='d-flex flex-row align-items-center'>
                <div className='m-1 circle_gray'>
                    <Link to="/"><HomeTwoToneIcon /></Link>
                </div>
                <div className='m-1 circle_gray'>
                    <Link to="/login"><LoginTwoToneIcon /></Link>
                </div>
                <div className='m-1 circle_gray'>
                    <Link to="/shopping-list"><ShoppingCartTwoToneIcon /></Link>
                </div>
                <div className='m-1 circle_gray'>
                    <Button id="open-menu" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                        <MenuTwoToneIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'open-menu',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}
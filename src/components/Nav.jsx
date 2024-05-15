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
import LogoIcon from './LogoIcon';
import { getCookie, deleteCookie } from '../functions/cookies';

export default function Nav(props){
    const [userAuth, setUserAuth] = useState({state: false});
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(()=>{
        if(getCookie('user_auth') === ""){
            setUserAuth({state: false});
        }else{
            setUserAuth({state: true});
        }
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = (event) => {
        event.preventDefault();

        deleteCookie('user_auth');

        window.location.href = '/login';
    }

    return (
        <nav className="d-flex flex-row align-items-center justify-content-between">
            <div>
                <LogoIcon alt={'App Logo'} />
            </div>

            <div className='d-flex flex-row align-items-center mr-2'>
                <div className='m-1 circle_gray'>
                    <Link to="/"><HomeTwoToneIcon /></Link>
                </div>
                {
                    !userAuth.state &&
                    <div className='m-1 circle_gray'>
                        <Link to="/login"><LoginTwoToneIcon /></Link>
                    </div>
                }
                
                {
                    userAuth.state &&
                    <div className='m-1 circle_gray'>
                        <Link to="/shopping-list"><ShoppingCartTwoToneIcon /></Link>
                    </div>
                }
                
                <div className='m-1 circle_gray'>
                    <Button id="open-menu" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} menulistprops={{'aria-labelledby': 'basic-button'}}>
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
                        {
                            !userAuth.state &&
                            <MenuItem>
                                <Link to={'/sign_in'}>Crear nueva cuenta</Link>
                            </MenuItem>
                        }

                        {
                            !userAuth.state &&
                            <MenuItem>
                                <Link to={'/login'}>Iniciar sesión</Link>
                            </MenuItem>
                        }
                        
                        {
                            userAuth.state &&
                            <MenuItem>
                                <a href={'#logout'} onClick={logout}>Cerrar sesión</a>
                            </MenuItem>
                        }
                        
                        
                    </Menu>
                </div>
            </div>
        </nav>
    )
}
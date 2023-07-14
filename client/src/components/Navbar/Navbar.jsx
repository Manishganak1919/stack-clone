import React from 'react'
import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../../components/Navbar/Navbar.css'
import decode from 'jwt-decode'
import logo3  from '../../assets/logo3.png';
import { useSelector,useDispatch } from 'react-redux'
import  search from '../../assets/search.svg';
import Avatar from '../../components/Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser';

// import Button from '../../components/Avatar/Avatar';

function Navbar() {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const handleLogout =() =>{
        dispatch({type:'LOGOUT'})
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    var User = useSelector((state) => (state.currentUserReducer))
    // console.log('this is user',User)
    useEffect(()=>{
        const token =User?.token
        if(token){
            const decodedToken =decode(token)
            if(decodedToken.exp *1000 <new Date().getTime()){
                handleLogout() 
            }
        }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))

    },[dispatch])


    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo3} alt='logo' className='img-logo' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type='text' placeholder='search...' />
                    <img src={search} alt='search_icon' width='18px' className='search-icon'/>
                </form>
                {User === null ?
                    <Link to="/Auth" className="nav-item nav-link">Log In</Link> :
                    <>
                       <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%"color="white"> <Link to={`/Users/${User?.result._id}`} style={{color:"white",textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className="nav-item nav-link" onClick={handleLogout}>Log Out</button>
                        
                    </>}
            </div>
        </nav>
    );
}

export default Navbar
import React from 'react'
import headercss from './header.module.css'
// import {Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
        <div className='homeNav' data-aos="fade-down" style={{height:'100%',background:'transperent !important'}}>
            <div className="containera" style={{marginLeft:'3%',padding:'5px'}}>
                <a className="brand-logo navlink-li" href='/home' style={{textDecoration: 'none',display:'flex'}}>
                    <i><img src='https://cdn-icons-png.flaticon.com/512/2633/2633892.png' width='60px' height='60px' /></i>
                    <span class={headercss.blockvote_title} style={{color:'orange',fontWeight:'500',fontSize:'32px'}}>B<span style={{color:'#F50057'}}>lock</span>Vote<span style={{color:'#1e90ff'}}>s</span></span>
                </a>  
            </div>
        </div>
    </>
  )
}

export default Header;
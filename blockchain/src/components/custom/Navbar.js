import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './choose.css'

class Navbar extends Component {
    state = {
        location: ""
    }

    componentWillReceiveProps(){
        console.log(this.props)
        this.setState({
            location: this.props.history.location.pathname
        })
    }
    render(){

        if(this.state.location === "/" || this.state.location === "/choose"  || this.state.location === "/vote"  || this.state.location === "/login"){
            return ( 
                <nav className="nav-wrapper black darken-2" style={{height:'100%'}}>
                    <div className="containera" style={{marginLeft:'3%',padding:'5px'}}>
                        <a className="brand-logo navlink-li" href='/home' style={{textDecoration: 'none'}}>
                            <i><img src='https://cdn-icons-png.flaticon.com/512/2633/2633892.png' width='60px' height='60px' /></i>
                            <span style={{color:'orange',fontWeight:'500'}}>B<span style={{color:'#F50057'}}>lock</span>Vote<span style={{color:'#1e90ff'}}>s</span></span>
                        </a>  
                    </div>
                </nav>
            )
        }else{
            return(
                <nav className="nav-wrapper black darken-2">
                    <div className="nav-container">
                        <a className="brand-logo navlink-li" href='/home' style={{textDecoration: 'none'}}>
                            <i><img src='https://cdn-icons-png.flaticon.com/512/2633/2633892.png' width='60px' height='60px' /></i>
                            <span style={{color:'orange',fontWeight:'500'}}>B<span style={{color:'#F50057'}}>lock</span>Vote<span style={{color:'#1e90ff'}}>s</span></span>
                        </a>
                        <ul className="right">
                            <li><NavLink className="navlink-li" to="/home" style={{textDecoration: 'none'}}>Home</NavLink></li>
                            <li><NavLink className="navlink-li" to="/newelection" style={{textDecoration: 'none'}}>New Election</NavLink></li>
                            <li><NavLink className="navlink-li" to="/elections" style={{textDecoration: 'none'}}>Elections</NavLink></li>
                        </ul>
                    </div>
                </nav>
            )
        }

        
    }
}

export default withRouter(Navbar)
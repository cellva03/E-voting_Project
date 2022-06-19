import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './login.css';

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            'username': null,
            'password': null
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        console.log(username)
        axios.post('http://localhost:8000/api/adminLogin', {
            username: username,
            password: password,
        })
        .then(function(response){ 
            if(response.data){
                window.location.assign("/newelection")
                // console.log(response.data)
            }else{
                alert('Incorrect Username or Password');
            }
        })
        .catch(function(err){
            console.error(err);
        });
    }


    render(){
        return(
            // <div className="container">
            //     <form onSubmit={this.handleSubmit}>
            //         <input type="text" id="username" name="username" onChange={this.handleInputChange} required/>
            //         <label htmlFor="name">Username</label><br></br>
            //         <input type="password" id="password" name="password" onChange={this.handleInputChange} required/>
            //         <label htmlFor="name">Password</label><br></br><br></br>
            //         <button className="btn blue darken-2" type="submit" name="action">Submit
            //             <i className="material-icons right">send</i>
            //         </button>
            //     </form>
            // </div>   
            <div class="login-box">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="user-box">
                        <input type="text" id="username" name="username" autocomplete='off' onChange={this.handleInputChange} required/>
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" id="password" autocomplete='off' name="password" onChange={this.handleInputChange} required/>
                        <label>Password</label>
                    </div>
                    <button type="submit" name="action">Submit
                    </button>
                    <Link to="/home">
                    <button style={{marginLeft:'60px'}}>GO BACK
                    </button>
                    </Link>
                </form>
            </div>   
        )
    }
}

export default Login;
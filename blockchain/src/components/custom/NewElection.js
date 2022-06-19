import React, { Component } from 'react';
import axios from 'axios';
// import './choose.css';
import NavBar from './Navbar';

class NewElection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            election_name: '',
            election_organizer: '',
            election_password: '',
        };
    }

    handleInputChange = e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { election_name, election_organizer, election_password } = this.state;
        console.log(election_name);
        axios.post('http://localhost:8000/api/electionName', {
            election_name: election_name,
            election_organizer: election_organizer,
            election_password: election_password
        })
        .then(function(response){ 
            window.location.assign('/home');
        })
        .catch(function(err){
            console.error(err);
        });
    }

    render(){
        return(
            <>
            <NavBar />
            <div className="new-election">
                <center><h4>Create New Election</h4></center><br></br>
                <form onSubmit={this.handleSubmit} className='create-election-form'>
                    <div class="text-field">
                        <input type="text" id="election_name" autocomplete='off' class='text-field' name="election_name" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Election Name</label><br></br>
                    </div><br></br>
                    <div class="text-field">
                        <input type="text" id="election_organizer" autocomplete='off' class='text-field' name="election_organizer" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Election Organizer</label><br></br>
                    </div><br></br>
                    <div class="text-field">
                        <input type="password" id="election_password" autocomplete='off' class='text-field' name="election_password" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Election Password</label>
                    </div>
                    <br></br>
                    <button type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
            </>
        )
    }
}

export default NewElection;
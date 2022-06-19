import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';

class Choose extends Component {

    constructor(props) {
        super(props);
        this.state = {
            election_name: [],
            election_organizer: [],
            election_id: [],
            final: [],
            id: null,
        };
    }

    componentDidMount(){
        let currentComponent = this;
      
        axios.get('http://localhost:8000/api/electionName', {})
        .then(function(response){ 
            var data = response.data;
            currentComponent.setState({
                final: data
            })
        })
        .catch(function(err){
            console.error(err);
        });

    }

    handleInputChange = (e) => {
        // console.log(e.target.innerHTML);
        var name = e.target.innerHTML;
        var index = 0;
        for(let i = 0; i < this.state.election_name.length; i++){
            if(name === this.state.election_name[i]){
                index = i;
                break;
            }
        }
        var id = this.state.election_id[index];
        this.setState({
            id : id
        })
    };


    render(){
        const electionList = this.state.final.map(election => {
            return (
                <div className="contact" key={election.election_id}>
                    <li className="collection-item avatar" style={{paddingTop:'20px'}}>
                        {/* <i class="fa-solid fa-check-to-slot fa-xl" style={{color: '#F50057',fontSize:'30px',marginRight:'20px'}}></i> */}
                        <i style={{color: '#F50057',fontSize:'30px',marginRight:'20px'}}><img src='https://img.icons8.com/external-bearicons-outline-color-bearicons/452/external-Vote-yes-or-no-bearicons-outline-color-bearicons.png' width='50px' height='50px'/></i>
                        <Link to={"/vote/" + election.election_id} style={{textDecoration:'none',fontSize: '24px',color : '#fff',marginTop:'10px'}} className="title vote-list" onClick={this.handleInputChange}>{election.election_name}</Link>
                    </li>
                </div>
            )
        }) 
        return(
            <>
            <NavBar />
            <div className="container vote-collection">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <h3 style={{color:'orange', fontSize:'30px'}}>Elections</h3>
                    </li>
                        {electionList}
                </ul>
            </div>
            </>
        )
    }
}

export default Choose;
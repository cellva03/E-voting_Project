import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }


    render(){
        return (
            <div className="container">
                {/* <ul className="collection with-header">
                <li className="collection-header"><h3>Choose User Type</h3></li>
                    <li className="collection-item"><div><h4>User<Link to="/choose" className="secondary-content"><i className="material-icons">send</i></Link></h4></div></li>
                    <li className="collection-item"><div><h4>Admin<Link to="/login" className="secondary-content"><i className="material-icons">send</i></Link></h4></div></li>
                </ul> */}
                <h2 className="collection-header text-center" style={{margin: '50px 0px 70px 0px'}} >Choose User Type 😊</h2>
                <div className="choose-card" style ={{width:'100%',display: 'flex',justifyContent:'space-around',alignItem:'center'}}>
                    <Link to="/choose" style={{ textDecoration: 'none'}}>
                        <Card style={{ width: '14rem', backgroundColor: 'rgba(255, 255, 255, 0.1)',cursor:'pointer',borderRadius: '10px'}} className='user-card'>
                            <Card.Img variant="top" src="https://cdn-icons.flaticon.com/png/512/1165/premium/1165674.png?token=exp=1655284040~hmac=e224d284e79accbc0a1e9c600ffec079" />
                            <Card.Body>
                                <Card.Title class="text-center" style={{color:'#fff'}}>USER</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to ="/login" style={{ textDecoration: 'none' }}>
                        <Card style={{ width: '14rem', backgroundColor: 'rgba(255, 255, 255, 0.1)',cursor:'pointer',borderRadius: '10px'}} className='admin-card'>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2416/2416666.png" />
                            <Card.Body>
                                <Card.Title class="text-center" style={{color:'#fff'}}>ADMIN</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home
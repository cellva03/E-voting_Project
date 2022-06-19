import React, { useEffect } from "react";
import AOS from "aos";
import Header from '../header/Header.jsx'
import Template from '../template/Template.jsx';
const Home = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000,
          delay: 1000,
          startEvent: 'mouseover',
          offset: 150,
          once: false,
          mirror: false, 
        });
        AOS.refreshHard()
      }, []);
    return (
        <> 
            <Header/>
            <Template/>
        </>
    )
}

export default Home;
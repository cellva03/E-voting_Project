import { Button } from 'react-bootstrap';
import React from 'react';
import {Link } from 'react-router-dom'
import templatecss from './template.module.css';
import Img1 from '../../assets/Img1.svg';
import Img2 from '../../assets/Img2.svg';
import Img3 from '../../assets/Img3.svg';
import Img4 from '../../assets/Img4.svg';




const Template = () => {
    // let arr = [document.querySelector('.content-title'),document.querySelector('.content-p')]
    // const sr = ScrollReveal({
    //     reset : true,
    //     distance : '60px',
    //     duration : 3000,
    //     delay : 200
    // });
    // sr.reveal(arr);

  return (
    <>
        <div className={templatecss.container}>
            <h1 className='content-title text-center' data-aos="fade-down"> A Powerful App for Your <span className={templatecss.content_span}>Digitalized Voting</span></h1>
            <p className={ templatecss.content_p} style={{letterSpacing:'2px'}} class='text-center' data-aos="fade-up">Our Voting app will works on all devices.<br/>Voting is not only our RIGHT, it's our POWER</p>
            <div className={templatecss.start_btn} data-aos="fade-up">
                <Link to="/home">
                    <Button className={templatecss.btn}> Get Started </Button>
                </Link>
            </div>
            <div className={templatecss.content} data-aos="fade-up">
                <div className={templatecss.image} >
                    <img src={Img1} alt="3" />
                </div>
                <div className={templatecss.text_box}>
                    <h3 className='text-center'>Voting app</h3>
                    <p>BlockVotes is a Blockchain based e-voting system which makes voting process easy, Simple and Safe.
                        BlockVotes System helps to acquire a secured voting by a <strong>single click.</strong> 
                    </p>
                </div>
            </div>
            <div className={templatecss.workflow} data-aos="fade-up">
                <h1 className={templatecss.content_title} class='text-center'>Workflow that just works</h1>
                {/* <p clssName={templatecss.content_p} class='text-center'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br/> officia deserunt mollit anim id est laborum — semper quis lectus <br/>nulla at volutpat diam ut venenatis.</p> */}
            </div>
            <div className={templatecss.content}>
                <div className={templatecss.image} data-aos="fade-up">
                    <img src={Img2} alt='4'/>
                </div>
                <div className={templatecss.info} data-aos="fade-up">
                    <h3 class='text-center' className={templatecss.workflow_title}>Quick Access</h3>
                    <p>Everything will be tokenized and connected by a Blockchain one day.  Experience the best  E-Voting System by a single click , At your place , At your time .</p>
                </div>
            </div>
            <div className={templatecss.content}>
                <div className={templatecss.info} data-aos="fade-up">
                    <h3 class='text-center' className={templatecss.workflow_title}>Security</h3>
                    <p>An online voting system is a software platform that allows groups to securely conduct votes and elections. High-quality online voting systems balance ballot security, accessibility, and the overall requirements of an organization's voting event.</p>
                </div>
                <div className={templatecss.image} data-aos="fade-down">
                    <img src={Img3} alt='1'/>
                </div>
            </div>
            <div className={templatecss.content}>
                <div className={templatecss.image} data-aos="fade-up">
                    <img src={Img4} alt='2'/>
                </div>
                <div className={templatecss.info} data-aos="fade-in">
                    <h3 class='text-center' className={templatecss.workflow_title}>Results</h3>
                    <p>By using Blockvotes in the long term, expenses are expected to decrease. Results can be reported and published faster.The results are published in excellent graphical user interface.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Template;
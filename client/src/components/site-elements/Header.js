import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Radium from 'radium';
import Color from 'color';

import gitHub from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Header extends React.Component {
    render() {
        return (
            <div className="col-lg-12 text-center" id='headerText' name='headerText'>
                <h1 name='devName'><b>Jonathan Thompson</b></h1>
                <h6 name='devTitleAndLoc'><b>Software Engineer in Test | Chicago, IL</b></h6>
                <h7 name='devSlogan'><b>Testing and styling are what I do best</b></h7>

                <br/>
                <br/>

                <Router>
                    <div className='row justify-content-center' name='profileLinks'>
                        <Link to='https://github.com/thompsonjonm' target='_blank'><img src={gitHub} className='headerImg' alt={gitHub} name='githubLink'/></Link>
                        <Link to='https://www.linkedin.com/in/jonathanmnthompson/' target='_blank'><img src={linkedin} className='headerImg' alt={linkedin} name='linkedinLink'/></Link>
                        {/* <input type='image' class='dayStyle' src="./assets/img/day.png" alt="day/night select" id='connectImageFour'>
                        <input type='image' class='nightStyle' src="./assets/img/night.png" alt="day/night select" id='connectImageFive'> */}
                    </div>
                </Router>

                <br/>
                <br/>

                <p className="text-center d-md-none">
                    <button type='button' className="btn btn-dark btn-sm" data-toggle='offcanvas' name='navbarToggle'>Navigation</button>
                </p>

                <br/>

            </div>
        );
    }
}
import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import Color from 'color';

import clojureTesting from '../../assets/img/clojureTesting.png';
import cypressCucumberTesting from '../../assets/img/cypressCucumberTesting.png'
import cypressTesting from '../../assets/img/cypressTesting.png';
import nytimes from '../../assets/img/nytimes.png';
import qaDemos from '../../assets/img/qaDemos.png';
import rubyTesting from '../../assets/img/rubyTesting.png';
import scraper from '../../assets/img/scraper.png'
import seleniumDemos from '../../assets/img/seleniumDemos.png';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Testing extends React.Component {
    render() {
        return (
            <div className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto" id="mainBodySection">
                <div className='row'>
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <h5 className='text-center'><strong>A sampling of my QA projects and repositories</strong></h5>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="row">
                    <div className="col-10 col-offset-1 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/magnolia-acuminata" target='_blank' className="project" name='cypressCucumberTestingLink'>
                                    <div className='row'>
                                        <img src={cypressCucumberTesting} alt="cypress cucumber testing display" className="img-fluid projectImg" name='cypressCucumberTestingImg'/>
                                        <h3 className="col-12 text-center imgDescriptWide" name='cypressCucumberTestingText'>
                                            <br/>
                                            <br/>
                                            <b>An automation testing repository using Cypress.io, Cypress-Cucumber-Preprocessor, and ES6.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 col-offset-1 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/dendrology" target='_blank' className="project" name='cypressTestingLink'>
                                    <div className='row'>
                                        <img src={cypressTesting} alt="cypress testing display" className="img-fluid projectImg" name='cypressTestingImg'/>
                                        <h3 className="col-12 text-center imgDescriptWide" name='cypressTestingText'>
                                            <br/>
                                            <br/>
                                            <b>An automation testing repository using Cypress.io and ES6.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 col-offset-1 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/ruby-testing" target='_blank' className="project" name='rubyTestingLink'>
                                    <div className='row'>
                                        <img src={rubyTesting} alt="ruby testing display" className="img-fluid projectImg" name='rubyTestingImg'/>
                                        <h3 className="col-12 text-center imgDescriptWide" name='rubyTestingText'>
                                            <br/>
                                            <br/>
                                            <b>An automation testing repository using Ruby, Cucumber, and Watir webdriver.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 col-offset-1 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/clojure-testing" target='_blank' className="project" name='clojureTestingLink'>
                                    <div className='row'>
                                        <img src={clojureTesting} alt="clojure testing display" className="img-fluid projectImg" name='clojureTestingImg'/>
                                        <h3 className="col-12 text-center imgDescriptWide" name='clojureTestingText'>
                                            <br/>
                                            <br/>
                                            <b>An automation testing repository using Clojure, Kaocha, and Etaoin webdriver.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 col-offset-1 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/qa-test-demos" target='_blank' className="project" name='qaDemosLink'>
                                    <div className='row'>
                                        <img src={qaDemos} alt="qa demos testing display" className="img-fluid projectImg" name='qaDemosImg'/>
                                        <h3 className="col-12 text-center imgDescriptWide" name='qaDemosText'>
                                            <br/>
                                            <br/>
                                            <b>A testing repository I created to demo unit, integration, and end-to-end tests.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 col-offset-1 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/qa-test-demos/tree/master/seleniumTests" target='_blank' className="project" name='seleniumDemosLink'>
                                    <div className='row'>
                                        <img src={seleniumDemos} alt="selenium demos testing display" className="img-fluid projectImg" name='seleniumDemosImg'/>
                                        <h3 className="col-12 text-center imgDescriptWide" name='seleniumDemosText'>
                                            <br/>
                                            <br/>
                                            <b>A selenium testing repository I created to demo end-to-end tests.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 col-offset-1 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/nytimes-react-app/tree/master/client/src/test" target='_blank' className="project" name='nytimesDemoLink'>
                                    <div className='row'>
                                        <img src={nytimes} alt="nytimes testing display" className="img-fluid projectImg" name='nytimesDemoImg'/>
                                        <h3 className="col-12 text-center imgDescriptWide" name='nytimesDemoText'>
                                            <br/>
                                            <br/>
                                            <b>A simple testing suite I implemented into a React.js project featuring unit and integration testing.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 col-offset-1 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/news-scraper/tree/master/testing" target='_blank' className="project" name='scraperDemoLink'>
                                    <div className='row'>
                                        <img src={scraper} alt="scraper testing display" className="img-fluid projectImg" name='scraperDemoImg'/>
                                        <h3 className="col-12 text-center imgDescriptWide" name='scraperDemoText'>
                                            <br/>
                                            <br/>
                                            <b>A unit testing suite I created within a news-scraper project.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

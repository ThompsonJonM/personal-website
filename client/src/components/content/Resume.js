import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Radium from "radium";
import Color from "color";

const styles = {
  base: {
    color: "#000000",
    ":hover": {
      color: "#000000",
    },
  },
};

export default class Resume extends React.Component {
  render() {
    return (
      // Main Body Column
      <div
        className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto"
        id="mainBodySection"
      >
        <div className="row text-center">
          <Router>
            <h5 className="col-12" name="linkAndPhoneText">
              <b>
                <Link
                  to="mailto:thompson.jonm@gmail.com"
                  target="_blank"
                  style={styles.base}
                  name="emailLink"
                >
                  {" "}
                  thompson.jonm@gmail.com{" "}
                </Link>
                <hr />
                585.259.5639{" "}
              </b>
            </h5>
          </Router>
        </div>

        <br />
        <br />

        <div className="row">
          <div
            className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto"
            id="resumeHeaderText"
          >
            <h4 name="profileHeader">
              <b>PROFILE</b>
            </h4>
          </div>

          <div
            className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto"
            id="resumeBodyText"
          >
            <p className="resumeEntryText" name="resumeProfileText">
              Results driven engineer with proven military leadership and
              experience in full-stack web development. Demonstrated ability to
              learn and adapt quickly to high-tempo working environments.
              Extremely detail oriented with excellent communication skills.
            </p>
          </div>
        </div>

        <hr />

        <div className="row">
          <div
            className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto"
            id="resumeHeaderText"
          >
            <h4 name="workHeader">
              <b>WORK EXPERIENCE</b>
            </h4>
          </div>

          <div className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto">
            <div className="row">
              <span className="col-12 col-lg-6 col-xl-6 resumeHeadEntry">
                Genesys
              </span>

              <span className="col-12 col-lg-6 col-xl-6 resumeEntry">
                Senior Software Engineer in Test | Nov 2020 - Present
              </span>

              <p className="col-12 resumeEntryText">
                Leads QA for Genesys Cloud UI team. Creates, maintains, and
                executes front end and API automation tests using Cypress.io and
                Javascript. Mentors QA and software engineers on writing
                automation tests.
              </p>
            </div>

            <div className="row">
              <span className="col-6 col-lg-6 col-xl-6 resumeHeadEntry">
                TransLoc
              </span>

              <span className="col-6 col-lg-6 col-xl-6 resumeEntry">
                QA Automation Engineer | July 2019 - Nov 2020
              </span>

              <p className="col-12 resumeEntryText">
                Led QA for Demand Response and Authentication squads. Created,
                maintained, and executed automated tests using Cypress.io and
                Javascript. Cross-trained into front-end development using
                JavaScript, React, Zeplin, and Sketch. Conducted exploratory
                testing for Demand Response and Authentication squads. Created
                and maintained Postman API tests for Demand Response application
                space. Owned and oversaw Pendo analytics environment. Created
                Python automation testing framework using Pytest, Selenium, and
                Python 3. Developed page object modeler and Selenium WebDriver
                wrapper for Pytest automation framework.
              </p>
            </div>

            <div className="row">
              <span className="col-12 col-lg-6 col-xl-6 resumeHeadEntry">
                Vodori, Inc.
              </span>

              <span className="col-12 col-lg-6 col-xl-6 resumeEntry">
                Software QA Specialist | Dec 2018 - July 2019
              </span>

              <p className="col-12 resumeEntryText">
                Oversaw quality section for Pepper software products. Introduced
                automation testing framework using Cypress.io and Javascript.
                Collaborated with Pepper development team and leadership on
                defining quality standards, processes, and practices for the
                Pepper suite of products. Utilized testing tools to build,
                maintain, and execute test strategies for Pepper product suite.
              </p>
            </div>

            <div className="row">
              <span className="col-12 col-lg-6 col-xl-6 resumeHeadEntry">
                Vodori, Inc.
              </span>

              <span className="col-12 col-lg-6 col-xl-6 resumeEntry">
                Software QA Specialist | Jan 2018 - Dec 2018
              </span>

              <p className="col-12 resumeEntryText">
                Utilized testing tools to build, maintain, and execute test
                strategies for client web applications. Executed client
                validation testing protocols alongside product management.
                Introduced mobile application automated testing using Appium.
                Security scanned client web applications for vulnerabilities
                during pre-deployment phase.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div
            className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto"
            id="resumeHeaderText"
          >
            <h4 name="educationHeader">
              <b>EDUCATION</b>
            </h4>
          </div>

          <div
            className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto"
            id="resumeBodyText"
          >
            <div className="row">
              <span
                className="col-12 col-lg-6 col-xl-6 resumeHeadEntry"
                name="schoolNameNU"
              >
                Northwestern University
              </span>

              <span
                className="col-12 col-lg-6 col-xl-6 resumeEntry"
                name="schoolDateNU"
              >
                CERT - Full Stack Web Development - 2017
              </span>

              <p className="col-12 resumeEntryText" name="schoolTextNU">
                Solid understanding of development tools. Proficient with
                Javascript, SQL/NoSQL, Node, React, and MERN Stack applications.
                Experience in unit, integration, and end-to-end testing.
              </p>
            </div>

            <hr />

            <div className="row">
              <span
                className="col-12 col-lg-6 col-xl-6 resumeHeadEntry"
                name="schoolNameNaz"
              >
                Nazareth College
              </span>

              <span
                className="col-12 col-lg-6 col-xl-6 resumeEntry"
                name="schoolDateNaz"
              >
                BA - History & Anthropology Major - 2015
              </span>

              <p className="col-12 resumeEntryText" name="schoolTextNaz">
                Gained valuable experience in research and writing.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div
            className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto"
            id="resumeHeaderText"
          >
            <h4 name="technicalHeader">
              <b>TECHNICAL EXPERTISE</b>
            </h4>
          </div>

          <div
            className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto"
            id="resumeBodyText"
          >
            <div className="row">
              <div className="col-12 col-lg-4 col-xl-4" name="languageText">
                <b>
                  SKILLSET
                  <ul>
                    <li>Javascript</li>
                    <li>HTML/CSS</li>
                    <li>Python</li>
                    <li>MySQL</li>
                  </ul>
                </b>
              </div>

              <div className="col-12 col-lg-4 col-xl-4" name="technologyText">
                <b>
                  KNOWLEDGE
                  <ul>
                    <li>React and React Native Frameworks</li>
                    <li>Heroku Build Agent</li>
                    <li>Bamboo Build Agent</li>
                  </ul>
                </b>
              </div>

              <div className="col-12 col-lg-4 col-xl-4" name="toolsText">
                <b>
                  TOOLS
                  <ul>
                    <li>Cucumber Studio</li>
                    <li>JIRA</li>
                    <li>Postman</li>
                    <li>Selenium Webdriver</li>
                    <li>Cypress.io</li>
                    <li>Playwright</li>
                  </ul>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

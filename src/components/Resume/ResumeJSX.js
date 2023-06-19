import React from 'react';

function ResumeJSX() {
  return (
    <div className="flex flex-row">
      <div className="flex-sidebar bg-gray-200 p-4">
        <img src="alan-photo.png" id="alan-photo" className="mb-4" />
        <h4 id="name-side" className="text-xl font-semibold">RUBEN ALAN MALPARTIDA</h4>
        <h4 id="job" className="text-lg text-gray-700">SOFTWARE ENGINEER</h4>
        <hr id="line-side" className="my-4" />
        <div className="contact-info">
          <h4 id="contact-side" className="font-semibold mb-2">CONTACT INFO</h4>
          <div id="icon-container">
            {/* Icons */}
            <div className="mb-2">
              <p className="icon-p flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone w-5 h-5 mr-2 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>
                914-409-5117
              </p>
            </div>
            <div className="mb-2">
              <p className="icon-p flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail w-5 h-5 mr-2 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
                alanmalpartida@gmail.com
              </p>
            </div>
            <div className="mb-2">
              <p className="icon-p flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-world w-5 h-5 mr-2 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
                  <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
                  <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                  <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                </svg>
                alanmalpartida.com
              </p>
            </div>
            <div className="mb-2">
              <p className="icon-p flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github w-5 h-5 mr-2 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
                github.com/alantothe
              </p>
            </div>
            <div className="mb-2">
              <p className="icon-p flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-map-pin w-5 h-5 mr-2 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="11" r="3"></circle>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"></path>
                </svg>
                White Plains, NY
              </p>
            </div>
          </div>
          <h4 id="contact-side" className="font-semibold mb-2">SKILLS</h4>
          <div id="icon-container">
            {/* Icons */}
            <div className="skills">
              <p className="languages skills">
                <i>Languages</i>
                <b>: JavaScript, HTML, CSS, PHP</b>, TypeScript, Python, Java.
              </p>
              <p className="frameworks skills">
                <i>Frameworks</i>
                <b>: Node.js, React, Express, jQuery, Bootstrap</b>
              </p>
              <p className="os skills">
                <i>Operating Systems</i>
                <b>: macOS,</b> Windows, Linux
              </p>
              <p className="amazon skills">
                <i>Amazon AWS</i>
                <b>: EC2, S3, RDS, Cognito, EKS, CDK, Route53, DocumentDB, CloudFront, DynamoDB, ElastiCache, Elasticsearch, WAF, Secrets Manager.</b>
              </p>
              <p className="tools skills">
                <i>Tools</i>
                <b>: Git, Gitlab, Terminal, Slack, Postman</b>
              </p>
              <p className="Databases skills">
                <i>Database</i>
                <b>: MongoDB, MySQL, Oracle,</b> PostgreSQL, SQL Server, Redis.</p>
            </div>
          </div>
          <div id="button-div">
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded">
              <span>PDF Version</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-container-resume p-4">
        <div>
          <h1 className="catagories">SUMMARY</h1>
          <p id="summary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae aliquid ab tempore deleniti modi animi facere, laborum illum quis in quidem distinctio quod officia unde. Aspernatur eligendi architecto ipsam sint alias consequatur at modi magni in, accusantium iure voluptates eius possimus?
          </p>
        </div>
        <hr />
        <div>
          <h2 className="catagories">Education</h2>
        </div>
        <div id="school-1">
          <h3 className="school-position-">Air Force Community College - Supply Chain Management AS</h3>
          <p id="date-location"> | January 2017 - January 2019 | Columbus, Ohio</p>
        </div>
        <div id="school-1">
          <h3 className="school-position-">Code Immersives - Web Development Bootcamp</h3>
          <p id="date-location"> | May 2022 - May 2023 | New York, New York</p>
        </div>
        <div>
          <h2 className="catagories">Experience</h2>
        </div>
        <div>
          <h3 className="school-position-">Procurement Manager ICBM Stock Control</h3>
          <p id="date-location"> | July 2017 – January 2019 | Hampton Virginia</p>
          <p id="position-duties">-Sustained and supported 45 launch control centers, 450 launch facilities and 399 ICBM's<br/>
          -Preformed hands on inspections and coordinated maintenance actions for $1.3 billion in assets <br/>
          -Consistently recognized as Top Performer in the department <br/>
          -Awarded the highest honor the 341st Missile Wing can give, The Alpha Warrior  <br/>
          -Act as the primary interface with suppliers on delivery status, issues and resolution. Escalate to commercial or technical partners when required. </p>
        </div>
        <div>
          <h3 className="school-position-">Procurement Manager NEXRAD Radar Stock Control</h3>
          <p id="date-location"> | February 2016 – July 2017 | | Norfolk Virginia</p>
          <p id="position-duties">-Managed and oversaw NEXRAD Radar program, supported a fleet of 26 NEXRADs.<br/>
          -Lead team meetings to monitor procurement operations and collaborate on solving problems.<br/>
          -Conduct and coordinate procurement, receipt, distribution, tracking, and inventory management.<br/>
          -Collaborate with the sales team to achieve sales targets<br/>
          -Prepare sales reports and forecasts</p>
        </div>
      </div>
    </div>
  );
}

export default ResumeJSX;

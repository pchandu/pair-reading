import React from 'react';

import LinkedInLogo from '../../images/Logos/linlogo.png';
import GithubLogo from '../../images/Logos/githublogo.png';

class AboutPage extends React.Component {

    render(){
        return(
            <div className="about-page-outer-container">
                <div className="about-page-inner-container">
                    <h1>Alexzander Archibeque</h1>
                    <div className="about-page-links-container" >
                        <a href="https://www.linkedin.com/in/alexzander-archibeque-129810189/">
                        <img src={LinkedInLogo} />
                        </a>
                        <a href="https://github.com/AlexArchibeque">
                        <img src={GithubLogo} />
                        </a>
                    </div>
                </div>
                <div className="about-page-inner-container">
                    <h1>Kathy Chan</h1>
                    <div className="about-page-links-container" >
                        <a href="https://www.linkedin.com/in/kemopaw/">
                        <img src={LinkedInLogo} />
                        </a>
                        <a href="https://github.com/KemoPaw">
                        <img src={GithubLogo} />
                        </a>
                    </div>
                </div>

                <div className="about-page-inner-links-container">
                    <p>Pair Reading</p>
                    <a href="https://github.com/pchandu/pair-reading">
                        <img src={GithubLogo} />
                    </a>
                </div>

                <div className="about-page-inner-container">
                    <h1>Kevin Su</h1>
                    <div className="about-page-links-container" >
                        <a href="#">
                        <img src={LinkedInLogo} />
                        </a>
                        <a href="https://github.com/kevinsuboy">
                        <img src={GithubLogo} />
                        </a>
                    </div>
                </div>
                <div className="about-page-inner-container">
                    Praneeth Chandu
                    <div className="about-page-links-container" >
                        <a href="https://www.linkedin.com/in/praneethch/">
                        <img src={LinkedInLogo} />
                        </a>
                        <a href="https://github.com/pchandu">
                        <img src={GithubLogo} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;
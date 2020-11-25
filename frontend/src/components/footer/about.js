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
                        <a href="https://www.linkedin.com/in/alexzander-archibeque-129810189/" target="_blank">
                        <img src={LinkedInLogo} alt="Linked in Logo"/>
                        </a>
                        <a href="https://github.com/AlexArchibeque" target="_blank">
                        <img src={GithubLogo} alt="Github logo"/>
                        </a>
                    </div>

                </div>

                <div className="about-page-inner-container">
                    <h1>Kathy Chan</h1>
                    <div className="about-page-links-container" >
                        <a href="https://www.linkedin.com/in/kemopaw/" target="_blank">
                        <img src={LinkedInLogo} alt="Linked in Logo"/>
                        </a>
                        <a href="https://github.com/KemoPaw" target="_blank">
                        <img src={GithubLogo} alt="Github logo"/>
                        </a>
                    </div>
                </div>

                <div className="about-page-inner-links-container">

                    <p>Pair Reading</p>
                    <a href="https://github.com/pchandu/pair-reading" target="_blank">
                        <img src={GithubLogo} alt="Github logo"/>
                    </a>

                </div>

                <div className="about-page-inner-container">
                    <h1>Kevin Su</h1>
                    <div className="about-page-links-container" >
                        <a href="https://www.linkedin.com/in/kevin-su-2700a859/" target="_blank">
                        <img src={LinkedInLogo} alt="Linked in Logo"/>
                        </a>
                        <a href="https://github.com/kevinsuboy" target="_blank">
                        <img src={GithubLogo} alt="Github logo"/>
                        </a>
                    </div>
                </div>
                <div className="about-page-inner-container">
                    Praneeth Chandu
                    <div className="about-page-links-container" >
                        <a href="https://www.linkedin.com/in/praneethch/" target="_blank">
                        <img src={LinkedInLogo} alt="Linked in Logo"/>
                        </a>
                        <a href="https://github.com/pchandu" target="_blank">
                        <img src={GithubLogo} alt="Github logo"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;
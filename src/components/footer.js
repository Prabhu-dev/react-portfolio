import React from "react";
import { AiFillCopyrightCircle, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiGithubBadge, DiGoogleCloudPlatform } from "react-icons/di";

function foot() {

     let date = new Date();
     let year = date.getFullYear();

    return(
        <section id='footer'>
            <div class='footer-wrapper'>
                <div class='footer-text'>
                <h4>Copyright <AiFillCopyrightCircle/>  {year} Prabhu</h4>
                </div>
                <div class='footer-icon-wrapper'>
                    <div class='footer-icon'>
                        <a 
                            class='footer-icons'
                            href="https://github.com/prabhu-dev"
                            target="_blank"
                            rel="noopener">
                                <DiGithubBadge/>
                        </a>
                    </div>
                    <div class='footer-icon'>
                        <a 
                            class='footer-icons'
                            href="https://g.dev/prabhu-b"
                            target="_blank"
                            rel="noopener">
                                <AiFillGoogleCircle/>
                        </a>
                    </div>
                    <div class='footer-icon'>
                        <a 
                            class='footer-icons'
                            href="https://www.linkedin.com/in/prabhu-b-dev/"
                            target="_blank"
                            rel="noopener">
                                <AiFillLinkedin/>
                        </a>
                    </div>
                    <div class='footer-icon'>
                        <a 
                            class='footer-icons'
                            href="https://www.instagram.com/_prabhu.b_/"
                            target="_blank"
                            rel="noopener">
                                <AiFillInstagram/>
                        </a>
                    </div>
                    <div class='footer-icon'>
                        <a 
                            class='footer-icons'
                            href="https://www.cloudskillsboost.google/public_profiles/b0e6f66e-e230-4b7b-9b43-2fde8d3525ec"
                            target="_blank"
                            rel="noopener">
                                <DiGoogleCloudPlatform/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default foot;
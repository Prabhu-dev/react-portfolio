import Profile from "../Assets/profile-pic.png";
import {DiGithubBadge, DiGoogleCloudPlatform} from "react-icons/di";
import {AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

function home() {

    return(
        <section class='home'>
            <div class="home-wrapper">
                <div class="home-child">
                    <div>                        
                        <h1>Hi There!<br/> I am <span>Prabhu B</span><br/>Software Engineer</h1>
                        <div class='icons-wrapper'>
                            <div class='icons'>
                                <a 
                                class='home-icons' 
                                href='https://github.com/prabhu-dev' 
                                target='_blank'
                                rel="noopener">
                                    <DiGithubBadge/>
                                </a>
                            </div>
                            <div class='icons'>
                                <a 
                                class='home-icons'
                                href='https://www.linkedin.com/in/prabhu-b-dev/' 
                                target='_blank'
                                rel="noopener">
                                    <AiFillLinkedin/>
                                </a>
                            </div>
                             <div class='icons'>
                                <a 
                                class='home-icons' 
                                href='https://www.instagram.com/_prabhu.b_/' 
                                target='_blank'
                                rel="noopener">
                                    <AiFillInstagram/>
                                </a>
                            </div> 
                            <div class='icons'>
                                <a class='home-icons'
                                href='https://g.dev/prabhu-b' 
                                target='_blank'
                                rel="noopener">
                                    <AiFillGoogleCircle/>
                                </a>
                            </div>
                            <div class='icons'>
                                <a 
                                class='home-icons' 
                                href='https://www.cloudskillsboost.google/public_profiles/b0e6f66e-e230-4b7b-9b43-2fde8d3525ec' 
                                target='_blank'
                                rel="noopener">
                                    <DiGoogleCloudPlatform/>
                                </a>
                            </div>           
                        </div>
                    </div>
                </div>
                <div class="home-child"><img class="profile-pic" alt='profile-picture' src={Profile}/></div>
            </div>            
        </section>
    );
}

export default home;
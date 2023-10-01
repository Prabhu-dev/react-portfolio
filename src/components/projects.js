import { DiGithubBadge } from "react-icons/di";

function projects() {
    return(
        <section id='Projects'>
            <h2>My Projects</h2>
            <div class='projects-wrapper'>
                <div id='flutter-card'>
                    <div class='overlay'>
                        <h3>Flutter Project</h3>
                        <h4 class='card-contect'>Flutter Project for material design UI.</h4>
                        <div class='project-repo'>
                            <a 
                            href="https://github.com/Prabhu-dev/flutter-example"
                            target='_blank'
                            rel="noopener">
                                <DiGithubBadge/>
                            </a>
                       </div>
                    </div>                
                </div>
                <div id='android-card'>
                    <div class='overlay'>
                        <h3>Android Project</h3>
                        <h4 class='card-contect'>Android Project with recycler view in kotlin.</h4>
                        <div class='project-repo'>
                            <a 
                            href="https://github.com/Prabhu-dev/joker-app"
                            target='_blank'
                            rel="noopener">
                                <DiGithubBadge/>
                            </a>
                       </div>
                    </div>                
                </div>
                <div id='ionic-card'>
                    <div class='overlay'>
                        <h3>Ionic Project</h3>
                        <h4 class='card-contect'>Authincation Project in Iconic,TypeScript and Firebase Authincation.</h4>
                       <div class='project-repo'>
                            <a 
                            href="https://github.com/Prabhu-dev/ionic-and-firebase-login"
                            target='_blank'
                            rel="noopener">
                                <DiGithubBadge/>
                            </a>
                       </div>
                    </div>                
                </div>                
            </div>
        </section>
    );
}

export default projects;
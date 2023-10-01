import { DiHtml5, DiCss3, DiJavascript, DiGoogleCloudPlatform, DiReact, DiJava, DiGithubBadge, DiAndroid } from "react-icons/di";

function skills() {
    return(
    <div id='Skills'>
        <h2>Professional Skillset</h2>
        <div class='skills-icons-wrapper'>
            <div class='skills-icons'><DiHtml5/> HTML</div>
            <div class='skills-icons'><DiCss3/> CSS</div>
            <div class='skills-icons'><DiJavascript/>Javascript</div>
            <div class='skills-icons'><DiGithubBadge/>Github</div>
            <div class='skills-icons'><DiGoogleCloudPlatform/>GCP</div>
            <div class='skills-icons'><DiReact/>React</div>
            <div class='skills-icons'><DiJava/>Java</div>
            <div class='skills-icons'><DiAndroid/>Android</div>
        </div>
    </div>
    );
}

export default skills;
import { AiOutlineDownload } from 'react-icons/ai';


function about(){
    return(        
        <section id='About'>
            <div class='about-wrapper'>
                <p class='about-header'>Know Who I'M</p>
                <p>
                Hi, I am <span>Prabhu B</span> from vellore, Tamil Nadu. an enthusiastic engineering graduate with basic knowledge in coding and design. Proficient in Java, HTML 5, CSS, Android and Cloud. Ability to learn new software's and technologies quickly. Capability to work in teams by providing valuable support.
                </p>
                <div>
                    <button class='resume-button'>Resume<AiOutlineDownload/></button>
                </div> 
            </div>
                     
        </section>
    );
}

export default about;
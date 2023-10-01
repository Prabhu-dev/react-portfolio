import { AiOutlineSend } from "react-icons/ai";

function contact() {
    return(
        <section id='Contact'>
            <h2>Contact Me</h2>
            <form class='contact-form'>
                <input
                type="text"
                placeholder="Name"/><br/>
                <input 
                type="email"
                placeholder="Email"/><br/>
                <textarea 
                cols='20'
                rows='10'
                placeholder="Your Message"/><br/>
                <button 
                type="submit"
                id="submit-button">
                    Send <AiOutlineSend/>
                </button>
            </form>
        </section>
    );
}

export default contact;
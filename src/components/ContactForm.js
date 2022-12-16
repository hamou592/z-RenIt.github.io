import "./ContactFormStyles.css";

function ContactForm() {
    return(
        <div className="ContactAll">
            <h1>FILL-UP THE FORM</h1>
            <form>
                <div className="Identity">
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                </div>
                <input className="subject" type="text" required placeholder="Subject"/>
                <textarea type="text" rows="7" placeholder="Message"  />
                <button>Submit Request</button>
            </form>
        </div>
    )
}
export default ContactForm;
import Card from './Card';
import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (    
        <div className="container">
            <section className="contact">
                <Card title="Contact">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
                        <br /><br />
                        
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                        <br /><br />
                        
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required></textarea>
                        <br /><br />
                        
                        <button type="submit" id="submitBtn">Send</button>
                    </form>
                </Card>
            </section>
        </div>
    );

    function handleSubmit(e) {
    e.preventDefault();

    alert(`Thank You ${name}! your message has been sent!`);
    }

}

export default Contact;
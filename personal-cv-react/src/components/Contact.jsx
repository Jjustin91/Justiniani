import Card from './Card';
import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost/cv-api/process.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email, message: message })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message); 
            
            setName("");
            setEmail("");
            setMessage("");
        })
        .catch(error => {
            console.error("Fetch error:", error);
            alert("Failed to connect to the server. Check the console.");
        });
    };

    return (    
        <div className="container">
            <section className="contact">
                <Card title="Contact">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Name" 
                            required 
                        />
                        <br /><br />
                        
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                            required 
                        />
                        <br /><br />
                        
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="Message" 
                            required
                        ></textarea>
                        <br /><br />
                        
                        <button type="submit" id="submitBtn">Send</button>
                    </form>
                </Card>
            </section>
        </div>
    );
}

export default Contact;
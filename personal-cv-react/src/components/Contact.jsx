function Contact() {
    return (
        <div className="container">
            <section className="contact">
                <h2>Contact Me</h2>
                <form>
                    <input type="text" id="name" placeholder="Name" />
                    <br /><br />
                    
                    <input type="email" id="email" placeholder="Email" />
                    <br /><br />
                    
                    <textarea placeholder="Message"></textarea>
                    <br /><br />
                    
                    <button type="submit" id="submitBtn">Send</button>
                </form>
            </section>
        
        </div>
    );
}

export default Contact;
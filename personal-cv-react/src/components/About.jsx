import profilePhoto from 'src/assets/images/profile.jpg';

function About() {
    return (
        <div className="container">
            <section className="about">
                <h2>About Me</h2>
                <img src="src/assets/images/profile.jpg" alt="Profile photo" width="300" height="300"></img>
                <p>Hi I'm Jonathan From IT2R3</p>
                <p>Email:
                    <a href="mailto:justinianijonathan91@gmail.com">justinianijonathan91@gmail.com</a><br />
                    Github:
                    <a href="https://github.com/Jjustin91/Justiniani.git" target="_blank">github.com/Jjustin91/Justiniani</a>
                </p>
            </section>
        </div>
    );
}

export default About;

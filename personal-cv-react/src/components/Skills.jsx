import Card from './Card';
import { useState } from "react";

function Skills({ skills }) {
    const [visible, setVisible] = useState(true);

    return (
        <div className="container">
            <button onClick={() => setVisible(!visible)} className="btn" id="toggleSkills">
                <i className={visible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
                {visible ? "Hide Skills" : "Show Skills"}
            </button>
            {visible && (
                <section className="skills" id="skillSection">
                    <h2>Skills</h2>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default Skills;
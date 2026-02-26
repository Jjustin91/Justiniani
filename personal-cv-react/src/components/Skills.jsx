import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);
    
    return (
        <div className="container">
            <button onClick={() => setVisible(!visible)} className="btn" id="toggleSkills">
                <i className={visible ? "fa-solid fa-eye-slash" : "fa=solid fa eye"}></i>
                {visible ? "Hide Skills" : "Show Skills"}
            </button>
            {visible && (
                <section className="skills" id="skillSection">
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <ul>
                        <li>Web Development
                            <ul>
                                <li>Frontend
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            )}
        </div>
    );
}

export default Skills;
import Card from './Card';

function Education({ education }) {
    return (
        <div className="container">
            <section className="education">
                <Card title="Education">
                    <table>
                        <thead>
                            <tr>
                                <th>Program</th>
                                <th>Institution</th>
                                <th>Year Graduated</th>
                            </tr>
                        </thead>

                        <tbody>
                            {education.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.program}</td>
                                    <td>{item.institution}</td>
                                    <td>{item.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </section>
        </div>
    );
}

export default Education;
function Card ({ title, childen }) {
    return (
        <section className="card">
            <h2>{title}</h2>
            {childen}
        </section>
    )
}

export default Card;
import "./section.css";

export default function Section({ topics }) { // Destructure 'topics' here
    return (
        <div className="container-section">
            {topics.map((topic) => (
                <h2 key={topic._id}>{topic.title}</h2>
            ))}
        </div>
    );
}

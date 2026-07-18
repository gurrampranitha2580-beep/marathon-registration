import EmptyState from "./EmptyState";

function ParticipantList({ participants }) {
    if (participants.length === 0) {
        return <EmptyState />;
    }

    return (
        <section className="participant-list">
            <h2>Registered Participants</h2>

            {participants.map((participant) => (
                <article
                    key={participant.id}
                    className="participant-card"
                >
                    <h3>{participant.fullName}</h3>

                    <p>
                        <strong>Email:</strong> {participant.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {participant.phone}
                    </p>

                    <p>
                        <strong>Age:</strong> {participant.age}
                    </p>

                    <p>
                        <strong>Gender:</strong> {participant.gender}
                    </p>

                    <p>
                        <strong>Category:</strong> {participant.category}
                    </p>

                    <p>
                        <strong>Emergency Contact:</strong> {participant.emergencyName}
                    </p>

                    <p>
                        <strong>Relationship:</strong> {participant.relationship}
                    </p>

                    <p>
                        <strong>Emergency Phone:</strong> {participant.emergencyPhone}
                    </p>
                </article>
            ))}
        </section>
    );
}

export default ParticipantList;
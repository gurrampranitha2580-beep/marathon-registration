import { useState } from "react";
import Loader from "./Loader";
import sanitizeInput from "../utils/sanitize";
import logUserInteraction from "../utils/analytics";

function ReviewStep({
    formData,
    setParticipants,
    setCurrentStep,
    setFormData,
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);

        setTimeout(() => {
            const participant = {
                id: Date.now(),
                fullName: sanitizeInput(formData.fullName),
                email: sanitizeInput(formData.email),
                phone: sanitizeInput(formData.phone),
                age: formData.age,
                gender: formData.gender,
                category: formData.category,
                emergencyName: sanitizeInput(formData.emergencyName),
                relationship: sanitizeInput(formData.relationship),
                emergencyPhone: sanitizeInput(formData.emergencyPhone),
            };

            
            setParticipants((previousParticipants) => [
                ...previousParticipants,
                participant,
            ]);
            setIsSubmitting(true);

            logUserInteraction();

            setFormData({
                fullName: "",
                email: "",
                phone: "",
                age: "",
                gender: "",
                category: "",
                emergencyName: "",
                relationship: "",
                emergencyPhone: "",
            });

            setCurrentStep(1);
            setIsSubmitting(false);
        }, 1500);
    };

    if (isSubmitting) {
        return <Loader />;
    }

    return (
        <section className="form-card">
            <h2>Review Registration</h2>

            <div className="review-section">
                <h3>Participant Information</h3>

    <div className="review-row">
        <span>Full Name</span>
        <strong>{formData.fullName}</strong>
    </div>

    <div className="review-row">
        <span>Email</span>
        <strong>{formData.email}</strong>
    </div>

    <div className="review-row">
        <span>Phone</span>
        <strong>{formData.phone}</strong>
    </div>

    <h3>Marathon Details</h3>

    <div className="review-row">
        <span>Age</span>
        <strong>{formData.age}</strong>
    </div>

    <div className="review-row">
        <span>Gender</span>
        <strong>{formData.gender}</strong>
    </div>

    <div className="review-row">
        <span>Category</span>
        <strong>{formData.category}</strong>
    </div>

    <h3>Emergency Contact</h3>

    <div className="review-row">
        <span>Contact Name</span>
        <strong>{formData.emergencyName}</strong>
    </div>

    <div className="review-row">
        <span>Relationship</span>
        <strong>{formData.relationship}</strong>
    </div>

    <div className="review-row">
        <span>Phone</span>
        <strong>{formData.emergencyPhone}</strong>
    </div>
</div>

            <div className="button-row">
                <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                >
                    Back
                </button>

                <button
                    type="button"
                    onClick={handleSubmit}
                >
                    Submit Registration
                </button>
            </div>
        </section>
    );
}

export default ReviewStep;
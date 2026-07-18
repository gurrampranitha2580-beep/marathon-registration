import { useState } from "react";
import { validateStepThree } from "../utils/validation";

function StepThree({
    formData,
    setFormData,
    setCurrentStep,
}) {
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((previousErrors) => ({
                ...previousErrors,
                [name]: "",
            }));
        }
    };

    const handleNext = () => {
        const validationErrors = validateStepThree(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setCurrentStep(4);
    };

    return (
        <section className="form-card">
            <h2>Emergency Contact</h2>

            <div className="form-group">
                <label htmlFor="emergencyName">
                    Contact Name
                </label>

                <input
                    id="emergencyName"
                    name="emergencyName"
                    type="text"
                    value={formData.emergencyName}
                    onChange={handleChange}
                    className={errors.emergencyName ? "input-error" : ""}
                    aria-label="Emergency Contact Name"
                    aria-invalid={!!errors.emergencyName}
                />

                {errors.emergencyName && (
                    <small className="error-text">
                        {errors.emergencyName}
                    </small>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="relationship">
                    Relationship
                </label>

                <input
                    id="relationship"
                    name="relationship"
                    type="text"
                    value={formData.relationship}
                    onChange={handleChange}
                    className={errors.relationship ? "input-error" : ""}
                    aria-label="Relationship"
                    aria-invalid={!!errors.relationship}
                />

                {errors.relationship && (
                    <small className="error-text">
                        {errors.relationship}
                    </small>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="emergencyPhone">
                    Contact Phone
                </label>

                <input
                    id="emergencyPhone"
                    name="emergencyPhone"
                    type="text"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className={errors.emergencyPhone ? "input-error" : ""}
                    aria-label="Emergency Contact Phone"
                    aria-invalid={!!errors.emergencyPhone}
                />

                {errors.emergencyPhone && (
                    <small className="error-text">
                        {errors.emergencyPhone}
                    </small>
                )}
            </div>

            <div className="button-row">
                <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                >
                    Back
                </button>

                <button
                    type="button"
                    onClick={handleNext}
                >
                    Review
                </button>
            </div>
        </section>
    );
}

export default StepThree;
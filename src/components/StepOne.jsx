import { useState } from "react";
import { validateStepOne } from "../utils/validation";

function StepOne({
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
        const validationErrors = validateStepOne(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setCurrentStep(2);
    };

    return (
        <section className="form-card">
            <h2>Participant Details</h2>
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "input-error" : ""}
                    aria-label="Full Name"
                    aria-invalid={!!errors.fullName}
                />
                {errors.fullName && (
                    <small className="error-text">
                        {errors.fullName}
                    </small>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                    aria-label="Email Address"
                    aria-invalid={!!errors.email}
                />
                {errors.email && (
                    <small className="error-text">
                        {errors.email}
                    </small>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "input-error" : ""}
                    aria-label="Phone Number"
                    aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                    <small className="error-text">
                        {errors.phone}
                    </small>
                )}
            </div>

            <div className="button-row">
                <button
                    type="button"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </section>
    );
}

export default StepOne;
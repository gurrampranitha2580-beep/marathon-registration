import { useState } from "react";
import { validateStepTwo } from "../utils/validation";

function StepTwo({
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
        const validationErrors = validateStepTwo(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setCurrentStep(3);
    };

    return (
        <section className="form-card">
            <h2>Marathon Details</h2>

            <div className="form-group">
                <label htmlFor="age">Age</label>

                <input
                    id="age"
                    name="age"
                    type="text"
                    value={formData.age}
                    onChange={handleChange}
                    className={errors.age ? "input-error" : ""}
                    aria-label="Age"
                    aria-invalid={!!errors.age}
                />

                {errors.age && (
                    <small className="error-text">
                        {errors.age}
                    </small>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="gender">Gender</label>

                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={errors.gender ? "input-error" : ""}
                    aria-label="Gender"
                    aria-invalid={!!errors.gender}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                {errors.gender && (
                    <small className="error-text">
                        {errors.gender}
                    </small>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="category">
                    Marathon Category
                </label>

                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={errors.category ? "input-error" : ""}
                    aria-label="Marathon Category"
                    aria-invalid={!!errors.category}
                >
                    <option value="">Select Category</option>
                    <option value="5K">5K</option>
                    <option value="10K">10K</option>
                    <option value="Half Marathon">Half Marathon</option>
                    <option value="Full Marathon">Full Marathon</option>
                </select>

                {errors.category && (
                    <small className="error-text">
                        {errors.category}
                    </small>
                )}
            </div>

            <div className="button-row">
                <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                >
                    Back
                </button>

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

export default StepTwo;
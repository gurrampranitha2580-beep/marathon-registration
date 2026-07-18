function FormHeader({ currentStep }) {
    const steps = [1, 2, 3, 4];

    return (
        <header className="form-header">
            <div className="header-content">
                <h1>Marathon Registration Form</h1>
                <p>Digital Registration Portal</p>
            </div>

            <div className="progress-wrapper">
                <div className="progress-line">
                    {steps.map((step) => (
                        <div
                            key={step}
                            className={`step ${
                                currentStep === step
                                    ? "active"
                                    : currentStep > step
                                    ? "completed"
                                    : ""
                            }`}
                        >
                            <span>
                                {currentStep > step ? "✓" : step}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="current-step">
                    
                    {`Step ${currentStep} of 4`}
                </p>
            </div>
        </header>
    );
}

export default FormHeader;
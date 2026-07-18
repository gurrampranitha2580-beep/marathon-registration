import { useState } from "react";
import FormHeader from "./components/FormHeader";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import ReviewStep from "./components/ReviewStep";
import ParticipantList from "./components/ParticipantList";
import "./styles/form.css";

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [participants, setParticipants] = useState([]);
    const [formData, setFormData] = useState({
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

    return (
        <div className="app">
            <FormHeader currentStep={currentStep} />

            {currentStep === 1 && (
                <StepOne
                    formData={formData}
                    setFormData={setFormData}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            )}

            {currentStep === 2 && (
                <StepTwo
                    formData={formData}
                    setFormData={setFormData}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            )}

            {currentStep === 3 && (
                <StepThree
                    formData={formData}
                    setFormData={setFormData}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            )}

            {currentStep === 4 && (
                <ReviewStep
                    formData={formData}
                    participants={participants}
                    setParticipants={setParticipants}
                    setCurrentStep={setCurrentStep}
                    setFormData={setFormData}
                />
            )}

            
            <ParticipantList participants={participants} />

        </div>
    );
}

export default App;
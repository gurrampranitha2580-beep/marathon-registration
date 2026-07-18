const namePattern = /^[A-Za-z ]{3,50}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[6-9]\d{9}$/;
const agePattern = /^(1[6-9]|[2-7][0-9]|80)$/;

function validateStepOne(formData) {
    const errors = {};

    if (!namePattern.test(formData.fullName.trim())) {
        errors.fullName = "Enter a valid full name.";
    }

    if (!emailPattern.test(formData.email.trim())) {
        errors.email = "Enter a valid email.";
    }

    if (!phonePattern.test(formData.phone.trim())) {
        errors.phone = "Enter a valid phone number.";
    }

    return errors;
}

function validateStepTwo(formData) {
    const errors = {};

    if (!agePattern.test(formData.age.trim())) {
        errors.age = "Age must be between 16 and 80.";
    }

    if (!formData.gender) {
        errors.gender = "Select a gender.";
    }

    if (!formData.category) {
        errors.category = "Select a marathon category.";
    }

    return errors;
}

function validateStepThree(formData) {
    const errors = {};

    if (!namePattern.test(formData.emergencyName.trim())) {
        errors.emergencyName = "Enter a valid contact name.";
    }

    if (!namePattern.test(formData.relationship.trim())) {
        errors.relationship = "Enter a valid relationship.";
    }

    if (!phonePattern.test(formData.emergencyPhone.trim())) {
        errors.emergencyPhone = "Enter a valid phone number.";
    }

    return errors;
}

export { validateStepOne, validateStepTwo ,validateStepThree,};
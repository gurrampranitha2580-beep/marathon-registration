function sanitizeInput(value) {
    return value
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .trim();
}

export default sanitizeInput;
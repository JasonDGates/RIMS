const validateRegisterUser = (req, res, next) => {
    const { email, password, verifyPassword, firstName, lastName } = req.body;

    // Check for required fields
    if (!email || !password || !verifyPassword || !firstName || !lastName) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Check if passwords match
    if (password !== verifyPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    // If all validations pass, proceed to the next middleware or route handler
    next();
};

export default validateRegisterUser;
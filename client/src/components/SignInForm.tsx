import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="w-full max-w-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    className="mt-4"
                >
                    Sign In
                </Button>

                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                    <Button
                        type="button"
                        variant="secondary"
                        className="flex items-center justify-center"
                        onClick={() => {/* Handle Google login */}}
                    >
                        <img
                            className="h-5 w-5 mr-2"
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google logo"
                        />
                        Google
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        className="flex items-center justify-center"
                        onClick={() => {/* Handle GitHub login */}}
                    >
                        <img
                            className="h-5 w-5 mr-2"
                            src="https://www.svgrepo.com/show/512317/github-142.svg"
                            alt="GitHub logo"
                        />
                        GitHub
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        className="flex items-center justify-center"
                        onClick={() => {/* Handle Facebook login */}}
                    >
                        <img
                            className="h-5 w-5 mr-2"
                            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                            alt="Facebook logo"
                        />
                        Facebook
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
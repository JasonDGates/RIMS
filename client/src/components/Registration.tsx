import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        verifyPassword: ''
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
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:gap-4">
                    <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="flex-1"
                    />
                    <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="flex-1"
                    />
                </div>
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
                <Input
                    label="Verify Password"
                    type="password"
                    name="verifyPassword"
                    value={formData.verifyPassword}
                    onChange={handleChange}
                />
                <Button type="submit" fullWidth>
                    Register
                </Button>
            </form>
            <div className="mt-6">
                <div className="relative">
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
                        className="flex items-center justify-center bg-white border"
                        onClick={() => {/* Handle Google login */}}
                    >
                        <img
                            className="h-5 w-5"
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google logo"
                        />
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-center bg-white border"
                        onClick={() => {/* Handle GitHub login */}}
                    >
                        <img
                            className="h-5 w-5"
                            src="https://www.svgrepo.com/show/512317/github-142.svg"
                            alt="GitHub logo"
                        />
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-center bg-white border"
                        onClick={() => {/* Handle Facebook login */}}
                    >
                        <img
                            className="h-5 w-5"
                            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                            alt="Facebook logo"
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Registration;

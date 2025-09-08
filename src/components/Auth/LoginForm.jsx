"use client"

import { useState } from "react"

const LoginForm = ({ onLoginComplete, onSwitchToRegister }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleLogin = async () => {
        if (!validateForm()) return

        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            // Use existing stored profile if available; otherwise create a minimal default
            let profile;
            try {
                const stored = localStorage.getItem('userProfile');
                profile = stored ? JSON.parse(stored) : {
                    fullName: "John Doe",
                    bio: "",
                    fieldOfWork: "",
                    experienceLevel: "Intermediate",
                };
            } catch {
                profile = {
                    fullName: "John Doe",
                    bio: "",
                    fieldOfWork: "",
                    experienceLevel: "Intermediate",
                };
            }
            // Update login-specific fields
            profile = {
                ...profile,
                email: formData.email,
            };

            // Persist updated profile for exam filtering
            localStorage.setItem('userProfile', JSON.stringify(profile));

            setIsLoading(false)
            onLoginComplete(profile)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="bg-green-500 text-white p-8 rounded-t-2xl text-center">
                    <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-green-100">Sign in to continue your assessment journey</p>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-b-2xl shadow-lg">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-300" : "border-gray-200"
                                    } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-300" : "border-gray-200"
                                    } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-green-500 focus:ring-green-500" />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <button className="text-sm text-green-500 hover:text-green-600 font-medium">Forgot password?</button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="mt-8">
                        <button
                            onClick={handleLogin}
                            disabled={isLoading}
                            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Register Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{" "}
                            <button onClick={onSwitchToRegister} className="text-green-500 hover:text-green-600 font-medium">
                                Register here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm

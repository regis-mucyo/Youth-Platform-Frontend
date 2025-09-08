"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ onRegistrationComplete, onSwitchToLogin, role = "mentee" }) => {
    const [currentStep, setCurrentStep] = useState(1)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        gender: "",
        bio: "",
        fieldOfWork: "",
        experienceLevel: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({})

    const fieldOptions = [
        "Software Development",
        "Data Science",
        "Business",
        "Business Analysis",
        "Product Management", 
        "Digital Marketing",
        "UI/UX Design",
        "Cybersecurity",
        "DevOps Engineering",
    ]

    const experienceLevels = ["Beginner", "Intermediate", "Junior", "Senior"]

    const genderOptions = ["Male", "Female", "Other", "Prefer not to say"]

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    const validateStep = (step) => {
        const newErrors = {}

        if (step === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
            if (!formData.email.trim()) {
                newErrors.email = "Email is required"
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "Please enter a valid email"
            }
            if (!formData.phone.trim()) newErrors.phone = "Phone is required"
            if (!formData.password.trim()) {
                newErrors.password = "Password is required"
            } else if (formData.password.length < 6) {
                newErrors.password = "Password must be at least 6 characters"
            }
            if (!formData.confirmPassword.trim()) {
                newErrors.confirmPassword = "Please confirm your password"
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match"
            }
        } else if (step === 2) {
            if (!formData.location.trim()) newErrors.location = "Location is required"
            if (!formData.gender) newErrors.gender = "Gender is required"
            if (!formData.bio.trim()) newErrors.bio = "Bio is required"
        } else if (step === 3) {
            if (!formData.fieldOfWork) newErrors.fieldOfWork = "Field of work is required"
            if (!formData.experienceLevel) newErrors.experienceLevel = "Experience level is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleContinue = () => {
        if (validateStep(currentStep)) {
            if (currentStep < 3) {
                setCurrentStep(currentStep + 1)
            } else {
                onRegistrationComplete(formData)
                // Persist minimal user profile used by assessment filtering
                const profile = {
                    fullName: formData.fullName,
                    bio: formData.bio,
                    fieldOfWork: formData.fieldOfWork,
                    experienceLevel: formData.experienceLevel,
                }
                try { localStorage.setItem('userProfile', JSON.stringify(profile)) } catch {}
                navigate('/career-selection');
            }
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="bg-green-500 text-white p-8 rounded-t-2xl text-center">
                    <h1 className="text-2xl font-bold mb-2">Join as a {role === "mentor" ? "Mentor" : "Mentee"}</h1>
                    <p className="text-green-100 mb-6">Let's get you started on your journey</p>

                    {/* Step Indicator */}
                    <div className="flex items-center justify-center space-x-4">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === currentStep
                                        ? "bg-white text-green-500"
                                        : step < currentStep
                                            ? "bg-green-400 text-white"
                                            : "bg-green-600 text-green-200"
                                        }`}
                                >
                                    {step}
                                </div>
                                {step < 3 && <div className="w-8 h-0.5 bg-green-400 mx-2" />}
                            </div>
                        ))}
                    </div>
                    <p className="text-green-100 text-sm mt-2">Step {currentStep} of 3</p>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-b-2xl shadow-lg">
                    {/* Step 1: Basic Info */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                />
                                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                            </div>

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
                                <label className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your number"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={(e) => handleInputChange("password", e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Personal Details */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                                <input
                                    type="text"
                                    placeholder="Enter your location"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange("location", e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.location ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                />
                                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Gender</label>
                                <select
                                    value={formData.gender}
                                    onChange={(e) => handleInputChange("gender", e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.gender ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                >
                                    <option value="">Select your gender</option>
                                    {genderOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Bio</label>
                                <textarea
                                    placeholder="Tell us a bit about yourself"
                                    value={formData.bio}
                                    onChange={(e) => handleInputChange("bio", e.target.value)}
                                    rows={4}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.bio ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none`}
                                />
                                {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Professional Details */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Field of Work</label>
                                <select
                                    value={formData.fieldOfWork}
                                    onChange={(e) => handleInputChange("fieldOfWork", e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.fieldOfWork ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                >
                                    <option value="">Select your field</option>
                                    {fieldOptions.map((field) => (
                                        <option key={field} value={field}>
                                            {field}
                                        </option>
                                    ))}
                                </select>
                                {errors.fieldOfWork && <p className="text-red-500 text-sm mt-1">{errors.fieldOfWork}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Experience Level</label>
                                <select
                                    value={formData.experienceLevel}
                                    onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.experienceLevel ? "border-red-300" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                >
                                    <option value="">Select your level</option>
                                    {experienceLevels.map((level) => (
                                        <option key={level} value={level}>
                                            {level}
                                        </option>
                                    ))}
                                </select>
                                {errors.experienceLevel && <p className="text-red-500 text-sm mt-1">{errors.experienceLevel}</p>}
                            </div>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex justify-between items-center mt-8">
                        {currentStep > 1 ? (
                            <button onClick={handleBack} className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">
                                Back
                            </button>
                        ) : (
                            <div></div>
                        )}

                        <button
                            onClick={handleContinue}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
                        >
                            <span>{currentStep === 3 ? "Complete" : "Continue"}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{" "}
                            <button onClick={() => navigate('/login')} className="text-green-500 hover:text-green-600 font-medium">
                                Login here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm

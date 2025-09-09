import React from 'react';

const MentorVerificationPending = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Application Under Review</h1>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Thank you for registering as a mentor! Your application is currently under review.
                    We will notify you once your verification is complete and you can access your dashboard.
                </p>
                <p className="text-gray-500 text-sm">Please check your email for updates.</p>
            </div>
        </div>
    );
};

export default MentorVerificationPending;

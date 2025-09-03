import React from 'react';

const Dashboard = ({ userProfile }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome to your Dashboard!</h1>
                {userProfile && (
                    <p className="text-gray-700 text-lg">
                        Hello, {userProfile.fullName || 'User'}! You have successfully completed your journey.
                    </p>
                )}
                <p className="text-gray-500 mt-2">More features coming soon...</p>
            </div>
        </div>
    );
};

export default Dashboard;

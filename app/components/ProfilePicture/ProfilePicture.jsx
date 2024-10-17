import React from 'react';

// ProfilePicture component
const ProfilePicture = ({ email }) => {
    // Extract the first letter of the email
    const firstLetter = email.charAt(0).toUpperCase(); // Get the first letter and capitalize it

    // Optional: You can add some styling or classes for better appearance
    return (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-300 text-white font-bold">
            {firstLetter}
        </div>
    );
};

export default ProfilePicture;

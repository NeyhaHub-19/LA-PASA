import React from 'react';
import UserProfile from '../Components/UserProfile';

function Profile() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <UserProfile />
                </div>
            </div>
        </div>
    );
}

export default Profile;

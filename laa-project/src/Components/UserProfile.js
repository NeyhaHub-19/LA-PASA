import React, { useState } from 'react';

function UserProfile() {
    const [user, setUser] = useState({
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        shippingAddress: '1234 Street, City, Country'
    });
    const [editMode, setEditMode] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <div className="card w-50 border rounded shadow" style={{ padding: '20px' }}>
                <img src="https://via.placeholder.com/150" className="card-img-top mx-auto d-block mt-3" style={{ width: '150px' }} alt="User" />
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={handleInputChange} disabled={!editMode} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={user.email} onChange={handleInputChange} disabled={!editMode} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Shipping Address</label>
                        <input type="text" className="form-control" name="shippingAddress" value={user.shippingAddress} onChange={handleInputChange} disabled={!editMode} />
                    </div>
                    <button className="btn btn-primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }} onClick={toggleEditMode}>
                        {editMode ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

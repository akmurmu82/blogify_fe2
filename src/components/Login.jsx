import React, { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://blogify-be-1.onrender.com/bloguser/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            console.log('Signed up successfully');
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div style={{
            background: 'linear-gradient(to right, pink, green)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            width: '100%',
            height: '620px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                width: '50%',
                height: '490px',
                marginBottom: '30px',
            }}>
                <h2 style={{ color: 'white', textAlign: 'center' }}>Sign Up</h2>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px', width: '100%' }}>
                        <label htmlFor="name" style={{ color: 'black', fontSize: '23px', marginBottom: '5px' }}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ padding: '10px', border: '1px solid grey', borderRadius: '5px', width: '100%', fontSize: '22px', backgroundColor: 'white', color: 'black' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px', width: '100%' }}>
                        <label htmlFor="email" style={{ color: 'black', fontSize: '23px', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ padding: '10px', border: '1px solid grey', borderRadius: '5px', width: '100%', fontSize: '23px', backgroundColor: 'white', color: 'black' }}
                        />
                    </div>
                    <button style={{ margin: 'auto', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'skyblue', color: 'black', fontSize: '22px', cursor: 'pointer', width: '120px' }}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

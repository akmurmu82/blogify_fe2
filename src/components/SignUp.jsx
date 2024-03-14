import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Box, CloseButton, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

function SignUp() {
    const [isLogged, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        try {
            const response = await fetch('https://blogify-be-1.onrender.com/bloguser/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log(response);

            if (response.ok) {
                setIsLoggedIn(true)
            } else {
                throw new Error('Failed to sign up');
            }

            // console.log('Signed up successfully');
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
        <>
            {isLogged ? <AlertComp /> : null}
            <div style={{
                background: 'linear-gradient(to right, pink, green)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                width: '100%',
                height: '620px',

            }}>
                <div style={{
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                    width: '50%',
                    height: '490px',
                    marginBottom: '30px', marginTop: '30px', marginLeft: '24%',
                }}>
                    <h2 style={{ color: 'white' }}>Sign Up</h2>
                    <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="name" style={{ color: 'black', fontSize: '23px' }}>Name:</label>
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
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="password" style={{ color: 'black', fontSize: '23px' }}>Password:</label>
                            <input
                                type="text"
                                id="name"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{ padding: '10px', border: '1px solid grey', borderRadius: '5px', width: '100%', fontSize: '22px', backgroundColor: 'white', color: 'black' }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ color: 'black', fontSize: '23px' }}>Email:</label>
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
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="phone" style={{ color: 'black', fontSize: '23px' }}>Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="123-456-7890"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{ padding: '10px', border: '1px solid grey', borderRadius: '5px', width: '100%', fontSize: '23px', backgroundColor: 'white', color: 'black' }}
                            />
                        </div>
                        <button style={{ margin: 'auto', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'skyblue', color: 'black', fontSize: '22px', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}


function AlertComp() {
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: true })

    return isVisible ? (
        <Alert status='success'>
            <AlertIcon />
            <Box>
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                    Your application has been received. We will review your application
                    and respond within the next 48 hours.
                </AlertDescription>
                <Button onClick={() => { window.location.href = 'http://localhost:3000/blog' }}>Go to Blog</Button>

            </Box>
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>
    ) : (
        <Button onClick={onOpen}>Show Alert</Button>
    )
}

export default SignUp;

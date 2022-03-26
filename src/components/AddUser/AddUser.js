import React, { useRef } from 'react';


const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleInput = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>This is Add User</h2>
            <form onSubmit={handleInput}>
                <input type="text" ref={nameRef} placeholder='name' />
                <input type="email" name="" id="" ref={emailRef} placeholder='email' />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default AddUser;
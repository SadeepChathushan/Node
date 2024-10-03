import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        age: '',
        course: '',
        email: ''
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/students', student)
            .then(response => {
                console.log('Student added:', response.data);
                setStudent({ name: '', age: '', course: '', email: '' });
            })
            .catch(error => console.error('Error adding student:', error));
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={student.name} />
                <input type="number" name="age" placeholder="Age" onChange={handleChange} value={student.age} />
                <input type="text" name="course" placeholder="Course" onChange={handleChange} value={student.course} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={student.email} />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;

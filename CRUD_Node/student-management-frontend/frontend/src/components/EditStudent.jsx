import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
    // State to hold student data
    const [student, setStudent] = useState({
        name: '',
        age: '',
        course: '',
        email: '',
    });

    const { id } = useParams(); // Get student ID from route parameters
    const navigate = useNavigate(); // To redirect after successful update

    // Fetch the existing student data
    useEffect(() => {
        axios.get(`http://localhost:5000/api/students/${id}`)
            .then((response) => setStudent(response.data))
            .catch((error) => console.error('Error fetching student data:', error));
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/students/${id}`, student)
            .then((response) => {
                console.log('Student updated:', response.data);
                navigate('/'); // Redirect to home or student list page
            })
            .catch((error) => console.error('Error updating student:', error));
    };

    return (
        <div>
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={student.name}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                    value={student.age}
                />
                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    onChange={handleChange}
                    value={student.course}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={student.email}
                />
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
};

export default EditStudent;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const StudentList = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchStudents();
    }, []);

    // Fetch all students
    const fetchStudents = () => {
        axios.get('http://localhost:5000/api/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error('Error fetching students:', error));
    };

    // Delete a student
    const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/api/students/${id}`)
            .then(() => {
                console.log('Student deleted');
                fetchStudents(); // Refresh student list
            })
            .catch(error => console.error('Error deleting student:', error));
    };

    return (
        <div>
            <h2>Student List</h2>
            {/* Add Student Button */}
            <button onClick={() => navigate('/add-student')} style={{ float: 'right', marginBottom: '20px' }}>
                Add Student
            </button>
            {/* Student Table */}
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.course}</td>
                            <td>{student.email}</td>
                            <td>
                                {/* Edit Button */}
                                <button onClick={() => navigate(`/edit-student/${student._id}`)}>Edit</button>
                                {/* Delete Button */}
                                <button onClick={() => deleteStudent(student._id)} style={{ marginLeft: '10px' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;

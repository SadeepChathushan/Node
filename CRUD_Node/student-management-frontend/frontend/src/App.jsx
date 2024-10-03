import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Student Management System</h1>
                <Routes>
                    <Route path="/" element={<StudentList />} />
                    <Route path="/add-student" element={<AddStudent />} />
                    <Route path="/edit-student/:id" element={<EditStudent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;



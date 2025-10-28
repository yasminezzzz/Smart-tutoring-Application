
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './auth/Login';
import Register from './auth/Register';
import UsersList from './components/Users/UsersList';
import UserForm from './components/Users/UserForm';
import OffersList from './components/Offers/OffersList';
import OfferForm from './components/Offers/OfferForm';
import SubjectsList from './components/Subjects/SubjectsList';
import SubjectForm from './components/Subjects/SubjectForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirect home "/" to /register */}
        <Route path="/" element={<Navigate to="/register" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Users CRUD */}
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/add" element={<UserForm />} />
        <Route path="/users/edit/:id" element={<UserForm />} />

        {/* Offers CRUD */}
        <Route path="/offers" element={<OffersList />} />
        <Route path="/offers/add" element={<OfferForm />} />
        <Route path="/offers/edit/:id" element={<OfferForm />} />

        {/* Subjects CRUD */}
        <Route path="/subjects" element={<SubjectsList />} />
        <Route path="/subjects/add" element={<SubjectForm />} />
        <Route path="/subjects/edit/:id" element={<SubjectForm />} />
      </Routes>
    </Router>
  );
}

export default App;

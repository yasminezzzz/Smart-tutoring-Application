import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './auth.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Contrôles de saisie
    if (!username || !email || !password) {
      alert('Tous les champs sont obligatoires.');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      alert('L\'email doit se terminer par @gmail.com');
      return;
    }

    if (password.length < 8) {
      alert('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/auth/register', {
        username,
        email,
        password
      });
      alert('Inscription réussie !');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 400) {
        alert('Cet email est déjà utilisé.');
      } else {
        alert('Erreur lors de l\'inscription');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>

      <div className="auth-footer">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

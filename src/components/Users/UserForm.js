import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addUser, getUserById, updateUser } from "../../services/userService";

function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "STUDENT",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      getUserById(id)
        .then(data => setUser({ ...data, password: "" }))
        .catch(err => setError("Impossible de charger l'utilisateur"));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateUser(id, user)
        .then(() => navigate("/users"))
        .catch(() => setError("Erreur lors de la mise à jour"));
    } else {
      addUser(user)
        .then(() => navigate("/users"))
        .catch(() => setError("Erreur lors de l'ajout"));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{id ? "Modifier Utilisateur" : "Ajouter Utilisateur"}</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input name="username" value={user.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" type="email" value={user.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required={!id}
            placeholder={id ? "Laisser vide pour ne pas changer" : ""}
          />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={user.role} onChange={handleChange}>
            <option value="ADMIN">ADMIN</option>
            <option value="TUTOR">TUTOR</option>
            <option value="STUDENT">STUDENT</option>
          </select>
        </div>
        <button type="submit">{id ? "Modifier" : "Ajouter"}</button>
      </form>
    </div>
  );
}

export default UserForm;

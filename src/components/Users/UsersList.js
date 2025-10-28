import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../services/userService";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = () => {
    getUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Impossible de charger les utilisateurs");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
      deleteUser(id).then(() => fetchUsers());
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Liste des utilisateurs</h2>
      <Link to="/users/add">
        <button>Ajouter Utilisateur</button>
      </Link>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ marginTop: "10px" }}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username || "-"}</td>
            <td>{user.email || "-"}</td>
            <td>{user.role}</td>
            <td>
              <Link to={`/users/edit/${user.id}`}>
                <button>Modifier</button>
              </Link>
              <button onClick={() => handleDelete(user.id)} style={{ marginLeft: "5px" }}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;

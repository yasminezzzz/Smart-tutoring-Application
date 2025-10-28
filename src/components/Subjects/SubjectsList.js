import React, { useEffect, useState } from "react";
import { getSubjects, deleteSubject } from "../../services/subjectService";
import { Link } from "react-router-dom";

function SubjectsList() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = () => {
    getSubjects().then(data => setSubjects(data));
  };

  const handleDelete = (id) => {
    deleteSubject(id).then(() => loadSubjects());
  };

  return (
    <div>
      <h2>Subjects</h2>
      <Link to="/subjects/add">Add Subject</Link>
      <table>
        <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {subjects.map(subject => (
          <tr key={subject.id}>
            <td>{subject.id}</td>
            <td>{subject.name}</td>
            <td>
              <Link to={`/subjects/edit/${subject.id}`}>Edit</Link>
              <button onClick={() => handleDelete(subject.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectsList;

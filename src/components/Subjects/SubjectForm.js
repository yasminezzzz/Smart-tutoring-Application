import React, { useState, useEffect } from "react";
import { addSubject, getSubjectById, updateSubject } from "../../services/subjectService";
import { useNavigate, useParams } from "react-router-dom";

function SubjectForm() {
  const [subject, setSubject] = useState({ name: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSubjectById(id).then(data => setSubject(data));
    }
  }, [id]);

  const handleChange = (e) => setSubject({ ...subject, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateSubject(id, subject).then(() => navigate("/subjects"));
    } else {
      addSubject(subject).then(() => navigate("/subjects"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={subject.name} onChange={handleChange} placeholder="Name" />
      <button type="submit">{id ? "Update" : "Add"} Subject</button>
    </form>
  );
}

export default SubjectForm;

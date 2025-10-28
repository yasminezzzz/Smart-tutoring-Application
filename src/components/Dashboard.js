import React, { useEffect, useState } from "react";
import { getDashboardData } from "../services/adminService";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getDashboardData()
      .then((res) => setData(res))
      .catch(() => setError("Erreur lors du chargement du dashboard"));
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Users: {data.totalUsers}</p>
      <p>Total Tutors: {data.totalTutors}</p>
      <p>Total Students: {data.totalStudents}</p>
      <p>Total Admins: {data.totalAdmins}</p>
    </div>
  );
}

export default Dashboard;

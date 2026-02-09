import { useState } from "react";
import { useStudents } from "../context/StudentContext";
import "../styles/StudentForm.css";

export default function StudentForm() {
  const { dispatch } = useStudents();
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_STUDENT",
      payload: { nama, umur, kelas },
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input value={nama} onChange={e => setNama(e.target.value)} placeholder="Nama" />
      <input value={umur} onChange={e => setUmur(e.target.value)} placeholder="Umur" />
      <input value={kelas} onChange={e => setKelas(e.target.value)} placeholder="Kelas" />
      <button>Tambah</button>
    </form>
  );
}

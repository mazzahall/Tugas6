import { useStudents } from "../context/StudentContext";
import "../styles/StudentList.css";

export default function StudentTable() {
  const { students, dispatch } = useStudents();

  function handleDelete(id) {
    dispatch({ type: "DELETE_STUDENT", payload: id });
  }

  function handleEdit(student) {
    const nama = prompt("Nama", student.nama);
    const umur = prompt("Umur", student.umur);
    const kelas = prompt("Kelas", student.kelas);

    dispatch({
      type: "UPDATE_STUDENT",
      payload: { id: student.id, nama, umur, kelas },
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.nama}</td>
            <td>{s.umur}</td>
            <td>{s.kelas}</td>
            <td>
              <button onClick={() => handleEdit(s)}>Edit</button>
              <button onClick={() => handleDelete(s.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

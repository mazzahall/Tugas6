import "./styles/App.css";
import { StudentProvider } from "./context/StudentContext";
import StudentForm from "./manajemen/StudentForm";
import StudentTable from "./manajemen/StudentTable";

export default function App() {
  return (
    <StudentProvider>
      <div className="app-container">
        <h1>Manajemen Data Siswa</h1>
        <StudentForm />
        <StudentTable />
      </div>
    </StudentProvider>
  );
}

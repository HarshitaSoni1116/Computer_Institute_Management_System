import { useEffect, useState } from "react";

export default function AdminDashboard({ onLogout }) {

const [admissions, setAdmissions] = useState([]);
const [search, setSearch] = useState("");
const [courseFilter, setCourseFilter] = useState("All");
const [selectedStudent, setSelectedStudent] = useState(null);
const [editingStudent, setEditingStudent] = useState(null);
useEffect(() => {
fetch("http://localhost:8081/api/admissions", {
  method : "GET",
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
})
.then((res) => res.json())
.then((data) => {
  console.log("API Response:", data);

  if (Array.isArray(data)) {
    setAdmissions(data);
  } else if (Array.isArray(data.content)) {
    setAdmissions(data.content);
  } else {
    setAdmissions([]);
  }
})
.catch((err) => console.error(err));
}, []);

const handleDelete = async (id) => {


if (!window.confirm("Delete this admission?"))
  return;

await fetch(`http://localhost:8081/api/admissions/${id}`, {
  method: "DELETE",
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
})

setAdmissions(
  admissions.filter((a) => a.id !== id)
);


};
const handleUpdate = async () => {
  try {
    const response = await fetch(`http://localhost:8081/api/admissions/${editingStudent.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("token")
  },
  body: JSON.stringify(editingStudent),
})

    const updatedStudent = await response.json();

    setAdmissions(
      admissions.map((a) =>
        a.id === updatedStudent.id
          ? updatedStudent
          : a
      )
    );

    setEditingStudent(null);

    alert("Student updated successfully");
  } catch (error) {
    console.error(error);
    alert("Update failed");
  }
};
const safeAdmissions = Array.isArray(admissions)
  ? admissions
  : [];

const filteredAdmissions = safeAdmissions.filter((a) => {
  const matchesSearch =
    a.studentName?.toLowerCase().includes(search.toLowerCase()) ||
    a.course?.toLowerCase().includes(search.toLowerCase()) ||
    a.mobile?.includes(search);

  const matchesCourse =
    courseFilter === "All" || a.course === courseFilter;

  return matchesSearch && matchesCourse;
});

const totalAdmissions = safeAdmissions.length;

const dcaCount = safeAdmissions.filter(
(a) => a.course === "DCA"
).length;

const pgdcaCount = safeAdmissions.filter(
(a) => a.course === "PGDCA"
).length;

const pythonCount = safeAdmissions.filter(
(a) => a.course === "Python Programming"
).length;

const cpctCount = safeAdmissions.filter(
  (a) => a.course === "CPCT Preparation"
).length;

const tallyCount = safeAdmissions.filter(
  (a) => a.course === "Tally Prime + GST"
).length;

const webDevCount = safeAdmissions.filter(
  (a) => a.course === "Web Development"
).length;

const todayCount = safeAdmissions.filter((a) => {
  if (!a.admissionDate) return false;

  const today = new Date();
  const admissionDate = new Date(a.admissionDate);

  return (
    admissionDate.toDateString() ===
    today.toDateString()
  );
}).length;
return ( <section className="py-24 px-6">


  <div className="max-w-7xl mx-auto">

    <div className="flex justify-end mb-6 gap-3">

  <button
    onClick={() => {
      const csv = [
        ["Name", "Email", "Mobile", "Course", "City"],
        ...admissions.map((a) => [
          a.studentName,
          a.email,
          a.mobile,
          a.course,
          a.city,
        ]),
      ]
        .map((row) => row.join(","))
        .join("\n");

      const blob = new Blob([csv], {
        type: "text/csv",
      });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "admissions.csv";
      link.click();
    }}
    className="bg-green-600 px-5 py-2 rounded-xl"
  >
    Export CSV
  </button>

  <button
    onClick={() => {
      localStorage.removeItem("token");
      onLogout();
    }}
    className="bg-red-600 px-5 py-2 rounded-xl"
  >
    Logout
  </button>

</div>

    <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
      Admin Dashboard
    </h2>

    <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">

      <div className="bg-green-800 p-4 rounded-xl text-center">
  <h3 className="text-xl font-bold">{totalAdmissions}</h3>
  <p>Total</p>
</div>

<div className="bg-blue-800 p-4 rounded-xl text-center">
  <h3 className="text-xl font-bold">{dcaCount}</h3>
  <p>DCA</p>
</div>

<div className="bg-purple-800 p-4 rounded-xl text-center">
  <h3 className="text-xl font-bold">{pgdcaCount}</h3>
  <p>PGDCA</p>
</div>

<div className="bg-pink-800 p-4 rounded-xl text-center">
  <h3 className="text-xl font-bold">{cpctCount}</h3>
  <p>CPCT</p>
</div>

<div className="bg-orange-800 p-4 rounded-xl text-center">
  <h3 className="text-xl font-bold">{tallyCount}</h3>
  <p>Tally</p>
</div>

<div className="bg-cyan-800 p-4 rounded-xl text-center">
  <h3 className="text-xl font-bold">{pythonCount}</h3>
  <p>Python</p>
</div>

<div className="bg-red-800 p-4 rounded-xl text-center">
  <h3 className="text-xl font-bold">{webDevCount}</h3>
  <p>Web Dev</p>
</div>

<div className="bg-teal-800 p-4 rounded-xl text-center">
  <h3 className="text-xl font-bold">{todayCount}</h3>
  <p>Today</p>
</div>
    </div>

    <input
      type="text"
      placeholder="Search by Name, Course or Mobile..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-4 rounded-xl text-black mb-8"
    />
    <select
  value={courseFilter}
  onChange={(e) => setCourseFilter(e.target.value)}
  className="w-full md:w-64 p-3 rounded-xl text-black mb-8"
>
  <option value="All">All Courses</option>
  <option value="DCA">DCA</option>
  <option value="PGDCA">PGDCA</option>
  <option value="CPCT Preparation">CPCT</option>
  <option value="Tally Prime + GST">Tally</option>
  <option value="Python Programming">Python</option>
  <option value="Web Development">Web Development</option>
</select>

    <div className="overflow-x-auto">

      <table className="w-full border border-white/10">

        <thead>
          <tr className="bg-green-900">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Mobile</th>
            <th className="p-4">Course</th>
            <th className="p-4">Status</th>
            <th className="p-4">City</th>
            <th className="p-4">Admission Date</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredAdmissions.map((a) => (

            <tr
              key={a.id}
              className="border-t border-white/10 text-center"
            >

              <td className="p-4">{a.studentName}</td>
              <td className="p-4">{a.email}</td>
              <td className="p-4">{a.mobile}</td>
              <td className="p-4">{a.course}</td>
              <td className="p-4">
                  {a.status || "New Lead"}
            </td>

              <td className="p-4">{a.city}</td>

                <td className="p-4">
                   {a.admissionDate
                      ? new Date(a.admissionDate)
                        .toLocaleDateString()
                    : "-"}
                </td>
              

              <td className="p-4 flex gap-2 justify-center flex-wrap">

                <a
                  href={`tel:${a.mobile}`}
                  className="bg-blue-600 px-3 py-2 rounded-lg"
                >
                  Call
                </a>

                <a
                  href={`https://wa.me/91${a.mobile}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 px-3 py-2 rounded-lg"
                >
                  WhatsApp
                </a>

                <button
                onClick={() => setSelectedStudent(a)}
                className="bg-yellow-600 px-3 py-2 rounded-lg"
                >
                  View
                </button>

                <button
  onClick={() =>
    setEditingStudent({ ...a })
  }
  className="bg-indigo-600 px-3 py-2 rounded-lg"
>
  Edit
</button>

                <button
                  onClick={() => handleDelete(a.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>
{selectedStudent && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white text-black p-6 rounded-2xl w-[90%] max-w-lg">

      <h2 className="text-2xl font-bold mb-4">
        Student Details
      </h2>

      <p><b>Name:</b> {selectedStudent.studentName}</p>
      <p><b>Email:</b> {selectedStudent.email}</p>
      <p><b>Mobile:</b> {selectedStudent.mobile}</p>
      <p><b>Course:</b> {selectedStudent.course}</p>
      <p><b>City:</b> {selectedStudent.city}</p>
      <p><b>Message:</b> {selectedStudent.message}</p>
      <p>
  <b>Status:</b>{" "}
  {selectedStudent.status || "New Lead"}
</p>

<p>
  <b>Notes:</b>{" "}
  {selectedStudent.notes || "-"}
</p>

<p>
  <b>Admission Date:</b>{" "}
  {selectedStudent.admissionDate
    ? new Date(
        selectedStudent.admissionDate
      ).toLocaleString()
    : "-"}
</p>
      <button
        onClick={() => setSelectedStudent(null)}
        className="mt-5 bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Close
      </button>

    </div>
  </div>
)}

{editingStudent && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white text-black p-6 rounded-2xl w-[90%] max-w-lg">

      <h2 className="text-2xl font-bold mb-4">
        Edit Student
      </h2>

      <input
        className="w-full border p-2 mb-3"
        value={editingStudent.studentName || ""}
        onChange={(e) =>
          setEditingStudent({
            ...editingStudent,
            studentName: e.target.value,
          })
        }
      />

      <input
        className="w-full border p-2 mb-3"
        value={editingStudent.mobile || ""}
        onChange={(e) =>
          setEditingStudent({
            ...editingStudent,
            mobile: e.target.value,
          })
        }
      />

      <input
        className="w-full border p-2 mb-3"
        value={editingStudent.city || ""}
        onChange={(e) =>
          setEditingStudent({
            ...editingStudent,
            city: e.target.value,
          })
        }
      />

      <select
        className="w-full border p-2 mb-3"
        value={
          editingStudent.status ||
          "New Lead"
        }
        onChange={(e) =>
          setEditingStudent({
            ...editingStudent,
            status: e.target.value,
          })
        }
      >
        <option>New Lead</option>
        <option>Interested</option>
        <option>Joined</option>
        <option>Follow Up</option>
        <option>Not Interested</option>
      </select>

      <textarea
        className="w-full border p-2 mb-3"
        rows="4"
        value={editingStudent.notes || ""}
        onChange={(e) =>
          setEditingStudent({
            ...editingStudent,
            notes: e.target.value,
          })
        }
      />

      <div className="flex gap-3">
        <button
          onClick={handleUpdate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>

        <button
          onClick={() =>
            setEditingStudent(null)
          }
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>

    </div>
  </div>
)}
</section>
);
}

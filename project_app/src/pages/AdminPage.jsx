import AdminDashboard from "../components/AdminDashboard";
import AdminLogin from "../components/AdminLogin";

export default function AdminPage() {

  const token = localStorage.getItem("token");

  const handleLogin = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div
      className="bg-[#0b1f17] text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {token ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
}
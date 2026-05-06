import Navbar from "../components/shared/Navbar";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-scree">

      {/* Navbar top */}
      <Navbar />

      {/* Center content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        {children}
      </div>

    </div>
  );
}
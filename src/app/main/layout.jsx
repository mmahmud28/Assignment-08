import NavbarMain from "../components/shared/Navbar-main";


export default function MainLayout({ children }) {
  return (
    <div className="min-h-scree">

      {/* Navbar top */}
      <NavbarMain />

      {/* Center content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        {children}
      </div>

    </div>
  );
}
import { Outlet } from "react-router-dom";


function AppLayout() {
  return (
    <main className="bg-primary relative min-h-screen">
      <div className="bg-hero-pattern z-0; absolute h-screen w-full bg-cover bg-center" />
      <div className="xs:p-0 relative z-10 mx-auto flex max-w-7xl flex-col px-5 py-8">
        <Outlet />
      </div>
    </main>
  );
}

export default AppLayout;

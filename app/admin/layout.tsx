import Aside from "../components/Aside";
import NavBar from "../components/NavBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900 text-white">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row">
          
          <main className="p-4 sm:p-12 flex-grow">{children}</main>
        </div>
      </div>
    </div>
  );
}

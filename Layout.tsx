export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-blue-700 text-white p-4 shadow">
        <h1 className="text-xl font-bold">Fairfield Project Hub</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
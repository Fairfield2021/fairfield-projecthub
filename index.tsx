export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fairfield Portal</h1>
        <p className="text-lg mb-8">
          Manage your work orders, subcontractors, and customer billing all in one place.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Enter Portal
        </a>
      </div>
    </main>
  );
}
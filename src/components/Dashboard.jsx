

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold mb-4 md:mb-0">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white border-none rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-blue-500 transition duration-300">
              Home
            </a>
            <a href="#" className="hover:text-blue-500 transition duration-300">
              About
            </a>
            <a href="#" className="hover:text-blue-500 transition duration-300">
              Contact
            </a>
          </div>
          <div className="flex items-center ml-10 md:ml-0">
            <span className="text-gray-400">Hello</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded ml-4">User</span>
          </div>
        </div>
      </div>
      {/* Other content of your Dashboard */}
    </div>
  );
};

export default Dashboard;

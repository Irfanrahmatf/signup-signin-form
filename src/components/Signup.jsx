import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-infoglobal.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (navigate) => {
    // Implement sign-up logic here
    console.log("Signing up...");

    // Assume successful sign-up, then navigate to the Sign In page
    navigate("/signin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <img src={Logo} alt="Logo" className="mx-auto h-200 w-200 mb-4" />
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password:
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => handleSignUp}
            className="w-full bg-[#2c446c] text-white p-2 rounded-md hover:bg-[#2c446c]"
          >
            Sign Up
          </button>
          <p className="text-sm text-gray-600">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

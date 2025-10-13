import React, { useState, useContext } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/userContext";
import Input from "../../components/inputs/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    if (!password) {
      setError("Please enter the password.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-md space-y-8" style={{ backgroundColor: 'var(--bg-1)', border: '1px solid var(--card-ring)' }}>
          {/* Header Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--text-0)' }}>Welcome Back</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-1)' }}>
              Please enter your details to log in
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.35)' }}>
              <p className="text-sm" style={{ color: '#fca5a5' }}>{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <Input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder="rohit@example.com"
                type="text"
              />
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium btn"
            >
              {isLoading ? "Logging in..." : "LOGIN"}
            </button>

            <p className="text-center text-sm" style={{ color: 'var(--text-1)' }}>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium"
                style={{ color: '#60a5fa' }}
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
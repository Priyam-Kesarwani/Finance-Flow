import React, { useState, useContext } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import uploadImage from "../../utils/uploadImage";
import { UserContext } from "../../context/userContext";
import Input from "../../components/inputs/Input";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Form Validations
    if (!fullName) {
      setError("Please enter your name");
      setIsLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      setIsLoading(false);
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    try {
      let profileImageUrl = "";

      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Signup API Error:", error.response?.data || error.message);
      if (error.response?.data?.message) {
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
      <div className="min-h-screen flex items-center justify-center px-4 mx-auto max-w-7xl">
        <div className="w-full max-w-xl p-8 rounded-2xl shadow-md space-y-8" style={{ backgroundColor: 'var(--bg-1)', border: '1px solid var(--card-ring)' }}>
          {/* Header Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--text-0)' }}>
              Create an Account
            </h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-1)' }}>
              Join us today by entering your details below.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.35)' }}>
              <p className="text-sm" style={{ color: '#fca5a5' }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleSignUp} className="mt-8 space-y-6">
            <div className="flex justify-center">
              <ProfilePhotoSelector
                image={profilePic}
                setimage={setProfilePic}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
                label="Full Name"
                placeholder="Rohit Kumar"
                type="text"
              />
              <Input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder="rohit@example.com"
                type="text"
              />
              <div className="col-span-2">
                <Input
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  label="Password"
                  placeholder="Min 8 Characters"
                  type="password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium btn"
            >
              {isLoading ? "Creating Account..." : "CREATE ACCOUNT"}
            </button>

            <p className="text-center text-sm" style={{ color: 'var(--text-1)' }}>
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium"
                style={{ color: '#60a5fa' }}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;

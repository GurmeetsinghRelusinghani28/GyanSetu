import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import profImg from "../Components/Assets/conquor.jpg";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8 flex flex-col items-center">
      {/* Go Back Button */}
      <div className="w-full max-w-2xl mb-6 flex items-center gap-2 cursor-pointer"
           onClick={() => navigate("/main")}>
        <ArrowBackIcon className="text-blue-400" fontSize="medium" />
        <p className="text-blue-400 hover:underline">Go back</p>
      </div>

      {/* Profile Card */}
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-cyan-400 opacity-10 blur-3xl pointer-events-none"></div>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          {/* Profile Image */}
          <img
            src={profImg}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full  shadow-lg"
          />

          {/* User Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-2xl font-bold text-cyan-400">
              Bhishma_108
            </h1>
            <p className="text-gray-300 mt-1">Hindu</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8 relative z-10">
          <h2 className="text-xl font-semibold text-cyan-300">Bio</h2>
          <p className="text-gray-300 mt-2 leading-relaxed">
            I am a software engineer with 5 years of experience in the field.
            I am passionate about technology and always eager to learn new
            things.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center sm:justify-start gap-4 relative z-10">
          <button className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white shadow-md transition-all">
            Edit Profile
          </button>
          <button className="px-6 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 shadow-md transition-all">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

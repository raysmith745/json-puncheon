import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src="/json-puncheon/logo.png" alt="JSON Puncheon Logo" className="logo w-48 h-48" />
      </div>
      <h1 className="font-bold text-3xl text-center p-5">JSON Puncheon</h1>
      <p className="text-center px-4 mb-4">This is the JSON Puncheon blog. Using my interest in football to better learn programming.</p>
      <p className="text-center px-4 italic">A man recursively watching, reading, writing, analysing & programming football ad infinitum.</p>
      <div className="px-20">
        <hr className="my-8 border-t-2 border-gray-300"></hr>
      </div>
      <p className="text-center mb-4">First Post - 20th December 2024</p>
      <p className="text-center px-4">Over the last few months of my career I've been wanting to learn more dev skills to transition from a tester into a dev.</p>
      <p className="text-center px-4">This is the first post going through the initial setup of the JSON Puncheon site and next steps.</p>
      <div className="text-center my-4">
        <Link to="/24-12-20-post" className="text-blue-600">Continue reading...</Link>
      </div>
      <div className="px-20">
        <hr className="my-8 border-t-2 border-gray-300"></hr>
      </div>
    </div>
  );
};

export default HomePage;

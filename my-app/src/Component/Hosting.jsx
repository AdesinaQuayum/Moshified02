import React from "react";

function Hosting() {
  return (
    <div className="bg-[#020617] text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div>
          MOSH
        </div>

        <ul className="hidden md:flex gap-10 text-gray-300">
          <li className="hover:text-white cursor-pointer">Courses</li>
          <li className="hover:text-white cursor-pointer">Learning Paths</li>
          <li className="hover:text-white cursor-pointer">Forum</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        <button className="border border-gray-500 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
          My Account
        </button>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center mt-20 px-5">
        {/* Badge */}
        <span className="bg-pink-500 text-sm px-4 py-1 rounded-full mb-6">
          Spring Sale
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Up to 67% Off Our Best Courses
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 mt-6 text-lg">
          From Python to AI — hand-picked courses to level up your career.
        </p>

        {/* Countdown */}
        <p className="mt-10 text-gray-400">Offer ends in</p>

        <div className="flex gap-4 mt-6">
          {[
            { value: "4", label: "Days" },
            { value: "11", label: "Hours" },
            { value: "54", label: "Mins" },
            { value: "52", label: "Secs" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#020617] border border-gray-700 rounded-xl px-6 py-4 text-center shadow-md"
            >
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition">
          Shop Now →
        </button>
      </div>
      <div className="">
      <div className="text-center py-5 text-purple-950 text-2xl">
        Student Favorites
        <h1 className="text-white  text-4xl font-bold">Best Sellers</h1>
        <h1 className="text-white ">Excellent Stars·4.7out of 5 based on 7360 reviews</h1>
      </div>
    </div>
    </div>
  );
}

export default Hosting;
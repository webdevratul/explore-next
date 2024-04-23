"use client";

const Button = () => {
  return (
    <button
      className="bg-blue-500 text-xl px-3 py-1 rounded-lg text-white mt-4"
      onClick={() => alert("I have clicked here")}
    >
      Click Me
    </button>
  );
};

export default Button;

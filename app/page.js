import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center relative px-4 sm:px-8 lg:px-16">
        {/* Top Line */}
        <div
          className="absolute left-0 right-0 border-t-2 border-gray-400"
          style={{ top: "1rem" }} // Position close to the top
        ></div>

        {/* Heading */}
        <h1
          className="text-6xl sm:text-8xl lg:text-10xl font-bold font-serif relative z-10"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          AUNG PYAE SOE
        </h1>

        {/* Bottom Line 
        <div
          className="absolute left-0 right-0 border-b-2 border-gray-500"
          style={{ top: "calc(25% + 3rem)" }} 
        ></div>
        */}
      </div>
    </div>
  );
}

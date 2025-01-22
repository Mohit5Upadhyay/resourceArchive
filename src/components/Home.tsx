import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gradient-to-r from-black to-gray-900">
          {" "}
          {/* Reduced from 70vh to 60vh */}
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
          {/* Hero Content - Adjusted padding and margins */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-12 pb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-[#ff6600] animate-fade-in-down">
              Welcome to Our Platform
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              Let's provide all the resources at One Place
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-4 py-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card
              title="KNIT RESOURCES"
              description="Access study materials, notes, and resources for KNIT students"
              onClick={() => console.log("First card clicked")}
              link="https://knit-archive.vercel.app/"
            />
            <Card
              title="GLA RESOURCES"
              description="Access study materials, notes, and resources for GLA students"
              onClick={() => console.log("Second card clicked")}
              link="https://gla-archive.vercel.app/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

  // return (
  //     <main className="min-h-screen bg-black text-white overflow-hidden">
  //       {/* Hero Section */}
  //       <div className="relative min-h-[85vh] bg-gradient-to-br from-black via-gray-900 to-black">
  //         {/* Animated Background Pattern */}
  //         <div className="absolute inset-0 opacity-20">
  //           <div className="absolute inset-0 bg-[url('/hero-pattern.png')] animate-pulse"></div>
  //           <div className="absolute inset-0 bg-gradient-radial from-transparent to-black"></div>
  //         </div>

  //         {/* Decorative Elements */}
  //         <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff6600] rounded-full blur-[100px] animate-pulse"></div>
  //         <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#ff6600] rounded-full blur-[100px] animate-pulse"></div>

  //         {/* Hero Content */}
  //         <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-20">
  //           <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff6600] to-[#ff8533] animate-fade-in-down">
  //             Welcome to Our Platform
  //           </h1>

  //           <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-12 animate-fade-in-up text-center">
  //             Discover amazing features and possibilities with our cutting-edge solutions
  //           </p>

  //           {/* CTA Button */}
  //           <button className="px-8 py-4 bg-gradient-to-r from-[#ff6600] to-[#ff8533] rounded-full
  //                            text-white font-bold text-lg transform hover:scale-105 transition-all
  //                            duration-300 shadow-lg hover:shadow-[#ff6600]/50">
  //             Get Started
  //           </button>
  //         </div>

  //         {/* Scroll Indicator */}
  //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  //           <svg className="w-6 h-6 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  //           </svg>
  //         </div>
  //       </div>

  //       {/* Rest of the content */}
  //       {/* ...existing code... */}

  //       <Footer />
  //     </main>
  //   );
};

export default Home;

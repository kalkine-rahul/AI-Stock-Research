export function ReportDetail() {
    return (
      <div className="bg-[#f8f9fb] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <nav className="text-xs text-gray-400 mb-6 flex gap-2">
            <span>Home</span> / <span>High Risk</span> / <span className="text-gray-800 font-bold">American Tech Report</span>
          </nav>
  
          <div className="grid grid-cols-12 gap-8">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h1 className="text-4xl font-black text-gray-900 mb-4">American Tech Report</h1>
                <p className="text-gray-500 leading-relaxed text-lg">
                  Be part of digital transformation with investment in tech stocks and emerging technologies. 
                  Remote working, digital healthcare, and online learning leaped during the pandemic.
                </p>
                
                <div className="grid grid-cols-4 gap-4 mt-12 py-6 border-y border-gray-50">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Launch Date</p>
                    <p className="font-bold text-gray-800">21-Jul-2020</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Frequency</p>
                    <p className="font-bold text-gray-800">Fortnightly</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Risk Rating</p>
                    <p className="font-bold text-red-500">HIGH</p>
                  </div>
                  <button className="bg-orange-500 text-white rounded-lg font-bold py-2 text-sm shadow-lg shadow-orange-200">Buy Now</button>
                </div>
              </div>
  
              <div className="bg-white p-8 rounded-2xl border border-gray-100">
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                  <p>The technology sector comprises of businesses revolving around the manufacturing of electronics...</p>
                  <p>Growth in the tech space was led by growing demand for cutting-edge technology such as cloud computing...</p>
                </div>
              </div>
            </div>
  
            {/* Right Lead Form */}
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl sticky top-24">
                <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <input className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-[#00D09C]" placeholder="First Name" />
                    <input className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-[#00D09C]" placeholder="Last Name" />
                  </div>
                  <input className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-[#00D09C]" placeholder="Email" />
                  <div className="relative">
                    <input className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-[#00D09C]" placeholder="Mobile Number" />
                    <button className="absolute right-2 top-2 text-[10px] bg-orange-500 text-white px-2 py-1.5 rounded font-bold">GET OTP</button>
                  </div>
                  <button className="w-full bg-[#2962ff] text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">Yes, I am Interested</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
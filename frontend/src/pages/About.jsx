export default function About() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-black via-stone-900 to-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse" style={{boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)'}}></div>
              <img src="/logo5.png" alt="Shadow Force" className="h-24 w-24 rounded-full object-cover animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            ABOUT SHADOW FORCE
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Elite security professionals delivering uncompromising protection and tactical excellence
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">OUR MISSION</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Shadow Force Security is dedicated to providing world-class security solutions through military-grade tactics, 
              cutting-edge technology, and unwavering commitment to client safety.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We bridge the gap between traditional security services and elite tactical operations, 
              ensuring our clients receive protection that exceeds industry standards.
            </p>
          </div>
          
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">OUR VISION</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To be the premier security force, setting new standards in personal protection, 
              corporate security, and tactical response services across the region.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a future where our clients operate with complete confidence, 
              knowing they have the most capable security professionals safeguarding their interests.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">CORE VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">INTEGRITY</h3>
              <p className="text-gray-300">
                Unwavering honesty and ethical conduct in all operations, maintaining the highest standards of professionalism.
              </p>
            </div>
            
            <div className="text-center bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">EXCELLENCE</h3>
              <p className="text-gray-300">
                Continuous pursuit of perfection in training, equipment, and service delivery to exceed client expectations.
              </p>
            </div>
            
            <div className="text-center bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">DISCRETION</h3>
              <p className="text-gray-300">
                Absolute confidentiality and low-profile operations, ensuring client privacy and operational security.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">LEADERSHIP TEAM</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl mr-6">
                  👤
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400">OPERATIONS DIRECTOR</h3>
                  <p className="text-gray-400">Ex-Special Forces Commander</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                20+ years of tactical operations experience, specializing in high-risk protection details 
                and strategic security planning for government and corporate clients.
              </p>
            </div>
            
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl mr-6">
                  👤
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400">TRAINING DIRECTOR</h3>
                  <p className="text-gray-400">Former Intelligence Officer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Expert in surveillance, threat assessment, and tactical training with extensive experience 
                in developing elite security protocols and operator certification programs.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center bg-black/60 backdrop-blur-sm p-12 rounded-xl border border-stone-600/40">
          <h2 className="text-5xl font-bold text-yellow-400 mb-8">WHY CHOOSE SHADOW FORCE?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">ELITE OPERATORS</h3>
              <p className="text-gray-300">Military & law enforcement veterans</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">RAPID RESPONSE</h3>
              <p className="text-gray-300">15-minute deployment guarantee</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">ADVANCED TECH</h3>
              <p className="text-gray-300">State-of-the-art security equipment</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">24/7 SUPPORT</h3>
              <p className="text-gray-300">Always available when needed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
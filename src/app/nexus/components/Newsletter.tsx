import { useState } from "react"

export default function Newsletter(){
    const [email, setEmail] = useState("")

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Subscribing email:", email)
        setEmail("")
    }
    return(
        <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get more stories like this</h2>
                <p className="text-purple-100 text-lg mb-8">
                  Sign up for exciting updates on CodeSphere and how {"we're"} powering developer dreams.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-white border-opacity-50 text-white placeholder-purple-200 focus:outline-none focus:border-opacity-100 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-purple-600 cursor-pointer hover:bg-purple-50 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Decorative illustration */}
              <div className="relative">
                <div className="w-64 h-64 mx-auto relative">
                  {/* Phone mockup */}
                  <div className="absolute inset-0 bg-purple-600 bg-opacity-10 rounded-3xl backdrop-blur-sm">
                    <div className="p-6 h-full flex flex-col">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-xl">C</span>
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="h-3 bg-purple-400 bg-opacity-30 rounded"></div>
                        <div className="h-3 bg-purple-400 bg-opacity-30 rounded w-3/4"></div>
                        <div className="h-3 bg-purple-400 bg-opacity-30 rounded w-1/2"></div>
                        <div className="h-3 bg-purple-400 bg-opacity-30 rounded w-2/3"></div>
                        <div className="h-3 bg-purple-400 bg-opacity-30 rounded"></div>
                        <div className="h-3 bg-purple-400 bg-opacity-30 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-purple-700 bg-opacity-5 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500 bg-opacity-5 rounded-full"></div>
          </div>
        </div>
      </section>
    )
}
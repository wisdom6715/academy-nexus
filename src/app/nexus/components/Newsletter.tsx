'use client'
import { useState } from "react"
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/app/lib/firebase.config'; // Adjust the path to your config file

export default function Newsletter(){
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'duplicate' | ''>('')

    // Check if email already exists in the newsletter collection
    const checkEmailExists = async (email: string): Promise<boolean> => {
      try {
        const q = query(collection(db, 'newsLetter'), where('email', '==', email));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
      } catch (error) {
        console.error('Error checking email existence:', error);
        return false;
      }
    };

    const handleSubscribe = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setSubmitStatus('')

      try {
        // Check if email already exists
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
          setSubmitStatus('duplicate');
          setIsSubmitting(false);
          return;
        }

        // Add document to Firestore newsLetter collection
        const docRef = await addDoc(collection(db, 'newsLetter'), {
          email: email.toLowerCase().trim(),
          subscribedAt: serverTimestamp(),
          status: 'active',
          source: 'website'
        });

        console.log('Newsletter subscription saved with ID: ', docRef.id);
        setSubmitStatus('success')
        setEmail("") // Clear email input after successful subscription
        
      } catch (error) {
        console.error('Error saving newsletter subscription: ', error);
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
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
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-100 bg-opacity-20 border border-green-300 border-opacity-30 text-black rounded-lg">
                    <p className="font-medium">🎉 Successfully subscribed! Thank you for joining our newsletter.</p>
                  </div>
                )}
                
                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-100 bg-opacity-20 border border-red-300 border-opacity-30 text-red-100 rounded-lg">
                    <p className="font-medium">❌ Subscription failed</p>
                    <p className="text-sm">Please try again later.</p>
                  </div>
                )}

                {/* Duplicate Email Message */}
                {submitStatus === 'duplicate' && (
                  <div className="mb-4 p-3 bg-yellow-100 bg-opacity-20 border border-yellow-300 border-opacity-30 text-yellow-100 rounded-lg">
                    <p className="font-medium">⚠️ Already subscribed!</p>
                    <p className="text-sm">This email is already on our newsletter list.</p>
                  </div>
                )}

                <form onSubmit={handleSubscribe} className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-white border-opacity-50 text-white placeholder-purple-200 focus:outline-none focus:border-opacity-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !email.trim()}
                    className="bg-white text-purple-600 cursor-pointer hover:bg-purple-50 px-8 py-3 rounded-lg font-medium transition-colors disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </form>

                {/* Privacy Notice */}
                <p className="text-purple-200 text-xs mt-4">
                  By subscribing, you agree to receive updates from CodeSphere. You can unsubscribe at any time.
                </p>
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
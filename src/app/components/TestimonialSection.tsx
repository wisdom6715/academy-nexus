import React from "react";
import Image from "next/image";
// Testimonial data separated from the component
const testimonials = [
  {
    name: "Umozurike David Ejike",
    content: "CodeSphere Academy has great potentials. The founder is doing a great job, the mode of teaching is excellent. I see within two years from now CodeSphere Academy will explode, the number of people will be massive. I want to say a big thanks to CodeSphere Academy and the team for an amazing job. Well done sir.",
    avatar: "/images/testimonial-4.jpg",
    bgColor: "bg-blue-500"
  },
  {
    name: "Oluwadurotimi", 
    content: "I want to say a very big thank you to Codesphere Academy and the team for amazing lectures. The instructor was incredibly patient and explained complex concepts in a clear and understandable way.  The recorded videos were very helpful too. Thank you for a valuable learning experience. Thank you for making data analysis easy 🙌🙌🙌 Looking forward to the next phase",
    avatar: "/images/testimonial-3.jpg",
    bgColor: "bg-green-500"
  },
  {
    name: "Mughni",
    content: "Honestly speaking This is the first time I’ve seen someone break things downs into details  And the recorded video and the assignments helps a lot too",
    avatar: "/images/testimonial-2.jpg",
    bgColor: "bg-purple-500"
  },
  {
    name: "Richard Adesemoye",
    content: "The class was such an insightful session. I look forward to learning more great things in the course of this boot camp",
    avatar: "/images/testimonial-1.jpg", 
    bgColor: "bg-pink-500"
  },
  {
    name: "Àràmídè",
    content: "I really appreciate joining this great training🚀 because with this few days i joined,i have learnt a lot with the help of the recorded videos. All I could say is CodeShare Is the best 👍.",
    avatar: "/images/testimonial-6.jpg",
    bgColor: "bg-indigo-500"
  },
  {
    name: "Fadeke",
    content: "Ti ori eyan ba ku, o ma ji ninu code sphere. So explanatory, otipoju. Thanks to codesphere. I will love their assistance after the program sha",
    avatar: "/images/testimonial-5.jpg",
    bgColor: "bg-teal-500"
  },
  {
    name: "Leemah", 
    content: "It's a wonderful session sir And I most say I have been using an Excel for a while now but the theory part is what I haven't learn. Thank you so much for bringing this special package to everyone and I pray May Almighty Allah keep increasing the team in more knowledge and understanding 🤗 Thanks to the whole team I appreciate you all 🙏",
    avatar: "/images/avatar.jpeg",
    bgColor: "bg-orange-500"
  },
  {
    name: "Emmanuel",
    content: "On a lighter note. I will recommend this Academy over and over again. On all topics you take your time to attend to all questions and carry everyone along. This academy is rare, I bless the day we cross paths. Thank you Codesphere academy",
    avatar: "/images/avatar.jpeg",
    bgColor: "bg-red-500"
  }
];

export default function TestimonialSection() {
  return (
    <section className="relative bg-gray-50 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className=" flex flex-wrap gap-3 mb-6 justify-center text-4xl lg:text-5xl font-black text-black">
          <span
            className="text-purple-600"
          >
            Testimonials
          </span>
        </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our students say about us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <Image src={testimonial.avatar} alt="testimonial picture" width={100} height={100} className={`w-12 h-12 object-cover ${testimonial.bgColor} rounded-full flex items-center justify-center`} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore Bootcamps
          </button>
        </div>
      </div>
    </section>
  );
}
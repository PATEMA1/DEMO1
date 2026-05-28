export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-gray-100 to-white">
        <h1 className="text-5xl font-bold">
          I Build Modern Websites That Sell
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          High-quality landing pages for businesses, startups and personal brands.
          Fast, responsive and clean design with Next.js & Tailwind CSS.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-2xl">
            Hire Me
          </button>
          <button className="px-6 py-3 border rounded-2xl">
            View Work
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-20">

        <div className="p-6 border rounded-2xl">
          <h3 className="font-bold text-xl">Landing Pages</h3>
          <p className="text-gray-600 mt-2">
            High-converting landing pages for businesses.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="font-bold text-xl">Business Websites</h3>
          <p className="text-gray-600 mt-2">
            Full websites for companies and startups.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="font-bold text-xl">UI Development</h3>
          <p className="text-gray-600 mt-2">
            Figma to React pixel-perfect development.
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold">Why Work With Me</h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          I focus on clean code, performance, and modern design.
          My goal is to build websites that help businesses grow and convert visitors into customers.
        </p>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-6 py-20">

        <div className="border rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-center">
            Contact Me
          </h2>

          <form className="mt-8 space-y-4">

            <input
              className="w-full p-4 border rounded-xl"
              placeholder="Your Name"
            />

            <input
              className="w-full p-4 border rounded-xl"
              placeholder="Your Email"
            />

            <textarea
              className="w-full p-4 border rounded-xl"
              rows={5}
              placeholder="Tell me about your project"
            />

            <button className="w-full bg-black text-white py-4 rounded-xl">
              Send Message
            </button>

          </form>
        </div>

      </section>

    </div>
  );
}

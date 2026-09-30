import { useNavigate } from "react-router";

const About = () => {

  let navigate = useNavigate()

  return (
    <main className="bg-[#090909] min-h-screen text-white">
      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}

          <div className="w-24 h-24 rounded-3xl bg-lime-400 flex items-center justify-center shadow-[0_0_40px_rgba(163,230,53,.45)]">
            <i className="fa-solid fa-bolt text-4xl text-black"></i>
          </div>

          <h1 className="mt-10 text-5xl md:text-6xl font-bold">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-zinc-400 leading-8">
            SkyMart is a modern e-commerce platform designed to make online
            shopping fast, secure, and enjoyable for everyone. We focus on
            providing quality products, smooth experiences, and reliable
            delivery.
          </p>
        </div>
      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card */}

          <div className="bg-[#111111] rounded-3xl border border-zinc-800 p-8 text-center hover:border-lime-400 duration-300">
            <i className="fa-solid fa-box text-lime-400 text-2xl"></i>

            <h2 className="mt-5 text-4xl font-bold">20K+</h2>

            <p className="text-zinc-500 mt-2">Products</p>
          </div>

          {/* Card */}

          <div className="bg-[#111111] rounded-3xl border border-zinc-800 p-8 text-center hover:border-lime-400 duration-300">
            <i className="fa-solid fa-users text-lime-400 text-2xl"></i>

            <h2 className="mt-5 text-4xl font-bold">50K+</h2>

            <p className="text-zinc-500 mt-2">Happy Customers</p>
          </div>

          {/* Card */}

          <div className="bg-[#111111] rounded-3xl border border-zinc-800 p-8 text-center hover:border-lime-400 duration-300">
            <i className="fa-solid fa-star text-lime-400 text-2xl"></i>

            <h2 className="mt-5 text-4xl font-bold">4.9</h2>

            <p className="text-zinc-500 mt-2">Average Rating</p>
          </div>

          {/* Card */}

          <div className="bg-[#111111] rounded-3xl border border-zinc-800 p-8 text-center hover:border-lime-400 duration-300">
            <i className="fa-solid fa-truck-fast text-lime-400 text-2xl"></i>

            <h2 className="mt-5 text-4xl font-bold">99%</h2>

            <p className="text-zinc-500 mt-2">On-time Delivery</p>
          </div>
        </div>
      </section>
      {/* ====================== OUR STORY ====================== */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-10 md:p-14">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>

          <div className="space-y-6 text-zinc-400 leading-8 text-lg">
            <p>
              SkyMart started as a small idea with one simple goal: make online
              shopping faster, easier, and more enjoyable. We noticed that many
              shopping platforms were cluttered, slow, and difficult to
              navigate.
            </p>

            <p>
              Our team focused on building a clean shopping experience where
              users can discover products quickly, manage their carts
              effortlessly, and complete purchases without unnecessary steps.
            </p>

            <p>
              Today, SkyMart serves thousands of customers with high-quality
              products, affordable prices, secure payments, and reliable
              delivery across the country.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== VALUES ====================== */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-center text-4xl font-bold mb-16">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card */}

          <div className="bg-[#111111] rounded-3xl border border-zinc-800 p-8 hover:border-lime-400 duration-300">
            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
              <i className="fa-solid fa-shield-halved text-lime-400 text-2xl"></i>
            </div>

            <h3 className="text-2xl font-semibold mt-6">Trust</h3>

            <p className="text-zinc-400 mt-4 leading-7">
              Every product listed on SkyMart is carefully verified before
              reaching our customers.
            </p>
          </div>

          {/* Card */}

          <div className="bg-[#111111] rounded-3xl border border-zinc-800 p-8 hover:border-lime-400 duration-300">
            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
              <i className="fa-solid fa-truck-fast text-lime-400 text-2xl"></i>
            </div>

            <h3 className="text-2xl font-semibold mt-6">Fast Delivery</h3>

            <p className="text-zinc-400 mt-4 leading-7">
              We work hard to deliver products as quickly as possible, because
              your time matters.
            </p>
          </div>

          {/* Card */}

          <div className="bg-[#111111] rounded-3xl border border-zinc-800 p-8 hover:border-lime-400 duration-300">
            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
              <i className="fa-solid fa-heart text-lime-400 text-2xl"></i>
            </div>

            <h3 className="text-2xl font-semibold mt-6">Customer First</h3>

            <p className="text-zinc-400 mt-4 leading-7">
              Every decision we make is focused on improving the shopping
              experience for our customers.
            </p>
          </div>

          {/* Card */}

          <div className="bg-[#111111] rounded-3xl border border-zinc-800 p-8 hover:border-lime-400 duration-300">
            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
              <i className="fa-solid fa-star text-lime-400 text-2xl"></i>
            </div>

            <h3 className="text-2xl font-semibold mt-6">Quality</h3>

            <p className="text-zinc-400 mt-4 leading-7">
              We partner with trusted brands and sellers to ensure every product
              meets our quality standards.
            </p>
          </div>
        </div>
      </section>
      {/* ====================== TEAM ====================== */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-center text-4xl font-bold mb-16">Meet Our Team</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Member */}

          <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-8 text-center hover:border-lime-400 transition duration-300">
            <div className="w-20 h-20 rounded-full bg-lime-400 text-black font-bold text-3xl flex items-center justify-center mx-auto">
              A
            </div>

            <h3 className="mt-6 text-xl font-semibold">Aryan Shah</h3>

            <p className="text-zinc-500 mt-2">Founder & CEO</p>
          </div>

          {/* Member */}

          <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-8 text-center hover:border-blue-500 transition duration-300">
            <div className="w-20 h-20 rounded-full bg-blue-500 text-white font-bold text-3xl flex items-center justify-center mx-auto">
              P
            </div>

            <h3 className="mt-6 text-xl font-semibold">Priya Mehta</h3>

            <p className="text-zinc-500 mt-2">Product Manager</p>
          </div>

          {/* Member */}

          <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-8 text-center hover:border-purple-500 transition duration-300">
            <div className="w-20 h-20 rounded-full bg-purple-500 text-white font-bold text-3xl flex items-center justify-center mx-auto">
              R
            </div>

            <h3 className="mt-6 text-xl font-semibold">Rohan Verma</h3>

            <p className="text-zinc-500 mt-2">Lead Developer</p>
          </div>

          {/* Member */}

          <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-8 text-center hover:border-pink-500 transition duration-300">
            <div className="w-20 h-20 rounded-full bg-pink-500 text-white font-bold text-3xl flex items-center justify-center mx-auto">
              S
            </div>

            <h3 className="mt-6 text-xl font-semibold">Sneha Kapoor</h3>

            <p className="text-zinc-500 mt-2">UI / UX Designer</p>
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}

      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-16 text-center">
          <h2 className="text-5xl font-bold">Ready to Shop?</h2>

          <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
            Explore thousands of quality products at unbeatable prices. Join
            thousands of happy customers and experience shopping made simple.
          </p>

          <button onClick={() => {
              navigate('/main/shop')
          }} className="mt-10 bg-lime-400 hover:bg-lime-300 text-black font-semibold px-10 py-4 rounded-full transition duration-300">
            Browse Products
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;

import Head from 'next/head';

export default function Home() {
  async function handleSubmit() {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    alert('Message sent successfully!');
  };

  return (
    <>
      <Head>
        <title>Vyapaar360 - Your Business Management Solution</title>
        <meta name="description" content="Manage all aspects of your business efficiently with Vyapaar360." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/logo.webp" alt="Vyapaar360 Logo" className="h-10 w-10" />
              <h1 className="text-2xl font-bold text-indigo-600">Vyapaar360</h1>
            </div>
            <nav className="space-x-6">
              <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gray-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold">Welcome to Vyapaar360</h2>
            <p className="mt-4 text-lg">Streamline your business operations with our comprehensive management solution.</p>
            <button className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800">Features</h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-600">Inventory Management</h4>
                <p className="mt-2 text-gray-700">Track and manage your inventory with ease.</p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-600">Order Tracking</h4>
                <p className="mt-2 text-gray-700">Stay updated with real-time order statuses.</p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-600">Analytics & Reports</h4>
                <p className="mt-2 text-gray-700">Gain insights to grow your business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-200 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800">Our Services</h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-600">Consultation</h4>
                <p className="mt-2 text-gray-700">Professional advice for your business needs.</p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-600">Support</h4>
                <p className="mt-2 text-gray-700">24/7 support to resolve your queries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800">Contact Us</h3>
            <form className="mt-10 max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input name="name" type="text" className="w-full mt-2 p-3 border rounded-lg" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input name="email" type="email" className="w-full mt-2 p-3 border rounded-lg" placeholder="Your Email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea name="message" className="w-full mt-2 p-3 border rounded-lg" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
                Submit
              </button>
            </form>
            <div className="mt-10 text-center text-gray-700">
              <p>Email: princeraj6824@gmail.com</p>
              <p>Phone: 9118531265</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Vyapaar360. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

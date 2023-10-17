import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-start mr-16">
        <div className="flex flex-col items-center">
          <img src="../../assets/53.png" alt="NA" />
        </div>
        <div>
          <div className="min-h-screen flex items-center justify-center w-full">
            <div className="bg-white p-8 rounded shadow-2xl w-96">
              <center className="text-2xl font-semibold mb-4">
                Contact Us
              </center>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none my-8"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

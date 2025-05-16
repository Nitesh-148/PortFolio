import { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { contactImage } from "../configs/icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage("All fields are required.");
      return;
    }
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setResponseMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 py-5 bg-gray-700 flex-1 min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        {/* Left - Illustration + Contact Info */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={contactImage}
            alt="Contact Illustration"
            className="w-full max-w-md drop-shadow-lg animate-fade-in"
          />
          <div className="space-y-3 text-gray-700 text-center">
            <div className="flex items-center gap-3">
              <FiMapPin className="text-teal-600 text-lg md:text-xl" />
              <span className="text-white text-sm md:text-base">
                Uttar Pradesh, India
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-teal-600 text-lg md:text-xl" />
              <span className="text-white text-sm md:text-base">
                +91 8303783940{" "}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-teal-600 text-lg md:text-xl" />
              <span className="text-white text-sm md:text-base">
                shashanksrivastava8340@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form
          className="bg-white p-8 rounded-2xl shadow-2xl space-y-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-center text-sm lg:text-base text-gray-600 text-sm mb-8">
            I'd love to hear from you! feel free to drop a message.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg text-base lg:text-lg font-medium transition cursor-pointer"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {responseMessage && (
             <p
             className={`text-center tracking-wide font-semibold text-sm mt-4 ${
               responseMessage.toLowerCase().includes("success")
                 ? "text-green-600"
                 : "text-red-600"
             }`}
           >
             {responseMessage}
           </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

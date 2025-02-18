import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import GoogleMap from "../components/GoogleMap";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      info: "contact@flegoinnovation.com",
      link: "mailto:contact@flegoinnovation.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Address",
      info: "123 Innovation Street, Tech City, TC 12345",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <div className="bg-white text-black pt-52 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in">
            Flego innovation | Contact Us
          </h1>
          <div className="flex items-center">
            <Link to="/" className="hover:text-black/70 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-black/70">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 border-t-2">
        <div className="max-w-6xl mx-auto text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/5 backdrop-blur-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/10 border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/10 border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block  font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/10 border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-black/10 border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>

                <h2 className="text-2xl font-bold  mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start space-x-4 p-4 rounded-lg text-black hover:bg-black hover:text-white transition-colors"
                    >
                      <div className="bg-blue-500 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="">{item.info}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </form>
            </div>

            <div className="bg-black/5 text-black backdrop-blur-lg  p-8">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <GoogleMap />
              <h2 className="text-2xl font-bold pt-14 mb-4">Office Hours</h2>
              <div className="space-y-2 text-black/70">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

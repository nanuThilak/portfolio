import { useState } from "react";
import { Particles } from "../components/Particles";
import axiosInstance from "../lib/axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleButtonClick = async (e) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/send", formData);
      console.log(response.data)
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
      setBackendData(null);
      setError(null);
      setFormData({ name: "", email: "", message: "" });
    }
  };
  return (
    <div
      id="contact"
      className="relative flex items-center c-space section-spacing"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <div
        className="flex flex-col items-center justify-center max-w-md 
      p-5 mx-auto border border-white/10 rounded-2xl bg-primary"
      >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique Projects to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Name"
              required
              autoComplete="off"
              value={formData.name}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="email"
              required
              autoComplete="off"
              value={formData.email}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              message
            </label>
            <textarea
              rows={5}
              id="message"
              name="message"
              type="message"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              required
              autoComplete="off"
              value={formData.message}
              onChange={handleFormInputChange}
            />
          </div>
          <button
            className="w-full px-1 py-3 text-lg text-center 
          rounded-md cursor-pointer bg-radial 
          from-lavender to-royal hover-animation"
            onClick={handleButtonClick}
          >
            {error && error}
            {loading && "Loading..."}
            {backendData && "Thanks for contact me"}
            {!backendData && !loading && "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

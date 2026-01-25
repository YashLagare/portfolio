'use client'
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { toast } from "react-hot-toast";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name.trim()) {
      toast.error("Name field cannot be empty 🥺");
      return false;
    }
    if (name.length < 3) {
      toast.error("Name must be at least 3 characters long 📝");
      return false;
    }
    if (!nameRegex.test(name)) {
      toast.error("Name can only contain letters and spaces ❌");
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      toast.error("Email field cannot be empty 🥺");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address 📧");
      return false;
    }
    return true;
  };

  const validateSubject = (subject) => {
    if (!subject.trim()) {
      toast.error("Subject field cannot be empty 🥺");
      return false;
    }
    if (subject.trim().length < 3) {
      toast.error("Subject must be at least 3 characters long 📝");
      return false;
    }
    if (subject.trim().length > 100) {
      toast.error("Subject must not exceed 100 characters 📝");
      return false;
    }
    return true;
  };

  const validateMessage = (message) => {
    if (!message.trim()) {
      toast.error("Message field cannot be empty 🥺");
      return false;
    }
    if (message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long 📝");
      return false;
    }
    if (message.trim().length > 5000) {
      toast.error("Message must not exceed 5000 characters 📝");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateName(form.name)) return;
    if (!validateEmail(form.email)) return;
    if (!validateSubject(form.subject)) return;
    if (!validateMessage(form.message)) return;
    
    setLoading(true);
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwoocNDNVl7wgd7e0EbAzPRnWyT_1MQfiUKin0-AYpSL-dRMn8PIyql3lsyvC6SKmzd/exec';
      
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('subject', form.subject);
      formData.append('message', form.message);
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setLoading(false);
        toast.success("Message sent successfully! I'll get back to you soon🥰");
        
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setLoading(false);
        toast.error("Oops! Something went wrong. Please try again😔");
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      toast.error("Oops! Something went wrong. Please try again😔");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 bg-opacity-80 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Subject</span>
            <input
              type='text'
              name='subject'
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl hover:bg-purple-950 outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

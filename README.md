# 💼 Yash Lagare - Portfolio

## 📌 About This Portfolio

Welcome to my personal portfolio website! This is a modern, interactive portfolio built with **Next.js 13** and **React 18**, featuring stunning 3D visuals using **Three.js** and smooth animations powered by **Framer Motion** and **GSAP**. The portfolio showcases my skills, projects, and experience as a Full Stack Developer.

The site includes:
- 🌍 **Interactive 3D Globe** - A rotating Earth visualization
- ✨ **Smooth Animations** - Engaging transitions and effects
- 📱 **Fully Responsive** - Looks great on all devices
- 🚀 **Performance Optimized** - Fast loading with Next.js optimization

---

## 🛠️ Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| ![React] | React 18.2.0 - UI Library |
| ![Next.js] | Next.js 13.4.19 - React Framework |
| ![TypeScript] | TypeScript - Type Safety |
| ![Tailwind CSS] | Tailwind CSS 3.3.3 - Styling |
| ![Three.js]| Three.js - 3D Graphics |
| ![Framer Motion] | Framer Motion - Animations |
| ![GSAP] | GSAP - Animation Platform |

---

## 🚀 Key Features

- **Interactive 3D Elements** - Rotating Earth globe with Three.js
- **Smooth Scrolling** - Lenis smooth scroll integration
- **Real-time Animations** - GSAP-powered transitions
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Contact Form** - EmailJS integration for seamless communication
- **Project Showcase** - Detailed project cards with live demos
- **Tech Stack Display** - Animated technology icons
- **Experience Timeline** - Vertical timeline for work history
- **Dark Theme** - Modern dark UI design
- **Performance Optimized** - Server-side rendering with Next.js

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── resume/           # Resume PDF
│   └── planet/           # 3D Earth model files
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.js     # Root layout
│   │   ├── loading.js    # Loading state
│   │   └── page.js       # Main page
│   ├── assets/           # Images and icons
│   ├── components/       # React components
│   │   ├── canvas/       # Three.js components
│   │   ├── hoc/          # Higher-order components
│   │   └── *.jsx         # UI components
│   ├── constants/        # Data and configurations
│   ├── utils/            # Utility functions
│   └── styles.js         # Animation styles
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

---

## 📧 Email Setup (EmailJS)

This portfolio uses **EmailJS** for handling contact form submissions. When someone fills out the contact form, their message is sent directly to your email.

### Configuration Steps

1. **Create an EmailJS Account**
   - Visit [emailjs.com](https://www.emailjs.com/)
   - Sign up and log in

2. **Set Up Email Service**
   - Go to **Email Services** and add your email provider (Gmail, Outlook, etc.)
   - Get your `SERVICE_ID`

3. **Create Email Template**
   - Go to **Email Templates** and create a new template
   - Add the following template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Get your `TEMPLATE_ID`

4. **Get Public Key**
   - Go to **Account** settings
   - Copy your `PUBLIC_KEY`

5. **Add Environment Variables**
   - Create a `.env.local` file in the root directory:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```

6. **Done!**
   - The contact form is now ready to send emails
   - Users can submit messages from the Contact section

### How It Works

- Form validation happens on the frontend (name, email, subject, message)
- Upon valid submission, EmailJS sends the message to your configured email
- Toast notifications confirm success or show errors
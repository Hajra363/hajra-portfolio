// C:\Users\Hajra\OneDrive\Desktop\Portfolio\hajra-portfolio\src\App.jsx
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Figma File URL - Apni saari designs yahan hain
const FIGMA_FILE_URL = "https://www.figma.com/design/SH6BPcYwwL2htmwji0rzEj/Untitled?node-id=852-2170&m=dev&t=3SxYlUZvGLerjKb1-1";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Professional Skills - UI/UX Focused First
  const designSkills = [
    { name: "Figma", icon: "🎨", level: "95%", color: "from-pink-500 to-rose-500", description: "Advanced prototyping & design systems" },
    { name: "Adobe XD", icon: "✨", level: "90%", color: "from-purple-500 to-pink-500", description: "Interactive wireframes & mockups" },
    { name: "User Research", icon: "🔍", level: "92%", color: "from-blue-500 to-cyan-500", description: "User interviews & surveys" },
    { name: "Wireframing", icon: "📐", level: "94%", color: "from-emerald-500 to-teal-500", description: "Low to high-fidelity wireframes" },
    { name: "Prototyping", icon: "⚡", level: "93%", color: "from-orange-500 to-amber-500", description: "Clickable prototypes & user flows" },
    { name: "User-Centered Design", icon: "👥", level: "96%", color: "from-violet-500 to-purple-500", description: "UCD methodology & principles" },
    { name: "Usability Testing", icon: "🧪", level: "88%", color: "from-cyan-500 to-blue-500", description: "User testing & feedback analysis" },
    { name: "Information Architecture", icon: "🏛️", level: "90%", color: "from-amber-500 to-yellow-500", description: "Content structure & navigation" },
  ];

  const frontendSkills = [
    { name: "React.js", icon: "⚛️", level: "88%", color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", icon: "🟡", level: "85%", color: "from-yellow-500 to-amber-500" },
    { name: "Tailwind CSS", icon: "💨", level: "88%", color: "from-teal-500 to-cyan-500" },
    { name: "Responsive Design", icon: "📱", level: "92%", color: "from-green-500 to-emerald-500" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢", level: "75%", color: "from-green-500 to-lime-500" },
    { name: "Express.js", icon: "🚀", level: "72%", color: "from-gray-500 to-slate-500" },
    { name: "REST APIs", icon: "🔗", level: "80%", color: "from-indigo-500 to-purple-500" },
    { name: "MongoDB", icon: "🍃", level: "70%", color: "from-green-600 to-emerald-600" },
  ];

  // All Projects - Exactly 5 Projects (without individual figmaLink)
  const allProjects = [
    // 1. Food Ordering App
    {
      title: "Food Ordering App",
      desc: "Modern food delivery app with intuitive UI, real-time order tracking, restaurant listings, and seamless checkout experience.",
      tech: ["Figma", "UI Design", "Prototyping", "User Flow", "Wireframing"],
      icon: "🍔",
      gradient: "from-orange-500 to-red-500",
      features: ["Restaurant listings", "Food menu with categories", "Cart management", "Order tracking", "Payment integration UI"],
      role: "UI/UX Designer",
      timeline: "3 weeks",
      category: "design"
    },
    // 2. Hotel Booking App
    {
      title: "Hotel Booking App",
      desc: "Elegant hotel booking platform with advanced search filters, room previews, booking calendar, and user reviews section.",
      tech: ["Adobe XD", "UI Design", "User Journey", "Interactive Prototype"],
      icon: "🏨",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Search & filters", "Room details", "Booking calendar", "Payment gateway UI", "User reviews"],
      role: "UI/UX Designer",
      timeline: "4 weeks",
      category: "design"
    },
    // 3. Admin Dashboard - Point of Sale (POS)
    {
      title: "Admin Dashboard - Point of Sale (POS)",
      desc: "Comprehensive admin dashboard with sales analytics, inventory management, order tracking, and real-time business insights.",
      tech: ["Figma", "Dashboard Design", "Data Visualization", "Analytics UI", "POS System"],
      icon: "📊",
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "Sales analytics & reports",
        "Inventory management",
        "Order tracking system",
        "Customer management",
        "Real-time revenue dashboard",
        "Product catalog management",
        "Staff management panel"
      ],
      role: "Lead UI/UX Designer",
      timeline: "6 weeks",
      category: "design"
    },
    // 4. E-Commerce App
    {
      title: "E-Commerce App",
      desc: "Complete e-commerce shopping experience with product catalog, wishlist, cart management, and smooth checkout flow.",
      tech: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      icon: "🛍️",
      gradient: "from-purple-500 to-pink-500",
      features: ["Product browsing", "Filters & sorting", "Wishlist", "Cart management", "Secure checkout"],
      role: "Lead UI/UX Designer",
      timeline: "5 weeks",
      category: "design"
    },
    // 5. AI-Driven Face Analysis System
  {
    title: "AI-Driven Face Analysis System",
    desc: "Comprehensive face analysis system powered by AI that provides real-time face detection, health monitoring, attendance tracking, age & gender analysis, and emotion detection with 92% accuracy.",
    tech: ["React.js", "TensorFlow.js", "OpenCV", "Face API.js", "WebRTC", "Node.js"],
    icon: "🤖",
    gradient: "from-cyan-500 to-blue-500",
    features: [
      "Health monitoring & vital signs analysis",
      "Smart attendance system with face recognition",
      "Age and gender detection",
      "Real-time emotion recognition (happy, sad, angry, surprised, etc.)",
      "Face detection & tracking",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Hajra363/AI-Driven-Face-Analysis",
    category: "dev"
  }
];
  // Experience based on your CV
  const experiences = [
    {
      role: "UI/UX Designer & MERN Stack Developer",
      company: "National Book Foundation (NBF)",
      period: "2024 - Present",
      location: "Islamabad",
      type: "Internship",
      achievements: [
        "Led UI/UX redesign of official NBF website, resulting in 40% improved user engagement",
        "Created design systems, wireframes, and high-fidelity prototypes using Figma",
        "Conducted user research and usability testing to validate design decisions",
        "Implemented frontend components using React.js and Tailwind CSS",
        "Collaborated with stakeholders to translate business requirements into intuitive interfaces",
      ],
    },
  ];

  // Education with CGPA
  const education = {
    degree: "BSc Information Engineering Technology (IET)",
    duration: "4-Year Program (3 Years Academic + 1 Year Internship)",
    status: "Final Year - Academic Internship Completed",
    location: "Islamabad, Pakistan",
    cgpa: "3.65/4.0",
    courses: ["UI/UX Design", "Web Development", "Human-Computer Interaction", "Database Management", "Artificial Intelligence"]
  };

  // Design Tools Proficiency
  const designTools = [
    { name: "Figma", proficiency: "Expert", icon: "🎨", color: "pink" },
    { name: "Canva", proficiency: "Advanced", icon: "🎨", color: "purple" },
    { name: "Adobe XD", proficiency: "Advanced", icon: "✨", color: "blue" },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects", "experience", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-x-hidden">
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-pink-400/50 pointer-events-none z-[100] hidden lg:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-pink-400 pointer-events-none z-[100] hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Advanced Animated Tech Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-purple-500/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"
        />
        
        {/* Design-focused floating icons */}
        {["🎨", "✨", "📐", "🎯", "💡", "🖌️", "📱", "⚡", "🌟", "🎭", "📊", "🔍"].map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {icon}
          </motion.div>
        ))}
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Navigation Bar - Desktop */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900/80 backdrop-blur-xl rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl hidden md:block"
      >
        <div className="flex gap-4 lg:gap-6 text-sm lg:text-base">
          {["home", "about", "education", "skills", "projects", "experience", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`capitalize transition-all duration-300 relative font-medium ${
                activeSection === item
                  ? "text-pink-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item === "projects" ? "Projects" : item}
              {activeSection === item && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 bg-slate-900/80 backdrop-blur-xl p-3 rounded-full border border-slate-700/50 md:hidden"
      >
        {isMenuOpen ? "✕" : "☰"}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-xl z-40 p-6 pt-20 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {["home", "about", "education", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`capitalize text-left py-2 px-4 rounded-lg transition ${
                    activeSection === item
                      ? "text-pink-400 bg-pink-400/10"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item === "projects" ? "Projects" : item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="px-6 md:px-16 pt-32 pb-24 min-h-screen flex items-center relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 p-1 mx-auto shadow-2xl shadow-pink-500/30">
              <motion.div
                animate={floatAnimation}
                className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-6xl"
              >
                🎨
              </motion.div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-pink-400 font-semibold tracking-wider text-sm md:text-base"
          >
            UI/UX DESIGNER & MERN STACK DEVELOPER
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mt-4"
          >
            Creating{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Beautiful Experiences
            </span>
          </motion.h1>
        
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-2xl md:text-4xl mt-2 text-slate-300"
          >
            I'm <span className="text-pink-300">Hajra Nawazish</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-3 justify-center"
          >
            <motion.span
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-slate-800/50 rounded-full text-sm border border-slate-700 backdrop-blur-sm"
            >
              📍 Islamabad, Pakistan
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-slate-800/50 rounded-full text-sm border border-slate-700 backdrop-blur-sm"
            >
              📧 hajranawazish8@gmail.com
            </motion.span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-300 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            🎨 UI/UX Designer specializing in user-centered design, creating intuitive and delightful digital experiences. 
            💻 Also skilled in MERN stack development to bring designs to life with full-stack functionality.
          </motion.p>
          
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="flex gap-4 justify-center mt-8 flex-wrap"
>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => scrollTo("contact")}
    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 relative overflow-hidden group"
  >
    <span className="relative z-10">Hire Me</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
      initial={{ x: "100%" }}
      whileHover={{ x: 0 }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
  
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => scrollTo("projects")}
    className="px-8 py-3 border border-slate-600 rounded-full font-semibold hover:border-pink-400 hover:bg-white/5 transition-all duration-300"
  >
    View My Work
  </motion.button>
  
  {/* DOWNLOAD CV BUTTON - YEH WALA */}
  <motion.a
    href="/Hajra_Nawazish_CV.pdf"
    download="Hajra_Nawazish_CV.pdf"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 border border-slate-600 rounded-full font-semibold hover:border-pink-400 hover:bg-white/5 transition-all duration-300 inline-block cursor-pointer"
  >
    Download CV
  </motion.a>
</motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 md:px-16 py-20 bg-slate-900/30 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-700/50 hover:border-pink-500/30 transition-all duration-500"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-slate-200 leading-relaxed text-base md:text-lg mb-4">
                  I'm a <span className="text-pink-300 font-semibold">UI/UX Designer</span> with a passion for creating 
                  intuitive, user-centered digital experiences. With strong expertise in design tools and methodologies, 
                  I transform complex problems into elegant, accessible solutions that users love.
                </p>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Additionally, I bring <span className="text-cyan-300 font-semibold">MERN stack development skills</span> 
                  and <span className="text-blue-300 font-semibold">AI integration expertise</span> 
                  to bridge the gap between design and development, ensuring seamless implementation of design systems 
                  and interactive prototypes into fully functional web applications.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-4">
                <h3 className="text-lg font-semibold text-pink-300 mb-3">Design Philosophy</h3>
                <p className="text-slate-300 text-sm italic">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <div className="mt-4 pt-3 border-t border-slate-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">UI/UX Design</span>
                    <span className="text-pink-300 font-bold">Primary Expertise</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-slate-400">MERN Stack & AI</span>
                    <span className="text-cyan-300">Secondary Skill</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: "🎨", value: "15+", label: "Design Projects", color: "pink" },
                { icon: "👥", value: "50+", label: "User Interviews", color: "purple" },
                { icon: "🚀", value: "10+", label: "Projects Delivered", color: "emerald" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-slate-800/50 rounded-2xl cursor-pointer"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`font-semibold text-${stat.color}-300`}>{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="px-6 md:px-16 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center">
            Education
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-slate-400 mb-12">Academic Background & Achievements</motion.p>
          
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-700 hover:border-pink-500/50 transition-all duration-300"
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="text-xl md:text-2xl font-bold text-cyan-300"
                >
                  {education.degree}
                </motion.h3>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-300 mt-2"
                >
                  {education.duration}
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-pink-300 mt-2 font-semibold"
                >
                  {education.status}
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-emerald-400 mt-2 font-semibold"
                >
                  CGPA: {education.cgpa}
                </motion.p>
              </div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="mt-4 md:mt-0"
              >
                <div className="flex items-center gap-2 text-slate-400">
                  <span>📍</span> {education.location}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((course, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="px-3 py-1 bg-slate-800/80 rounded-full text-sm text-slate-300"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={fadeUp} className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-300 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-900/50 px-6 py-3 rounded-full border border-slate-700">
                <span className="font-semibold">English</span>
                <span className="text-slate-400 ml-2">(Professional)</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-900/50 px-6 py-3 rounded-full border border-slate-700">
                <span className="font-semibold">Urdu</span>
                <span className="text-slate-400 ml-2">(Native)</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="px-6 md:px-16 py-20 bg-slate-900/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center">
            My Skills
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-slate-400 mb-12">UI/UX Design Expertise with Development Knowledge</motion.p>
          
          {/* UI/UX Design - Primary Skills */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30">
                <span className="text-3xl">🎨</span>
                <span className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-xl">UI/UX Design - Core Expertise</span>
                <span className="text-3xl">✨</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {designSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700 cursor-pointer group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold group-hover:text-pink-300 transition">{skill.name}</span>
                    </div>
                    <span className="text-pink-400 text-sm font-bold">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0, x: -100 }}
                      whileInView={{ width: skill.level, x: 0 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Design Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center justify-center gap-2">
              <span>🛠️</span> Design Tools I Master <span>✨</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {designTools.map((tool, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 px-6 py-4 rounded-2xl border border-slate-700 text-center min-w-[120px]"
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="font-semibold text-white">{tool.name}</div>
                  <div className={`text-xs text-${tool.color}-400 mt-1`}>{tool.proficiency}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300 flex items-center justify-center gap-2">
              <span>⚛️</span> Development Skills (Supporting) <span>💻</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {frontendSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700 cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 text-sm">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0, x: -100 }}
                      whileInView={{ width: skill.level, x: 0 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-300 flex items-center justify-center gap-2">
              <span>🖥️</span> Backend Basics <span>📚</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {backendSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700 cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-green-400 text-sm">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0, x: -100 }}
                      whileInView={{ width: skill.level, x: 0 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="px-6 md:px-16 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center">
            My Projects
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-slate-400 mb-12 text-lg">
            UI/UX Design projects and AI-driven development
          </motion.p>
          
          {/* Figma Button - View All Designs */}
          <div className="text-center mb-12">
            <motion.a
              href={FIGMA_FILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <span>🎨</span>
              View All UI/UX Designs on Figma
              <span>→</span>
            </motion.a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative bg-slate-900/70 backdrop-blur-sm p-6 rounded-3xl border border-slate-700 group-hover:border-pink-400 transition-all duration-500 h-full">
                  <div className="flex justify-between items-start mb-2">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="text-6xl mb-4">
                      {project.icon}
                    </motion.div>
                    {project.role && (
                      <span className="text-xs px-2 py-1 bg-pink-500/20 rounded-full text-pink-300">{project.role}</span>
                    )}
                    {project.category === "dev" && (
                      <span className="text-xs px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-300">Development</span>
                    )}
                    {project.category === "design" && (
                      <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-300">UI/UX Design</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-pink-300 transition mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-slate-800/80 rounded-full text-xs text-slate-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  {project.features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="text-xs text-pink-300 flex items-center gap-1">
                          <span>✓</span> {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-700">
                    {project.timeline && (
                      <div className="text-xs text-slate-400">Timeline: {project.timeline}</div>
                    )}
                    <div className="flex gap-3">
                      {project.demoLink && project.demoLink !== "#" && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                          className="text-pink-400 hover:text-pink-300 text-sm font-semibold cursor-pointer"
                        >
                          Live Demo →
                        </motion.a>
                      )}
                      {project.githubLink && project.githubLink !== "#" && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                          className="text-slate-400 hover:text-white text-sm font-semibold cursor-pointer"
                        >
                          GitHub →
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="px-6 md:px-16 py-20 bg-slate-900/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center">
            Work Experience
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-slate-400 mb-12">Professional journey & achievements</motion.p>
          
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-700 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-pink-300">{exp.role}</h3>
                    <p className="text-slate-300 text-lg">{exp.company}</p>
                    <p className="text-slate-400 text-sm mt-1">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-2 bg-pink-500/20 rounded-full text-sm text-pink-300">
                      {exp.period}
                    </span>
                    <p className="text-slate-400 text-sm mt-2">{exp.type}</p>
                  </div>
                </div>
                <ul className="space-y-3 mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="text-pink-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

{/* CONTACT SECTION - Email Click to Open Gmail Compose */}
<section id="contact" className="px-6 md:px-16 py-20 bg-slate-900/30">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="max-w-6xl mx-auto text-center"
  >
    <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
      Let's Connect
    </motion.h2>
    <motion.p variants={fadeUp} className="text-slate-400 mb-12">Click on my email to send me a message</motion.p>
    
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-700 max-w-2xl mx-auto"
    >
      <div className="space-y-6 text-center">
        
        {/* Email Link - Opens Gmail Compose Window */}
        <div className="flex flex-col items-center gap-3 p-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center text-4xl">
            📧
          </div>
       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hajranawazish8@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-pink-300 transition text-xl md:text-2xl font-semibold hover:underline"
>
  hajranawazish8@gmail.com
</a>
          <p className="text-slate-500 text-sm">Click on email to open Gmail</p>
        </div>
        
        {/* Location - Just Display */}
        <div className="flex items-center justify-center gap-3 p-2 border-t border-slate-700 pt-6">
          <span className="text-2xl">📍</span>
          <span className="text-slate-300 text-lg">Islamabad, Pakistan</span>
        </div>
        
      </div>
    </motion.div>
  </motion.div>
</section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-8 text-slate-400 border-t border-slate-800/50"
      >
        <p>© 2026 Hajra Nawazish | UI/UX Designer & MERN Stack Developer</p>
        <p className="text-sm mt-2 text-slate-500">Creating beautiful experiences through design and code</p>
      </motion.footer>
    </div>
  );
}
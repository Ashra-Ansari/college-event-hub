// this file ONLY stores data
const sampleEvent = [
  {
    title: "AI Innovation Hackathon",
    description:
      "A 24-hour hackathon where participants build AI-powered solutions for real-world problems.",
    image: {
      url: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "default1.jpg",
    },
    category: "Tech & Hackathons",
    date: "20 Feb 2025",
    time: "10:30 AM",
    duration: "24 Hours",
    venue: "Innovation Lab",
    teamSize: "2–4 members",
    technologies: [
      "Python",
      "Machine Learning",
      "Web / Mobile Apps",
      "Cloud APIs",
    ],
    prizes: ["1st – ₹25,000 + Certificate", "2nd – ₹15,000 + Certificate"],
    rules: ["Teams of 2–4", "Original ideas only", "Internet allowed"],
  },

  {
    title: "Full Stack Web Sprint",
    description:
      "Build a complete full-stack web application within a limited time frame.",
    image: {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2V0JTIwZGV2ZWxvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "default2.jpg",
    },
    category: "Tech & Hackathons",
    date: "22 Feb 2025",
    time: "10:30 AM",
    duration: "8 Hours",
    venue: "Computer Lab 2",
    teamSize: "1–3 members",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    prizes: ["1st – ₹10,000 + Certificate", "2nd – ₹6,000 + Certificate"],
    rules: [
      "Solo or team participation",
      "Backend mandatory",
      "No pre-built templates",
    ],
  },

  {
    title: "Bug Hunt Challenge",
    description:
      "Identify and fix bugs in a given codebase as quickly as possible.",
    image: {
      url: "https://miro.medium.com/v2/0*KKQcgPz3OsfYfrCL.jpeg",
      filename: "default3.jpg",
    },
    category: "Tech & Hackathons",
    date: "25 Feb 2025",
    time: "10:30 AM",
    duration: "3 Hours",
    venue: "Programming Lab",
    teamSize: "Solo",
    technologies: ["C", "C++", "Java", "Python"],
    prizes: ["1st – ₹5,000 + Certificate", "2nd – ₹3,000 + Certificate"],
    rules: [
      "Individual participation only",
      "No internet access",
      "Time-based evaluation",
    ],
  },

  {
    title: "App Development Marathon",
    description:
      "Design and develop a functional mobile application from scratch.",
    image: {
      url: "https://c8.alamy.com/comp/2FME32X/mobile-app-development-concept-with-characters-modern-vector-illustration-in-flat-style-for-landing-page-mobile-app-poster-template-web-banner-i-2FME32X.jpg",
      filename: "default4.jpg",
    },
    date: "28 Feb 2025",
    category: "Tech & Hackathons",
    time: "10:30 AM",
    duration: "12 Hours",
    venue: "Innovation Center",
    teamSize: "2–4 members",
    technologies: ["Flutter", "React Native", "Firebase"],
    prizes: ["1st – ₹15,000 + Certificate", "2nd – ₹10,000 + Certificate"],
    rules: [
      "Original app idea",
      "Working prototype required",
      "Presentation mandatory",
    ],
  },

  {
    title: "Cybersecurity Capture The Flag",
    description:
      "Solve cybersecurity challenges to find hidden flags and score points.",
    image: {
      url: "https://media.licdn.com/dms/image/v2/D5612AQEMTmdASEpqog/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680103178404?e=2147483647&v=beta&t=lAzHeCTbZCsApYT9TWcNg0HF8vO-r_U0W3kKi1oEc10",
      filename: "default5.jpg",
    },
    category: "Tech & Hackathons",
    date: "1 Mar 2025",
    time: "10:30 AM",
    duration: "6 Hours",
    venue: "Cyber Lab",
    teamSize: "1–2 members",
    technologies: ["Networking", "Linux", "Ethical Hacking"],
    prizes: ["1st – ₹12,000 + Certificate", "2nd – ₹8,000 + Certificate"],
    rules: ["Ethical hacking only", "No external help", "Points-based ranking"],
  },

  {
    title: "Data Science Challenge",
    description:
      "Analyze datasets and derive insights to solve business problems.",
    image: {
      url: "https://daxg39y63pxwu.cloudfront.net/images/blog/practicing-data-science/Practicing_Data_Science.webp",
      filename: "default6.jpg",
    },
    category: "Tech & Hackathons",
    date: "3 Mar 2025",
    time: "10:30 AM",
    duration: "5 Hours",
    venue: "Data Analytics Lab",
    teamSize: "1–3 members",
    technologies: ["Python", "Pandas", "NumPy", "Data Visualization"],
    prizes: ["1st – ₹9,000 + Certificate", "2nd – ₹5,000 + Certificate"],
    rules: [
      "Dataset provided on spot",
      "Code submission required",
      "Judging based on insights",
    ],
  },

  {
    title: "UI/UX Designathon",
    description: "Create user-centric designs for real-world applications.",
    image: {
      url: "https://monsoonfish.com/wp-content/uploads/2021/04/MONSOON-FISH-02.png",
      filename: "default7.jpg",
    },
    date: "5 Mar 2025",
    category: "Tech & Hackathons",
    time: "10:30 AM",
    duration: "4 Hours",
    venue: "Design Studio",
    teamSize: "Solo or Duo",
    technologies: ["Figma", "Adobe XD", "Canva"],
    prizes: ["1st – ₹7,000 + Certificate", "2nd – ₹4,000 + Certificate"],
    rules: [
      "Design originality",
      "Prototype submission",
      "Design explanation required",
    ],
  },

  {
    title: "Competitive Coding Contest",
    description: "Solve algorithmic problems under time pressure.",
    image: {
      url: "https://img.freepik.com/free-vector/girls-boys-competing-esports-cup-using-pc-winning-cup-gaming-championship-flat-illustration_74855-20579.jpg?semt=ais_incoming&w=740&q=80",
      filename: "default8.jpg",
    },
    category: "Tech & Hackathons",
    date: "7 Mar 2025",
    time: "10:30 AM",
    duration: "2.5 Hours",
    venue: "Online Platform",
    teamSize: "Solo",
    technologies: ["C++", "Java", "Python"],
    prizes: ["1st – ₹8,000 + Certificate", "2nd – ₹5,000 + Certificate"],
    rules: [
      "Individual participation",
      "No plagiarism",
      "Time & accuracy based ranking",
    ],
  },

  {
    title: "Cloud Computing Workshop",
    description: "Hands-on workshop on deploying applications to the cloud.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8KWvlsUctlnUxhhXCUWOq_w6kRfGO7an5Q&s",
      filename: "default9.jpg",
    },
    category: "Tech & Hackathons",
    date: "10 Mar 2025",
    time: "10:30 AM",
    duration: "4 Hours",
    venue: "Seminar Hall",
    teamSize: "Individual",
    technologies: ["AWS", "Docker", "Cloud Deployment"],
    prizes: ["Participation Certificate", "Best Performer Award"],
    rules: [
      "Bring personal laptop",
      "Basic cloud knowledge recommended",
      "Attendance mandatory",
    ],
  },
];

module.exports = { data: sampleEvent };

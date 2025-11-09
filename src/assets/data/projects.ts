import Gym from "@/assets/images/projects/Gym.png";
import Agency from "@/assets/images/projects/Agency.png";
import Doctor from "@/assets/images/projects/dr.png";


export const projects = [
    {
        id: 1,
        title: "YOGA WEBSITE DESIGN",
        description: "A modern web platform designed to streamline clinic operations. Patients can easily book appointments, view doctors’ schedules, and access records. Built with a focus on clean UI, usability, and efficiency, this project ensures a smooth.",
        technologies: ["Next.js (TypeScript)", "Tailwind CSS", "Redux Toolkit", "RTK Query", "Node.js", "MongoDB", "Express.js", "JWT", "Mongoose"],
        features: [
            "Admin Panel with secure login",
            "Admin can upload, edit, and delete courses with thumbnails, prices, and descriptions",
            "Manage Modules & Lectures with YouTube links and lecture notes",
            "Filter and view lecture lists easily",
            "User Panel with dynamic Course Detail and Lecture Pages",
            "Expandable modules and sequential locked lectures",
            "Embedded YouTube video player for lectures",
            "Responsive design optimized for mobile, tablet, and desktop"
        ],
        image: `${Gym}`,
        link: "https://swift-learn-nu.vercel.app/",
        github_client: "https://github.com/kobirul5/Swift-Learn",
        github_server: "https://github.com/kobirul5/Swift-Learn-Server",
        admin_email: "kobirul@gmail.com",
        admin_password: "12345678",
        user_email: "kobirul2@gmail.com",
        user_password: "12345678",
        rowSet: false
    }
    ,
  {
    "id": 3,
    "title": "Montalk - Mental Wellness and Therapy Platform",
    "description": "Montalk is a dedicated platform designed to help users achieve mental focus and emotional balance. It connects users with featured therapists, offers various growth-focused subscription plans, and provides valuable content through its integrated blog to support the mental wellness journey.",
    "technologies": ["HTML", "CSS", "JavaScript", "React (Implied for modern SPA)", "Tailwind CSS (Implied by clean, modern design)"],
    "features": [
        "Focus on Mental Focus and Emotional Balance.",
        "Clear presentation of 'How We Work' steps.",
        "Dedicated section for 'Featured Therapists'.",
        "Informative 'Blog & News' section with mental health articles.",
        "Testimonials/Reviews section: 'What Our Patient Say'.",
        "Tiered subscription plans (Growth, Standard, Premium) with clear pricing.",
        "Comprehensive footer with quick links to main and secondary pages."
    ],
    "image": `${Doctor}`,
    "link": "https://montalk.example.com",
    "github_client": "https://github.com/yourusername/montalk-client",
    "github_server": "https://github.com/yourusername/montalk-server",
    "admin_email": "therapist@montalk.com",
    "admin_password": "SecurePassword123",
    "rowSet": true
},
    // --------------
    {
        id: 3,
        title: "REAL ESTATE WEBSITE",
        description: "A modern real estate platform for listing, searching, and managing properties. Users can browse properties, filter by location or price, and contact agents directly. Admins can manage listings, agents, and user activities with ease.",
        technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express.js", "Tailwind CSS", "Daisy UI", "JWT"],
        features: [
            "Role-based authentication (User, Agent, Admin)",
            "Users can browse and favorite properties",
            "Agents can add, edit, or remove property listings",
            "Admins can manage users, agents, and property approvals",
            "Secure API routes with JWT authentication",
            "SweetAlert/Toast notifications for all CRUD operations",
            "Responsive design for mobile, tablet, and desktop",
            "Dashboard with table and card grid toggle view"
        ],
        image: `${Agency}`,
        link: "https://worknest-50eb0.web.app/",
        github_client: "https://github.com/kobirul5/work-nest",
        github_server: "https://github.com/kobirul5/work-nest-server",
        admin_email: "admin@example.com",
        admin_password: "Admin@123",
        rowSet: false
    }
    ,
  
];
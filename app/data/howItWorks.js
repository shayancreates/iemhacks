import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Personalized Onboarding",
    description: "Tell us about your industry and skills to get career advice tailored to you.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Build Your Resume & Cover Letter",
    description: "Create job-winning, ATS-friendly resumes and cover letters effortlessly.",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Ace Your Interviews",
    description: "Practice with AI-driven mock interviews designed for your specific job role.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Track & Improve",
    description: "Get detailed feedback and performance insights to enhance your job readiness.",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];

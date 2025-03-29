import { Icon } from "@chakra-ui/react";
import { 
  MdLibraryBooks, 
  MdWifiOff, 
  MdFeedback, 
  MdTimer, 
  MdTrendingUp, 
  MdTrackChanges, 
  MdUpdate, 
  
} from "react-icons/md";

export const benefitsData = [
  {
    icon: <Icon as={MdLibraryBooks} fontSize="24px" color="brand.100" />,
    title: "Thousands of Past Questions",
    description: "Get real exam questions with detailed answers across Science, Arts, and Commercial subjects."
  },
  {
    icon: <Icon as={MdWifiOff} fontSize="24px" color="brand.100" />,
    title: "Offline Mode",
    description: "Study anywhere, anytime, even without internet access!"
  },
  {
    icon: <Icon as={MdFeedback} fontSize="24px" color="brand.100" />,
    title: "Instant Feedback & Explanations",
    description: "Learn from mistakes with automatic grading and explanations."
  },
  {
    icon: <Icon as={MdTimer} fontSize="24px" color="brand.100" />,
    title: "Exam Simulation",
    description: "Practice in timed CBT mode just like the real exams."
  },
  {
    icon: <Icon as={MdTrendingUp} fontSize="24px" color="brand.100" />,
    title: "Performance Tracking",
    description: "Identify strengths & weaknesses with ACE analytics."
  },
  {
    icon: <Icon as={MdTrackChanges} fontSize="24px" color="brand.100" />,
    title: "User-Friendly Interface",
    description: "Study stress-free with a smooth and simple design."
  },
  {
    icon: <Icon as={MdUpdate} fontSize="24px" color="brand.100" />,
    title: "Regular Updates",
    description: "Stay informed on the latest JAMB, WAEC & NECO exam trends."
  }
];



/**
 * Field Categories and Subcategories Data
 * Contains all available innovation fields and their subcategories
 */

export const innovationFields = {
  tech: {
    id: 'tech',
    name: 'Technology',
    description: 'Digital innovations, software solutions, and tech advancements',
    icon: '💻',
    subcategories: [
      { id: 'ai-ml', name: 'Artificial Intelligence & Machine Learning' },
      { id: 'mobile-apps', name: 'Mobile Applications' },
      { id: 'web-development', name: 'Web Development' },
      { id: 'iot', name: 'Internet of Things (IoT)' },
      { id: 'blockchain', name: 'Blockchain & Cryptocurrency' },
      { id: 'cybersecurity', name: 'Cybersecurity' },
      { id: 'data-science', name: 'Data Science & Analytics' },
      { id: 'robotics', name: 'Robotics & Automation' }
    ]
  },
  transport: {
    id: 'transport',
    name: 'Transportation',
    description: 'Mobility solutions, logistics, and transportation innovations',
    icon: '🚗',
    subcategories: [
      { id: 'electric-vehicles', name: 'Electric Vehicles' },
      { id: 'public-transport', name: 'Public Transportation' },
      { id: 'logistics', name: 'Logistics & Supply Chain' },
      { id: 'sustainable-mobility', name: 'Sustainable Mobility' },
      { id: 'smart-traffic', name: 'Smart Traffic Management' },
      { id: 'last-mile', name: 'Last Mile Delivery' }
    ]
  },
  business: {
    id: 'business',
    name: 'Business & Entrepreneurship',
    description: 'Business models, startup ideas, and entrepreneurial ventures',
    icon: '💼',
    subcategories: [
      { id: 'fintech', name: 'Financial Technology' },
      { id: 'ecommerce', name: 'E-commerce & Retail' },
      { id: 'saas', name: 'Software as a Service (SaaS)' },
      { id: 'marketplace', name: 'Marketplace Platforms' },
      { id: 'b2b-solutions', name: 'B2B Solutions' },
      { id: 'social-enterprise', name: 'Social Enterprise' }
    ]
  },
  community: {
    id: 'community',
    name: 'Community Development',
    description: 'Social impact, community welfare, and civic innovations',
    icon: '🤝',
    subcategories: [
      { id: 'education', name: 'Education & Learning' },
      { id: 'healthcare', name: 'Healthcare & Wellness' },
      { id: 'agriculture', name: 'Agriculture & Farming' },
      { id: 'waste-management', name: 'Waste Management' },
      { id: 'water-conservation', name: 'Water Conservation' },
      { id: 'renewable-energy', name: 'Renewable Energy' }
    ]
  },
  railways: {
    id: 'railways',
    name: 'Railways & Infrastructure',
    description: 'Railway innovations, infrastructure development, and smart cities',
    icon: '🚂',
    subcategories: [
      { id: 'smart-stations', name: 'Smart Railway Stations' },
      { id: 'ticket-booking', name: 'Ticketing & Booking Systems' },
      { id: 'safety-systems', name: 'Safety & Security Systems' },
      { id: 'maintenance', name: 'Maintenance & Operations' },
      { id: 'passenger-experience', name: 'Passenger Experience' },
      { id: 'freight-logistics', name: 'Freight & Logistics' }
    ]
  },
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Medical innovations, health tech, and wellness solutions',
    icon: '🏥',
    subcategories: [
      { id: 'telemedicine', name: 'Telemedicine & Remote Care' },
      { id: 'medical-devices', name: 'Medical Devices' },
      { id: 'health-monitoring', name: 'Health Monitoring' },
      { id: 'mental-health', name: 'Mental Health' },
      { id: 'pharmaceutical', name: 'Pharmaceutical' },
      { id: 'preventive-care', name: 'Preventive Care' }
    ]
  }
};

/**
 * Mock ideas data for the community feed
 */
export const mockIdeas = [
  {
    id: 1,
    title: 'AI-Powered Traffic Signal Optimization',
    field: 'Transportation',
    subcategory: 'Smart Traffic Management',
    problemStatement: 'Traffic congestion in urban areas leads to increased travel time, fuel consumption, and air pollution.',
    approach: 'Using machine learning algorithms to analyze real-time traffic patterns and optimize signal timing.',
    solution: 'Dynamic traffic signal system that reduces average wait time by 30% and improves traffic flow.',
    author: 'Rajesh Kumar',
    date: '2024-01-15',
    upvotes: 45,
    status: 'In Review'
  },
  {
    id: 2,
    title: 'Blockchain-Based Land Registry System',
    field: 'Technology',
    subcategory: 'Blockchain & Cryptocurrency',
    problemStatement: 'Land disputes and fraudulent property transactions are common in India.',
    approach: 'Implementing blockchain technology to create tamper-proof land records.',
    solution: 'Decentralized land registry that ensures transparency and reduces property disputes.',
    author: 'Priya Sharma',
    date: '2024-01-12',
    upvotes: 38,
    status: 'Under Development'
  },
  {
    id: 3,
    title: 'Smart Waste Collection System',
    field: 'Community Development',
    subcategory: 'Waste Management',
    problemStatement: 'Inefficient waste collection leads to overflowing bins and unhygienic conditions.',
    approach: 'IoT sensors in waste bins to monitor fill levels and optimize collection routes.',
    solution: 'Automated waste collection system that reduces collection costs by 25% and improves cleanliness.',
    author: 'Amit Patel',
    date: '2024-01-10',
    upvotes: 52,
    status: 'Implemented'
  },
  {
    id: 4,
    title: 'Digital Learning Platform for Rural Students',
    field: 'Community Development',
    subcategory: 'Education & Learning',
    problemStatement: 'Rural students lack access to quality educational resources and expert teachers.',
    approach: 'Creating an offline-capable digital platform with localized content.',
    solution: 'Educational platform that works without internet and provides interactive learning modules.',
    author: 'Sunita Devi',
    date: '2024-01-08',
    upvotes: 67,
    status: 'In Review'
  },
  {
    id: 5,
    title: 'Solar-Powered Water Purification System',
    field: 'Community Development',
    subcategory: 'Water Conservation',
    problemStatement: 'Many rural areas lack access to clean drinking water.',
    approach: 'Portable solar-powered water purification units for remote areas.',
    solution: 'Affordable water purification system that provides clean water to 100+ families per unit.',
    author: 'Vikram Singh',
    date: '2024-01-05',
    upvotes: 41,
    status: 'Under Development'
  }
];

export interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  angle: string;
  image: string;
  slug: string;
  fullTitle: string;
  detailedDescription?: string;
  features?: string[];
  process?: string[];
  whyItMatters?: {
    title: string;
    description: string;
    badge?: { text: string; color: string };
    points: Array<{ icon: string; title: string; description: string }>;
  };
  commonProblems?: Array<{ icon: string; title: string; description: string }>;
  benefits?: Array<{ title: string; description: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

export interface Project {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  stats: {
    size: string;
    duration: string;
  };
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  project: string;
  rating: number;
  text: string;
  avatar: string;
  gradient: string;
}

export const services: Service[] = [
  {
    icon: "Home",
    title: "Balcony",
    subtitle: "Restoration",
    fullTitle: "Balcony Restoration",
    slug: "balcony-restoration",
    description: "Expert balcony restoration services to restore safety and beauty to your outdoor spaces",
    detailedDescription: "Our comprehensive balcony restoration services address structural integrity, safety compliance, and aesthetic enhancement. We specialize in repairing concrete spalling, reinforcing structural elements, waterproofing, and restoring railings to meet current building codes.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    angle: "rotate-3",
    image: "/gallery/balcony/balcony-3.jpg",
    features: [
      "Structural assessment and engineering reports",
      "Concrete repair and restoration",
      "Waterproofing and membrane installation",
      "Railing replacement and upgrades",
      "Code compliance and safety inspections",
      "Finishing and aesthetic improvements"
    ],
    process: [
      "Initial inspection and assessment",
      "Detailed engineering evaluation",
      "Custom restoration plan",
      "Structural repairs and reinforcement",
      "Waterproofing application",
      "Final finishing and inspection"
    ],
    whyItMatters: {
      title: "Why Balcony Restoration Matters",
      description: "Balcony deterioration is not just an aesthetic issue—it's a serious safety concern. Over time, exposure to weather, water infiltration, and structural stress can compromise the integrity of your balconies, posing risks to residents and property.",
      badge: { text: "Critical Service", color: "red" },
      points: [
        { icon: "Shield", title: "Safety Compliance", description: "Ensures your balconies meet current building codes and safety standards, protecting residents and avoiding liability issues." },
        { icon: "Wrench", title: "Prevent Further Damage", description: "Early restoration prevents minor issues from becoming costly structural problems that require complete replacement." },
        { icon: "Droplets", title: "Water Damage Prevention", description: "Proper waterproofing protects the building structure from water infiltration that can damage interior spaces." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Concrete Spalling", description: "Cracking, chipping, and deterioration of concrete surfaces due to freeze-thaw cycles and water penetration." },
      { icon: "Droplets", title: "Water Leakage", description: "Water infiltration through cracks and joints causing damage to interior spaces and structural elements." },
      { icon: "Ruler", title: "Structural Deterioration", description: "Reinforcement corrosion, concrete degradation, and loss of structural integrity over time." },
      { icon: "Shield", title: "Railing Safety Issues", description: "Outdated or damaged railings that don't meet current building codes and safety requirements." },
      { icon: "FileCheck", title: "Code Violations", description: "Non-compliance with current building codes requiring updates to meet safety and accessibility standards." },
      { icon: "Wrench", title: "Drainage Problems", description: "Improper drainage systems leading to water pooling and accelerated deterioration." }
    ],
    benefits: [
      { title: "Expert Engineering Assessment", description: "Comprehensive structural evaluation by certified engineers to identify all issues and develop precise restoration plans." },
      { title: "Premium Materials & Techniques", description: "We use only the highest quality materials and proven restoration techniques that ensure long-lasting results." },
      { title: "Code Compliance Guaranteed", description: "All work meets or exceeds current building codes, ensuring your property is safe and compliant." },
      { title: "Minimal Disruption", description: "Our efficient processes minimize disruption to residents while completing restoration work quickly and safely." },
      { title: "Comprehensive Warranty", description: "We stand behind our work with comprehensive warranties, giving you peace of mind for years to come." }
    ],
    faqs: [
      { question: "How long does balcony restoration take?", answer: "The timeline depends on the extent of damage and the size of the balcony. Typically, a single balcony restoration takes 2-4 weeks, while building-wide projects may take 2-3 months. We provide detailed timelines during our initial assessment." },
      { question: "Do I need to vacate my unit during restoration?", answer: "In most cases, no. We work to minimize disruption and can often complete work without requiring you to leave. However, for extensive structural work, temporary relocation may be recommended for safety." },
      { question: "What causes balcony deterioration?", answer: "Common causes include water infiltration, freeze-thaw cycles, salt exposure, poor drainage, lack of maintenance, and age-related wear. Our assessment identifies all contributing factors." },
      { question: "How much does balcony restoration cost?", answer: "Costs vary based on the extent of damage, balcony size, materials needed, and accessibility. We provide detailed, transparent quotes after our comprehensive assessment. Many buildings find restoration more cost-effective than replacement." },
      { question: "Will the restoration match my building's aesthetic?", answer: "Absolutely. We carefully match colors, textures, and finishes to maintain your building's appearance. We can also enhance the aesthetic while improving functionality and safety." },
      { question: "What warranty do you provide?", answer: "We offer comprehensive warranties on all restoration work, typically ranging from 5-10 years depending on the scope. All warranties are detailed in writing before work begins." }
    ]
  },
  {
    icon: "Hammer",
    title: "Masonry",
    subtitle: "Restoration",
    fullTitle: "Masonry Restoration",
    slug: "masonry-restoration",
    description: "Professional masonry restoration to preserve and restore the structural integrity of your building",
    detailedDescription: "We provide expert masonry restoration services for brick, stone, and concrete structures. Our team specializes in tuckpointing, brick replacement, stone repair, and comprehensive masonry restoration that preserves historical integrity while ensuring structural stability.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    angle: "-rotate-2",
    image: "/gallery/masonry/masonry-1.jpg",
    features: [
      "Tuckpointing and repointing",
      "Brick and stone replacement",
      "Mortar matching and color blending",
      "Structural reinforcement",
      "Waterproofing and sealant application",
      "Historical preservation techniques"
    ],
    process: [
      "Masonry condition assessment",
      "Material analysis and matching",
      "Restoration planning",
      "Careful removal of damaged materials",
      "Precision installation and repair",
      "Protective coating application"
    ]
  },
  {
    icon: "Droplet",
    title: "Caulking & Sealant",
    subtitle: "Application",
    fullTitle: "Caulking and Sealant Application",
    slug: "caulking-sealant-application",
    description: "Professional caulking and sealant application to protect your building from water damage and energy loss",
    detailedDescription: "Proper caulking and sealant application is essential for building protection. We use premium materials and expert techniques to seal joints, prevent water infiltration, improve energy efficiency, and extend the life of your building envelope.",
    gradient: "from-orange-500 via-red-500 to-rose-500",
    angle: "rotate-2",
    image: "/gallery/caulking/caulking-3.jpg",
    features: [
      "Joint preparation and cleaning",
      "Premium sealant selection",
      "Precision application techniques",
      "Weather-resistant formulations",
      "Energy efficiency improvement",
      "Long-lasting protection"
    ],
    process: [
      "Comprehensive joint inspection",
      "Surface preparation and cleaning",
      "Backer rod installation",
      "Professional sealant application",
      "Quality control and testing",
      "Maintenance recommendations"
    ]
  },
  {
    icon: "Paintbrush",
    title: "Architectural Coating",
    subtitle: "Painting",
    fullTitle: "Architectural Coating / Painting",
    slug: "architectural-coating-painting",
    description: "Expert architectural coating and painting services to enhance and protect your building's exterior",
    detailedDescription: "Our architectural coating and painting services combine aesthetic enhancement with protective functionality. We use high-quality coatings designed to withstand harsh weather conditions, resist fading, and provide long-lasting protection for your building's exterior surfaces.",
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    angle: "-rotate-1",
    image: "/gallery/coating/coating-2.jpg",
    features: [
      "Surface preparation and priming",
      "Premium paint and coating selection",
      "Weather-resistant formulations",
      "Color matching and custom blends",
      "Multi-coat application systems",
      "UV protection and fade resistance"
    ],
    process: [
      "Surface assessment and preparation",
      "Power washing and cleaning",
      "Primer application",
      "Multiple coating layers",
      "Quality inspection",
      "Final protective finish"
    ]
  },
  {
    icon: "Building2",
    title: "Underground Garage",
    subtitle: "Structure Repairs",
    fullTitle: "Underground Garage Structure Repairs",
    slug: "underground-garage-structure-repairs",
    description: "Comprehensive underground garage structure repairs to ensure safety and structural integrity",
    detailedDescription: "Underground parking structures require specialized expertise for repair and maintenance. We provide comprehensive structural repairs including concrete restoration, waterproofing, expansion joint repair, and reinforcement to ensure safety and longevity of your parking facility.",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    angle: "rotate-1",
    image: "/gallery/garage/garage-4.jpg",
    features: [
      "Structural assessment and engineering",
      "Concrete repair and restoration",
      "Waterproofing systems",
      "Expansion joint repair",
      "Reinforcement and strengthening",
      "Drainage system improvements"
    ],
    process: [
      "Comprehensive structural inspection",
      "Engineering analysis and planning",
      "Access and safety setup",
      "Structural repairs and reinforcement",
      "Waterproofing installation",
      "Final inspection and certification"
    ]
  },
  {
    icon: "Layers",
    title: "Roof Replacement",
    subtitle: "& Repair",
    fullTitle: "Roof Replacement & Repair",
    slug: "roof-replacement-repair",
    description: "Expert roof replacement and repair services that stand the test of time and weather",
    detailedDescription: "Our roofing services cover everything from minor repairs to complete roof replacement. We work with all roofing materials and provide expert installation, repair, and maintenance services to protect your building from the elements.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    angle: "-rotate-2",
    image: "/gallery/roof/roof-1.jpg",
    features: [
      "Complete roof replacement",
      "Leak detection and repair",
      "All roofing materials",
      "Proper ventilation systems",
      "Weather-resistant installation",
      "Warranty protection"
    ],
    process: [
      "Roof inspection and assessment",
      "Material selection and ordering",
      "Old roof removal",
      "Deck preparation",
      "Professional installation",
      "Final inspection and warranty"
    ]
  },
  {
    icon: "Building",
    title: "Stucco Installation",
    subtitle: "& Repair",
    fullTitle: "Stucco Installation & Repair",
    slug: "stucco-installation-repair",
    description: "Professional stucco installation and repair services for durable and beautiful exteriors",
    detailedDescription: "Stucco provides excellent durability and aesthetic appeal for building exteriors. Our expert team handles both new stucco installation and comprehensive repair services, ensuring proper application techniques and long-lasting results.",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    angle: "rotate-2",
    image: "/gallery/stucco/stucco-1.jpg",
    features: [
      "New stucco installation",
      "Crack repair and patching",
      "Color matching",
      "Texture matching",
      "Waterproofing integration",
      "Long-lasting finishes"
    ],
    process: [
      "Surface preparation",
      "Lath installation",
      "Base coat application",
      "Finish coat application",
      "Texture and color matching",
      "Protective sealing"
    ]
  },
  {
    icon: "Square",
    title: "Siding Installation",
    subtitle: "& Repair",
    fullTitle: "Siding Installation & Repair",
    slug: "siding-installation-repair",
    description: "Expert siding installation and repair to enhance curb appeal and protect your property",
    detailedDescription: "Quality siding protects your building while enhancing its appearance. We offer professional installation and repair services for all types of siding materials, ensuring proper installation techniques and weather protection.",
    gradient: "from-slate-500 via-gray-500 to-zinc-500",
    angle: "-rotate-1",
    image: "/gallery/siding/siding-7.jpg",
    features: [
      "All siding materials",
      "Professional installation",
      "Repair and replacement",
      "Proper insulation integration",
      "Weather-resistant installation",
      "Enhanced curb appeal"
    ],
    process: [
      "Material selection",
      "Surface preparation",
      "Insulation installation",
      "Siding installation",
      "Trim and finishing",
      "Final inspection"
    ]
  },
  {
    icon: "Maximize",
    title: "Windows",
    subtitle: "Installations",
    fullTitle: "Windows Installations",
    slug: "windows-installations",
    description: "Professional window installations to improve energy efficiency and enhance your property's value",
    detailedDescription: "Energy-efficient windows reduce heating and cooling costs while improving comfort. Our professional window installation services ensure proper fitting, weatherproofing, and energy efficiency for your building.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    angle: "rotate-1",
    image: "/gallery/windows/windows-1.jpg",
    features: [
      "Energy-efficient windows",
      "Professional installation",
      "Weatherproofing",
      "All window types",
      "Custom sizing available",
      "Warranty protection"
    ],
    process: [
      "Window measurement and selection",
      "Old window removal",
      "Opening preparation",
      "Professional installation",
      "Weatherproofing and sealing",
      "Final inspection and cleanup"
    ]
  },
];

export const featuredProjects: Project[] = [
  {
    title: "Modern Family Home",
    category: "Residential",
    location: "Downtown Area",
    year: "2024",
    image: "/gallery/caulking/caulking-3.jpg",
    stats: { size: "3,200 sqft", duration: "8 months" },
  },
  {
    title: "Office Complex",
    category: "Commercial",
    location: "Business District",
    year: "2024",
    image: "/assests/building-exterior-textured-brick-scaffolding.JPG",
    stats: { size: "45,000 sqft", duration: "14 months" },
  },
  {
    title: "Luxury Kitchen Remodel",
    category: "Renovation",
    location: "Suburban Home",
    year: "2023",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
    stats: { size: "650 sqft", duration: "6 weeks" },
  },
  {
    title: "Custom Deck & Patio",
    category: "Outdoor",
    location: "Residential",
    year: "2023",
    image: "/assests/rooftop-davit-equipment-landscape-view.JPG",
    stats: { size: "1,200 sqft", duration: "3 weeks" },
  },
];

export const stats: Stat[] = [
  { value: "6+", label: "Years Experience", icon: "TrendingUp", color: "text-emerald-400" },
  { value: "35+", label: "Projects Completed", icon: "Target", color: "text-blue-400" },
  { value: "100%", label: "Client Satisfaction", icon: "Star", color: "text-cyan-400" },
  { value: "24/7", label: "Support Available", icon: "Zap", color: "text-purple-400" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    project: "Kitchen Remodel",
    rating: 5,
    text: "Verlux transformed our kitchen beyond our wildest expectations. The attention to detail and professionalism is unmatched.",
    avatar: "SJ",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    project: "Commercial Build",
    rating: 5,
    text: "Outstanding work on our office space. They completed the project ahead of schedule and under budget. Exceptional!",
    avatar: "MC",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    project: "Home Renovation",
    rating: 5,
    text: "Working with Verlux was a dream. They brought our vision to life and exceeded every expectation along the way.",
    avatar: "ER",
    gradient: "from-purple-500 to-violet-500",
  },
];


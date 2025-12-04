import { Users, Trophy, Building2, Clock, ShieldCheck, HeartHandshake, Lightbulb, HardHat } from "lucide-react";

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

export interface Stat {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
}

export interface Value {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

export const companyStory = {
    title: "Building a Legacy of Excellence",
    subtitle: "From humble beginnings to industry leaders",
    description: [
        "Founded in 2005, Verlux began with a simple mission: to bring honesty, quality, and innovation to the construction industry. What started as a small team of three dedicated builders has grown into a premier construction firm serving the entire region.",
        "Over the past two decades, we've had the privilege of transforming skylines and building the foundations for countless businesses and families. Our journey has been defined not just by the structures we build, but by the relationships we've forged along the way.",
        "Today, Verlux stands as a testament to what can be achieved when you refuse to compromise on quality. We combine traditional craftsmanship with cutting-edge technology to deliver projects that stand the test of time."
    ],
    mission: "To deliver superior construction solutions that exceed expectations, foster innovation, and build lasting value for our clients and communities.",
    vision: "To be the most trusted and forward-thinking construction partner, setting new standards for quality and sustainability in the industry.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
};

export const stats: Stat[] = [
    {
        label: "Years of Experience",
        value: "18+",
        icon: Clock,
        description: "Delivering excellence since 2005"
    },
    {
        label: "Projects Completed",
        value: "500+",
        icon: Building2,
        description: "Across residential and commercial sectors"
    },
    {
        label: "Team Members",
        value: "45+",
        icon: Users,
        description: "Dedicated professionals and craftsmen"
    },
    {
        label: "Awards Won",
        value: "24",
        icon: Trophy,
        description: "Recognition for design and safety"
    }
];

export const values: Value[] = [
    {
        title: "Uncompromising Quality",
        description: "We believe that good enough is never enough. Every detail matters, and we hold ourselves to the highest standards of craftsmanship.",
        icon: ShieldCheck
    },
    {
        title: "Client-Centric Approach",
        description: "Your vision is our blueprint. We listen, collaborate, and communicate transparently throughout every stage of the project.",
        icon: HeartHandshake
    },
    {
        title: "Innovation & Sustainability",
        description: "We embrace new technologies and sustainable practices to build smarter, greener, and more efficient structures.",
        icon: Lightbulb
    },
    {
        title: "Safety First",
        description: "The safety of our team, clients, and the public is paramount. We maintain rigorous safety protocols on every job site.",
        icon: HardHat
    }
];

export const teamMembers: TeamMember[] = [
    {
        name: "James Sterling",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        bio: "With over 25 years in construction, James leads Verlux with a vision for innovation and a commitment to integrity.",
        socials: {
            linkedin: "#",
            email: "james@verlux.com"
        }
    },
    {
        name: "Sarah Chen",
        role: "Chief Architect",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        bio: "Sarah brings creative brilliance and technical precision, ensuring every project is both beautiful and functional.",
        socials: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Michael Rodriguez",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        bio: "Michael orchestrates our complex projects, ensuring they are delivered on time, on budget, and to spec.",
        socials: {
            linkedin: "#",
            email: "michael@verlux.com"
        }
    },
    {
        name: "Emily Watson",
        role: "Lead Interior Designer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        bio: "Emily has an eye for detail and a passion for creating spaces that inspire and delight.",
        socials: {
            linkedin: "#",
            twitter: "#"
        }
    }
];

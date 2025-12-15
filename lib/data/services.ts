import { Construction, Hammer, Brush, Building, Shield, Home, Component, Maximize } from 'lucide-react';

export interface ServiceDetail {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    content: string;
    features: string[];
    image: string;
    icon: any;
}

export const allServices: ServiceDetail[] = [
    {
        slug: 'balcony-restoration',
        title: 'Balcony Restoration',
        subtitle: 'Structural Safety',
        description: 'Restore the safety, structural integrity, and aesthetic appeal of your balconies.',
        content: 'Our balcony restoration services address everything from concrete deterioration to railing replacement. We ensure your outdoor spaces are safe, compliant with local codes, and visually stunning. Whether it is a high-rise residential complex or a private home, we have the expertise to handle projects of any scale.',
        features: [
            'Concrete repair and resurfacing',
            'Waterproofing systems',
            'Railing replacement and reinforcement',
            'Structural strengthening',
            'Code compliance inspections'
        ],
        image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop',
        icon: Component
    },
    {
        slug: 'masonry-restoration',
        title: 'Masonry Restoration',
        subtitle: 'Brick & Stone',
        description: 'Preserve the beauty and durability of brick, stone, and concrete structures.',
        content: 'Our masonry experts specialize in tuckpointing, brick replacement, and stone repair. We use traditional techniques combined with modern materials to ensure seamless repairs that stand the test of time and weather.',
        features: [
            'Tuckpointing and repointing',
            'Brick and stone replacement',
            'Historic preservation',
            'Chimney repair',
            'Cleaning and sealing'
        ],
        image: 'https://images.unsplash.com/photo-1628744448839-8fc79a8e0e7a?q=80&w=2070&auto=format&fit=crop',
        icon: Construction
    },
    {
        slug: 'caulking-sealant',
        title: 'Caulking and Sealant',
        subtitle: 'Waterproofing',
        description: 'Protect your building from water intrusion and air leaks with professional sealing.',
        content: 'Proper caulking and sealing are the first line of defense against the elements. We provide high-performance sealant applications for windows, doors, expansion joints, and precast panels to improve energy efficiency and prevent water damage.',
        features: [
            'Window and door perimeter sealing',
            'Expansion joint replacement',
            'Precast panel waterproofing',
            'Fire-stopping sealants',
            'Leak investigation'
        ],
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop',
        icon: Shield
    },
    {
        slug: 'architectural-coating',
        title: 'Architectural Coating',
        subtitle: 'Painting & Finish',
        description: 'Enhance your building\'s appearance and protection with premium coatings.',
        content: 'We offer a wide range of architectural coatings and painting services for exterior and interior surfaces. Our coatings not only beautify but also protect against UV rays, pollution, and harsh weather conditions.',
        features: [
            'Exterior painting and staining',
            'Elastomeric coatings',
            'Water-repellent coatings',
            'Anti-graffiti coatings',
            'Surface preparation and cleaning'
        ],
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop',
        icon: Brush
    },
    {
        slug: 'underground-garage',
        title: 'Garage Repairs',
        subtitle: 'Underground Care',
        description: 'Specialized repair solutions for underground parking structures.',
        content: 'Underground garages face unique challenges from structural load, moisture, and chemical exposure. We provide comprehensive repair services including ramp heating systems, structural slab repairs, and waterproofing to extend the lifespan of your facility.',
        features: [
            'Concrete delamination repair',
            'Expansion joint systems',
            'Traffic coating application',
            'Column and beam strengthening',
            'Water management systems'
        ],
        image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2085&auto=format&fit=crop',
        icon: Building
    },
    {
        slug: 'roof-replacement',
        title: 'Roof Replacement',
        subtitle: 'Top Protection',
        description: 'Complete roofing solutions for flat and sloped roof systems.',
        content: 'From emergency repairs to full replacements, our roofing division handles all types of roofing systems. We ensure a watertight implementation with high-quality materials and expert workmanship.',
        features: [
            'Flat roof systems (TPO, EPDM, Modified Bitumen)',
            'Metal roofing',
            'Shingle replacement',
            'Roof deck repair',
            'Insulation upgrades'
        ],
        image: 'https://primeroofingfl.com/wp-content/uploads/2025/05/roofing-contractor-at-work.jpg',
        icon: Home
    },
    {
        slug: 'stucco-installation',
        title: 'Stucco Installation',
        subtitle: 'Exterior Finish',
        description: 'Expert stucco application and repair for a durable, classic finish.',
        content: 'Our stucco specialists deliver flawless finishes for new construction and restoration projects. We address cracks, bulges, and water damage to restore the integrity and beauty of your building\'s exterior.',
        features: [
            'EIFS (Exterior Insulation and Finish Systems)',
            'Traditional hard coat stucco',
            'Crack repair and recoloring',
            'Texture matching',
            'Moisture barrier installation'
        ],
        image: 'https://images.unsplash.com/photo-1594916325514-6d9b26588825?q=80&w=1951&auto=format&fit=crop',
        icon: Hammer
    },
    {
        slug: 'siding-installation',
        title: 'Siding Installation',
        subtitle: 'Curb Appeal',
        description: 'Upgrade your curb appeal with modern siding materials and expert installation.',
        content: 'We install a variety of siding options including vinyl, fiber cement, and wood. Our team ensures proper flashing and insulation for a weather-tight and energy-efficient exterior.',
        features: [
            'Vinyl, wood, and fiber cement siding',
            'Soffit and fascia installation',
            'Trim and molding work',
            'Siding repair and cleaning',
            'Insulation installation'
        ],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        icon: Maximize
    },
    {
        slug: 'windows-installation',
        title: 'Windows Installations',
        subtitle: 'Energy Efficient',
        description: 'Energy-efficient window replacement and installation services.',
        content: 'Upgrade your property with high-performance windows that improve energy efficiency to reduce costs. We offer professional installation for all window styles, ensuring smooth operation and a perfect seal.',
        features: [
            'Energy-efficient window upgrades',
            'Custom window sizing',
            'Storefront glazing',
            'Window frame repair',
            'Sealant and flashing application'
        ],
        image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop',
        icon: Maximize
    }
];

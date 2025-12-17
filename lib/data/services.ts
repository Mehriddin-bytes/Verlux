import { Construction, Hammer, Brush, Building, Shield, Home, Component, Maximize } from 'lucide-react';

export interface ServiceDetail {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    content: string;
    extendedContent?: string;
    features: string[];
    benefits?: string[];
    process?: { step: number; title: string; description: string }[];
    image: string;
    images: string[];
    icon: any;
}

export const allServices: ServiceDetail[] = [
    {
        slug: 'balcony-restoration',
        title: 'Balcony Restoration',
        subtitle: 'Structural Safety',
        description: 'Restore the safety, structural integrity, and aesthetic appeal of your balconies.',
        content: 'Our balcony restoration services address everything from concrete deterioration to railing replacement. We ensure your outdoor spaces are safe, compliant with local codes, and visually stunning. Whether it is a high-rise residential complex or a private home, we have the expertise to handle projects of any scale.',
        extendedContent: 'Balcony restoration is critical for maintaining building safety and property value. Over time, balconies are exposed to harsh weather conditions, water infiltration, and structural stress that can compromise their integrity. Our comprehensive restoration process includes thorough inspection, structural assessment, and implementation of modern waterproofing and repair techniques. We work closely with building managers and property owners to minimize disruption while ensuring all work meets or exceeds building code requirements.',
        features: [
            'Concrete repair and resurfacing',
            'Waterproofing systems',
            'Railing replacement and reinforcement',
            'Structural strengthening',
            'Code compliance inspections',
            'Drainage system installation',
            'Surface coating and finishing'
        ],
        benefits: [
            'Enhanced safety and structural integrity',
            'Extended balcony lifespan by 15-20 years',
            'Improved property value and curb appeal',
            'Full compliance with building codes',
            'Reduced maintenance costs long-term',
            'Professional warranty coverage'
        ],
        process: [
            { step: 1, title: 'Inspection & Assessment', description: 'Comprehensive evaluation of structural integrity, water damage, and code compliance issues.' },
            { step: 2, title: 'Design & Planning', description: 'Detailed restoration plan with material specifications and timeline development.' },
            { step: 3, title: 'Preparation & Safety', description: 'Site setup with proper safety measures, access control, and protection of adjacent areas.' },
            { step: 4, title: 'Structural Repairs', description: 'Concrete repair, reinforcement installation, and structural strengthening as needed.' },
            { step: 5, title: 'Waterproofing', description: 'Application of advanced waterproofing membranes and drainage systems.' },
            { step: 6, title: 'Finishing & Testing', description: 'Surface finishing, railing installation, and final inspection with quality assurance.' }
        ],
        image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2032&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
        ],
        icon: Component
    },
    {
        slug: 'masonry-restoration',
        title: 'Masonry Restoration',
        subtitle: 'Brick & Stone',
        description: 'Preserve the beauty and durability of brick, stone, and concrete structures.',
        content: 'Our masonry experts specialize in tuckpointing, brick replacement, and stone repair. We use traditional techniques combined with modern materials to ensure seamless repairs that stand the test of time and weather.',
        extendedContent: 'Masonry restoration requires a delicate balance between preserving historical character and ensuring structural stability. Our skilled craftsmen have extensive experience working with various masonry types including brick, stone, terra cotta, and concrete block. We carefully match existing materials and mortar colors to create seamless repairs that maintain architectural integrity. Our restoration work not only improves appearance but also addresses underlying issues like water infiltration, freeze-thaw damage, and structural movement.',
        features: [
            'Tuckpointing and repointing',
            'Brick and stone replacement',
            'Historic preservation',
            'Chimney repair',
            'Cleaning and sealing',
            'Mortar matching and color analysis',
            'Structural stabilization'
        ],
        benefits: [
            'Preserves architectural heritage',
            'Prevents further deterioration',
            'Improves weather resistance',
            'Enhances property aesthetics',
            'Increases structural stability',
            'Maintains historical accuracy'
        ],
        process: [
            { step: 1, title: 'Material Analysis', description: 'Examination of existing masonry, mortar composition, and identification of deterioration causes.' },
            { step: 2, title: 'Mortar Matching', description: 'Custom mortar formulation to match original color, texture, and composition.' },
            { step: 3, title: 'Selective Removal', description: 'Careful removal of damaged or deteriorated masonry while preserving sound materials.' },
            { step: 4, title: 'Repair & Replacement', description: 'Precise installation of matching materials using traditional and modern techniques.' },
            { step: 5, title: 'Pointing & Finishing', description: 'Professional pointing with matched mortar and appropriate tooling for texture.' },
            { step: 6, title: 'Protection & Sealing', description: 'Application of appropriate sealers and water repellents for long-term protection.' }
        ],
        image: 'https://images.unsplash.com/photo-1628744448839-8fc79a8e0e7a?q=80&w=2070&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1628744448839-8fc79a8e0e7a?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2032&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
        ],
        icon: Construction
    },
    {
        slug: 'caulking-sealant',
        title: 'Caulking and Sealant',
        subtitle: 'Waterproofing',
        description: 'Protect your building from water intrusion and air leaks with professional sealing.',
        content: 'Proper caulking and sealing are the first line of defense against the elements. We provide high-performance sealant applications for windows, doors, expansion joints, and precast panels to improve energy efficiency and prevent water damage.',
        extendedContent: 'Effective caulking and sealant application is essential for building envelope performance. Water infiltration through failed seals can cause extensive damage including mold growth, structural deterioration, and interior damage. We use premium-grade sealants specifically formulated for different applications and environmental conditions. Our technicians are trained in proper surface preparation, joint design, and application techniques to ensure long-lasting, watertight seals that maintain flexibility and adhesion over time.',
        features: [
            'Window and door perimeter sealing',
            'Expansion joint replacement',
            'Precast panel waterproofing',
            'Fire-stopping sealants',
            'Leak investigation',
            'Silicone and polyurethane applications',
            'Backer rod installation'
        ],
        benefits: [
            'Prevents water damage and leaks',
            'Improves energy efficiency',
            'Reduces heating and cooling costs',
            'Extends building component lifespan',
            'Prevents mold and moisture issues',
            'Maintains building envelope integrity'
        ],
        process: [
            { step: 1, title: 'Inspection & Testing', description: 'Comprehensive evaluation of existing seals, leak detection, and moisture testing.' },
            { step: 2, title: 'Surface Preparation', description: 'Removal of old sealant, cleaning, and proper surface preparation for adhesion.' },
            { step: 3, title: 'Joint Design', description: 'Proper joint sizing, backer rod installation, and primer application as needed.' },
            { step: 4, title: 'Sealant Application', description: 'Professional application using appropriate tools and techniques for uniform coverage.' },
            { step: 5, title: 'Tooling & Finishing', description: 'Proper tooling to ensure adhesion and create weather-resistant finish.' },
            { step: 6, title: 'Quality Inspection', description: 'Final inspection and testing to ensure proper installation and performance.' }
        ],
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop'
        ],
        icon: Shield
    },
    {
        slug: 'architectural-coating',
        title: 'Architectural Coating',
        subtitle: 'Painting & Finish',
        description: 'Enhance your building\'s appearance and protection with premium coatings.',
        content: 'We offer a wide range of architectural coatings and painting services for exterior and interior surfaces. Our coatings not only beautify but also protect against UV rays, pollution, and harsh weather conditions.',
        extendedContent: 'Architectural coatings serve dual purposes: aesthetic enhancement and protective barrier. Our coating systems are selected based on substrate type, environmental conditions, and performance requirements. We work with leading manufacturers to provide coatings that offer superior durability, color retention, and resistance to fading, chalking, and peeling. From high-performance elastomeric systems for concrete to specialized coatings for metal and wood, we ensure proper surface preparation and application for optimal results.',
        features: [
            'Exterior painting and staining',
            'Elastomeric coatings',
            'Water-repellent coatings',
            'Anti-graffiti coatings',
            'Surface preparation and cleaning',
            'Color matching and custom finishes',
            'Primer and topcoat systems'
        ],
        benefits: [
            'Enhanced curb appeal and aesthetics',
            'Protection against weather damage',
            'Extended surface lifespan',
            'Reduced maintenance requirements',
            'Improved energy efficiency',
            'Increased property value'
        ],
        process: [
            { step: 1, title: 'Surface Assessment', description: 'Evaluation of substrate condition, existing coatings, and environmental factors.' },
            { step: 2, title: 'Preparation Planning', description: 'Development of surface preparation protocol and coating system selection.' },
            { step: 3, title: 'Surface Preparation', description: 'Cleaning, scraping, sanding, and repair of damaged areas for optimal adhesion.' },
            { step: 4, title: 'Primer Application', description: 'Application of appropriate primer to ensure proper adhesion and protection.' },
            { step: 5, title: 'Coating Application', description: 'Professional application of topcoats using spray, brush, or roller techniques.' },
            { step: 6, title: 'Final Inspection', description: 'Quality check for coverage, uniformity, and overall finish appearance.' }
        ],
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1628744448839-8fc79a8e0e7a?q=80&w=2070&auto=format&fit=crop'
        ],
        icon: Brush
    },
    {
        slug: 'underground-garage',
        title: 'Garage Repairs',
        subtitle: 'Underground Care',
        description: 'Specialized repair solutions for underground parking structures.',
        content: 'Underground garages face unique challenges from structural load, moisture, and chemical exposure. We provide comprehensive repair services including ramp heating systems, structural slab repairs, and waterproofing to extend the lifespan of your facility.',
        extendedContent: 'Underground parking structures require specialized expertise due to constant exposure to moisture, de-icing chemicals, and heavy traffic loads. These conditions accelerate deterioration of concrete, steel reinforcement, and waterproofing systems. Our comprehensive approach addresses structural integrity, waterproofing, and surface protection to ensure safe, functional parking facilities. We work efficiently to minimize disruption to building operations while implementing long-lasting repair solutions.',
        features: [
            'Concrete delamination repair',
            'Expansion joint systems',
            'Traffic coating application',
            'Column and beam strengthening',
            'Water management systems',
            'Ramp heating installation',
            'Crack injection and repair'
        ],
        benefits: [
            'Extended facility lifespan',
            'Improved safety for users',
            'Reduced long-term maintenance',
            'Enhanced waterproofing',
            'Better traffic flow and usability',
            'Protection against freeze-thaw damage'
        ],
        process: [
            { step: 1, title: 'Structural Assessment', description: 'Comprehensive evaluation of concrete condition, reinforcement, and waterproofing systems.' },
            { step: 2, title: 'Moisture Analysis', description: 'Testing for water infiltration sources and moisture content in concrete.' },
            { step: 3, title: 'Repair Planning', description: 'Development of phased repair plan to minimize disruption to operations.' },
            { step: 4, title: 'Structural Repairs', description: 'Concrete repair, reinforcement protection, and structural strengthening.' },
            { step: 5, title: 'Waterproofing', description: 'Application of waterproofing membranes and drainage improvements.' },
            { step: 6, title: 'Surface Protection', description: 'Installation of traffic coatings, ramp heating, and protective systems.' }
        ],
        image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2085&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2085&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop'
        ],
        icon: Building
    },
    {
        slug: 'roof-replacement',
        title: 'Roof Replacement',
        subtitle: 'Top Protection',
        description: 'Complete roofing solutions for flat and sloped roof systems.',
        content: 'From emergency repairs to full replacements, our roofing division handles all types of roofing systems. We ensure a watertight implementation with high-quality materials and expert workmanship.',
        extendedContent: 'A properly installed and maintained roof is essential for protecting your entire building structure. Our roofing services cover everything from minor repairs to complete system replacement. We work with all major roofing materials and systems, selecting the best solution based on building design, climate, budget, and performance requirements. Our certified installers ensure proper installation techniques, flashing details, and integration with building systems for optimal performance and longevity.',
        features: [
            'Flat roof systems (TPO, EPDM, Modified Bitumen)',
            'Metal roofing',
            'Shingle replacement',
            'Roof deck repair',
            'Insulation upgrades',
            'Gutter and drainage systems',
            'Roof maintenance programs'
        ],
        benefits: [
            'Complete weather protection',
            'Improved energy efficiency',
            'Extended roof lifespan',
            'Reduced maintenance costs',
            'Enhanced building value',
            'Comprehensive warranty coverage'
        ],
        process: [
            { step: 1, title: 'Roof Inspection', description: 'Thorough assessment of existing roof condition, deck, and underlying structure.' },
            { step: 2, title: 'System Design', description: 'Selection of appropriate roofing system and development of installation plan.' },
            { step: 3, title: 'Preparation', description: 'Removal of existing roofing, deck repair, and surface preparation.' },
            { step: 4, title: 'Installation', description: 'Professional installation of new roofing system with proper flashing and details.' },
            { step: 5, title: 'Quality Assurance', description: 'Inspection and testing to ensure watertight installation and proper performance.' },
            { step: 6, title: 'Maintenance Plan', description: 'Development of ongoing maintenance schedule to maximize roof lifespan.' }
        ],
        image: 'https://primeroofingfl.com/wp-content/uploads/2025/05/roofing-contractor-at-work.jpg',
        images: [
            'https://primeroofingfl.com/wp-content/uploads/2025/05/roofing-contractor-at-work.jpg',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1628744448839-8fc79a8e0e7a?q=80&w=2070&auto=format&fit=crop'
        ],
        icon: Home
    },
    {
        slug: 'stucco-installation',
        title: 'Stucco Installation',
        subtitle: 'Exterior Finish',
        description: 'Expert stucco application and repair for a durable, classic finish.',
        content: 'Our stucco specialists deliver flawless finishes for new construction and restoration projects. We address cracks, bulges, and water damage to restore the integrity and beauty of your building\'s exterior.',
        extendedContent: 'Stucco provides a durable, attractive exterior finish that has been used for centuries. Modern stucco systems offer improved performance through better moisture management and insulation integration. Our team specializes in both traditional hard-coat stucco and modern EIFS systems, ensuring proper installation techniques for optimal performance. We carefully match existing textures and colors for seamless repairs and provide comprehensive solutions for moisture-related issues.',
        features: [
            'EIFS (Exterior Insulation and Finish Systems)',
            'Traditional hard coat stucco',
            'Crack repair and recoloring',
            'Texture matching',
            'Moisture barrier installation',
            'Color matching and custom textures',
            'Structural repair and reinforcement'
        ],
        benefits: [
            'Durable and long-lasting finish',
            'Excellent weather resistance',
            'Energy-efficient insulation options',
            'Versatile design possibilities',
            'Low maintenance requirements',
            'Fire-resistant properties'
        ],
        process: [
            { step: 1, title: 'Surface Evaluation', description: 'Assessment of substrate condition, existing stucco, and moisture issues.' },
            { step: 2, title: 'Preparation', description: 'Surface cleaning, repair of damaged areas, and installation of moisture barriers.' },
            { step: 3, title: 'Base Coat Application', description: 'Application of scratch and brown coats with proper curing.' },
            { step: 4, title: 'Finish Application', description: 'Application of finish coat with desired texture and color.' },
            { step: 5, title: 'Texture Matching', description: 'Precise matching of existing textures for seamless repairs.' },
            { step: 6, title: 'Sealing & Protection', description: 'Application of appropriate sealers and protective coatings.' }
        ],
        image: 'https://images.unsplash.com/photo-1594916325514-6d9b26588825?q=80&w=1951&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1594916325514-6d9b26588825?q=80&w=1951&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1628744448839-8fc79a8e0e7a?q=80&w=2070&auto=format&fit=crop'
        ],
        icon: Hammer
    },
    {
        slug: 'siding-installation',
        title: 'Siding Installation',
        subtitle: 'Curb Appeal',
        description: 'Upgrade your curb appeal with modern siding materials and expert installation.',
        content: 'We install a variety of siding options including vinyl, fiber cement, and wood. Our team ensures proper flashing and insulation for a weather-tight and energy-efficient exterior.',
        extendedContent: 'Siding serves as both a protective barrier and aesthetic element for your building. Modern siding materials offer improved durability, low maintenance, and better energy performance compared to traditional options. We work with premium materials from leading manufacturers, ensuring proper installation techniques that maximize performance and longevity. Our installation process includes proper moisture management, insulation integration, and attention to detail for a flawless finish.',
        features: [
            'Vinyl, wood, and fiber cement siding',
            'Soffit and fascia installation',
            'Trim and molding work',
            'Siding repair and cleaning',
            'Insulation installation',
            'Color and style selection',
            'Warranty-backed installation'
        ],
        benefits: [
            'Enhanced curb appeal and value',
            'Improved energy efficiency',
            'Low maintenance requirements',
            'Weather and impact resistance',
            'Long-lasting durability',
            'Wide variety of styles and colors'
        ],
        process: [
            { step: 1, title: 'Material Selection', description: 'Consultation to select appropriate siding material based on budget and preferences.' },
            { step: 2, title: 'Measurement & Ordering', description: 'Precise measurements and ordering of materials with proper allowances.' },
            { step: 3, title: 'Preparation', description: 'Removal of old siding, repair of sheathing, and installation of moisture barriers.' },
            { step: 4, title: 'Installation', description: 'Professional installation with proper flashing, fastening, and alignment.' },
            { step: 5, title: 'Trim & Details', description: 'Installation of trim, corners, and finishing details for complete look.' },
            { step: 6, title: 'Final Inspection', description: 'Quality check and cleanup to ensure perfect installation and appearance.' }
        ],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2076&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1628744448839-8fc79a8e0e7a?q=80&w=2070&auto=format&fit=crop'
        ],
        icon: Maximize
    },
    {
        slug: 'windows-installation',
        title: 'Windows Installations',
        subtitle: 'Energy Efficient',
        description: 'Energy-efficient window replacement and installation services.',
        content: 'Upgrade your property with high-performance windows that improve energy efficiency to reduce costs. We offer professional installation for all window styles, ensuring smooth operation and a perfect seal.',
        extendedContent: 'Modern windows are a critical component of building energy performance and comfort. Our window installation services include everything from single window replacements to complete building upgrades. We work with energy-efficient window systems featuring low-E coatings, multiple panes, and advanced framing materials. Proper installation is essential for performance, and our certified installers ensure correct sizing, flashing, and sealing for optimal energy efficiency and weather protection.',
        features: [
            'Energy-efficient window upgrades',
            'Custom window sizing',
            'Storefront glazing',
            'Window frame repair',
            'Sealant and flashing application',
            'Hardware and operation systems',
            'Window maintenance programs'
        ],
        benefits: [
            'Reduced energy costs',
            'Improved comfort and temperature control',
            'Enhanced natural lighting',
            'Reduced noise transmission',
            'Increased property value',
            'Better security features'
        ],
        process: [
            { step: 1, title: 'Window Assessment', description: 'Evaluation of existing windows, measurements, and energy performance analysis.' },
            { step: 2, title: 'Product Selection', description: 'Selection of appropriate window systems based on performance and budget.' },
            { step: 3, title: 'Custom Ordering', description: 'Precise measurements and ordering of custom-sized windows if needed.' },
            { step: 4, title: 'Removal & Preparation', description: 'Careful removal of old windows and preparation of openings.' },
            { step: 5, title: 'Installation', description: 'Professional installation with proper flashing, sealing, and alignment.' },
            { step: 6, title: 'Testing & Finishing', description: 'Operation testing, final adjustments, and interior/exterior finishing.' }
        ],
        image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop'
        ],
        icon: Maximize
    }
];

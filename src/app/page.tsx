"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Camera, Image, Package, TrendingUp, Users, Quote } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Studio"
          button={{
            text: "Contact",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Capturing Life's Precious Moments"
          description="Professional photography services for weddings, portraits, and special events. Creating timeless memories with artistic vision and technical excellence."
          tag="Professional Photography"
          tagIcon={Camera}
          imageSrc="https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Stylish woman in black leather outfit reclines in a minimalist studio with open space."
          imagePosition="right"
          buttons={[
            {
              text: "View Portfolio",
              href: "feature"
            },
            {
              text: "Book Session",
              href: "contact"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="About My Work"
          description={[
            "With over a decade of experience capturing life's most important moments, I specialize in creating images that tell your unique story.",
            "My approach combines technical expertise with artistic vision, ensuring every photograph becomes a treasured memory that lasts a lifetime."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "team"
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Portfolio Gallery"
          description="Explore my diverse collection of photography work across different styles and occasions"
          tag="My Work"
          tagIcon={Image}
          features={[
            {
              title: "Wedding Photography",
              description: "Romantic and elegant wedding photography capturing your special day with artistic flair",
              imageSrc: "https://images.pexels.com/photos/34351933/pexels-photo-34351933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Bride and groom share a romantic moment on a country road at sunset."
            },
            {
              title: "Portrait Sessions",
              description: "Professional portrait photography for individuals, families, and corporate headshots",
              imageSrc: "https://images.pexels.com/photos/7205283/pexels-photo-7205283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Photographer capturing model during indoor photo session with natural lighting."
            },
            {
              title: "Landscape & Nature",
              description: "Stunning landscape photography showcasing the beauty of natural environments",
              imageSrc: "https://images.pexels.com/photos/34366074/pexels-photo-34366074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "stunning landscape photography nature - Photo by Rui Ma"
            },
            {
              title: "Event Photography",
              description: "Dynamic event photography for corporate functions, celebrations, and special occasions",
              imageSrc: "https://images.pexels.com/photos/34351933/pexels-photo-34351933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Bride and groom share a romantic moment on a country road at sunset."
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Photography Packages"
          description="Choose from our carefully crafted photography packages designed to meet your specific needs"
          tag="Services"
          tagIcon={Package}
          products={[
            {
              id: "wedding-package",
              brand: "Studio Premium",
              name: "Wedding Photography Package",
              price: "$2,500",
              rating: 5,
              reviewCount: "150+",
              imageSrc: "https://images.pexels.com/photos/417810/pexels-photo-417810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "An elegant red photobook beside a teal decor piece, perfect for wedding memories."
            },
            {
              id: "portrait-package",
              brand: "Studio Classic",
              name: "Portrait Session Package",
              price: "$450",
              rating: 5,
              reviewCount: "200+",
              imageSrc: "https://images.pexels.com/photos/7205283/pexels-photo-7205283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Photographer capturing model during indoor photo session with natural lighting."
            },
            {
              id: "event-package",
              brand: "Studio Professional",
              name: "Event Photography Package",
              price: "$800",
              rating: 5,
              reviewCount: "80+",
              imageSrc: "https://images.pexels.com/photos/6518727/pexels-photo-6518727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Joyful office holiday party featuring people in ugly Christmas sweaters having fun and laughing together."
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Photography Excellence"
          description="Numbers that reflect our commitment to exceptional photography and client satisfaction"
          tag="Our Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Weddings Captured"
            },
            {
              id: "2",
              value: "98%",
              description: "Client Satisfaction Rate"
            },
            {
              id: "3",
              value: "10+",
              description: "Years of Experience"
            },
            {
              id: "4",
              value: "1000+",
              description: "Portrait Sessions"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Team"
          description="The passionate professionals behind every perfect shot"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Lead Photographer",
              description: "Award-winning photographer with 12 years of experience specializing in weddings and portraits. Passionate about capturing authentic emotions and timeless moments.",
              imageSrc: "https://images.pexels.com/photos/34346054/pexels-photo-34346054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of a young man holding a camera outdoors, with blurred background.",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/sarahjohnsonphoto"
                },
                {
                  icon: "Globe",
                  url: "https://sarahjohnsonphotography.com"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Photography Assistant",
              description: "Creative assistant and second shooter with expertise in event photography and post-production. Brings fresh perspectives to every shoot.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Top view of a stylish home office desk with a laptop, planner, and coffee cup, showing hands on a blueprint.",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/michaelchenphoto"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real testimonials from couples, families, and businesses who trusted us with their precious moments"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Emily Rodriguez",
              role: "Bride",
              company: "Wedding Client",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34401847/pexels-photo-34401847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Bride and Groom Holding Hands"
            },
            {
              id: "2",
              name: "David Kim",
              role: "Marketing Director",
              company: "TechCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businessman in suit shaking hands at office desk, symbolizing successful partnership."
            },
            {
              id: "3",
              name: "Jennifer Martinez",
              role: "Mother",
              company: "Family Client",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Charming portrait of a young boy with curly hair and striking eyes."
            },
            {
              id: "4",
              name: "Robert Wilson",
              role: "Event Coordinator",
              company: "Corporate Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7648311/pexels-photo-7648311.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Two professionals interacting at a catered business event with coffee and fruit."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Create Something Beautiful Together"
          description="Ready to capture your special moments? Get in touch to discuss your photography needs and let's bring your vision to life."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "event_date",
              type: "date",
              placeholder: "Event Date",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your photography needs, event details, or any specific requests...",
            rows: 6,
            required: true
          }}
          buttonText="Send Inquiry"
          imageSrc="https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Stylish woman in black leather outfit reclines in a minimalist studio with open space."
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Studio"
          columns={[
            {
              items: [
                {
                  label: "Portfolio",
                  href: "feature"
                },
                {
                  label: "Services",
                  href: "product"
                },
                {
                  label: "About",
                  href: "about"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Testimonials",
                  href: "testimonial"
                },
                {
                  label: "Team",
                  href: "team"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
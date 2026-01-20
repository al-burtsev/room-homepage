import imgMobile1 from "../assets/images/mobile-image-hero-1.jpg";
import imgDesktop1 from "../assets/images/desktop-image-hero-1.jpg";
import imgMobile2 from "../assets/images/mobile-image-hero-2.jpg";
import imgDesktop2 from "../assets/images/desktop-image-hero-2.jpg";
import imgMobile3 from "../assets/images/mobile-image-hero-3.jpg";
import imgDesktop3 from "../assets/images/desktop-image-hero-3.jpg";

export const heroData = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
    image: {
      mobile: imgMobile1.src,
      desktop: imgDesktop1.src,
    },
    alt: "Modern living room interior with designer white armchair and observation table.",
  },
  {
    id: 2,
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
    image: {
      mobile: imgMobile2.src,
      desktop: imgDesktop2.src,
    },
    alt: "A row of colorful stylish chairs in a modern showroom",
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
    image: {
      mobile: imgMobile3.src,
      desktop: imgDesktop3.src,
    },
    alt: "Detail of a black folding chair made of high-quality materials against a light wall",
  },
];

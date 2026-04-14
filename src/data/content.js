import margherita from "../pizzas/margherita.jpg";
import focaccia from "../pizzas/focaccia.jpg";
import funghi from "../pizzas/funghi.jpg";
import salamino from "../pizzas/salamino.jpg";
import prosciutto from "../pizzas/prosciutto.jpg";
import spinaci from "../pizzas/spinaci.jpg";

export const features = [
  {
    title: "Smart cravings",
    description:
      "AI-inspired recommendations surface the perfect pizza combo, sides, and drink pairing in seconds.",
    icon: "sparkles",
  },
  {
    title: "Live kitchen tracking",
    description:
      "Watch every order move from oven to doorstep with polished, real-time delivery updates.",
    icon: "radar",
  },
  {
    title: "Tap-to-reorder",
    description:
      "Save favorite pizzas, crusts, and toppings so beginner users can repeat their best order instantly.",
    icon: "rocket",
  },
  {
    title: "Friendly checkout",
    description:
      "Split payments, share carts, and manage family pizza nights without switching apps.",
    icon: "users",
  },
];

export const steps = [
  {
    number: "01",
    title: "Pick your slice",
    description:
      "Browse chef-curated pizzas, discover ingredient highlights, and build a custom order without friction.",
  },
  {
    number: "02",
    title: "Track the heat",
    description:
      "Follow prep, oven time, and rider updates through smooth status cues designed to feel fast and clear.",
  },
  {
    number: "03",
    title: "Enjoy the moment",
    description:
      "Get doorstep notifications, one-tap support, and loyalty rewards built into the experience.",
  },
];

export const pizzas = [
  {
    title: "Classic Margherita",
    subtitle: "Fresh basil, mozzarella, and bright tomato sauce.",
    image: margherita,
    details:
      "A balanced classic with slow-cooked tomato sauce, fresh mozzarella, basil leaves, and a light olive oil finish.",
    price: "$14",
    tag: "Simple favorite",
    ingredients: ["Tomato sauce", "Fior di latte", "Fresh basil", "Olive oil"],
  },
  {
    title: "Garden Spinaci",
    subtitle: "Spinach, ricotta, roasted garlic, and herbs.",
    image: spinaci,
    details:
      "A softer, greener pie with creamy ricotta, sauteed spinach, roasted garlic, and a herb finish that feels fresh.",
    price: "$17",
    tag: "Fresh and creamy",
    ingredients: ["Spinach", "Ricotta", "Roasted garlic", "Herb oil"],
  },
  {
    title: "Woodfired Funghi",
    subtitle: "Earthy mushrooms with caramelized onion and truffle oil.",
    image: funghi,
    details:
      "Built for mushroom lovers, this pie layers caramelized onion, melty cheese, and a truffle aroma over a crisp crust.",
    price: "$19",
    tag: "Chef favorite",
    ingredients: ["Mushrooms", "Caramelized onion", "Mozzarella", "Truffle oil"],
  },
  {
    title: "Fire Salamino",
    subtitle: "Pepperoni heat balanced with whipped mozzarella.",
    image: salamino,
    details:
      "Bold, spicy, and slightly smoky with crisped pepperoni slices and whipped cheese that smooths out the heat.",
    price: "$18",
    tag: "Spicy pick",
    ingredients: ["Pepperoni", "Whipped mozzarella", "Chili flakes", "Tomato sauce"],
  },
  {
    title: "Burrata Prosciutto",
    subtitle: "Prosciutto, arugula, burrata, and olive oil drizzle.",
    image: prosciutto,
    details:
      "An elegant finish of burrata and prosciutto with peppery arugula for guests who want a premium dinner pie.",
    price: "$22",
    tag: "Luxury slice",
    ingredients: ["Prosciutto", "Burrata", "Arugula", "Olive oil"],
  },
  // {
  //   title: "Rosemary Focaccia",
  //   subtitle: "A warm starter with sea salt crunch and airy texture.",
  //   image: focaccia,
  //   details:
  //     "An airy focaccia starter with rosemary, olive oil, and sea salt, perfect for sharing while the mains are on the way.",
  //   price: "$11",
  //   tag: "Warm starter",
  //   ingredients: ["Rosemary", "Sea salt", "Olive oil", "Stone-baked dough"],
  // },
];

export const heroSlides = [
  {
    label: "Top menu for today",
    title: "Smoked Burrata Supreme",
    description:
      "Creamy burrata, blistered tomato, hot honey, and basil layered over a crisp woodfired base.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80",
    prepTime: "14 mins",
    accent: "Hot honey finish",
  },
  {
    label: "Chef's pick",
    title: "Truffle Funghi Deluxe",
    description:
      "A rich mushroom pizza with roasted garlic, truffle oil, and a soft mozzarella finish made for slow bites.",
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=1400&q=80",
    prepTime: "18 mins",
    accent: "Earthy and elegant",
  },
  {
    label: "Crowd favorite",
    title: "Spicy Pepperoni Glow",
    description:
      "Pepperoni crisps, whipped cheese, chili flakes, and a balanced tomato sauce for a bold late-night order.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80",
    prepTime: "16 mins",
    accent: "Best seller tonight",
  },
];

export const testimonials = [
  {
    quote:
      "The app feels premium but simple. I placed my first order in under a minute and tracked it the whole way.",
    name: "Maya Patel",
    role: "First-time customer",
  },
  {
    quote:
      "It has the polish of a big delivery platform, but the ordering flow is so much calmer and easier to use.",
    name: "Jordan Lee",
    role: "Product designer",
  },
  {
    quote:
      "The saved orders and live status updates made family pizza night feel organized instead of chaotic.",
    name: "Tolu Adebayo",
    role: "Busy parent",
  },
];

export const footerLinks = [
  { label: "Product", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Showcase", href: "#showcase" },
  { label: "Testimonials", href: "#testimonials" },
];

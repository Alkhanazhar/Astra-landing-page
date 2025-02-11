import { BrainCircuit, Edit, Grab, Lightbulb, Lock, Monitor, Palette, Rocket, RocketIcon, Search, Server, ShoppingBag, Zap } from "lucide-react"

export const Brand = "Astra"

export const perks = [
    {
        icon: Lock,
        title: "Sign Up",
        info: `Create your free account to get started with ${Brand}`,
    },
    {
        icon: Edit,
        title: "Customize",
        info: "Choose your template to customize your website"
    },
    {
        icon: Rocket,
        title: "Launch",
        info: "Publish your website and share it with world"
    },
]

export const features = [
    {
        icon: Zap,
        title: "Fast Setup",
        info: "Get your website up and running in minutes with our intuitive AI-powered builder.",
    },
    {
        icon: Palette,
        title: "Customizable Templates",
        info: "Choose from a variety of stunning templates and customize them to suit your brand.",
    },
    {
        icon: Search,
        title: "SEO Optimized",
        info: "Built-in SEO features ensure your website ranks well on search engines.",
    },
    {
        icon: Monitor,
        title: "Responsive Design",
        info: "Your website will look great on any device, from desktops to mobile phones.",
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce Ready",
        info: "Start selling online with our e-commerce features and integrations.",
    },
    {
        icon: Server,
        title: "Secure Hosting",
        info: "Enjoy peace of mind with secure and reliable hosting for your website.",
    },
];

export const pricingCards = [
    {
        title: "Starter",
        description: "Perfect for trying out plura",
        price: "Free",
        duration: "",
        highlight: "Key features",
        buttonText: "Start for free",
        features: ["Limited projects", "1 Team member", "Basic features"],
        priceId: "",
    },
    {
        title: "Unlimited Saas",
        description: "The ultimate agency kit",
        price: "$199",
        duration: "month",
        highlight: "Key features",
        buttonText: "Upgrade to Pro",
        features: ["Unlimited projects", "5 Team members", "Advanced design tools", "Customizable domain"],
        priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
    },
    {
        title: "Enterprise",
        description: "For serious agency owners",
        price: "$399",
        duration: "month",
        highlight: "Everything in Starter, plus",
        buttonText: "Upgrade to Enterprise",
        features: ["Unlimited projects", "Unlimited Team members", "Custom branding", "Priority support (24/7)"],
        priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
    },
];

export const bentoCards = [
    {
        title: 'Start with Inspiration',
        info: 'Browse our vast library of pre-designed templates or upload your own images.',
        imgSrc: Lightbulb, // Lightbulb or Inspiration icon
        alt: 'Inspiration for website creation'
    },
    {
        title: 'AI Assists Your Vision',
        info: 'Our intelligent AI tailors suggestions and functionalities based on your goals.',
        imgSrc: BrainCircuit, // AI Assistant icon
        alt: 'AI website building assistant'
    },
    {
        title: 'Drag & Drop Customization',
        info: 'Effortlessly personalize your website with our intuitive drag-and-drop editor.',
        imgSrc: Grab, // Drag and Drop icon or hand editing a website
        alt: 'Website customization with drag and drop'
    },
    {
        title: 'Launch & Shine Online',
        info: 'Publish your website with a single click and take your brand to the world.',
        imgSrc: RocketIcon, // Rocket launching or website going live
        alt: 'Website launch and publication'
    },
];

export const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
    },
];
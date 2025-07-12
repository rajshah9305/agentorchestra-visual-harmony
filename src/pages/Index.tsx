import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Menu,
  X,
  Star,
  Twitter,
  Github,
  Linkedin
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Orchestration",
      description: "Intelligent coordination of multiple AI agents with advanced machine learning algorithms."
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized infrastructure delivering real-time responses and seamless agent coordination."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance certifications."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and performance metrics for all your AI agent activities."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams with role-based access control and collaborative workflows."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy and manage AI agents across multiple regions with automatic scaling."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with AI orchestration",
      features: [
        "Up to 5 AI agents",
        "10,000 API calls/month",
        "Basic analytics",
        "Email support",
        "Standard security"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 25 AI agents",
        "100,000 API calls/month",
        "Advanced analytics",
        "Priority support",
        "Enhanced security",
        "Custom integrations"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited AI agents",
        "Unlimited API calls",
        "White-label solution",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom development"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background font-opensans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-montserrat font-bold text-foreground">
                  AgentOrchestra
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                  <Button size="sm">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 lg:px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  AI Orchestration Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-montserrat font-bold text-foreground leading-tight">
                  Orchestrate Your AI Agents with{" "}
                  <span className="text-primary">Precision</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Empower your business with intelligent AI agent coordination. 
                  Scale, optimize, and automate with enterprise-grade reliability.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" className="font-montserrat">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="font-montserrat">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="AgentOrchestra AI Platform"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-montserrat font-bold text-foreground">
              Powerful Features for Modern AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to orchestrate, monitor, and scale your AI agents 
              in one comprehensive platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-montserrat font-bold text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features 
              with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-2 ${
                  plan.isPopular 
                    ? 'border-primary shadow-2xl scale-105' 
                    : 'border-border shadow-lg'
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground font-semibold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="font-montserrat text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <Button 
                    className="w-full font-montserrat" 
                    variant={plan.isPopular ? "default" : "outline"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-montserrat font-bold">
              Ready to Transform Your AI Operations?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of companies using AgentOrchestra to scale their AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="font-montserrat text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="font-montserrat text-lg px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-montserrat font-bold">
                  AgentOrchestra
                </span>
              </div>
              <p className="text-background/70">
                Orchestrating the future of AI agent coordination with precision and scale.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
            <p>&copy; 2024 AgentOrchestra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

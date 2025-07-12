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
  Twitter,
  Github,
  Linkedin,
  Layers,
  Lock
} from "lucide-react";
import { useState, useEffect, useRef, Suspense } from "react";
import * as THREE from 'three';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-dmsans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-playfair font-bold text-card-foreground">
                  <span className="warm-accent">Agent</span>Orchestra
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#gemini-demo" className="nav-link">
                ✨ Live Demo
              </a>
              <a href="#testimonials" className="nav-link">
                Testimonials
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <Button variant="outline" size="sm" className="border-border hover:bg-muted/50">
                Login
              </Button>
              <Button size="sm" className="cta-button-premium">
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-card-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="nav-link">
                  Features
                </a>
                <a href="#gemini-demo" className="nav-link">
                  ✨ Live Demo
                </a>
                <a href="#testimonials" className="nav-link">
                  Testimonials
                </a>
                <a href="#pricing" className="nav-link">
                  Pricing
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" size="sm" className="border-border hover:bg-muted/50">
                    Login
                  </Button>
                  <Button size="sm" className="cta-button-premium">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Three.js Background */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Gemini Demo Section */}
      <GeminiDemoSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-playfair font-bold">
              Ready to Transform Your AI Operations?
            </h2>
            <p className="text-xl opacity-90 font-dmsans">
              Join thousands of companies using AgentOrchestra to scale their AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="font-playfair text-lg px-8 py-4 bg-background text-card-foreground hover:bg-background/90">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="font-playfair text-lg px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card-foreground text-background py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-playfair font-bold">
                  <span className="text-primary">Agent</span>Orchestra
                </span>
              </div>
              <p className="text-muted opacity-80 font-dmsans">
                Orchestrating the future of AI agent coordination with precision and scale.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair font-semibold mb-4 text-background">Product</h3>
              <ul className="space-y-2 text-muted font-dmsans">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair font-semibold mb-4 text-background">Company</h3>
              <ul className="space-y-2 text-muted font-dmsans">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair font-semibold mb-4 text-background">Community</h3>
              <ul className="space-y-2 text-muted font-dmsans">
                <li><a href="https://github.com/rajshah9305/AIAgentOrchestrationPlatform" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-muted/30 mt-12 pt-8 text-center text-muted font-dmsans">
            <p>&copy; 2024 AgentOrchestra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Three.js Canvas Component
const ThreeJSCanvas = () => {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, stars: THREE.Points;
    const currentMount = mountRef.current;

    if (!currentMount) return;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer({
        canvas: currentMount,
        alpha: true
      });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);

      const starGeo = new THREE.BufferGeometry();
      const starCount = 6000;
      const positions = new Float32Array(starCount * 3);
      for(let i = 0; i < starCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 600;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      let sprite = new THREE.TextureLoader().load('https://placehold.co/10x10/ffffff/ffffff.png');
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite,
        transparent: true
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      animate();
    };

    const onWindowResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    const animate = () => {
      if (stars) {
        stars.rotation.z += 0.0002;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    init();
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <canvas ref={mountRef} className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 1 }} />;
};

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/20">
    <Suspense fallback={<div className="absolute inset-0 bg-muted/10" />}>
      <ThreeJSCanvas />
    </Suspense>
    <div className="relative z-10 container mx-auto px-4 lg:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Badge className="bg-primary/10 text-primary border-primary/20 font-dmsans">
          AI Orchestration Platform
        </Badge>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-black text-card-foreground leading-tight">
          The Elite Platform for{" "}
          <span className="warm-accent">Autonomous AI</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-dmsans">
          AgentOrchestra, now supercharged with the Gemini API, provides an enterprise-grade solution to intelligently build, manage, and scale your AI workforce.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="font-playfair text-lg px-8 py-4 cta-button-premium">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="font-playfair text-lg px-8 py-4 border-border hover:bg-muted/50">
            Explore Features
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground font-dmsans">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>14-day free trial</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Layers,
      title: "Advanced Workflow Architect",
      description: "Construct sophisticated, multi-layered agentic workflows with our advanced visual builder, complete with conditional logic and parallel execution.",
      highlight: false
    },
    {
      icon: Brain,
      title: "✨ AI-Assisted Design",
      description: "Describe your goal in plain English. Our Gemini-powered engine will automatically generate entire agent workflows, suggest optimizations, and create agent personas for you.",
      highlight: true
    },
    {
      icon: Shield,
      title: "Zero-Trust Security Vault",
      description: "Implement enterprise-grade security with our zero-trust API key vault, featuring role-based access control and comprehensive audit logs.",
      highlight: false
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized infrastructure delivering real-time responses and seamless agent coordination.",
      highlight: false
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and performance metrics for all your AI agent activities.",
      highlight: false
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy and manage AI agents across multiple regions with automatic scaling.",
      highlight: false
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-card-foreground">
            The Apex of AI Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-dmsans">
            AgentOrchestra delivers a suite of powerful tools designed for the most demanding AI-driven operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`feature-card-premium ${
                feature.highlight ? 'border-2 border-primary/50 bg-primary/5' : ''
              }`}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  feature.highlight ? 'bg-primary/15' : 'bg-primary/10'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.highlight ? 'text-primary' : 'text-primary'
                  }`} />
                </div>
                <CardTitle className="font-playfair text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground font-dmsans">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gemini Demo Section Component
const GeminiDemoSection = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) {
      setError("Please enter a description for the workflow.");
      return;
    }
    setError(null);
    setLoading(true);
    setResult(null);

    try {
      // Mock response for demo purposes - replace with actual Gemini API call
      const mockResult = {
        workflowName: "AI Newsletter Analysis Workflow",
        goal: prompt,
        agents: [
          {
            agentName: "Newsletter Collector",
            role: "Gather and filter top AI newsletters from the past week",
            tools: ["Web Scraper", "RSS Reader", "Content Filter"]
          },
          {
            agentName: "Trend Analyzer",
            role: "Analyze content and identify key AI trends and insights",
            tools: ["NLP Processor", "Trend Detection", "Sentiment Analysis"]
          },
          {
            agentName: "Content Synthesizer",
            role: "Create comprehensive summary of findings",
            tools: ["Text Summarizer", "Key Point Extractor", "Report Generator"]
          },
          {
            agentName: "Tweet Thread Creator",
            role: "Draft engaging tweet thread about the findings",
            tools: ["Social Media Writer", "Content Optimizer", "Hashtag Generator"]
          }
        ]
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setResult(mockResult);
    } catch (err: any) {
      console.error("API call failed:", err);
      setError(`Sorry, something went wrong. Couldn't generate the workflow. Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="gemini-demo" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-card-foreground">
            <span className="warm-accent">Generate Workflows with AI</span> ✨
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-dmsans">
            Experience the power of Gemini firsthand. Describe a complex task below, and watch as AgentOrchestra instantly designs the required AI agent workflow.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="p-6 border-border shadow-lg">
            <textarea 
              value={prompt} 
              onChange={(e) => setPrompt(e.target.value)} 
              className="w-full bg-transparent text-card-foreground placeholder-muted-foreground focus:outline-none resize-none border-0 font-dmsans" 
              rows={3} 
              placeholder="e.g., 'Analyze top 5 AI newsletters from the last week, summarize key trends, and draft a tweet thread about the findings.'"
            />
            <div className="mt-4 flex justify-end">
              <Button onClick={handleGenerate} disabled={loading} className="font-playfair cta-button-premium">
                {loading ? 'Generating...' : 'Generate Workflow'}
              </Button>
            </div>
          </Card>
          
          <div className="mt-8 min-h-[100px]">
            {loading && (
              <div className="flex items-center justify-center gap-3 text-muted-foreground font-dmsans">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                <span>Generating workflow with Gemini...</span>
              </div>
            )}
            {error && <p className="text-destructive text-center font-dmsans">{error}</p>}
            {result && <WorkflowResult data={result} />}
          </div>
        </div>
      </div>
    </section>
  );
};

// Workflow Result Component
const WorkflowResult = ({ data }: { data: any }) => (
  <Card className="p-6 mt-8 border-border shadow-lg">
    <CardHeader className="px-0">
      <CardTitle className="text-2xl font-playfair text-card-foreground">{data.workflowName}</CardTitle>
      <CardDescription className="text-base font-dmsans text-muted-foreground">
        <strong>Goal:</strong> {data.goal}
      </CardDescription>
    </CardHeader>
    <CardContent className="px-0">
      <div className="space-y-4">
        {data.agents.map((agent: any, index: number) => (
          <Card key={index} className="p-4 border-border">
            <CardHeader className="px-0 pb-2">
              <CardTitle className="text-lg text-primary font-playfair">
                {index + 1}. {agent.agentName}
              </CardTitle>
              <CardDescription className="font-dmsans text-muted-foreground">{agent.role}</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <div className="flex flex-wrap gap-2">
                {agent.tools.map((tool: string) => (
                  <Badge key={tool} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground font-dmsans">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
);

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "The new Gemini-powered workflow generation is mind-blowing. It's like having a senior AI architect on staff, 24/7.",
      author: "Jane Doe",
      role: "CTO, Future Systems Inc.",
      avatar: "JD"
    },
    {
      content: "AgentOrchestra was already powerful, but the Gemini integration takes it to another level. We're prototyping ideas in minutes, not weeks.",
      author: "John Smith",
      role: "Lead AI Engineer, QuantumLeap",
      avatar: "JS"
    },
    {
      content: "The AI-assisted design features allow my research team to focus on outcomes, not on the minutiae of agent configuration. It's an incredible accelerator.",
      author: "Dr. Emily Carter",
      role: "Head of AI Research, Aether Labs",
      avatar: "EC"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-card-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-dmsans">
            Hear from innovators who are building the future with AgentOrchestra.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card p-8">
              <CardContent className="px-0">
                <p className="text-muted-foreground mb-6 font-dmsans">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-dmsans">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h5 className="font-bold text-card-foreground font-playfair">{testimonial.author}</h5>
                    <p className="text-sm text-muted-foreground font-dmsans">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section Component
const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Community",
      price: "$0",
      period: "",
      description: "Open-Source",
      features: [
        "All Core Features",
        "Community Support",
        "GitHub Repository Access",
        "Basic Documentation"
      ],
      isPopular: false,
      buttonText: "Deploy Now",
      buttonLink: "https://github.com/rajshah9305/AIAgentOrchestrationPlatform"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For mission-critical deployments",
      features: [
        "Everything in Community, plus:",
        "✨ Gemini-Powered Features",
        "Dedicated Support & SLA",
        "On-Premise & Private Cloud",
        "Advanced Security Features",
        "Custom Integrations"
      ],
      isPopular: true,
      buttonText: "Contact Sales",
      buttonLink: "#"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-card-foreground">
            Flexible Plans for Every Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-dmsans">
            Start for free and scale as you grow. AgentOrchestra is designed to support you at every stage.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 w-full md:w-1/2 text-center border-border shadow-lg ${
                plan.isPopular 
                  ? 'border-2 border-primary shadow-2xl scale-105 bg-primary/5' 
                  : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-semibold px-4 py-1 font-dmsans">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className={`text-3xl font-playfair ${plan.isPopular ? 'text-primary' : 'text-card-foreground'}`}>
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-black text-card-foreground font-playfair">{plan.price}</span>
                    <span className="text-muted-foreground ml-1 font-dmsans">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base font-dmsans text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button 
                  className={`w-full font-playfair ${plan.isPopular ? 'cta-button-premium' : ''}`}
                  variant={plan.isPopular ? "default" : "outline"}
                  asChild
                >
                  <a href={plan.buttonLink} target={plan.buttonLink.startsWith('http') ? '_blank' : '_self'}>
                    {plan.buttonText}
                  </a>
                </Button>
                
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground font-dmsans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ThreeJSCanvas = () => {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, stars: THREE.Points;
    const currentMount = mountRef.current;

    if (!currentMount) return;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer({
        canvas: currentMount,
        alpha: true
      });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);

      const starGeo = new THREE.BufferGeometry();
      const starCount = 6000;
      const positions = new Float32Array(starCount * 3);
      for(let i = 0; i < starCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 600;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      let sprite = new THREE.TextureLoader().load('https://placehold.co/10x10/ffffff/ffffff.png');
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite,
        transparent: true
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      animate();
    };

    const onWindowResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    const animate = () => {
      if (stars) {
        stars.rotation.z += 0.0002;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    init();
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <canvas ref={mountRef} className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 1 }} />;
};

export default Index;

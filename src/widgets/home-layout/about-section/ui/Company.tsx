import Button from "./Button";
import { Rocket, Users, BarChart3, Sparkles } from "lucide-react";
import companyImage from "./assets/company-illustration.jpg";

const benefits = [
  {
    icon: Rocket,
    title: "Post Jobs Easily",
    description:
      "Create and publish job listings in minutes with our intuitive interface.",
  },
  {
    icon: Users,
    title: "Access Top Talent",
    description:
      "Reach thousands of qualified tech professionals actively seeking opportunities.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Track application metrics and optimize your hiring strategy with data insights.",
  },
  {
    icon: Sparkles,
    title: "AI Matching",
    description:
      "Our AI recommends the best candidates based on your job requirements.",
  },
];

const ForCompanies = () => {
  return (
    <section id="companies" className="sticky z-20 bg-background top-0">
      <div className="container mx-auto px-4 ">
        <div className="grid md:grid-cols-2 gap-12 items-center py-5 ">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm text-primary font-medium">
              For Companies
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Hire the Best <span className=" text-accent">Tech Talent</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Post your openings and connect with pre-qualified candidates. Our
              platform helps you find the perfect fit faster.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg">Post a Job</Button>
              <Button size="lg" type="secondary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={companyImage}
                alt="Company reviewing candidates"
                className="relative rounded-2xl shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCompanies;

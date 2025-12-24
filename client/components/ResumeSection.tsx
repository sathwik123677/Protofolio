import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2Fea1e4d58963b4bc6be22444446492d04?format=webp&width=800";
    link.download = "Pathivada_Sathwik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-foreground">Resume & CV</h2>
            <p className="text-foreground/60">Download my resume to see my complete background</p>
          </div>

          {/* Resume Card */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-20 h-20 bg-accent/20 rounded-lg">
                  <FileText className="w-10 h-10 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Download My Resume</h3>
                  <p className="text-foreground/70">
                    Get a detailed view of my education, experience, projects, skills, and certifications.
                  </p>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                    onClick={downloadResume}
                  >
                    <Download size={20} />
                    Download Resume
                  </Button>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                    onClick={downloadResume}
                  >
                    <Download size={20} />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

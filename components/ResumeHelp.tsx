import { ResumeCard } from "./ResumeCard";

const ResumeHelp = () => {
    return (
      <section id="Resume" className="bg-white py-20 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-medium tracking-tight text-black">
                    Need help with a Resume, go through some examples
                </h2>
                <p className="mt-2 text-lg text-black">
                </p>

                <div className="carousel rounded-box mt-7">
                    <div className="carousel-item">
                        <ResumeCard 
                        title="Software Resume"
                        img="/Image/software.jpg"
                        desc="Software Engineer Resume Example"
                        file="/Resumes/software_resume.docx"
                        />
                    </div>
                    <div className="carousel-item">
                        <ResumeCard 
                        title="Business Resume"
                        img="/Image/business.webp"
                        desc="Business Analyst Resume Example"
                        file="/Resumes/business_resume.docx"
                        />
                    </div>
                    <div className="carousel-item">
                        <ResumeCard 
                        title="Engineer Resume"
                        img="/Image/mechanical.jpg"
                        desc="Civil Engineer Resume Example"
                        file="/Resumes/engineer_resume.docx"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default ResumeHelp;
  
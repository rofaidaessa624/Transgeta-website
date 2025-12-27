import CoreValueCard from "../CoreValueCard/CoreValueCard";

export default function FlipCard() {
  return (
    <>
      <section id="coreValue">
        <div className="container">
          <div className="row g-3">
            {/* g-3 adds a small consistent gap between all cards */}
            <h2 className="fw-bolder my-5 display-5 text-center">Core Values</h2>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <CoreValueCard
                iconKey="accuracy"
                title="Accuracy"
                desc={`We prioritize precision in every translation, ensuring your ideas are
conveyed clearly and faithfully.`}
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <CoreValueCard
                iconKey="academic"
                title="Academic Excellence"
                desc={`We support research and learning by providing expert guidance that
strengthens structure, clarity, and impact.`}
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <CoreValueCard
                iconKey="integrity"
                title="Integrity"
                desc={`We maintain honesty and transparency in all our services, respecting
confidentiality and ethical standards.`}
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <CoreValueCard
                iconKey="professional"
                title="Professionalism"
                desc={`We deliver every project with dedication, reliability, and meticulous
attention to detail.`}
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <CoreValueCard
                iconKey="growth"
                title="Continuous Growth"
                desc={`We invest in ongoing learning, staying updated in language, academic
standards, and research trends.`}
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <CoreValueCard
                iconKey="clarity"
                title="Clarity"
                desc={`We simplify complex ideas, making your message understandable and
meaningful to your audience.`}
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <CoreValueCard
                iconKey="collaboration"
                title="Supportive Collaboration"
                desc={`We work closely with clients, providing guidance, feedback, and personalized solutions.`}
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <CoreValueCard
                iconKey="communication"
                title="Excellence in Communication"
                desc={`We value clear, concise, and impactful expression in every project, written or consulted.`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

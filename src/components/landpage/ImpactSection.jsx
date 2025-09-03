import React from "react";

const ImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Rwanda’s Future, Built Together
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-4xl mx-auto">
          Thousands of Rwandan youth are educated, talented, and ready — but
          lack access to the guidance and networks that open doors.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              For the Youth
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You're not behind. You're just missing someone who's been there —
              a mentor who can guide you through job applications, interviews,
              and building confidence in your skills.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              For the Diaspora
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You want to give back. You remember the struggle. Now, you can
              mentor a young professional in Rwanda — share your experience,
              grow your impact, and help build the Rwanda we believe in.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-green-50 border border-green-200 rounded-xl p-8 max-w-3xl mx-auto">
          <p className="text-lg text-gray-800 font-medium">
            <span className="text-green-600 font-bold">ElevateLink</span>{" "}
            connects two powerful forces:
            <strong> ambition at home</strong> and{" "}
            <strong>wisdom abroad</strong>. Together, we rise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

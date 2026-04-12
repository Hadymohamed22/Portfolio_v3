import SectionHeader from "@/shared/components/section-header";

export default function Skills() {
  return (
    <section className="skills-section my-14 md:my-16">
      <div className="container px-5 mx-auto">
        {/* Section Header */}
        <SectionHeader
          title={
            <>
              Skills &{" "}
              <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                Technologies
              </span>
            </>
          }
          subTitle={
            "My curated collection of tools for building exceptional digital solutions."
          }
        />
      </div>
    </section>
  );
}

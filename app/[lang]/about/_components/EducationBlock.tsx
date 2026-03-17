import { useDictionary } from "@/utils/providers/dictionary-context";
import CourseCard from "./CourseCard";

const EducationBlock = () => {
  const dictionary = useDictionary();

  return (
    <section className="text-primary mb-4" id="education">
      <h1 className="text-headline-small-strong tablet:text-headline-extra-medium-strong mb-4">
        {dictionary.about.educationTitle}
      </h1>
      <div className="flex flex-col tablet:flex-row hd:flex-col full-hd:flex-row gap-2">
        {Object.values(dictionary.about.education).map((card, index) => (
          <CourseCard
            key={index}
            title={card.title}
            subitle={card.subtitle}
            grade={card.grade}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationBlock;

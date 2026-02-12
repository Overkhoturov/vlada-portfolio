import CourseCard from "./EducationCard";

const CourseBlock = () => {
  const educationCards = [
    {
      title: 'Продуктовый подход для дизайнеров',
      subTitle: 'Яндекс Практикум',
      grade: '2024',
    },
    {
      title: 'Продуктовый подход для дизайнеров',
      subTitle: 'Яндекс Практикум',
      grade: '2024',
    },
    {
      title: 'Продуктовый подход для дизайнеров',
      subTitle: 'Яндекс Практикум',
      grade: '2024',
    },
    {
      title: 'Продуктовый подход для дизайнеров',
      subTitle: 'Яндекс Практикум',
      grade: '2024',
    },
  ]

  return (
    <section className="text-primary">
      <h1 className="text-headline-extra-small-strong mb-4">Курсы</h1>
      <div className="flex flex-col gap-2 hd:flex-wrap hd:flex-row">
        {educationCards.map((card, index) => (
          <CourseCard key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

export default CourseBlock;

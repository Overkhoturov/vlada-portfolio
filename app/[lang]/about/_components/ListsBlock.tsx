import { FC } from "react";
import { DictionaryType } from "@/utils/i18n/dictionaries";
import ListItems from "./ListItems"

type Props = {
  dictionary: DictionaryType;
}

const ListsBlock: FC<Props> = () => {
  const lists = [
    {
      title: 'Проектирование интерфейсов',
      items: [
        'мобильные приложения (iOS / Android)',
        'веб-сервисы, корпоративные, ecom и карьерные сайты',
        'админки и внутренние сервисы',
        'дизайн-системы (развитие, поддержка, локальные UI-киты)',
        'UX-аудиты, оценки проектов',
      ]
    },
    {
      title: 'Проектирование интерфейсов',
      items: [
        'мобильные приложения (iOS / Android)',
        'веб-сервисы, корпоративные, ecom и карьерные сайты',
        'админки и внутренние сервисы',
        'дизайн-системы (развитие, поддержка, локальные UI-киты)',
        'UX-аудиты, оценки проектов',
      ]
    },
    {
      title: 'Проектирование интерфейсов',
      items: [
        'мобильные приложения (iOS / Android)',
        'веб-сервисы, корпоративные, ecom и карьерные сайты',
        'админки и внутренние сервисы',
        'дизайн-системы (развитие, поддержка, локальные UI-киты)',
        'UX-аудиты, оценки проектов',
      ]
    },
  ]
  
  return (
    <section className="flex flex-col gap-4 hd:gap-8 2k:gap-10 4k:gap-12 mb-4">
      {lists.map((list, index) => (
        <ListItems {...list} key={index} />
      ))}   
    </section>
  )
}


export default ListsBlock;

import { useDictionary } from "@/utils/providers/dictionary-context";
import ListItems from "./ListItems"

const ListsBlock = () => {
  const dictionary = useDictionary();
  
  return (
    <section className="flex flex-col gap-4 hd:gap-8 2k:gap-10 4k:gap-12 mb-4">
      {Object.values(dictionary.about.lists).map((list, index) => (
        <ListItems {...list} key={index} />
      ))}   
    </section>
  )
}


export default ListsBlock;

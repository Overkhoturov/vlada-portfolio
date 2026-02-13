'use client';
import { useBreakpoint } from "@/utils/hooks/useBreakPoint";
import AboutBlock from "../_components/AboutBlock";
import PortraitBlock from "../_components/PortraitBlock";
import ListsBlock from "../_components/ListsBlock";
import EducationBlock from "../_components/EducationBlock";
import CourseBlock from "../_components/CourseBlock";
import { FC } from "react";
import { DictionaryType } from "@/utils/i18n/dictionaries";

type Props = {
  dictionary: DictionaryType;
}

const ContentLayout: FC<Props> = ({ dictionary }) => {
  const { isMobileStrict, isLowerTablet, isLowerFullHd } = useBreakpoint();
  
  if (isMobileStrict) {
    return (
      <div>
        <AboutBlock dictionary={dictionary} />
        <PortraitBlock dictionary={dictionary}  />
        <ListsBlock dictionary={dictionary}  />
        <EducationBlock dictionary={dictionary}  />
        <CourseBlock dictionary={dictionary}  />
      </div>
    )
  } else if (isLowerTablet) {
    return (
      <div>
        <div className="flex gap-8 mb-4">
          <div className="w-1/2">
            <AboutBlock dictionary={dictionary} />
            <ListsBlock dictionary={dictionary} />
          </div>
          <div className="w-1/2">
            <PortraitBlock dictionary={dictionary}  />
            <CourseBlock dictionary={dictionary}  />
          </div>
        </div>

        <EducationBlock dictionary={dictionary}  />
      </div>
    )
  }else if (isLowerFullHd) {
    return (
      <div>
        <div className="flex gap-8 mb-4">
          <div className="w-1/2">
            <AboutBlock dictionary={dictionary} />
            <ListsBlock dictionary={dictionary}  />
          </div>
          <div className="w-1/2">
            <PortraitBlock dictionary={dictionary}  />
            <EducationBlock dictionary={dictionary}  />
          </div>
        </div>

        <CourseBlock dictionary={dictionary} />
      </div>
    )
  } else {
    return (
      <div>
        <div className="flex gap-8 mb-4">
          <div className="w-1/2">
            <AboutBlock dictionary={dictionary} />
            <ListsBlock dictionary={dictionary}  />
          </div>
          <div className="w-1/2">
            <PortraitBlock dictionary={dictionary}  />
          </div>
        </div>

        <EducationBlock dictionary={dictionary}  />
        <CourseBlock dictionary={dictionary}  />
      </div>
    )
  }
}

export default ContentLayout;

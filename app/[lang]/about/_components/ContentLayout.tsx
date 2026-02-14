'use client';
import { useBreakpoint } from "@/utils/hooks/useBreakPoint";
import AboutBlock from "../_components/AboutBlock";
import PortraitBlock from "../_components/PortraitBlock";
import ListsBlock from "../_components/ListsBlock";
import EducationBlock from "../_components/EducationBlock";
import CourseBlock from "../_components/CourseBlock";

const ContentLayout = () => {
  const { isMobileStrict, isLowerTablet, isLowerFullHd } = useBreakpoint();

  if (isMobileStrict) {
    return (
      <div>
        <AboutBlock />
        <PortraitBlock />
        <ListsBlock />
        <EducationBlock />
        <CourseBlock />
      </div>
    )
  } else if (isLowerTablet) {
    return (
      <div>
        <div className="flex gap-8 mb-4">
          <div className="w-1/2">
            <AboutBlock />
            <ListsBlock />
          </div>
          <div className="w-1/2">
            <PortraitBlock />
            <CourseBlock  />
          </div>
        </div>

        <EducationBlock  />
      </div>
    )
  }else if (isLowerFullHd) {
    return (
      <div>
        <div className="flex gap-8 mb-4">
          <div className="w-1/2">
            <AboutBlock />
            <ListsBlock />
          </div>
          <div className="w-1/2">
            <PortraitBlock />
            <EducationBlock />
          </div>
        </div>

        <CourseBlock />
      </div>
    )
  } else {
    return (
      <div>
        <div className="flex gap-8 mb-4">
          <div className="w-1/2">
            <AboutBlock />
            <ListsBlock  />
          </div>
          <div className="w-1/2">
            <PortraitBlock  />
          </div>
        </div>

        <EducationBlock  />
        <CourseBlock  />
      </div>
    )
  }
}

export default ContentLayout;

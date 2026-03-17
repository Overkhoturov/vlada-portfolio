"use client";
import Button from "@/components/Button";
import { useDictionary } from "@/utils/providers/dictionary-context";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";

const menuItems = [{ id: "about" }, { id: "education" }, { id: "courses" }];

const ContentMenu = () => {
  const dictionary = useDictionary();
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && menuItems.some((item) => item.id === hash)) {
      setActiveSection(hash);
    }
  }, []);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offset = 50;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", `#${id}`);
      }
    },
    [],
  );

  return (
    <div className="min-[1920px]:block hidden fixed left-8 top-1/2 -translate-y-1/2 z-50 ">
      <h3 className="text-headline-extra-small-strong px-6 mb-2">
        {dictionary.about.contentMenu.title}
      </h3>

      <div className="flex flex-col gap-1 min-w-[200px]">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className="block focus:outline-none "
            >
              <Button
                text={
                  dictionary.about.contentMenu[
                    item.id as keyof typeof dictionary.about.contentMenu
                  ]
                }
                variant={"ghost"}
                type={"link"}
                size="lg"
                className={classNames({
                  "before:content-['•'] before:p-2": isActive,
                })}
              ></Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContentMenu;

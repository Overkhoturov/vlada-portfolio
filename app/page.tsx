import Tag from "@/components/Tag";
import Image from "next/image";
import PortfolioBlock from "./_components/PortfolioBlock";
import { BasicContainer } from "@/components/layout/Container";

export default function Home() {
  return (
    <main>
      <PortfolioBlock />
      
      <BasicContainer className="pb-4 ">
          <iframe
            className="mx-auto my-0 border bg-black rounded"
            width="800"
            height="450"
            src="https://embed.figma.com/design/OB0Sn4S24ihYwaBbWBDPzw/Portfolio?node-id=1-3&embed-host=share"
            allowfullscreen
          />
      </BasicContainer>
    </main>
  );
}

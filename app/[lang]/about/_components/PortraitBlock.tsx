const PortraitBlock = () => (
  <section className="h-[480px] tablet:h-[544px] hd:h-[558px] full-hd:h-full text-primary relative rounded-[52px] overflow-hidden mb-4 bg-[url('/portrait.png')] bg-lightgray bg-[50%] bg-cover bg-no-repeat">
    <div className="flex flex-col items-center gap-2 absolute bottom-4 bg-primary-opacity-8 w-full p-3 backdrop-blur-md">
      <span className="text-body-medium-strong text-primary-inverse-fixed">Привет, я Влада</span>
      <span className="py-1 px-4 flex items-center justify-center rounded-full bg-primary-inverse text-body-small-strong text-primary">люблю мемы</span>
    </div>
  </section>
)

export default PortraitBlock;

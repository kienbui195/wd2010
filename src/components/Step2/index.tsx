import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";
import { useStep } from "../../lib/store/useStep";
import { useInView } from "framer-motion";

const DATA = [
  {
    thumb: "/gifs/Cat Hug GIF.gif",
    desc: "Gửi đến nàng hàng ngàn cái ôm ấm áp đến từ tớ 🥰",
  },
  {
    thumb: "/gifs/Cats Aww GIF by Yêu Lu.gif",
    desc: "Nàng luôn là cô gái xinh đẹp nhất, đáng yêu nhất trong mắt tớ 🌹",
  },
  {
    thumb: "/gifs/cat funny animals GIF.gif",
    desc: "Mỗi ngày được bên nàng đều là một ngày vui vẻ và có ý nghĩa đối với tớ ❤️",
  },
  {
    thumb: "/gifs/Sksksk Cat Kisses GIF.gif",
    desc: "Mãi bên nhau như vậy nhé hẹ hẹ 😍",
  },
];

const Step2 = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-4">
        <Carousel className="w-[90%] flex justify-center bg-blue-100 rounded-lg shadow-lg size-full items-center text-pink-500 font-semibold">
          <CarouselContent>
            {DATA.map((item, index) => (
              <CarouselItem key={index}>
                <CarouselItemContent
                  thumb={item.thumb}
                  desc={item.desc}
                  isLast={index === DATA.length - 1}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Step2;

const CarouselItemContent = ({ thumb, desc, isLast }: { thumb: string; desc: string; isLast?: boolean }) => {
  const [showButton, setShowButton] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const { setStep } = useStep();

  useEffect(() => {
    if (!isLast || !isInView) return;
    const timer = window.setTimeout(() => {
      setShowButton(true);
    }, 2000); // 3000ms = 3 giây (chỉnh nếu muốn nhanh hơn)
    return () => {
      clearTimeout(timer);
    };
  }, [isInView, isLast]);

  return (
    <div
      className="p-4 size-full flex flex-col gap-4 items-center relative"
      ref={ref}>
      <img
        alt="hug"
        src={thumb}
        className="size-full"
      />
      <p className="text-center">{desc}</p>
      {!isLast && (
        <p className="text-center text-red-500 font-bold">
          Vuốt sang trái để tiếp tục <div className="-rotate-90 animate-bounce">👇</div>
        </p>
      )}
      {isLast && showButton && (
        <button
          className="px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-full shadow-lg 
                     hover:bg-pink-600 transition-all duration-500 animate-fade-in"
          onClick={() => {
            isLast && setStep(3);
          }}>
          Tiếp tục
        </button>
      )}
    </div>
  );
};

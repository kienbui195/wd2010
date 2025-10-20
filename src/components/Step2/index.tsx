import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import { useEffect, useState } from "react";

const Step2 = ({ onClick }: { onClick?: () => void }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 text-center bg-white shadow-lg rounded-lg px-2 py-1 text-xl w-[300px] text-pink-500 font-bold">
        Chúc mừng
        <br />
        ngày phụ nữ Việt Nam
        <br />
        20/10
      </div>
      <Carousel className="w-full bg-red-100 h-[70%] absolute bottom-[200px] left-1/2 transform -transition-x-1/2">
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Step2;

const FadeInText = ({ className, content, onClick }: { className?: string; content: string; onClick?: () => void }) => {
  return (
    <div
      className={className}
      onClick={onClick ? onClick : undefined}>
      {content}
    </div>
  );
};

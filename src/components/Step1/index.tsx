import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog";

const Step1 = ({ onClick }: { onClick?: () => void }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-screen bg-no-repeat flex items-center justify-center relative" onClick={onClick}>
      <img
        alt="anh nen"
        className="size-full object-cover"
        src="/gifs/Happy Valentines Day GIF.gif"
      />
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 text-center bg-white shadow-lg rounded-lg px-2 py-1 text-xl w-[300px] text-pink-500 font-bold">
        Chúc mừng
        <br />
        ngày phụ nữ Việt Nam
        <br />
        20/10
      </div>
      <Dialog
        open={open}
        onOpenChange={(val) => setOpen(val)}>
        <DialogContent className="transition-all transform">
          <DialogHeader>
            <DialogTitle className="text-pink-600 text-2xl">Gửi em 🌹</DialogTitle>
          </DialogHeader>
          <div className="flex text-pink-500  flex-col items-center justify-center gap-4 text-center text-lg">
            <FadeInText
              content="Hôm nay là 20/10 một ngày đặc biệt dành cho những người con gái đặc biệt."
              className="animate__animated animate__delay-1s animate__fadeInDown"
            />
            <FadeInText
              content="Em là một trong số đó! Bề ngoài em dù có trông tẻn tẻn, mát mát, rất nhiều năng lượng tươi vui nhưng cũng là người tình
              cảm, sâu sắc luôn mang lại cho anh cảm giác ấm áp, dễ chịu."
              className="animate__animated animate__delay-2s animate__fadeInRight"
            />
            <FadeInText
              content="Bấm vào đây để tiếp tục 💌"
              className="italic animate__animated animate__delay-3s animate__fadeInUpBig"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Step1;

const FadeInText = ({ className, content, onClick }: { className?: string; content: string; onClick?: () => void }) => {
  return (
    <div
      className={className}
      onClick={onClick ? onClick : undefined}>
      {content}
    </div>
  );
};

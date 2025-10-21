import { useEffect, useRef } from "react";
import HeartScene from "../components/HeartScene";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import { useStep } from "../lib/store/useStep";

const LoiChucPage = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { step, setStep } = useStep();

  // 👇 Auto play khi mount component
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      const playAudio = async () => {
        try {
          await audio.play();
        } catch {
          console.log("⚠️ Trình duyệt chặn autoplay, chờ người dùng click.");
        }
      };
      playAudio();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 flex items-center justify-center">
      {/* 🎵 Nhạc nền */}
      <audio
        ref={audioRef}
        src="/music/vạn vật như muốn ta bên nhau.mp3"
        loop
        autoPlay
        controls
        muted
        className="absolute top-3 right-3 z-50"
      />

      {/* ...phần nội dung cũ giữ nguyên... */}

      {step === 0 && (
        <div className="py-[100px] p-6">
          <p className="text-center text-pink-500 font-bold text-xl mb-10">Tặng nàng nè 🌹</p>
          <img
            alt="tang hoa cho be"
            src="/gifs/This Is For You GIF by Pudgy Penguins.gif"
            onClick={() => setStep(1)}
            className="cursor-pointer"
          />
          <p className="italic text-center text-pink-500">Chạm vào ảnh để tiếp tục</p>
        </div>
      )}

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <HeartScene />}
    </div>
  );
};

export default LoiChucPage;

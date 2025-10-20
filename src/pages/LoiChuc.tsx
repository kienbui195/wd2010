import { useEffect, useRef, useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";

const LoiChucPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Chúc em 20/10 thật nhiều niềm vui và hạnh phúc! 💐");
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState<number>(0);

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
      />

      {/* ...phần nội dung cũ giữ nguyên... */}

      <div className="absolute top-3 right-3">
        <button
          onClick={() => {
            const audio = audioRef.current;
            if (!audio) return;
            if (isMuted) {
              audio.play();
            } else {
              audio.pause();
            }
            setIsMuted(!isMuted);
          }}
          className="bg-pink-500 text-white px-3 py-1 rounded-full shadow text-sm hover:bg-pink-600">
          {isMuted ? "🔈 Bật nhạc" : "🔇 Tắt nhạc"}
        </button>
      </div>

      {step === 0 && (
        <div className="py-[100px] p-6">
          <h5 className="text-center text-pink-500 font-bold text-xl">Tặng nè</h5>
          <img
            alt="tang hoa cho be"
            src="/gifs/This Is For You GIF by Pudgy Penguins.gif"
            onClick={() => setStep(1)}
          />
          <p className="italic text-center text-pink-500">Chạm vào ảnh</p>
        </div>
      )}

      {step === 1 && <Step1 onClick={() => setStep(2)} />}
      {step === 2 && <Step2 onClick={() => setStep(3)} />}
    </div>
  );
};

export default LoiChucPage;

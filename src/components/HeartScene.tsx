import { useState, useEffect } from "react";
import HeartShape from "./HeartShape";
import GreetingCard from "./GreetingCard";
// @ts-ignore - no types available for canvas-confetti
import confetti from "canvas-confetti";

export default function HeartScene() {
  const [showGreeting, setShowGreeting] = useState(false);

  // Bắt đầu phát nhạc tự động
  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    const playMusic = () => audio.play().catch(() => {});
    window.addEventListener("click", playMusic, { once: true });
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleExplosion = () => {
    // Nổ pháo giấy
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });

    // Hiện thiệp chúc sau 0.8s
    setTimeout(() => setShowGreeting(true), 800);
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-pink-100 to-pink-300 overflow-hidden">
      {!showGreeting && <HeartShape onComplete={handleExplosion} />}
      {showGreeting && <GreetingCard />}
    </div>
  );
}

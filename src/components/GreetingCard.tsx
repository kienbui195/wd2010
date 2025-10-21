import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const message = `Chúc nàng 20+1/10 thật rực rỡ, luôn xinh đẹp, vui tươi, hạnh phúc và luôn yêu thương tui 😋 `;

export default function GreetingCard() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const started = { v: false } as { v: boolean };
    const startedRef = ((window as any).__greeting_started__ ??= { v: false });
    // guard nội bộ (thông thường không cần, nhưng an toàn với double-run trong dev)
    if (startedRef.v) return;
    startedRef.v = true;

    // xóa bất kỳ text có sẵn (SSR/hydration) trước khi gõ
    setDisplayText("");

    const typingSound = new Audio("/music/typing.mp3");
    typingSound.volume = 0.3;

    const chars = Array.from(message); // bảo toàn emoji / multi-code-unit chars
    const speed = 50;
    let i = 0;
    let timer: number | undefined;

    const tick = () => {
      if (i >= chars.length) return;

      const ch = chars[i];
      if (ch === undefined) return; // bảo đảm không append undefined

      setDisplayText((prev) => prev + ch);

      if (/\S/.test(ch)) {
        const sound = typingSound.cloneNode() as HTMLAudioElement;
        sound.play().catch(() => {});
      }

      i++;
      if (i < chars.length) {
        timer = window.setTimeout(tick, speed);
      } else {
        timer = undefined;
      }
    };

    // bắt đầu sau 0ms để đảm bảo DOM đã sạch (tránh duplicate từ SSR/hydration)
    timer = window.setTimeout(tick, 0);

    return () => {
      if (timer !== undefined) clearTimeout(timer);
      // reset guard khi unmount (an toàn cho việc remount)
      startedRef.v = false;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center gap-2">
      <div className="relative p-6 bg-white/90 rounded-3xl shadow-2xl border-4 border-pink-400 text-center w-full">
        <img
          src="/images/anhvaem.JPG"
          alt="Ảnh kỷ niệm"
          className="w-full mx-auto border-4 border-pink-300 object-cover shadow-md"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-pink-600 font-semibold bg-white mt-4 text-lg leading-relaxed whitespace-pre-line">
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

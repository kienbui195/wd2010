import QRCode from "react-qr-code";
import { cn } from "../lib/utils";

const Home = () => {
  return (
    <section className="bg-red-100 h-screen w-full flex items-center justify-center">
      <div className={cn("bg-fixed bg-no-repeat bg-center w-full h-full bg-[url(/images/bohoadep188.jpg)]")}>
        <div className="size-full flex flex-col items-center pb-[150px] justify-end">
          <div className="text-center py-1 px-2 text-xl font-bold mb-4 bg-white rounded-lg shadow-lg">
             Vui lòng quét mã để tiếp tục
          </div>
          <QRCode
            className=" size-28 p-2 bg-white rounded-lg shadow-lg"
            value={`${import.meta.env.VITE_FE_URL}/chuc-mung-2110-Hanh-hap`}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

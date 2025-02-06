import { RotatingLines, Hourglass, Oval } from "react-loader-spinner";
import logoLight from "../public/images/imgpsh_fullsize_anim.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <Image
        id="logo"
        src={logoLight}
        className="cursor-pointer bg-transparent"
        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          position: 'absolute',
        }}
        alt="Light Logo"
        width={180}
        height={50}
      />
      <Oval
        visible={true}
        height="240"
        width="240"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;

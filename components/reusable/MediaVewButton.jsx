import { color } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
function MediaViewButton({
  title,
  backgroundColor,
  borderColor,
  color1 = "white",
  color2,
  onClick,
  width = "w-full",
}) {
  return (
    <div
      className={`flex gap-2 lg:gap-4 rounded-full justify-between items-center px-2 py-3 sm:px-2 sm:py-2 md:px-1 md:py-1 lg:px-2 lg:py-2 2xl:px-4 2xl:py-4 w-fit w-[95%] cursor-pointer`}
      style={{
        backgroundColor: backgroundColor,
        color: color1,
        borderColor: borderColor,
        borderWidth: 2,
      }}
    >
      <div className="text-sm ms:text-base sm:text-lg md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
        {title}
      </div>
      <div
        className=""
        // style={{ color: backgroundColor2 }}
        onClick={onClick}
      >
        <FiArrowRight color={color2} size={20} />
        {/* <Image src={Arrow} width={20} height={20} /> */}
      </div>
    </div>
  );
}

export default MediaViewButton;

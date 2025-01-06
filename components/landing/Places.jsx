import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlacesRequest } from "@/actions/home";
import { FiArrowUpRight } from "react-icons/fi";
import dynamic from "next/dynamic";
import arrow from "../../public/images/Arrow.png";
// import arrow from "../../public/images/landing/l.png";
import author_icon from "../../public/images/landing/author_icon.png";
import location_icon from "../../public/images/landing/location_icon.png";
import share_icon from "../../public/images/landing/share_icon.png";
import like_icon from "../../public/images/landing/like_icon.png";
import Image from "next/image";
import Modal from "../reusable/Modal";

const MapComponent = dynamic(() => import("../reusable/map"), {
  ssr: false,
});
function Places() {
  const [places, setPlaces] = useState([]);
  const [clickIcon, setClickIcon] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [dragging, setDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [screenWidth, setScreenWidth] = useState();
  const [classNames, setClassNames] = useState([]);
  const [mouseOver, setMouseOver] = useState(false);
  const [largeMap, setLargeMap] = useState(false);

  const intervalRef = useRef(null);
  const data = useSelector((state) => state.home.places);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      // if (!clickIcon && !mouseOver && places.length) {
      //   console.log(currentIndex, places.length);
      //   intervalRef.current = setInterval(() => {
      //     setClassNames((prevClasses) => {
      //       const newClasses = [...prevClasses];
      //       newClasses.push(newClasses.shift());
      //       return newClasses;
      //     });
      //     setCurrentIndex(
      //       (prevIndex) => (prevIndex - 1 + places.length) % places.length
      //     );
      //   }, 5000); // 3 seconds
      // }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTransitioning, places.length, clickIcon, mouseOver]);

  useEffect(() => {
    if (data.length) {
      console.log([...data, ...data]);
      if (data.length <= 5) setPlaces([...data, ...data]);
    }
  }, [data]);

  useEffect(() => {
    const calculateStyles = () => {
      const classNames = places.map((item, index) => {
        if (index <= 7) return "carousel_" + index;
        else return "carousel";
      });

      setClassNames(classNames);
    };
    calculateStyles();
  }, [places]);

  useEffect(() => {
    dispatch(fetchPlacesRequest());
  }, [dispatch]);

  const moveNext = () => {
    if (isTransitioning) return; // Prevent new transition during ongoing transition
    setIsTransitioning(true);

    setClassNames((prevClasses) => {
      // Rotate the classes array to the left
      const newClasses = [...prevClasses];
      newClasses.push(newClasses.shift());
      return newClasses;
    });
    // setMoveCount(-1)
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + places.length) % places.length
    );
    setTimeout(() => setIsTransitioning(false), 5000);
  };

  const movePrev = () => {
    if (isTransitioning) return; // Prevent new transition during ongoing transition
    setIsTransitioning(true);

    setClassNames((prevClasses) => {
      const newClasses = [...prevClasses];
      newClasses.unshift(newClasses.pop());
      return newClasses;
    });
    // setMoveCount(1)
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1 + places.length) % places.length
    );

    setTimeout(() => setIsTransitioning(false), 5000);
  };

  const handleMouseDown = (e) => handleDragStart(e, false);
  const handleMouseMove = (e) => handleDragMove(e, false);
  const handleMouseUp = () => handleDragEnd();

  const handleTouchStart = (e) => handleDragStart(e, true);
  const handleTouchMove = (e) => handleDragMove(e, true);
  const handleTouchEnd = () => handleDragEnd();

  const handleDragStart = useCallback((e, isTouch = false) => {
    setStartX(isTouch ? e.touches[0].clientX : e.clientX);
    setStartY(isTouch ? e.touches[0].clientY : e.clientY);
    setDragging(true);
  }, []);

  const handleDragMove = useCallback(
    (e, isTouch = false) => {
      if (!dragging || isTransitioning) return;

      const clientX = isTouch ? e.touches[0].clientX : e.clientX;
      const clientY = isTouch ? e.touches[0].clientY : e.clientY;

      if (screenWidth >= 1024) {
        setOffsetY(clientY - startY);

        if (Math.abs(offsetY) > 30) {
          if (offsetY > 0) {
            moveNext();
            setDragging(false);
          } else {
            movePrev();
            setDragging(false);
          }
          setStartY(clientY);
        }
      } else {
        // Horizontal drag for screens < 1024px
        setOffsetX(clientX - startX);

        if (Math.abs(offsetX) > 30) {
          if (offsetX > 0) {
            moveNext();
            setDragging(false);
          } else {
            movePrev();
            setDragging(false);
          }
          setStartX(clientX);
        }
      }
    },
    [dragging, offsetX, offsetY, startX, startY, screenWidth, isTransitioning]
  );

  const handleDragEnd = useCallback(() => {
    setDragging(false);
    setOffsetX(0);
    setOffsetY(0);
  }, []);

  const openModal = () => setLargeMap(true);
  const closeModal = () => setLargeMap(false);

  if (!places.length) {
    return <div>Loading...</div>; // Or return a fallback image/div
  }

  return (
    <>
      <div className="relative w-full lg:h-screen flex items-center justify-center overflow-hidden">
        {/* Main Image */}
        <div className="relative w-full h-screen">
          <Image
            src={
              places[currentIndex] && places[currentIndex].featured_image.large
            }
            className="object-cover w-full h-screen"
            width={1920}
            height={1080}
            priority={true}
            alt={"Home Image"}
          />
          <div className="absolute left-0 bottom-0 top-[60%] right-0 bg-gradient-to-t from-black to-grey"></div>
        </div>

        {/* Custom Info */}
        <div className="w-full h-full absolute text-white">
          <div className="absolute container-custom w-full h-full top-8 lg:top-2/3">
            <div className=" font-semibold text-4xl lg:text-6xl mb-4">
              {places[currentIndex] && places[currentIndex].title}
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex gap-4">
                {" "}
                <div
                  className={`backdrop-blur-md flex items-center gap-4 w-fit h-fit bg-[#195883] px-4 py-2 rounded-full cursor-pointer `}
                  onClick={() => {
                    setClickIcon("place");
                  }}
                >
                  <div>
                    {places[currentIndex] && places[currentIndex].location_name}
                  </div>
                  <Image
                    src={location_icon}
                    className="w-4 h-4"
                    width={100}
                    height={100}
                    priority={true}
                    alt={"Home Image"}
                  />
                </div>
                <div
                  className={`backdrop-blur-md flex items-center bg-[#8CC63E] w-fit h-fit gap-4 px-4 py-2 rounded-full cursor-pointer font-semibold`}
                  onClick={() => setClickIcon("author")}
                >
                  <div>
                    {places[currentIndex] && places[currentIndex].artist_name}
                  </div>
                  <Image
                    src={author_icon}
                    className=" w-4 h-4"
                    width={100}
                    height={100}
                    priority={true}
                    alt={"Home Image"}
                  />
                </div>
                <div className="flex items-center gap-[1px] mr-16">
                  <div
                    className={`w-fit bg-[#195883] px-3 py-1 rounded-l-full cursor-pointer `}
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                    }}
                  >
                    <Image
                      src={share_icon}
                      className="min-w-4 min-h-4 w-4 h-4"
                      width={100}
                      height={100}
                      priority={true}
                      alt={"Home Image"}
                    />
                  </div>
                  <div
                    className={`w-fit bg-[#8CC63E] px-3 py-1 rounded-r-full inline-block cursor-pointer `}
                    style={{
                      clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                  >
                    <Image
                      src={like_icon}
                      className="min-w-4 min-h-4 w-4 h-4"
                      width={100}
                      height={100}
                      priority={true}
                      alt={"Home Image"}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {places.slice(0, 5).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`rounded-full border-2 border-radius p-1 items-center ${
                        index === 2
                          ? "border-[#195883]"
                          : "drop-shadow-md opacity-50 border-[#8CC63E]"
                      }`}
                    >
                      <Image
                        src={
                          item.featured_image && item.featured_image.thumbnail
                        }
                        className={`${
                          index === 2 ? "w-36 h-36" : "drop-shadow-md w-28 h-28"
                        } cursor-pointer rounded-full`}
                        draggable="false"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="relative">
                <div className="flex items-center justify-center bg-white text-black text-6xl w-24 h-24 font-semibold rounded-full">
                  {currentIndex + 1}
                </div>
                <div
                  className="absolute inset-0 flex justify-center items-center my-auto rounded-full bg-[#8CC63E] w-[50%] -translate-x-[50%] aspect-square cursor-pointer"
                  onClick={() => {
                    // setCurrentIndex(
                    //   (currentIndex - 1 + places.length) % places.length
                    // );
                    setPlaces(
                      places.map(
                        (item, index) =>
                          places[(index + places.length - 1) % places.length]
                      )
                    );
                  }}
                >
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.313912 6.70597C-0.104638 6.3155 -0.104638 5.68137 0.313912 5.2909L5.67135 0.292854C6.0899 -0.0976181 6.76963 -0.0976181 7.18818 0.292854C7.60673 0.683327 7.60673 1.31745 7.18818 1.70793L3.65562 5.00039H13.9285C14.5212 5.00039 15 5.44709 15 6C15 6.55291 14.5212 6.99961 13.9285 6.99961H3.65897L7.18483 10.2921C7.60338 10.6825 7.60338 11.3167 7.18483 11.7071C6.76628 12.0976 6.08656 12.0976 5.66801 11.7071L0.310564 6.7091L0.313912 6.70597Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="absolute top-0 right-0 rounded-full flex justify-center items-center bg-[#195883] w-[50%] translate-x-[50%] translate-y-[50%] aspect-square cursor-pointer"
                  onClick={() => {
                    // setCurrentIndex(
                    //   (currentIndex + 1 + places.length) % places.length
                    // );
                    setPlaces(
                      places.map(
                        (item, index) =>
                          places[(index + places.length + 1) % places.length]
                      )
                    );
                  }}
                >
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7063 6.70859C14.0969 6.31797 14.0969 5.68359 13.7063 5.29297L8.70625 0.292969C8.31563 -0.0976562 7.68125 -0.0976562 7.29063 0.292969C6.9 0.683594 6.9 1.31797 7.29063 1.70859L10.5875 5.00234H1C0.446875 5.00234 0 5.44922 0 6.00234C0 6.55547 0.446875 7.00234 1 7.00234H10.5844L7.29375 10.2961C6.90312 10.6867 6.90312 11.3211 7.29375 11.7117C7.68437 12.1023 8.31875 12.1023 8.70938 11.7117L13.7094 6.71172L13.7063 6.70859Z"
                      fill="#8CC63E"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {largeMap && (
          <Modal isOpen={largeMap} onClose={closeModal}>
            <div className="w-full h-full">
              {" "}
              <MapComponent
                lat={places[currentIndex].latitude}
                lang={places[currentIndex].longitude}
                mini={true}
                scale={true}
              />
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Places;

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlacesRequest } from "@/actions/home";
import { FiArrowUpRight } from "react-icons/fi";
import dynamic from "next/dynamic";
import arrow from "../../public/images/Arrow.png";
import Image from "next/image";
import Modal from "../reusable/Modal";

const MapComponent = dynamic(() => import("../reusable/map"), {
  ssr: false,
});
function Places() {
  const [places, setPlaces] = useState([]);
  const [clickIcon, setClickIcon] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(4);
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
      if (!clickIcon && !mouseOver && places.length) {
        console.log(currentIndex, places.length);
        intervalRef.current = setInterval(() => {
          setClassNames((prevClasses) => {
            const newClasses = [...prevClasses];
            newClasses.push(newClasses.shift());
            return newClasses;
          });
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + places.length) % places.length
          );
        }, 3000); // 3 seconds
      }
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
      if (data.length < 8) setPlaces([...data, ...data]);
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
    setTimeout(() => setIsTransitioning(false), 1000);
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

    setTimeout(() => setIsTransitioning(false), 1000);
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
        <div className="w-full h-screen">
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
        </div>

        {/* Custom Info */}
        <div className="w-full h-full absolute text-white">
          <div className="absolute container-custom h-full top-8 lg:top-2/3">
            <div className=" font-semibold text-4xl lg:text-6xl mb-4">
              {places[currentIndex] && places[currentIndex].title}
            </div>
            <div
              className={`backdrop-blur-md ${
                clickIcon === "place" ? "bg-white text-blue-500" : "bg-white/30"
              } px-4 py-2 rounded-full inline-block mr-8 cursor-pointer `}
              onClick={() => {
                setClickIcon("place");
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "inline" }}
              >
                <path
                  d="M7.29167 8.33333C7.29167 6.83756 8.50423 5.625 10 5.625C11.4958 5.625 12.7083 6.83756 12.7083 8.33333C12.7083 9.8291 11.4958 11.0417 10 11.0417C8.50423 11.0417 7.29167 9.8291 7.29167 8.33333Z"
                  fill={clickIcon === "place" ? "rgb(59 130 246)" : "white"}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.14462 7.39782C3.43098 3.92371 6.33415 1.25 9.82005 1.25H10.18C13.6659 1.25 16.5691 3.92371 16.8554 7.39782C17.0096 9.26832 16.4318 11.1257 15.2438 12.5786L11.2496 17.4634C10.6037 18.2532 9.3963 18.2532 8.75049 17.4634L4.75627 12.5786C3.56822 11.1257 2.99044 9.26832 3.14462 7.39782ZM10 4.375C7.81387 4.375 6.04167 6.14721 6.04167 8.33333C6.04167 10.5195 7.81387 12.2917 10 12.2917C12.1861 12.2917 13.9583 10.5195 13.9583 8.33333C13.9583 6.14721 12.1861 4.375 10 4.375Z"
                  fill={clickIcon === "place" ? "rgb(59 130 246)" : "white"}
                />
              </svg>{" "}
              {places[currentIndex] && places[currentIndex].country}
            </div>
            <div
              className={`backdrop-blur-md ${
                clickIcon === "author"
                  ? "bg-white text-blue-500"
                  : "bg-white/30"
              } px-4 py-2 rounded-full inline-block cursor-pointer font-semibold`}
              onClick={() => setClickIcon("author")}
            >
              @ {places[currentIndex] && places[currentIndex].author}
            </div>
          </div>
        </div>
        {/* Custom Pan */}
        <div
          className={`absolute lg:right-0 lg:h-full ${
            clickIcon
              ? "w-full top-0 h-full lg:w-1/4 "
              : "w-full bottom-0 h-24 lg:w-40"
          }`}
        >
          <div className="w-full h-full backdrop-blur-md bg-white/30 text-white">
            {clickIcon && (
              <div className="p-8 flex flex-col justify-between h-full">
                <div className="text-2xl">
                  <div
                    className="w-4 h-auto inline cursor-pointer"
                    onClick={() => setClickIcon(null)}
                  >
                    <Image
                      src={arrow}
                      className="w-8 lg:w-12 inline"
                      alt={"arrow"}
                    />{" "}
                  </div>

                  {clickIcon === "author"
                    ? `@ ${places[currentIndex] && places[currentIndex].author}`
                    : `${
                        places[currentIndex] &&
                        places[currentIndex].country +
                          "," +
                          places[currentIndex].continent
                      }`}
                </div>
                <div className="flex flex-col items-center w-full justify-center">
                  {places[currentIndex] &&
                    (clickIcon === "author" ? (
                      <Image
                        src={
                          places[currentIndex].author_image &&
                          places[currentIndex].author_image.thumbnail
                        }
                        alt="author"
                        width={150}
                        height={150}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="relative aspect-[4/3] w-full">
                        <MapComponent
                          lat={places[currentIndex].latitude}
                          lang={places[currentIndex].longitude}
                          mini={false}
                          scale={true}
                        />
                      </div>
                    ))}

                  <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center mb-4">
                    {places[currentIndex] &&
                      (clickIcon === "author"
                        ? places[currentIndex].author
                        : places[currentIndex].place_name)}
                  </div>
                  <div className="text-lg text-center">
                    {places[currentIndex] && clickIcon === "author"
                      ? places[currentIndex].author_description
                      : places[currentIndex].place_description}
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className="text-lg inline cursor-pointer"
                    onClick={() => {
                      if (clickIcon === "place") {
                        setLargeMap(true);
                      }
                    }}
                  >
                    {clickIcon === "author"
                      ? "Follow for more"
                      : "View Large Map"}
                  </div>{" "}
                  <FiArrowUpRight />
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={`absolute bottom-0 lg:right-0 w-full lg:h-full lg:w-56
         ${clickIcon ? "hidden" : "flex flex-col items-center"}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative slider-container relative w-full lg:h-screen">
            {places.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames[index]}
                  onMouseOver={() => setMouseOver(true)}
                  onMouseOut={() => setMouseOver(false)}
                  onClick={() => {
                    const diff = currentIndex - index;

                    setClassNames((prevClasses) => {
                      const newClasses = [...prevClasses];
                      if (diff > 0) {
                        for (let i = 0; i < diff; i++)
                          newClasses.push(newClasses.shift());
                      } else {
                        for (let i = 0; i < Math.abs(diff); i++)
                          newClasses.unshift(newClasses.pop());
                      }
                      return newClasses;
                    });
                    setCurrentIndex(index);
                  }}
                >
                  <img
                    src={item.featured_image && item.featured_image.thumbnail}
                    className="w-full h-48 sm:h-64 lg:w-56 lg:h-full cursor-pointer lg:rounded-lg"
                    draggable="false"
                  />
                </div>
              );
            })}
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

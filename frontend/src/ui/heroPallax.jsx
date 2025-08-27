import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 9);
  const secondRow = products.slice(9, 20);
  const thirdRow = products.slice(12, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-10 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {/* Row 1 */}
        <motion.div className="flex flex-row-reverse space-x-reverse gap-4 sm:gap-6 md:gap-10 mb-10 md:mb-20 px-2 sm:px-4">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div className="flex flex-row gap-4 sm:gap-6 md:gap-10 mb-10 md:mb-20 px-2 sm:px-4">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div className="flex flex-row-reverse space-x-reverse gap-4 sm:gap-6 md:gap-10 px-2 sm:px-4">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold dark:text-white leading-tight text-center">
        Your Gateway to <br /> Sacred Knowledge
      </h1>

      <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl mt-6 md:mt-8 dark:text-neutral-200 text-center mx-auto">
        Discover a curated collection of holy books, scriptures, and spiritual
        classics from various faiths. <br />
        From Vedas and Puranas to the Bible, Quran, Guru Granth Sahib, and
        more— <br className="hidden sm:block" />
        we deliver timeless wisdom from diverse religions right to your
        doorstep.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group relative shrink-0 overflow-hidden rounded-xl shadow-lg 
      w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] 
      h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {/* Book Thumbnail Image */}
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={product.thumbnail}
            className="object-cover absolute h-full w-full inset-0 transition-transform duration-500 transform group-hover:scale-110"
            alt={product.title}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-3 sm:p-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
              {product.title}
            </h3>
            <p className="text-yellow-400 text-xs sm:text-sm mb-1">
              Rating: ★★★★★
            </p>
            <p className="text-white text-sm sm:text-base mb-2">
              {product.price}
            </p>
            <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
              {product.description}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded">
              Buy Now
            </button>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

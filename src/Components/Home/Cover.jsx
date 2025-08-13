
const Cover = () => {
  return (
    <div className="relative  w-full aspect-video overflow-hidden">
      <video
        className="absolute inset-0 w-full top-0 md:h-full object-contain"
        src="./IndianOil Cover.webm"
        autoPlay
        // loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default Cover;

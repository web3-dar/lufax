import backgroundVideo from '../images/bg-vid.mp4'; // Replace with your video path

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen">
      {/* Background Video */}
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
      ></video>

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full min-h-screen flex justify-center items-center text-center z-10">
        <h1 className="text-white text-3xl sm:text-3xl md:text-5xl font-semibold drop-shadow-lg max-w-[50%] tracking-wide leading-">
          A Leading Services Enabler For Small Business Owners In China
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

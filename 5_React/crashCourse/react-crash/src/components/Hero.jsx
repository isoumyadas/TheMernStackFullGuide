const Hero = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#093FB4] text-white mt-0.5 gap-2 h-80 rounded-b-lg">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-xl font-medium">{subtitle}</p>
    </div>
  );
};

export default Hero;

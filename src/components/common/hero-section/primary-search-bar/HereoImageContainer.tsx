const HereoImageContainer = () => {
  return (
    <div
      className="HereoImageContainer relative h-[537px] w-[1012px] mx-auto mt-15 flex justify-center items-center px-4 py-2"
      style={{ backgroundImage: "url(/assets/img/hero-img2.png)" }}
    >
      <div className="w-full h-full flex justify-center items-center ">
        <img src="/assets/img/hero-img1.png" alt="" />
      </div>

      {/*================>> Objects Start From Here <<==============*/}
      <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg flex justify-center items-center bg-[#FF81F4]">
        <img
          src="/assets/icons/outline_dribble.png"
          alt=""
          className="w-9 h-9"
        />
      </div>

      <div className="absolute -left-[38px] bottom-[132px] w-[220px] h-[152px] bg flex justify-center items-center">
        <img
          src="/assets/icons/top_freelancer.png"
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="absolute -left-8 -bottom-4 w-[41px] h-[41px] rounded-full flex justify-center items-center">
        <img
          src="/public/assets/icons/Star 1.png"
          alt=""
          className="w-full  h-full"
        />
      </div>

      <div className="absolute -right-16 -top-26 w-[111px] h-[111px] rounded-full flex justify-center items-center">
        <img src="/assets/icons/Star 2.png" alt="" className="w-full  h-full" />
      </div>

      <div className="absolute right-0 bottom-0 w-20 h-20 rounded-full bg flex justify-center items-center bg-primary">
        <img src="/assets/icons/Arrow.png" alt="" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default HereoImageContainer;

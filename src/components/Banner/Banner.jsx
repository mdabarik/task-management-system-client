import BannerBg from "./../../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="relative max-w-[1280px] mx-auto">
            <img className="h-[550px] object-cover w-full" src={BannerBg} alt="banner bg" />
            <div className="bg-[#00000030] w-full h-[550px] absolute top-0 left-0"></div>
            <div className="absolute top-0 left-0 h-[550px] w-full flex flex-col items-center justify-center">
                <h2 className="font-bold text-3xl">TaskMaster Pro</h2>
                <p>Your Comprehensive Solution for Seamless Task Management and Productivity Optimization</p>
                <button>Let’s Explore</button>
            </div>
        </div>
    );
};

export default Banner;
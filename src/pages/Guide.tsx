import logo from "@assets/curiosta_logo.svg";
import vector1 from "@assets/vector1.svg";
import vector2 from "@assets/vector2.svg";
import vector3 from "@assets/vector3.svg";
import Typography from "@components/Typography";
import Button from "@/components/Button";
import { useSignal } from "@preact/signals";
import { route } from "preact-router";

const Guide = () => {
  const activeIndex = useSignal<number>(0);

  const guideList = [
    {
      title: "Hassle-free booking",
      description:
        "Discover all the tools and machineries that is available in your fablab with Curiosta and book your assets effortlessly!",
      image: vector1,
    },
    {
      title: "User-Friendly at its core",
      description:
        "Discover the essence of user-friendliness as our interface empowers you with intuitive controls and effortless interactions!",
      image: vector2,
    },
    {
      title: "Create Ceaselessly",
      description:
        "Focus on building products and leave the headache of managing your booking, day-to-day activities in the makerspace to us!",
      image: vector3,
    },
  ];

  const handleNext = () => {
    if (activeIndex.value + 1 < guideList.length) {
      activeIndex.value++;
    } else {
      route("/welcome");
    }
  };

  return (
    <div className="flex justify-center  p-4">
      <div className="flex flex-col justify-center items-center gap-8 rounded-2xl w-full sm:w-1/4 ">
        <div className="w-20">
          <img src={logo} alt="curiosta-logo" />
        </div>

        {guideList.map((guide, index) => (
          <div
            key={index}
            className={`${
              activeIndex.value === index ? "flex" : "hidden"
            } flex-col items-center`}
          >
            <img src={guide.image} alt="vector" className="p-4 " />
            <div className="flex justify-center items-center gap-2 my-4">
              {Array(guideList.length)
                .fill(1)
                .map((val, indicatorIndex) => (
                  <span
                    className={`${
                      activeIndex.value === indicatorIndex
                        ? "bg-primary-700"
                        : "bg-primary-100"
                    } w-6 h-1  rounded-2xl`}
                  ></span>
                ))}
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <Typography size="h4/bold">{guide.title}</Typography>
              <Typography size="body2/normal" variant="secondary">
                {guide.description}
              </Typography>
            </div>
          </div>
        ))}
        <div className="w-full flex flex-col gap-2">
          <Button type="button" onClick={handleNext} className="!rounded-xl">
            Next
          </Button>
          <Button
            type="button"
            className={"!bg-primary-100 text-primary-900 !rounded-xl"}
            onClick={() => route("/welcome")}
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Guide;

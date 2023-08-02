import "@/style/globals.css";
import Image from "next/image";
import SclImg from "@/assets/main-bg.jpg";
function Page() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <Image
          className="object-cover h-screen bg-contain bg-center bg-no-repeat bg-fixed filter brightness-50 contrast-100 grayscale-0 invert-0 saturate-100 sepia-0 drop-shadow-lg"
          src={SclImg}
          width={10000}
          height={500}
          alt="Picture of the author"
        />
        <div className="absolute flex w-6/12 flex-col justify-center top-32 items-center gap-[18rem] text-white">
          <div className="flex justify-center items-center flex-col gap-[3rem]">
            <div className="text-6xl font-bold ">About Us</div>
            <div className="text-lg text-justify font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              similique? Nihil tempore iure distinctio fuga provident aut modi
              ab perspiciatis dignissimos beatae dicta esse, eius explicabo,
              numquam in saepe aliquid? Omnis nostrum voluptatibus molestias
              nihil saepe rem vero illo libero. Facilis repudiandae autem natus,
              rerum eveniet maxime exercitationem aliquid, harum similique illo
              tenetur impedit. Esse consequatur libero perspiciatis laboriosam
              vel.
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-[3rem]">
            <div className="text-6xl font-bold ">WHY Us</div>
            <div className="text-lg text-justify font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              similique? Nihil tempore iure distinctio fuga provident aut modi
              ab perspiciatis dignissimos beatae dicta esse, eius explicabo,
              numquam in saepe aliquid? Omnis nostrum voluptatibus molestias
              nihil saepe rem vero illo libero. Facilis repudiandae autem natus,
              rerum eveniet maxime exercitationem aliquid, harum similique illo
              tenetur impedit. Esse consequatur libero perspiciatis laboriosam
              vel.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;

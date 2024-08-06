import Collection from "../components/Collection";
import Carousel from "../components/Carousel";

export default function HomePage() {
  return (
    <main className="flex ">
      <div className="flex-grow w-full">
        <div className="flex justify-around bg-[#F5F5F5] w-full px-28">
          <Carousel />
        </div>
        <div className="flex justify-center">
          <Collection />
        </div>
      </div>
    </main>
  );
}

import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return <div className="w-full h-screen flex flex-col backgorund background">
    <h1 className=" bg-white rounded-xl w-10/12 text-center
     mt-[40px] px-10 py-4 text-3xl font-bold mx-auto ">RANDOM GIFS</h1>
    <div className="flex flex-col">
     
     <Random/>
     <Tag/>
    </div>
  </div>;
}

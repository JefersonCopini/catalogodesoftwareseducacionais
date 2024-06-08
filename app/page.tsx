import Image from 'next/image';
import Header from './components/Header';
//import Banner from './components/Banner';
import Principalpage from './components/Principalpage';

export default function Home() {
  return (
    <div className="bg-[#3d3d3d] min-h-screen flex flex-col">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <Header />
        <Principalpage />
      </div>
    </div>
  );
}

import Image from 'next/image';
import Header from './components/Header';
//import Banner from './components/Banner';
import Principalpage from './components/Principalpage';
import Footer from './components/Footer';
import Aside from './components/Aside';

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-800 min-h-screen flex flex-col">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        
        <main className="flex-grow">
          
          <Principalpage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

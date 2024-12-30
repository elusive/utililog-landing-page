import "./App.css";
import BulletsSection from "./components/BulletsSection/Bullets.Section";
import HeroSection from "./components/HeroSection/Hero.Section";
import Layout from "./components/layout";
import ScreensSection from "./components/ScreensSection/Screens.Section";

function App() {
    return (
        <>
            <HeroSection />
            <Layout>
                <div className="mx-auto flex flex-row md:gap-x-10 gap-y-20 m:gap-y-14">
                    <div className="h-full w-90 text-left">
                        <BulletsSection />

                        <div className="w-90 text-center">
                            <a href="mailto:support@utililog.com?subject=Demo Request" className="font-bold">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Request a Demo
                            </button></a>
                        </div>
                    </div>

                    <div className="h-full w-90 min-w-800 min-h-800 text-left">
                        <ScreensSection />                    
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default App;

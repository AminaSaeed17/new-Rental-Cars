
import googlePlayIcon from "../../assets/imges/landing-page/andriod.png";
import appStoreIcon from "../../assets/imges/landing-page/ios.png";

export default function DownloadButton({isVisible}) {
  return <>
    <div
            className={`flex items-center justify-center md:justify-start gap-3 mt-2 transition-all duration-700 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <button className="flex items-center gap-2 bg-black text-white rounded-lg px-4 py-2.5 hover:bg-neutral-800 transition-colors">
              <img src={googlePlayIcon} alt=""/>
              
            </button>
            <button className="flex items-center gap-2 bg-black text-white rounded-lg px-4 py-2.5 hover:bg-neutral-800 transition-colors">
              <img src={appStoreIcon} alt=""/>
            </button>
          </div>
  </>
}

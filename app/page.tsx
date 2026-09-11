import Image from "next/image";
import  "./page.css";
import androidImage from "@/public/assets/android_blured.png";
import kotlinImage from "@/public/assets/kotli_blured.png";
import creativeLogo from "@/public/assets/icons/creaative_icon.svg";
import gridImage from "@/public/assets/grid png white background transparent_21045126 copy 2.png";
export default function Home() {
  return (
    <div className="grid">
      <Image
              className="creaative-icon"
              src={creativeLogo}
              alt="sads"
        />
      <Image
              className="android-image"
              src={androidImage}
              alt="sads"
        />
        <Image
              className="grid-image"
              src={gridImage}
              alt="sads"
        />
        <Image
              className="grid-image-02"
              src={gridImage}
              alt="sads"
        />
        <Image
              className="kotlin-image"
              src={kotlinImage}
              alt="sads"
        />
      <main className="main">

        <div className="intro slideUpFade">
            <h1>
              <span>
                <div className="rect-01" />
                <div className="rect-02" />
                <div className="rect-03" />
                <div className="rect-04" />
                برمج سوق

              </span>
              <span>  و ارتقي</span>
            </h1>
            <h2>
              <span>إلى العالم الرقمي </span>
            </h2>
        </div>
        <div className="slogen ">
          <p> 
            <span>حوّل فكرتك إلى تطبيق حقيقي</span>
            <span>kotlin تعلم </span>
          </p>
          <p>
            <span>استخدم الذكاء الاصطناعي، ابنِ منتجك، وتعلّم كيف توصله إلى جمهورك.</span>
          </p>
        </div>
        <button className="cta" type="button">
          سجل الآن
        </button>

      </main>
              <div className="flex-group pop">
          <Image
              className="saas-icons"
              src="/assets/icons/ai-90.png"
              alt="sads"
              width={30}
              height={30}
            />
          <Image
              className="saas-icons"
              src="/assets/icons/android-100.png"
              alt="sads"
              width={30}
              height={30}
            />
          <Image
              className="saas-icons"
              src="/assets/icons/kotlin-96.png"
              alt="sads"
              width={30}
              height={30}
            />
          <Image
              className="saas-icons"
              src="/assets/icons/marketing-96.png"
              alt="sads"
              width={30}
              height={30}
            />
        </div>
    </div>
  );
}

import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";


const Home = () => {
  return (
    <>
     <section className={styles.wrapper}>
      <div className={styles.outerwrapper}>
        <div className={styles.innerwrapper}>
          <p className={styles.paragraph}>
            Smart Shopping Starts Here: 
            <Image 
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
          </p>
          <h1 className={styles.heading_text}>
            UnLeash the Power Of 
            <span className="primary text-primary"> PriceClues</span>
          </h1>
          <p className="mt-6">
            Powerful self-service Product and Growth Analytics to Help
            you Convert, Engage, and Retain More...
          </p>
          <SearchBar />
        </div>
        <HeroCarousel />
      </div>
     </section>

     <section className="trending-section">
      <h2 className="section-text">Trending</h2>
      <div className={styles.trending_wrapper}>
        {['Apple Iphone 15', 'Book', 'Sneakers'] .map((product) => (
          <div>{product}</div>
        ))}
      </div>

     </section>
    </>
  )
};

export default Home;

const styles = {
  wrapper: `px-5 md:px-20 py-24 border-2 `,
  outerwrapper:`flex max-xl:flex-col gap-16`,
  innerwrapper:`flex flex-col justify-center`,
  paragraph:`small-text`,
  heading_text:`head-text`,
  trending_wrapper:`flex flex-wrap gap-x-8 gap-y-16`,
}
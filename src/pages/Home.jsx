import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Feature from "../components/Feature"
import Genres from "../components/Genres"

function Home() {
  return (
    <div className="xl:container xl:mx-auto text-white bg-[#171717]">
      <Banner />
      <Genres />
      <Feature />
      <Contact />
    </div>
  )
}

export default Home
import ArtistCircle from "../components/ArtistCircle"
import SongPlaying from "../components/SongPlaying"

function Discover() {
  return (
    <section className='text-white pt-[90px] bg-[#171717] px-[20px] mx-auto md:px-[40px] lg:container lg:px-[60px] pb-[40px]'>
      <h1 className="text-[2rem] font-bold mb-10">Discover</h1>
      <SongPlaying />
      <h2 className="mt-10 text-[2rem] font-bold mb-5 md:mb-10">Artists</h2>
      <ArtistCircle />
        <div className="rounded-[10px] bg-black/75 py-[20px] flex flex-col justify-center items-center max-w-[400px] mx-auto md:mt-10">
          <h2 className="text-[1.5rem] font-bold text-center mb-5">TO EXPERIENCE QUALITY MUSIC</h2>
          <button className="rounded-[10px] font-bold text-[1.2rem] bg-[#8B00F9] border-white border-[1px] px-[20px] py-[5px]">SIGN UP</button>
        </div>
    </section>
  )
}

export default Discover
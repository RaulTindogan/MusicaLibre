
function Feature() {
  return (
    <section className="playlist-container px-[20px] py-5 flex justify-center items-center md:px-[40px] lg:px-[60px]">
        <div className="text-white rounded-[10px] py-[20px] md:w-[90%] md:flex flex-col items-center">
            <h2 className="text-[2rem] text-center font-bold mb-10">FEATURED PLAYLIST</h2>
            <div className="max-w-[805px] border-white border-[1px] rounded-[10px] rgba(45, 45, 45, 0.483) p-[20px] md:flex md:flex-col">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="flex justify-center md:w-[50%]">
                        <img src="assets/feature/beach1.jpg" alt="" className="rounded-[20px] py-2 w-[90%] md:w-[100%]"/>
                    </div>
                    <div className="w-[90%] md:w-[50%] md:pl-[50px]">
                        <h2 className="text-[24px] text-center font-bold my-3 md:text-left">Summer Vibes 2023</h2>
                        <p>Get ready for a sizzling summer with this handpicked selection of the hottest tracks. From beach parties to road trips, let the music set the mood for your sun-soaked adventures. It's time to embrace the summer vibes!</p>
                    </div>
                </div>
                <div className="flex py-3">
                    <div className="w-[50%]">
                        <img src="assets/feature/green-play-icon.png" alt="" className="w-[50px] mx-auto mt-[20px]"/>
                    </div>
                    <div className="md:pl-[50px]">
                        <p><span className="playlist-span">Curator:</span> DJ SummerBeats</p>
                        <p><span className="playlist-span">Total Playtime: </span>42 minutes</p>
                        <p><span className="playlist-span">Followers:</span>57,320</p>
                    </div>
                </div>
            </div>       
        </div>
    </section>
  )
}

export default Feature
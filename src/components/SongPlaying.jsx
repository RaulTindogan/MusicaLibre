
function SongPlaying() {
  return (
    <div className="max-w-[850px] mx-auto">
        <div className="bg-[url(./assets/discover/alanwalker.png)] bg-cover bg-black/40 bg-blend-overlay h-[200px] flex flex-col justify-end md:h-[400px]">
          <h2 className="w-full text-center text-[1.5rem] font-bold md:text-[2rem]">Alan Walker - Faded</h2>
          <div className="w-full bg-black/75 py-[10px] flex flex-col items-center justify-center">
            <div className="w-full flex flex-col justify-center">
              <div className="flex justify-center items-center mb-[10px]">
                <img src="./assets/discover/Back.png" alt="" className="w-[30px] h-[30px] mx-[10px] cursor-pointer" />
                <img src="./assets/discover/Play.png" alt="" className="w-[40px] h-[40px] mx-[10px] cursor-pointer" />
                <img src="./assets/discover/Next.png" alt="" className="w-[30px] h-[30px] mx-[10px] cursor-pointer" />
              </div>
              <div className="flex justify-center">
                <input type="range" className="playing-range" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="text-left text-[15px] bg-black border-[1px] border-white md:text-[1.2rem]">
              <tr>
                <th className="pl-[5px] border-r-[1px] border-white">Title</th>
                <th className="pl-[5px] border-r-[1px] border-white">Artist</th>
                <th className="pl-[5px] border-r-[1px] border-white">Genre</th>
                <th className="pl-[5px]">Duration</th>
              </tr>
            </thead>
            <tbody className="text-left text-[14px] md:text-[1rem]">
              <tr className="bg-black/30">
                <td className="song-data">Faded</td>
                <td className="song-data">Alan Walker</td>
                <td className="song-data">EDM</td>
                <td className="song-data">3:00</td>
              </tr>
              <tr className="bg-black">
                <td className="song-data">Faded</td>
                <td className="song-data">Alan Walker</td>
                <td className="song-data">EDM</td>
                <td className="song-data">3:00</td>
              </tr>
              <tr className="bg-black/30">
                <td className="song-data">Faded</td>
                <td className="song-data">Alan Walker</td>
                <td className="song-data">EDM</td>
                <td className="song-data">3:00</td>
              </tr>
              <tr className="bg-black">
                <td className="song-data">Faded</td>
                <td className="song-data">Alan Walker</td>
                <td className="song-data">EDM</td>
                <td className="song-data">3:00</td>
              </tr>
              <tr className="bg-black/30">
                <td className="song-data">Faded</td>
                <td className="song-data">Alan Walker</td>
                <td className="song-data">EDM</td>
                <td className="song-data">3:00</td>
              </tr>
            </tbody>     
          </table>
        </div>
      </div>
  )
}

export default SongPlaying
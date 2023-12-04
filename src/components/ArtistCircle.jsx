
function ArtistCircle() {
  return (
    <div className="flex justify-evenly gap-[10px] pb-10">
        <div className="artist-circle bg-[url(./assets/genres/pop-music.png)] bg-cover md:h-[150px]"></div>
        <div className="artist-circle bg-[url(./assets/genres/bobmarley.jpg)] bg-cover md:h-[150px]"></div>
        <div className="artist-circle bg-[url(./assets/genres/images.jpg)] bg-cover bg-center md:h-[150px]"></div>
        <div className="artist-circle bg-[url(./assets/genres/metallica.jpg)] bg-cover bg-center md:h-[150px]"></div>
    </div>
  )
}

export default ArtistCircle
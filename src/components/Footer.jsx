
function Footer() {
  return (
    <section className="mx-auto px-[20px] py-[40px] bg-black md:px-[40px] xl:container lg:px-[60px] text-white">
        <div className="lg:flex gap-[20px]">
            <div className="lg:w-1/3">
                <h2 className="text-[2rem] font-bold mb-5">About Us</h2>
                <div className="mb-10">
                    <h3 className="text-[1.5rem] text-center mb-10 font-bold lg:text-left lg:mb-5 lg:text-[1.2rem]">"Harmony Unleashed: Your Gateway to Musical Bliss"</h3>
                    <p className="lg:text-[12px]">A music website provides a variety of content including news, reviews, artist profiles, videos, event listings, interviews, educational resources, streaming, playlists, gear reviews, user-generated content, song lyrics, industry insights, blogs, interactive features, and resources for musicians. The specific content depends on the site's focus and its intended audience, which could be music enthusiasts, fans, or aspiring musicians.</p>
                </div>      
            </div>
            <div className="lg:w-1/3 lg:pl-[20px]">
                <h2 className="text-[2rem] font-bold mb-5">Useful Links</h2>
                <div className="mb-10">
                    <a href="#" className="text-[18px] mb-3 font-bold cursor-pointer block">Home</a>
                    <a href="#" className="text-[18px] mb-3 font-bold cursor-pointer block">Songs</a>
                    <a href="#" className="text-[18px] mb-3 font-bold cursor-pointer block">Artists</a>
                    <a href="#" className="text-[18px] mb-3 font-bold cursor-pointer block">Sign Up</a>
                </div>
            </div>
            <div className="lg:w-1/3">
                <h2 className="text-[2rem] font-bold mb-5">Social Links</h2>
                <div className="mb-10 flex">
                    <a href="#"><img src="assets/footer/facebook.png" alt="Facebook Logo" className="social-links" /></a>
                    <a href="#"><img src="assets/footer/instagram.png" alt="Instagram Logo" className="social-links" /></a>
                    <a href="#"><img src="assets/footer/twitter.png" alt="Twitter Logo" className="social-links" /></a>
                    <a href="#"><img src="assets/footer/youtube.png" alt="Youtube Logo" className="social-links" /></a>
                </div>
            </div>
        </div>
        <div>
            <hr />
            <p>&copy; MusicaLibre 2023</p>
        </div>
    </section>
  )
}

export default Footer
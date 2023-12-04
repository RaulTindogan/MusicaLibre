import Contact from '../components/Contact'
function About() {
  return (
    <section className='text-white pt-[90px] mx-auto px-[20px] md:px-[40px] xl:container lg:px-[60px] text-white bg-[#171717]'>
      <h1 className='text-[2rem] font-bold mb-10'>ABOUT US</h1>
      <div className='mb-10'>
        <h2 className='text-[1.5rem] text-center font-bold mb-5'>"Harmony Unleashed: Your Gateway to Musical Bliss"</h2>
        <p>A music website provides a variety of content including news, reviews, artist profiles, videos, event listings, interviews, educational resources, streaming, playlists, gear reviews, user-generated content, song lyrics, industry insights, blogs, interactive features, and resources for musicians. The specific content depends on the site's focus and its intended audience, which could be music enthusiasts, fans, or aspiring musicians.</p>
      </div>
      <div className='mb-10'>
        <h2 className='text-[2rem] font-bold mb-5'>Who We Are:</h2>
        <p>MusicaLibre is a passionate team of music enthusiasts and tech innovators. We believe that music has the power to inspire, heal, and unite people from all walks of life. Our platform is the result of countless hours of dedication and creativity, driven by our shared love for music.</p>
      </div>
      <div className='mb-10'>
        <h2 className='text-[2rem] font-bold mb-5'>What Sets Us Apart:</h2>
        <ol className='list-decimal pl-[20px]'>
          <li>Vast Music Library: We offer access to an extensive and diverse music library, spanning genres, languages, and eras. You'll find everything from classic hits to the latest releases.</li>
          <li>Personalized Playlists: Our advanced algorithms and user preferences help us curate personalized playlists and recommendations, ensuring you discover new music that resonates with you.</li>
          <li>Seamless User Experience: We've designed our platform to be user-friendly, so you can easily navigate, create playlists, and enjoy your music without interruption.</li>
          <li>High-Quality Sound:  We're committed to delivering high-quality audio, allowing you to enjoy your music with exceptional clarity.</li>
        </ol>
      </div>
      <div className='mb-10'>
        <h2 className='text-[2rem] font-bold mb-5 text-center'>Join Us in Celebrating Music:</h2>
        <p>We invite you to join us on this musical journey. Whether you're an artist looking to share your work, a listener searching for the perfect playlist, or a music lover just exploring the world of sound, [Your Music Player Platform Name] is here for you. Together, let's celebrate the universal language of music.</p>
      </div>
      <Contact />
    </section>
  )
}

export default About
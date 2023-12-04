function Banner() {
  return (
    <section className="h-[70vh] flex items-center justify-center px-[20px] md:h-[90vh] xl:px-[60px]" style={
        {
            width: "100%",
            backgroundImage: "url('assets/banner/Alone.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <h1 className="text-center text-white text-[24px] font-black mt-[150px] md:text-[40px] md:mt-[250px]">Open The World of Music.<br/>It's All Here</h1>
        </section>
  )
}

export default Banner
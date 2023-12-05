import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Genres() {

  const ArrowPrev = ({onClick})=>{
   return (
    <img
      src = {"assets/genres/circle-chevron-left-solid.svg"}
      className={`arrow-btn arrow-left`}
      onClick={onClick}
    />
   )
  }

  const ArrowNext = ({onClick})=>{
    return (
      <img
        src = {"assets/genres/circle-chevron-right-solid.svg"}
        className={`arrow-btn arrow-right`}
        onClick={onClick}
      />
    )
  }

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        prevArrow: <ArrowPrev />,
        nextArrow: <ArrowNext />
    }
    
  return (
    <section className="px-[20px] py-[40px] md:px-[40px] lg:px-[60px]">
        <h2 className="text-[2rem] font-bold text-white">GENRES</h2>
        <div className="mt-4">
            <a href="#"><p className="text-[1.2rem] text-white text-right font-bold mb-5">Show All</p></a>
            <div> 
                <Slider {...settings}>
                    {genres.map((genre, index)=>(
                        <div key={index} className="genre-cards">
                            <img src={genre.genreImage} alt={genre.genreTitle} className="w-full h-[250px]"/>
                            <p className="text-white text-center text-[24px] font-bold">{genre.genreTitle}</p>
                        </div>    
                    ))}
                </Slider>
            </div>
        </div>
    </section>
  )
}

const genres = [
    {
        genreTitle: "POP",
        genreImage: "assets/genres/pop-music.png"
    }, 
    {
        genreTitle: "ROCK",
        genreImage: "assets/genres/images.jpg"
    },
    {
        genreTitle: "COUNTRY",
        genreImage: "assets/genres/alabama.jpg"
    },
    {
        genreTitle: "EDM",
        genreImage: "assets/genres/alanwalker.jpg"
    },
    {
        genreTitle: "RAP",
        genreImage: "assets/genres/eminem.jpg"
    },
    {
        genreTitle: "REGGAE",
        genreImage: "assets/genres/bobmarley.jpg"
    },
    {
        genreTitle: "METAL",
        genreImage: "assets/genres/metallica.jpg"
    },
    {
        genreTitle: "R&B",
        genreImage: "assets/genres/usher.jpg"
    }
  ]
    

export default Genres

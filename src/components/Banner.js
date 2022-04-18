import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
      if (location.pathname == "/categoria/Poster") {
          setPath("Poster");
      } else if (location.pathname == "/categoria/LineArt") {
          setPath("Line Art");
      } else if (location.pathname == "/categoria/Abstract") {
          setPath("Abstract");
      } else {
          setPath("Overview");
      }
  } , [location.pathname])

  return (
    <>
        <div className='bannerContainer cFlex'>
            <div className='bannerFondoContainer cFlex'></div>
            <div className='bannerTextContainer cFlex'>
                <h1 className='textoBanner'>{ path }</h1>
            </div>
        </div>
    </>
  )
}

export default Banner
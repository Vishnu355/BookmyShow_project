import React from "react";
import Slider from "react-slick";


import Poster from "../poster/poster.component";

import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";

export const premier = () =>{
    const settings ={
        Infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
            breakpoints: 1024,
            settings: {
                slidesToshow: 3,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        {
            breakpoints: 600,
            settings: {
                slidesToshow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoints: 480,
            settings: {
                slidesToshow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
      ],
    };

   const Premierimages = [
       {
       src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
       alt:"zack",
       title:"Zack",
       subtitle:"english",
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt:"zack",
        title:"Zack",
        subtitle:"english",
     },
     {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt:"zack",
        title:"Zack",
        subtitle:"english",
     },
     {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt:"zack",
        title:"Zack",
        subtitle:"english",
     },
     {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt:"zack",
        title:"Zack",
        subtitle:"english",
     },
     {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt:"zack",
        title:"Zack",
        subtitle:"english",
     },
     {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt:"zack",
        title:"Zack",
        subtitle:"english",
     },
   ]; 
    return  (
     <>
     <div className="flex  flex-col items-start">
         <h3 className="text-white text-xl font-bold">Premiers</h3>
         <p className="text-white text-sm">Brand new release every friday</p>
     </div>
    <Slider {...PosterCarouselSettings}>
        {Premierimages.map((image) => ( 
        <Poster {...image} isDark />))}
    </Slider>
    </>
    );
};


export default premier;
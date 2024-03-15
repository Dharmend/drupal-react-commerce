import { useQuery } from '@tanstack/react-query';
import React,{useEffect} from 'react';
import { fetchHomeCarousel } from '../../Utility/Api';
import Slider from "react-slick";

function CategorySection(){

    const {data, isPending, isLoading, isError, error} = useQuery({
        queryKey: ['product_home_carouse'],
        queryFn: fetchHomeCarousel
    });
    const API_HOST = process.env.REACT_APP_API_ROOT;

    var settings = {
        slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
      };

    return(
    <>
    <section className="categories">
        <div className="container">
            <div className="row1">
            <div className="categories__slider owl-carousel1">

            
        <Slider {...settings}>
            {data && data.map((category,index) => (
                <div className="col-lg-32" key={index}>
                    <div className="categories__item1">
                        <img src={`${API_HOST}${category?.field_media_image}`}/>
                        <h5><a href="/">{category?.name}</a></h5>
                    </div>
                </div>
            ))}
        </Slider>

                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default CategorySection;
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchHomeBanners } from '../Utility/Api';

function BannerSection(){
    const { data, isPending, isLoading, isError, error } = useQuery({
        queryKey: ['home_banners'],
        queryFn: fetchHomeBanners,
        staleTime: 1000 * 1, // 5 sec
        // gcTime: 1000,
      });
      const finalData = [];
      const API_HOST = process.env.REACT_APP_API_ROOT;
      /*for(var key in data) {
        console.log('key');
        console.log(data['data']);
        data['data'].map((banner_data) => {
            finalData.push({
                name:banner_data.attributes.name
            })
        });
        //for relationships
        data['included'].map((banner_image) => {
            finalData.push({
                //name:banner_data.attributes.name
            })
        });
        finalData.push({
            name:data.attributes.name,
            name:data.attributes.name,
            name:data.attributes.name,
        })*/
      //}
    /*data['data'].map((banner_data) => {
        finalData[0] = banner_data.attributes.name
    });
    data['included'].map((banner_image) => {
        finalData[0] = banner_image.attributes.uri.url
    });*/
    //finalData[0] = data['data'];
    //finalData[1] = data['included'];
    return(
        <>
        <div className="banner">
        <div className="container">
            <div className="row">
               {data && data['included'].map((banner_data,index) => (
                <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                    <div className="banner__pic">
                        <img src={`${API_HOST}${banner_data.attributes.uri.url}`} alt=""></img>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
    </>
    )
}

export default BannerSection;
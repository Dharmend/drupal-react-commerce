import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { productDefaultImage, productDefaultImageMedia } from '../../Utility/Api';

function FeaturesSectionImage(props){

    const[productMediaImageUUID, setproductMediaImageUUID] = useState('');

    const {data, isPending, isLoading, isError, error} = useQuery({
        queryKey: ['product_default_image',props.field_image_uuid],
        queryFn: () => productDefaultImage(props.field_image_uuid),
        enabled: !!props.field_image_uuid
    });
    /*setproductMediaImageUUID(data.data.id);
    //get the whole media of the image
    const {media_data, media_isPending, media_isLoading, media_isError, media_error} = useQuery({
        queryKey: ['product_default_image_media',productMediaImageUUID],
        queryFn: () => productDefaultImageMedia(productMediaImageUUID),
        enabled: !!productMediaImageUUID
    });*/
    //console.log('state data');
    //console.log(productMediaImageUUID);
    const API_HOST = process.env.REACT_APP_API_ROOT;
    //console.log('image data');
    //console.log(data);

    return(
        <>
            <div className="featured__item__pic set-bg" data-setbg={`${API_HOST}${data && data?.data?.attributes?.uri?.url}`} style={{
                backgroundImage: `url(${API_HOST}${data && data?.data?.attributes?.uri?.url})`
            }}>
                <ul className="featured__item__pic__hover">
                    <li><a href="/"><i className="fa fa-heart"></i></a></li>
                    <li><a href="/"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </>
    )
}

export default FeaturesSectionImage;
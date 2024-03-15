import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { productDefaultVariation } from '../../Utility/Api';

function FeaturedSectionPrice(props){

    const {data, isPending, isLoading, isError, error} = useQuery({
        queryKey: ['product_default_variation_new',props.uuid],
        queryFn: () => productDefaultVariation(props.uuid),
        enabled: !!props.uuid
    });

    return(
        <>
        <h5>{data && data.data.attributes.price.formatted}</h5>
        </>
    )
}

export default FeaturedSectionPrice;
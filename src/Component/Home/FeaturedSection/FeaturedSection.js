import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { productListing } from '../../Utility/Api';
import FeaturedSectionPrice from './FeaturedSectionPrice';
import FeaturesSectionImage from './FeaturedSectionImage';

function FeaturesSection(){

const {data, isPending, isLoading, isError, error} = useQuery({
    queryKey: ['product_default_featured_block'],
    queryFn: productListing
});

//console.log('data list');
//console.log(data);

    return(
        <>
        <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter">
            { data && data['data'].map((featured_product,index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={index}>
                    <div className="featured__item">
                        <FeaturesSectionImage uuid={featured_product.id} field_image_uuid={featured_product.relationships.field_image.data.id}></FeaturesSectionImage>
                        <div className="featured__item__text">
                            <h6><a href="/">{featured_product.attributes.title}</a></h6>
                            <FeaturedSectionPrice uuid={featured_product.id} />
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
        </>
    )
}

export default FeaturesSection;
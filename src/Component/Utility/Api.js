export async function fetchHomeBanners() {
    const response = await fetch('http://localhost-d10commerce.com/jsonapi/media/banner?include=field_media_image_1');
    //const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await handleResponse(response);
  }

// Commerce Default product api
export async function productListing() {
    const response = await fetch('http://localhost-d10commerce.com/jsonapi/commerce_product/default?page[limit]=8&sort=created');
    return await handleResponse(response);
}

// Commerce Default product variations api
export async function productDefaultVariation(uuid) {
    const response = await fetch(`http://localhost-d10commerce.com/jsonapi/commerce_product/default/${uuid}/default_variation`);
    //const response = await fetch('http://localhost-d10commerce.com/jsonapi/commerce_product/default/917a1205-f115-4c6d-8bc7-d6eaa67f3416/default_variation');
    return await handleResponse(response);
}

// Commerce Default product image api
export async function productDefaultImage(uuid) {
    //const response = await fetch(`http://localhost-d10commerce.com/jsonapi/commerce_product/default/${uuid}/field_image`);
    const response = await fetch(`http://localhost-d10commerce.com/jsonapi/media/image/${uuid}/field_media_image`);
    return await handleResponse(response);
}

// Commerce Default product image media detail api
export async function productDefaultImageMedia(uuid) {
  //const response = await fetch(`http://localhost-d10commerce.com/jsonapi/commerce_product/default/${uuid}/field_image`);
  const response = await fetch(`http://localhost-d10commerce.com/jsonapi/media/image/${uuid}/field_media_image`);
  return await handleResponse(response);
}

// Commerce Default product variations api
export async function productDefaultDepartment() {
    const response = await fetch('http://localhost-d10commerce.com/jsonapi/commerce_product/default/917a1205-f115-4c6d-8bc7-d6eaa67f3416/default_variation');
    return await handleResponse(response);
}

export async function fetchHomeBannersRelations(uuid){
    const response = await fetch(`http://localhost-d10commerce.com/jsonapi/media/banner/${uuid}/field_media_image_1`);
    return await handleResponse(response);
}
// Get owl carosal images

export async function fetchHomeCarousel(){
  const response = await fetch(`http://localhost-d10commerce.com/api/taxonomy/department`);
  return await handleResponse(response);
}

  async function handleResponse(response) {
    if (!response.ok) {
      const error = new Error('Error occured while fetching notes!');
      error.code = response.status;
      error.message = error.code === 404 ? 'Something went wrong!' : await response.json();
      throw error;
    }
    return await response.json();
  }
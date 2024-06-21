import axios from 'axios'

 const getData = async () => {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=mobile`;
    try {

      
      const response = await axios.get(url);
      const entries = response.data.items;
  
      const assetsUrl = `https://cdn.contentful.com/spaces/${spaceId}/assets?access_token=${accessToken}`;
      const assetsResponse = await axios.get(assetsUrl);
      const assets = assetsResponse.data.items;
  
      const assetsMap = {};
      assets.forEach(asset => {
        assetsMap[asset.sys.id] = asset.fields.file.url;
      });
  
      const data = entries.map(entry => {
        const fields = entry.fields;
        const imageId = fields.image?.sys?.id;
        const imageUrl = imageId ? `https:${assetsMap[imageId]}` : null;
  
        return {
          mobileId: fields.mobileId,
          mobileName: fields.mobileName,
          image: imageUrl,
          rating: fields.rating,
          price: fields.price,
          moreInformation: fields.moreInformation,
          status: fields.status,
          delivery: fields.delivery,
          quickview: fields.quickview,
          brand: fields.brand,
          model: fields.model,
          color: fields.color,
          screen: fields.screen,
          processor: fields.processor,
          ram: fields.ram
        };
      });
  
      return data;
    } catch (error) {
      console.error('Error fetching data from Contentful:', error);
      throw error;
    }
  };

export default getData;
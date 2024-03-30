export type Product = {
  id: number;
  sku: string;
  name: string;
  price: number;
  formatted_price: string;
  product_url: string;
  image: string;
  thumbnail: string;
  small_image: string;
  reviews_count: number;
  rating_summary: number;
  saleable: true;
  form_inputs: string;
  form_action: string;
  labels: Array<any>;
};

export type ApiReponse = {
  items: Array<Product>;
  meta: Record<string, any>;
  filters: Array<any>;
};

export type QueryParam = {
  filterName: string;
  filters: Array<string>;
};

export type FilterParams = {
  manufacturer?: string;
  form?: string;
};

// "id": 29735,
//       "sku": "28324 28324-1-chocolate-milkshake 28324-7-2000g-vanilla-ice-cream 28324-12-2000g-blueberryyoghurt 28324-2-vanilla-ice-cream 28324-6-2000g-unflavored 28324-11-1000g-blueberryyoghurt 28324-5-2000g-chocolate-milkshake 28324-10-2000g-saltedcaramel 28324-4-1000g-unflavored 28324-9-1000g-saltedcaramel 28324-3-1000g-white-chocolate-coconut 28324-8-2000g-white-chocolate-coconut",
//       "name": "Just Whey - GymBeam",
//       "price": 25.95,
//       "formatted_price": "25,95 €",
//       "product_url": "https://gymbeam.sk/protein-just-whey-1000-g-gymbeam.html",
//       "image": "https://gymbeam.sk/media/catalog/product/j/u/just_whey_salted_caramel_1_kg_gymbeam_1.png",
//       "thumbnail": "https://gymbeam.sk/media/catalog/product/j/u/just_whey_salted_caramel_1_kg_gymbeam_1.png",
//       "small_image": "https://gymbeam.sk/media/catalog/product/j/u/just_whey_salted_caramel_1_kg_gymbeam_1.png",
//       "reviews_count": 1477,
//       "rating_summary": 93,
//       "saleable": true,
//       "form_inputs": "",
//       "form_action": "",
//       "labels": []

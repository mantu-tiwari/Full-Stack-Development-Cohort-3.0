// category
// description
// id
// image
// price
// rating
// {rate: 4.1, count: 259}
// title

export interface Product {
  id: number;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

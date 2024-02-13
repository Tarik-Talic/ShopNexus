export type ProductData = {
  item: any;
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
};

export type Product = {
  title: string;
  description: string;
  price: number;
  img: string;
  rating: number;
  count: number;
};

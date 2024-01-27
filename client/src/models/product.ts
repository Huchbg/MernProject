export interface Product {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  imagesId: string;
  images: {
    link: string;
    height: number;
    width: number;
  }[];
}

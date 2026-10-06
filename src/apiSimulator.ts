export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: 'Laptop', price: 1200 },
          { id: 2, name: 'Headphones', price: 200 },
        ]);
      } else {
        reject('Failed to fetch product catalog');
      }
    }, 1000);
  });
};

interface Review {
  productId: number;
  review: string;
}

export const fetchProductReviews = (productId: number): Promise<Review[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          {
            productId: 123,
            review: 'Great product, I recommend!',
          },
          {
            productId: 345,
            review: 'Not a fan, Please dont buy!!!',
          },
          {
            productId: 678,
            review: 'I absolutely love it!! Must have!!!',
          },
        ]);
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
      }
    }, 1500);
  });
};


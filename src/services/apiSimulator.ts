interface Product {id: number; name: string; price: number } 
interface Review { reviewId: number; productId: number; comment: string }
interface SalesReport {totalSales: number; unitsSold: number; averagePrice: number }

export const fetchProductCatalog = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else  {
        reject("Failed to fetch product catalog");
      }
    }, 1000);
  });
};

export const fetchProductReviews = (productId: number): Promise<Review[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { reviewId: 1, productId, comment: "Best product you could ask for."
          },
          { reviewId: 2, productId, comment: "So so could have been better!"},
        ]);
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
      }
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<SalesReport> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve({ totalSales: 2000, unitsSold: 200, averagePrice: 100.00})
      } else {
        reject("Failed to fetch sales report");
      }
    })
  })
}
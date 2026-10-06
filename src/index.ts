import { fetchProductCatalog, fetchSalesReport, fetchProductReviews, } from "./apiSimulator.js";


fetchProductCatalog()
.then((catalog) => {
    console.log(catalog);
})
.catch((err) => console.error("Error:", err))

fetchProductReviews(2)
.then((reviews) => {
    console.log(reviews);
})
.catch((err) => console.error("Error:", err))

fetchSalesReport()
.then((salesReport) => {
    console.log(salesReport);
})
.catch((err) => console.error("Error:", err))
.finally(() => {
    setTimeout(() => {
        console.log("All API calls have been attempted!");
    }, 2000)
});
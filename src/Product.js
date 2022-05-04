import React from "react";

const Product = (props) => {
  // Variable that holds the product data.
  const propductData = props.productData;

  // Method returns the sorted product data.
  const sortedproductedData = propductData.sort(function (a, b) {
    return (
      parseInt(a.price.replace(/,/g, "")) - parseInt(b.price.replace(/,/g, ""))
    );
  });

  // Varible holds the hightest car price object data.
  const highestPriceCarObj =
    sortedproductedData[sortedproductedData.length - 1];

  // Method returns the cars data which is below 7 lakhs.
  const cardsBelow7Lakhs = sortedproductedData.filter(
    (car) => parseInt(car.price.replace(/,/g, "")) < 700000
  );

  // Method returns the Hatchback Cars data.
  const hatchBackCards = sortedproductedData.filter(
    (car, index, array) =>
      array.findIndex(
        (record) =>
          record.brand === car.brand &&
          record.model === car.model &&
          record.bodyStyle === "Hatchback"
      ) === index
  );

  // Method returns Total Price of the Hatchback Cars.
  const totalHatchBackCarsPrice = sortedproductedData
    .filter((car) => car.bodyStyle === "Hatchback")
    .reduce((sum, { price }) => sum + parseInt(price.replace(/,/g, "")), 0);

  // Method returns Total Price of the Sedan Cars.
  const totalSedanCarsPrice = sortedproductedData
    .filter((car) => car.bodyStyle === "Sedan")
    .reduce((sum, { price }) => sum + parseInt(price.replace(/,/g, "")), 0);

  // Method - Returns the formatted price.
  const formatPrice = (price) => {
    const amount =
      typeof price !== "number" ? parseInt(price.replace(/,/g, "")) : price;

    return Math.abs(amount) >= 1.0e9
      ? Math.round((Math.abs(amount) / 1.0e9) * 10) / 10 + "B"
      : Math.abs(amount) >= 1.0e6
      ? Math.round((Math.abs(amount) / 1.0e6) * 10) / 10 + "M"
      : Math.abs(amount) >= 1.0e3
      ? Math.round((Math.abs(amount) / 1.0e3) * 10) / 10 + "K"
      : Math.abs(amount);
  };

  return (
    <div>
      <h1>Car with the highest price</h1>
      <p>
        {highestPriceCarObj.brand} {highestPriceCarObj.model}{" "}
        {highestPriceCarObj.variant} {highestPriceCarObj.bodyStyle} - Php{" "}
        {formatPrice(highestPriceCarObj.price)}
      </p>
      <h1>Cars with less than 700,000</h1>
      {cardsBelow7Lakhs.map((car, i) => {
        return (
          <p key={i + 1}>
            {i + 1}. {car.brand} {car.model} {car.variant} {car.bodyStyle} - Php{" "}
            {formatPrice(car.price)}
          </p>
        );
      })}
      <h1>Cars that offers Hatchback</h1>
      {hatchBackCards.map((car, i) => {
        return (
          <p key={i + 1}>
            {i + 1}. {car.brand} - {car.model}
          </p>
        );
      })}
      <h1>Total Price of all Hatchback Cars</h1>
      Php {formatPrice(totalHatchBackCarsPrice)}
      <h1>Total Price of all Sedan Cars</h1>
      Php {formatPrice(totalSedanCarsPrice)}
    </div>
  );
};

export default Product;

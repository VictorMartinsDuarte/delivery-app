import React from 'react';

function SellerCardOrdersDetails(params) {
  const { id, price, date, status } = params;
  const MAX_INDEX_DATE = 10;
  const formattedDate = date !== undefined ? date.slice(0, MAX_INDEX_DATE)
    .split('-').reverse().join('/') : null;

  return (
    <div>
      <h3
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {id}
      </h3>
      <h2
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {status}

      </h2>
      <h4
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {formattedDate}

      </h4>
      <h4
        data-testid="seller_order_details__element-order-total-price"
      >
        {price !== undefined ? price.replace('.', ',') : null}

      </h4>
    </div>
  );
}

export default SellerCardOrdersDetails;

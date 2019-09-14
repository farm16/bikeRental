import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function CheckoutBox({ checkout }) {
  function li(products) {
    console.log(products);
    const li = products.map((product, i) => {
      if (product.count > 0) {
        return (
          <li
            key={i + 'li'}
            className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">{product.item.name}</h6>
              <img alt={product.item.id} src={product.item.image}></img>
            </div>
            <span className="text-muted">{`${product.item.price} x ${product.count}`}</span>
          </li>
        );
      } else return <></>;
    });
    return li;
  }

  return (
    <div className="row ">
      <div className="col-md-12 p-0">
        <ul className="list-group mb-3">{li(checkout.arr)}</ul>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  products: state.productsData.products,
  checkout: { arr: state.checkoutData }
});

export default connect(mapStateToProps)(CheckoutBox);

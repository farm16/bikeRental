import React, { useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import SubIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import { getCheckout } from '../../actions/actions';
import { connect } from 'react-redux';

function SelectForm({ checkout, getCheckout, product, products }) {
  const [count, setCount] = useState(checkout[product.id - 1].count);

  console.log();
  useEffect(() => {
    function getTotal() {
      getCheckout({ item: product, count });
    }
    getTotal();
  }, [count, getCheckout, product]);
  return (
    <div className="col-md-12 col-12 py-1 px-md-auto px-0">
      <div className="container text-center p-0 m-0">
        <div className="row m-auto">
          <div className="col-md-5 col-sm-8 col-12 m-auto">
            <div className="d-flex h-100 w-100">
              <div className="row justify-content-center align-self-center mx-auto w-100 text-right">
                <Fab
                  onClick={() => setCount(count - 1)}
                  size="small"
                  aria-label="add"
                  className={
                    count < 1
                      ? 'bg-danger border-0 text-white invisible'
                      : 'bg-danger border-0 text-white'
                  }>
                  <SubIcon />
                </Fab>{' '}
                <p className="p-0 m-0 m-auto ">
                  {product.name}{' '}
                  <span className=" h5 font-weight-bold"> {count}</span>
                </p>
                <Fab
                  onClick={() => setCount(count + 1)}
                  size="small"
                  aria-label="add"
                  className="bg-success border-0 text-white">
                  <AddIcon />
                </Fab>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  products: state.productsData.products,
  checkout: state.checkoutData
});

export default connect(
  mapStateToProps,
  { getCheckout }
)(SelectForm);

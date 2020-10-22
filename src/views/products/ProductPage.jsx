import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../../redux/actions/product';
export const ProductPage = page => {
   const dispatch = useDispatch();
   dispatch(setLoading(true));
   dispatch(setLoading(false));
   
   //product show object name in a array
   let products = useSelector(state => state.product);
   let productlist = products.map((product) =>
      <p key={product.id}>{product.name}</p>
   )
   return (<>
      {productlist}
   </>)
};

export default ProductPage;
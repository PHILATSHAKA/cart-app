import React, {FC, useEffect} from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import CartItem from './cartItem';
import { isEmpty } from 'lodash';
interface IContainerProps {
}

interface IComponentProps {
  [x: string]: any;
}

type IProps = IComponentProps & IContainerProps;

const Cart: FC<any> = (props: IProps) => {
    const {products, removeFromCart} = props;
    const hasProducts = products.payload[0] ===undefined ? products.payload.shift(): products.payload
    console.log('hasProducts ', hasProducts);
    const renderCart = () => {
        if (hasProducts !== undefined && hasProducts.length > 0) {
            console.log('sgaewdrfgser', products);
           return (
               <>
                   {
                       products.payload.map((product, key) => (
                           <CartItem key={key}  make = {product.manufacturer} removeItemFromCart={() => removeFromCart(product.id)}/>
                       ))
                   }
               </>
           )
        }
        return (
            <em>Please add product to the cart</em>
        )
    }
  return (
     <MDBContainer>
         <MDBCard>
             <MDBCardBody>
                 <h3>Cart</h3>
                 <div>{renderCart()}</div>
             </MDBCardBody>
         </MDBCard>
     </MDBContainer>
  );
};

Cart.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

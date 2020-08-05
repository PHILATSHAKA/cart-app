import React, {FC} from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import {MDBBtn, MDBCloseIcon, MDBCol, MDBRow} from "mdbreact";

interface IContainerProps {
}

interface IComponentProps {
    [x: string]: any;
}

type IProps = IComponentProps & IContainerProps;

const CartItem: FC<any> = (props: IProps) => {
    const {make, removeItemFromCart, key} = props;

    return (
           <MDBRow>
               <MDBCol>
                   <div key={key}>{make}
                   <MDBBtn size={'sm'} onClick={removeItemFromCart} color="danger">{'X'}</MDBBtn>
                   </div>
               </MDBCol>
           </MDBRow>
    );
};

CartItem.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

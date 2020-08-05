import React, {FC} from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import {PostWrapper} from "~/molecules/car-lister/style";
import {MDBBtn, MDBCol, MDBRow} from "mdbreact";

interface IContainerProps {
    fetchVehicles?: () => void;
    vehicles?: any;
}

interface IComponentProps {
    [x: string]: any;
    vehicle: any;
    key: any;
}

type IProps = IComponentProps & IContainerProps;

const Product: FC<any> = (props: IProps) => {
    const { vehicle, key } = props;
    const handleAddToBasket = (product) => {
        console.log('id ', product);
        // const data = {
        //     id: product.id,
        //
        // }
        props.addToCart(product);
    }

    return (
       <div>
           <PostWrapper key={key}>
               <MDBRow>
                   <MDBCol sm={'6'}>
                       <div className='image'>
                           <img className="rounded float-left img-responsive"  src={`https://warpfrontendtestserver.herokuapp.com/public/${vehicle.manufacturer}_${vehicle.model}.jpg`}/>
                       </div>
                   </MDBCol>
                   <MDBCol sm={'6'}>
                       <div>Price: R {vehicle.price}</div>
                       <div>Make: {vehicle.manufacturer}</div>
                       <div>Model: {vehicle.model}</div>
                       <div>Body: {vehicle.body}</div>
                       <div className='add-cart'>
                           <MDBBtn onClick={() => handleAddToBasket(vehicle)} size={'sm'} color={'grey'} className="rounded float-right"> <i className="fa fa-shopping-cart mr-2"/><span className="hidden-sm">Add to cart</span></MDBBtn>
                       </div>
                   </MDBCol>
               </MDBRow>
           </PostWrapper>
       </div>
    );
};

Product.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

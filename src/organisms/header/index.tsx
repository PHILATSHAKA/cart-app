import React, {FC, useEffect} from 'react';
import { Header, Nav } from './style';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "~/molecules/cart/container";

interface IProps {
  [x: string]: any;
}

const HeaderComponent: FC<IProps> = (props: IProps) => {
  console.log('products in header ', props.products);
  useEffect(() => {
    props.addToCartSuccess();
  },[]);

  return (
    <Header>
      <MDBContainer>
        <MDBRow>
          <MDBCol size={'12'}>
            <Nav>
              <ul>
                <li>
                  <Link
                    to={'/'}
                  >Browser Vehicles</Link>
                </li>
                <li>
                  <Link to={'/cart'}><i className="fa fa-shopping-cart mr-2"/><span className='text-info'>{props.products.basketNumbers} </span> </Link>
                </li>
              </ul>
            </Nav>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Header>
  );
};

HeaderComponent.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

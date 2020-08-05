import React, { FC } from 'react';
import {VehicleLister} from '~/molecules';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Home: FC<any> = (props) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <VehicleLister/>
          <hr/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

Home.defaultProps = {};

export default Home;

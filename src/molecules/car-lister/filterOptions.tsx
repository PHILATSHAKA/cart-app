import React, {FC, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import {MDBCardBody, MDBCol, MDBRow} from "mdbreact";

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

const FilterOptions: FC<any> = (props: IProps) => {
    const {priceOptions, bodyOptions, manufactureOptions, changeOption, manufacturer, priceTo, priceFrom, values } = props;
    console.log('values values ', values);
    const handleChange = (type, e) => {
        const value = e.target.value;
        console.log('value value ', value);
        changeOption(type, value);
    }
    return (
            <div className="filter-options">
                <div className="filter-option mb-3 mt-3">
                    <MDBRow>
                        <MDBCol sm={'12'}>
                            <p className="h5-responsive text-center mt-2 mb-5 text-uppercase text-info">Shopping Cart Ecommenrce for Car Dealers</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm={'3'}>
                            {/*<div>Prices</div>*/}
                            <label>Price from: </label>
                            <select id="priceFrom" value={values.priceFrom} name="priceFrom" onChange={(e) => handleChange('priceFrom', e)}>
                                {priceFrom && priceFrom.map((option, key) => {
                                    return (
                                        <option key={key} value={option}>{option}</option> )}
                                )
                                }
                            </select>
                        </MDBCol>
                        <MDBCol sm={'3'}>
                            <label>Price to: </label>
                            <select id="priceTo" value={values.priceTo} name="priceTo" onChange={(e) => handleChange('priceTo', e)}>
                                {priceTo && priceTo.map((option, key) => {
                                    return (
                                        <option key={key} value={option}>{option}</option> )}
                                )
                                }
                            </select>
                        </MDBCol>
                        <MDBCol sm={'3'}>
                            <label>Body Style: </label>
                            <select id="body" value={values.body} onChange={(e) => handleChange('body', e)}>
                                {bodyOptions && bodyOptions.map((option, key) => {
                                    return(
                                        <option key={key} value={option}>{option}</option> )
                                })}
                            </select>
                        </MDBCol>
                        <MDBCol sm={'3'}>
                            <label >Manufacture: </label>
                            <select id="manufacture" value={values.manufacturer} onChange={(e) => handleChange('manufacturer',e)}>
                                {manufactureOptions && manufactureOptions.map((option, key) => <option key={key} value={option}>{option}</option> )}
                            </select>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
    );
};

FilterOptions.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);

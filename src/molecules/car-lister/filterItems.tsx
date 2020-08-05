import React, {FC, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import Product from "~/molecules/car-lister/product";
import {Loader} from "~/atoms";
import { isEmpty } from 'lodash';

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

const FilterItems: FC<any> = (props: IProps) => {
    const renderVehicles = () => {
        const { vehicle, isLoading } = props;
        if (!isEmpty(vehicle)) {
            return vehicle.map((car, key) => {
                return (
                    <Product key={key} vehicle={car}/>
                );
            });
        }
        return (
            <Loader/>
        );
    }
    return (
        <div className="filter-items">
            {renderVehicles()}
        </div>
    );
};

FilterItems.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterItems);

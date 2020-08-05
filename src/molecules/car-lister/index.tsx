import React, {FC, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import { MDBCard, MDBCardBody, MDBContainer} from "mdbreact";
import FilterOptions from './filterOptions'
import FilterItems from './filterItems'

interface IContainerProps {
    fetchVehicles?: () => void;
    vehicles?: any;
}

interface IComponentProps {
  [x: string]: any;
}

type IProps = IComponentProps & IContainerProps;

const VehicleLister: FC<any> = (props: IProps) => {
    useEffect(() => {
        const { fetchVehicles } = props;
        fetchVehicles();
    }, []);

    const [price, setFilterPrice] = useState('');
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [body, setFilterBodyStyle] = useState('');
    const [manufacturer, setFilterManufacture] = useState('');
    const [data, setData] = useState(props.vehicles && props.vehicles.data);
    const [values, setValues] = useState({
        priceTo, priceFrom, price, body, manufacturer, data
    });

    const filterItems = (type, value) => {
        switch (type) {
            case 'priceTo':
                setPriceTo(value);
                setFilterPrice(value);
                setValues({priceTo: value, price: value, priceFrom:values.priceFrom, body: values.body, manufacturer: values.manufacturer, data: values.data});
                break;
            case 'priceFrom':
                setPriceFrom(value);
                setFilterPrice(value);
                setValues({priceFrom: value, price: value, priceTo: values.priceTo, body: values.body, manufacturer: values.manufacturer, data: values.data});
                break;
            case 'body':
                setFilterBodyStyle(value);
                setValues({priceFrom: values.priceFrom, price: values.price, priceTo: values.priceTo, body: value, manufacturer: values.manufacturer, data: values.data});
                break;
            case 'manufacturer':
                setFilterManufacture(value);
                setValues({priceFrom: values.priceFrom, price: values.price, priceTo: values.priceTo, body: values.body, manufacturer: value, data: values.data});
                break;
            default:
                break;
        }
    };
    const handleFilterProperties = () => {
        let filteredItems = props.vehicles && props.vehicles.data;
        const state = values;
        const filterProperties = ['any','price', 'body','manufacturer'];
        const priceFromArray  = [20000,550000, 630000, 705000];
        const priceToArray = [720000, 850000, 950000, 1550000];
        filterProperties.forEach((filterBy) => {
            const filterValue = state[filterBy];
            if (filterValue && filterValue !=='any') {
                filteredItems = filteredItems && filteredItems.filter((item) =>  item[filterBy] <= priceTo  || item[filterBy] === filterValue);
            }
        });
        const priceArray = props.vehicles && props.vehicles.data && props.vehicles.data.map((item) => item.price).sort();
        const bodyArray = props.vehicles && props.vehicles.data &&  props.vehicles.data.map((item) => item.body).sort();
        const manufactureArray = props.vehicles && props.vehicles.data &&  props.vehicles.data.map((item) => item.manufacturer).sort();

        priceFromArray && priceFromArray.unshift(0);
        priceToArray && priceToArray.unshift(0);
        bodyArray && bodyArray.unshift("any");
        manufactureArray && manufactureArray.unshift("any");
        return(
            <div className="container">
                <FilterOptions
                    data={data}
                    values={values}
                    priceOptions={priceArray}
                    priceFrom={priceFromArray}
                    priceTo={priceToArray}
                    bodyOptions={bodyArray}
                    manufactureOptions={manufactureArray}
                    changeOption={filterItems}
                />
                <div className="filter-form">
                    <FilterItems vehicle={filteredItems} />
                </div>
            </div>
        )
    };
  return (
      <MDBContainer className="mt-5">
          <MDBCard>
              <MDBCardBody>
                  {
                      handleFilterProperties()
                  }
              </MDBCardBody>
          </MDBCard>
      </MDBContainer>
  );
};

VehicleLister.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleLister);

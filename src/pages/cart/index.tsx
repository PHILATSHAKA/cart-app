import React, { FC } from 'react';
import Cart from "~/molecules/cart";

interface IProps {
    [x: string]: any;
}

const CartPage: FC<IProps> = (props: IProps) => {
    return (
        <div>
            <Cart/>
        </div>
    );
};

CartPage.defaultProps = {};

export default CartPage;

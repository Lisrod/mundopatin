import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import PayButton from './PayCart';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="carrito" title="de compras" />
                                    <Link to="/productlist">
                                            <ButtonContainer>
                                                volver a la tienda
                                            </ButtonContainer>
                                    </Link>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                    <PayButton value={value} />
                                </React.Fragment>
                            );
                        }
                        else {
                            return <EmptyCart />;

                        }
                    }}
                </ProductConsumer>



            </section>
        );
    }
}
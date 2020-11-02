import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProductsActions from "../../store/actions/products";
import * as InfoActions from "../../store/actions/info";

import { ProductsContainer } from "./style";

import ProductsItem from "../../components/ProductsItem";

const products = [
    {
        id: 'prod_0',
        src:
            "https://images-na.ssl-images-amazon.com/images/I/910zU0vyBrL._AC_UL1500_.jpg",
        title: "Produto 1",
        category: 'Purse',
        stock: 1,
        tag: 'Large purse',
        price: "R$100.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_1',
        src:
            "https://images-na.ssl-images-amazon.com/images/I/71W9Qjk9VJL._AC_UL1200_.jpg",
        title: "Produto 2",
        category: 'Purse',
        stock: 1,
        tag: 'Medium purse',
        price: "R$200.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_2',
        src:
            "https://cdn.shopify.com/s/files/1/1038/6230/products/everpurse_kate_spade_iphone_charging_black_small_harmony_standing_edit_3.jpg?v=1488838840",
        title: "Produto 3",
        category: 'Purse',
        stock: 1,
        tag: 'Medium purse',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_3',
        src:
            "https://raffleoftheday.com/wp-content/uploads/2019/07/guccisite1-min.jpg",
        title: "Produto 4",
        category: 'Wallet',
        stock: 1,
        tag: 'Black wallet',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_4',
        src:
            "https://media.bergdorfgoodman.com/images/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_720/01/3321157_100010_m/burberry-vintage-check-title-bag",
        title: "Produto 5",
        category: 'Purse',
        stock: 1,
        tag: 'Colorful purse',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_5',
        src:
            "https://5.imimg.com/data5/SH/BN/MY-61698818/lady-bag-purse-500x500.png",
        title: "Produto 6",
        category: 'Purse',
        stock: 1,
        tag: 'Grey purse',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_6',
        src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFgITiUpSznUFDJiob8wbYPvM_VyL1wYo8TA&usqp=CAU",
        title: "Produto 7",
        category: 'Purse',
        stock: 1,
        tag: 'Pink purse',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_7',
        src:
            "https://images-na.ssl-images-amazon.com/images/I/910zU0vyBrL._AC_UL1500_.jpg",
        title: "Produto 8",
        category: 'Purse',
        stock: 1,
        tag: 'Large purse',
        price: "R$100.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_8',
        src:
            "https://images-na.ssl-images-amazon.com/images/I/71W9Qjk9VJL._AC_UL1200_.jpg",
        title: "Produto 9",
        category: 'Purse',
        stock: 1,
        tag: 'Medium purse',
        price: "R$200.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_9',
        src:
            "https://cdn.shopify.com/s/files/1/1038/6230/products/everpurse_kate_spade_iphone_charging_black_small_harmony_standing_edit_3.jpg?v=1488838840",
        title: "Produto 10",
        category: 'Purse',
        stock: 1,
        tag: 'Medium purse',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_10',
        src:
            "https://raffleoftheday.com/wp-content/uploads/2019/07/guccisite1-min.jpg",
        title: "Produto 11",
        category: 'Wallet',
        stock: 1,
        tag: 'Black wallet',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_11',
        src:
            "https://media.bergdorfgoodman.com/images/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_720/01/3321157_100010_m/burberry-vintage-check-title-bag",
        title: "Produto 12",
        category: 'Purse',
        stock: 1,
        tag: 'Colorful purse',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
    {
        id: 'prod_12',
        src:
            "https://5.imimg.com/data5/SH/BN/MY-61698818/lady-bag-purse-500x500.png",
        title: "Produto 13",
        category: 'Purse',
        stock: 0,
        tag: 'Grey purse',
        price: "R$400.00",
        description: 'Lorem ipsum imperdiet fermentum habitasse non nibh sollicitudin mauris nostra phasellus,' +
                     'pretium maecenas molestie magna malesuada potenti malesuada cras nunc aliquam justo, ' + 
                     'neque tempor interdum est hac habitant lacus mattis quisque. ultricies est hac in etiam ' + 
                     ' est adipiscing donec vel viverra mollis, vulputate at arcu ipsum congue dolor mi luctus. ' + 
                     ' adipiscing rutrum molestie et donec consectetur interdum arcu facilisis fusce, interdum ' + 
                     ' hendrerit netus aenean et in morbi cursus condimentum, mi ante per facilisis urna sapien ' + 
                     ' per risus. gravida nisi ornare proin pellentesque himenaeos fringilla lacus quam, turpis ' + 
                     'urna ullamcorper rutrum ut id nisl etiam, cubilia volutpat eu potenti quis quam imperdiet.'
    },
];

const shoppingInfo = ' Congue dolor etiam vivamus ad dictumst netus aenean lacinia placerat taciti tristique, ' + 
                     ' justo interdum dictum nunc lacus senectus accumsan odio est ullamcorper semper, ' +
                     ' sem leo fermentum ac facilisis semper cubilia ullamcorper enim tortor. ' +
                     ' platea ultrices viverra aliquet tincidunt at risus fusce duis, curae cubilia praesent ' + 
                     ' pulvinar quis viverra lacus, nullam integer suspendisse adipiscing ultricies urna dictumst. ' + 
                     ' nulla nam morbi ut aliquet feugiat aenean ultricies aliquam, duis congue nisl habitant varius ' + 
                     'elementum tempor fringilla adipiscing, lacus netus urna curabitur tempus sem platea. ' + 
                     'habitasse varius risus accumsan posuere lacinia nisl  massa, posuere conubia ipsum sapien ' + 
                     ' volutpat aliquam eu gravida, lorem mollis semper quisque dui nibh libero, ' + 
                     ' feugiat mattis conubia malesuada augue nunc.';

const paymentInfo = 'Hendrerit quisque nisl porta ut egestas malesuada praesent in placerat ut ligula condimentum sit imperdiet nec, ' + 
                ' vehicula lacinia felis proin fames nibh gravida neque nec semper fringilla curae etiam ultrices. ' + 
                ' pulvinar tristique rhoncus nec purus maecenas dolor commodo dictum, nisl vel senectus fusce vel ac nisl ullamcorper, ' + 
                ' erat phasellus himenaeos conubia pharetra feugiat vivamus. vulputate interdum non nunc felispurus nullam, ' + 
                ' proin eros vestibulum eu senectus at sit, elit cubilia eu sem nunc. feugiat risus ad eros praesent fames ' + 
                ' elit per sollicitudin, aenean vel risus pretium amet velit donec.'


const Products = ({ store, setStore, setShoppingInfo, setPaymentInfo}) => {

    useEffect( () => {
        setStore(products);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    useEffect( () => {
        setShoppingInfo(shoppingInfo);
        setPaymentInfo(paymentInfo);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shoppingInfo, paymentInfo]);

    return (
        <ProductsContainer>
            {store.filter( p => p.stock > 0 ).map((p) => {
                return <ProductsItem product={p} key={p.id} />;
            })}
        </ProductsContainer>
    );
};
  
//Transforma o reducer em props
const mapStateToProps = (state) => ({
store: state.products.store,

});

//Chama a função que atualiza o state
const mapDispatchToProps = (dispatch) =>
bindActionCreators({ ...ProductsActions, ...InfoActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
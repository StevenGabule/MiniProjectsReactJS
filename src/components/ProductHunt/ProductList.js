import React, {Component} from "react";
import Product from "./Product";


class ProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        // eslint-disable-next-line no-undef
        this.setState({products: Seed.products});
    }

    handleProductVoteUp = productId =>  {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1
                });
            } else {
                return product;
            }
        });

        this.setState({
            products: nextProducts
        })
    };

    render() {
        const products = this.state.products.sort((a,b) => (
            b.votes - a.votes
        ));

        const productComponent = products.map(({id, title, description, url, votes, submitterAvatarUrl,productImageUrl}) => (
                <Product
                    key={'product-' + id}
                    id={id}
                    title={title}
                    description={description}
                    url={url}
                    votes={votes}
                    submitterAvatarUrl={submitterAvatarUrl}
                    productImageUrl={productImageUrl}
                    onVote={this.handleProductVoteUp}
                />

        ));
        return (
            <div className={"ui unstackable  items"}>
                {productComponent}
            </div>
        )
    }
}

export default ProductList;
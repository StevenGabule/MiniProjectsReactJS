import React, {Component} from "react";

class Product extends Component {
    render() {
        const pathProduct = './images/products/';
        return (
            <div className={'item'}>
                <div className={'image'}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={pathProduct + this.props.productImageUrl} alt="some image"/>
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a><i className={'large caret up icon'}/></a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <span>Submitted by:</span>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={this.props.submitterAvatarUrl} alt="image person not found"
                             className="ui avatar image"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
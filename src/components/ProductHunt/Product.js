import React, {Component} from "react";

class Product extends Component {

    handleUpVote = () => {
        this.props.onVote(this.props.id)
    };

    render() {
        const {productImageUrl, votes, description, url, title,submitterAvatarUrl} = this.props;
        return (
            <div className={'item'}>
                <div className={'image'}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={require('./'+productImageUrl)} alt="some image"/>
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a onClick={this.handleUpVote}><i className={'large caret up icon'}/></a>
                        {votes}
                    </div>
                    <div className="description">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href={url}>{title}</a>
                        <p>{description}</p>
                    </div>
                    <div className="extra">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <span>Submitted by:</span>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={require('./'+submitterAvatarUrl)} alt="image person not found"
                             className="ui avatar image"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
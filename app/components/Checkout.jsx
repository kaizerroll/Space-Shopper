import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
// import { selectProduct } from '../reducers/products'


export default class Checkout extends React.Component {
    //  (props) => {

    // const handleSubmit = props.handleSubmit
    // // need to set this up^
    constructor(props) {
        super(props)
        this.state = {
            // add states
            name: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            ccnType: '',
            ccnNum: '',
            expMonth: '',
            expYear: '',
            cvv: ''

        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e ? e.preventDefault() : null;
        this.props.whenSubmitted(this.state)

    }


    render() {
        return (
            <div>

                <h2>Order Details</h2>
                <div>
                    {/*table goes here*/}
                </div>

                <form className="form-horizontal" >
                    <fieldset>
                        <legend>Payment Details</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Street Address</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="streetAddress"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">City</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="city"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">State</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="state"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Zip Code</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="zip"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Credit Card Type</label>
                            <div className="col-xs-10">
                                <select
                                    type="text"
                                    name="ccnType"
                                    onChange={this.handleChange}
                                >
                                    <option></option>
                                    <option>MasterCard</option>
                                    <option>Visa</option>
                                    <option>Amex</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Credit Card Number</label>
                            <div className="col-xs-10">
                                <input
                                    onChange={this.handleCCN}
                                    className="form-control"
                                    type="text"
                                    name="ccnNum"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Expiration Month</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="expMonth"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Expiration Year</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="expYear"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">CVV</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="cvv"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button
                                    type="submit"
                                    className="btn btn-success">
                                    Submit Order
                            </button>
                            </div>
                        </div>
                    </fieldset>
                </form>

            </div>
        )
    }
}

// TODOS HERE:
// - for input fields:
//         - {/*onChange={handleChange}*/ }
//         - {/*value={inputValue}*/ }
//         - {/*placeholder={}*/ }


// const mapStateToProps = (state) => {
//     // will need to check our state once connected to DB
//     return {
//         products: state.products.products,
//         selectedProduct: state.products.selectedProduct
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setProduct(product) {
//             dispatch(selectProduct(product))
//         }
//     }
// }

import React from 'react';


export default function PayButton({ value }) {

    const { payButton } = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        
                            <button
                                className="btn btn-outline-success text-uppercase mb-3 px-5"
                                type="button"
                                onClick={() => payButton()}
                            >
                                <a href="mailto:hola@mundopatin.com.uy">Confirma tu compra</a>
                            </button>
                        
                        
                    </div>

                </div>
            </div>
        </React.Fragment>

    );
}
  
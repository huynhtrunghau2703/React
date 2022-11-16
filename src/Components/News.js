import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div>
                 <div>
                <header className="masthead bg-primary text-white text-center ">
                    <div className="container d-flex align-items-center flex-column">
                    {/* Masthead Avatar Image*/}
                    {/* Masthead Heading*/}
                    <h1 className="masthead-heading text-uppercase mb-0">chi tiết tin </h1>
                    {/* Icon Divider*/}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Masthead Subheading*/}
                    </div>
                </header>
                {/* begin tintuc */}
                <div className="col-4">
                    <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="holder.js/800x400/" alt="" />
                        <div className="card-body">
                        <h4 className="card-title">Tin tuc 2</h4>
                        <p className="card-text">Text</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="holder.js/100x180/" alt=" " />
                        <div className="card-body">
                        <h4 className="card-title">tin tuc2</h4>
                        <p className="card-text">Text</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <hr/>
            </div>
            
        );
    }
}

export default News;
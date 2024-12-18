import React from 'react';

const CabFeatures = ({ features }) => {

    return (
        <div className="row">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="col-12 col-lg-4 col-md-6 p-2"
                    style={{ height: '170px' }}
                >
                    <div className="cab-feature-insider h-100 cab-feature d-flex flex-column justify-content-between align-items-start gap-2 p-3 rounded-4 text-black">
                        <span className="bg-black text-tertary p-3 rounded-5">
                            {feature.icon}
                        </span>
                        <hr className="my-1" />
                        <h4 className="web-title fw-bold text-capitalize">{feature.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CabFeatures;

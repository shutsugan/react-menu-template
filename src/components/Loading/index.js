import React from 'react';

import Loader from '../Loader';

const LoadingComponent = ({error, delay}) => {
    if (error) return <div>Error: {error}</div>;
    else if (delay) return <Loader />;
    else return null;
};

export default LoadingComponent;
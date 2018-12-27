import React from 'react';

import './index.css';

const Logo = ({logo, label}) => (
    <div className="logo logo--mr-rt">
        <div className="logo__name">{logo}</div>
        <span className="logo__label">{label}</span>
    </div>
);

export default Logo;
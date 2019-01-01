import React from 'react';

import './index.css';

const Logo = ({logo, label, reverse}) => (
    <div className="logo flex-center flex-colummn logo--mr-rt">
        <div className={reverse ? 'logo__name-reverse' : 'logo__name'}>{logo}</div>
        <span className={reverse ? 'logo__label-reverse' : 'logo__label'}>{label}</span>
    </div>
);

export default Logo;

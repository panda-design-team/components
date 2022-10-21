import * as React from 'react';
import cx from 'classnames';
import './index.style';

const createIcon = (C: React.ComponentType<React.SVGAttributes<SVGElement>>) => {
    return function Icon({className, ...props}: React.SVGAttributes<SVGSVGElement>) {
        return <C className={cx('panda-icon', className)} {...props} />;
    };
};

export default createIcon;

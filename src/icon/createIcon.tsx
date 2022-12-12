import * as React from 'react';
import cx from 'classnames';

export const createIcon = (C: React.ComponentType<React.SVGAttributes<SVGElement>>) => {
    return function Icon({className, ...props}: React.SVGAttributes<SVGSVGElement>) {
        return <C className={cx('anticon', 'panda-icon', className)} {...props} />;
    };
};

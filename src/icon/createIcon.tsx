import {ComponentType, SVGAttributes} from 'react';
import cx from 'classnames';

export const createIcon = (C: ComponentType<SVGAttributes<SVGElement>>) => {
    return function Icon({className, ...props}: SVGAttributes<SVGSVGElement>) {
        return <C className={cx('anticon', 'panda-icon', className)} {...props} />;
    };
};

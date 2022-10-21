/* eslint-disable init-declarations */
declare module '*.png' {
    const url: string;
    export default url;
}

declare module '*.jpg' {
    const url: string;
    export default url;
}

declare module '*.gif' {
    const url: string;
    export default url;
}

declare module '*.svg' {
    const url: string;
    export default url;
}

declare module '*.svg?react' {
    import * as React from 'react';

    export type SVGComponent = React.ComponentType<React.SVGAttributes<SVGElement>>;

    declare const Component: SVGComponent;
    export default Component;
}

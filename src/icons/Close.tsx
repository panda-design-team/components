import {SVGAttributes} from 'react';

const SvgClose = (props: SVGAttributes<SVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M905.151 181.074 574.225 512l330.926 330.926-62.225 62.225L512 574.225 181.074 905.151l-62.225-62.225L449.775 512 118.849 181.074l62.225-62.225L512 449.775l330.926-330.926 62.225 62.225Z"
        />
    </svg>
);

export default SvgClose;

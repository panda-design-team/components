import {SVGProps} from 'react';

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M543 92v80H265c-14.216 0-25.767 11.409-25.997 25.57L239 198v628c0 14.216 11.409 25.767 25.57 25.997l.43.003h492c14.216 0 25.767-11.409 25.997-25.57L783 826V430.856L863 432v428c0 39.765-32.235 72-72 72H231c-39.765 0-72-32.235-72-72V164c0-39.765 32.235-72 72-72h312Zm292.411.431L891.98 149 552.569 488.411 496 431.843 835.411 92.43Z"
        />
    </svg>
);
export default SvgEdit;

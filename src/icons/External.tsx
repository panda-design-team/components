import {SVGProps} from 'react';

const SvgExternal = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        {...props}
    >
        <path d="m475 211-.032 80H219c-13.746 0-25.178 9.905-27.549 22.967L191 319v484c0 13.746 9.905 25.178 22.967 27.549L219 831h488c13.746 0 25.178-9.905 27.549-22.967L735 803V550.968l80 .032v288c0 39.765-32.235 72-72 72H183c-39.765 0-72-32.235-72-72V283c0-39.765 32.235-72 72-72h292Zm409.867-71v300h-80l-.032-162.992-270.532 270.897-56.606-56.53 271.038-271.406-163.868.031v-80h300Z" />
    </svg>
);

export default SvgExternal;

import {css, keyframes} from '@emotion/css';

export const width = (number: number) => css`
    width: ${number}px !important;
`;

export const widthFull = css`
    width: 100% !important;
`;

export const height = (number: number) => css`
    height: ${number}px !important;
`;

export const size = (number: number) => css`
    width: ${number}px !important;
    height: ${number}px !important;
`;

export const marginTop = (number: number) => css`
    margin-top: ${number}px !important;
`;

export const marginBottom = (number: number) => css`
    margin-bottom: ${number}px !important;
`;

export const marginLeft = (number: number) => css`
    margin-left: ${number}px !important;
`;

export const marginRight = (number: number) => css`
    margin-right: ${number}px !important;
`;

export const marginX = (number: number) => css`
    margin-left: ${number}px !important;
    margin-right: ${number}px !important;
`;

export const marginY = (number: number) => css`
    margin-top: ${number}px !important;
    margin-bottom: ${number}px !important;
`;

export const fontSize = (number: number) => css`
    font-size: ${number}px !important;
`;

export const rotate = (number: number) => css`
    transform: rotate(${number}deg) !important;
`;

export const ellipse = css`
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
`;

const spinAnimationKeyframe = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const spin = css`
    animation: ${spinAnimationKeyframe} 1s linear infinite;
`;

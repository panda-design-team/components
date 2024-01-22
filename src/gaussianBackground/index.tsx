import {useEffect, useRef, HTMLAttributes} from 'react';
import {cx, css} from '@emotion/css';
import {GaussianBackgroundGenerator, GaussianBackgroundCircleConfig} from './GaussianBackgoundGenerator';

export {GaussianBackgroundGenerator};

export type {GaussianBackgroundCircleConfig};

export interface GaussianBackgroundProps extends HTMLAttributes<HTMLDivElement> {
    /** 实际宽度 */
    width?: number;
    /** 实际高度 */
    height?: number;
    /** 实际模糊半径 */
    blur?: number;
    /** 画面缩放，默认为 10，表示 canvas 缩小 10 倍绘制，然后放大到原尺寸 */
    scale?: number;
    /** 定义圆的属性，未填写的属性将随机生成 */
    circles?: GaussianBackgroundCircleConfig[];
    /** 背景色 */
    backgroundColor?: string;
    canvasClassName?: string;
    canvasProps?: HTMLAttributes<HTMLCanvasElement>;
    contentClassName?: string;
    contentProps?: HTMLAttributes<HTMLDivElement>;
}

const defaultCircles: GaussianBackgroundCircleConfig[] = [
    {radius: 20, color: '#f0f4ff'}, // info 97:#f0f4ff 98:#f5f8ff
    {radius: 15, color: '#e5edff'}, // info-light-95
    {radius: 10, color: '#f0fbff'}, // cyan 97:#f0fbff 98:#f5fdff
    {radius: 10, color: '#f9f0ff'}, // purple 97:#f9f0ff 98:#fbf5ff
    {radius: 10, color: '#fff0f7'}, // magenta 97:#fff0f7 98:#fff5f9
    {radius: 10, color: '#fffbf0'}, // gold 97:#fffbf0 98:#fffdf5
];

const containerCss = css`
    position: relative;
    overflow: hidden;
`;

const canvasCss = css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const contentCss = css`
    position: relative;
`;

export const GaussianBackground = ({
    width,
    height,
    blur,
    scale,
    circles = defaultCircles,
    backgroundColor = '#e5edff',
    className,
    canvasClassName,
    canvasProps,
    contentClassName,
    contentProps,
    children,
    ...props
}: GaussianBackgroundProps) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const generatorRef = useRef<GaussianBackgroundGenerator | null>(null);

    useEffect(
        () => {
            if (ref.current && !generatorRef.current) {
                generatorRef.current = new GaussianBackgroundGenerator(ref.current, {
                    circles,
                    renderWidth: (width ?? 1000) / (scale ?? 10),
                    renderHeight: (height ?? 1000) / (scale ?? 10),
                    blur: (blur ?? 50) / (scale ?? 10),
                    backgroundColor,
                });
            }
            return () => {
                if (generatorRef.current) {
                    generatorRef.current.clear();
                }
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <div className={cx(className, containerCss)} {...props}>
            <canvas ref={ref} className={cx(canvasClassName, canvasCss)} {...canvasProps} />
            <div className={cx(contentClassName, contentCss)} {...contentProps}>
                {children}
            </div>
        </div>
    );
};

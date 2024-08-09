import {useLayoutEffect, useRef, useState, CSSProperties} from 'react';
import {theme} from 'antd';
import {css, keyframes} from '@emotion/css';

const CONSTANT_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const containerCss = css`
    padding: 50px 0;
    width: 100%;
`;

const paragraphCss = css`
    text-align: center;
`;

const circleCss = css`
    width: 50px;
    height: 50px;
    position: relative;
    margin: 30px auto;
`;

const dotContainerCss = css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`;

const scaleCircle = keyframes`
    0%,
    80%,
    100% {
        transform: scale(0);
    }

    40% {
        transform: scale(1);
    }
`;

const cssDot = css`
    width: 20%;
    height: 20%;
    border-radius: 100%;
    animation: ${scaleCircle} 1.2s infinite ease-in-out both;
`;

export interface LoadingProps {
    text?: string;
    extraText?: string;
    style?: CSSProperties;
}

export function Loading({text = '', extraText, style}: LoadingProps) {
    const {token} = theme.useToken();
    const ref = useRef<HTMLDivElement>(null);
    const [showExtra, setShowExtra] = useState(false);

    // 用 dom 操作强行关联不同时刻渲染的 <Loading /> 组件的动画是连贯的。
    useLayoutEffect(
        () => {
            const element = ref.current;
            // bias 是当前时刻应该运行动画的哪个时刻，其中，动画总时长为 1.2 s
            const bias = (window.performance.now() % 1200) / 1000;
            // @ts-expect-error
            [...element.querySelectorAll(`.${cssDot}`)].forEach((dot, i) => {
                dot.style.animationDelay = `${i * 0.1 - bias - 1.2}s`;
            });

            let timer: any = null;
            if (extraText) {
                timer = setTimeout(() => setShowExtra(true), 3000);
            }
            return () => clearTimeout(timer);
        },
        // extraText 期望是常量
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <div className={containerCss} style={style}>
            <div className={circleCss} key="loading" ref={ref}>
                {CONSTANT_ARRAY.map(i => (
                    <div className={dotContainerCss} key={i} style={{transform: `rotate(${i * 30}deg)`}}>
                        <div className={cssDot} style={{backgroundColor: token.colorInfo}} />
                    </div>
                ))}
            </div>
            <p className={paragraphCss}>{showExtra ? (extraText ?? '') : text}</p>
        </div>
    );
}

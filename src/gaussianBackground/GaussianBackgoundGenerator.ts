const defaultSize = 100;
const defaultBlur = 5;

interface InnerCircle {
    color: string;
    posX: number;
    posY: number;
    vel?: number;
    direction?: number;
    velX: number;
    velY: number;
    radius: number;
}

export type GaussianBackgroundCircleConfig = Partial<InnerCircle>;

interface Options {
    circles?: GaussianBackgroundCircleConfig[];
    backgroundColor?: string;
    renderWidth?: number;
    renderHeight?: number;
    blur?: number;
}

export class GaussianBackgroundGenerator {
    context: CanvasRenderingContext2D;
    renderWidth: number;
    renderHeight: number;
    size: number;
    blur: number;
    backgroundColor: string;
    circles: InnerCircle[];
    animationFrame: number;
    lastCallTime: number;

    constructor(element: HTMLCanvasElement, options: Options = {}) {
        const {renderWidth, renderHeight, backgroundColor, blur} = options;
        this.renderWidth = renderWidth ?? defaultSize;
        this.renderHeight = renderHeight ?? defaultSize;
        element.width = this.renderWidth;
        element.height = this.renderHeight;
        const size = Math.min(this.renderWidth, this.renderHeight);
        this.size = size;
        this.blur = blur ?? defaultBlur;
        this.context = element.getContext('2d')!;
        this.context.filter = `blur(${this.blur}px)`;
        this.backgroundColor = backgroundColor ?? 'transparent';
        this.circles = this.initCircles(options);
        this.lastCallTime = Date.now();
        this.animationFrame = window.requestAnimationFrame(this.displayLoop);
    }

    initCircles = (options: Options = {}) => {
        const {size, renderWidth, renderHeight} = this;
        const piece = size / 10;
        const {circles} = options;
        const innerCircles: InnerCircle[] = (circles ?? []).map(circle => {
            const {color, posX, posY, vel, direction, velX, velY, radius} = circle;
            const innerVel = vel ?? Math.random() * piece + piece;
            const innerDirection = direction ?? Math.random() * 2 * Math.PI;
            return {
                color: color ?? `hsl(${Math.random() * 360}, ${Math.random() * 30 + 68}%, ${Math.random() * 20 + 75}%)`,
                posX: posX ?? Math.random() * renderWidth,
                posY: posY ?? Math.random() * renderHeight,
                velX: velX ?? Math.cos(innerDirection) * innerVel,
                velY: velY ?? Math.sin(innerDirection) * innerVel,
                radius: radius ?? (Math.random() * 3 * piece + 2 * piece),
            };
        });
        innerCircles.sort((a, b) => b.radius - a.radius);
        return innerCircles;
    };

    nextFrame = (deltaMs: number) => {
        const {renderWidth, renderHeight, circles} = this;
        circles.forEach(circle => {
            circle.posX += circle.velX * deltaMs / 1000;
            circle.posY += circle.velY * deltaMs / 1000;
            if (circle.posX >= renderWidth) {
                circle.posX = 2 * renderWidth - circle.posX;
                circle.velX = -circle.velX;
            }
            else if (circle.posX <= 0)
            {
                circle.posX = -circle.posX;
                circle.velX = -circle.velX;
            }

            if (circle.posY >= renderHeight)
            {
                circle.posY = 2 * renderHeight - circle.posY;
                circle.velY = -circle.velY;
            }
            else if (circle.posY <= 0)
            {
                circle.posY = -circle.posY;
                circle.velY = -circle.velY;
            }
        });
    };

    draw = () => {
        const {context, renderWidth, renderHeight, circles, backgroundColor, blur} = this;
        const rect = [-blur, -blur, renderWidth + 2 * blur, renderHeight + 2 * blur] as const;
        context.clearRect(...rect);
        context.fillStyle = backgroundColor;
        context.rect(...rect);
        context.fill();
        circles.forEach(({color, posX, posY, radius}) => {
            context.fillStyle = color;
            context.beginPath();
            context.arc(posX, posY, radius, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        });
    };

    displayLoop = () => {
        this.animationFrame = window.requestAnimationFrame(this.displayLoop);
        const now = Date.now();
        const deltaMs = now - this.lastCallTime;
        this.lastCallTime = now;
        this.nextFrame(deltaMs);
        this.draw();
    };

    clear = () => {
        window.cancelAnimationFrame(this.animationFrame);
    };
}

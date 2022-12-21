export interface AppendStyleParams {
    prefixCls?: string;
    antPrefixCls?: string;
    resetLink?: boolean;
    higherPriority?: boolean;
    defaultInject?: boolean;
    inject?: {
        Button?: boolean;
        Message?: boolean;
        Table?: boolean;
    };
}

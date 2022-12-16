export interface AppendStyleParams {
    prefixCls?: string;
    antPrefixCls?: string;
    resetLink?: boolean;
    higherPriority?: boolean;
    inject?: {
        Button?: boolean;
        Message?: boolean;
    };
}

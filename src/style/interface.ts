export interface InjectOptions {
    Badge?: boolean;
    Button?: boolean;
    Message?: boolean;
    Select?: boolean;
    Table?: boolean;
    Tabs?: boolean;
}

export interface AppendStyleParams {
    prefixCls?: string;
    antPrefixCls?: string;
    resetLink?: boolean;
    higherPriority?: boolean;
    inject?: boolean | InjectOptions;
    // enable?: boolean | InjectOptions;
}

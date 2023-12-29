export interface InjectOptions {
    Button?: boolean;
    Menu?: boolean;
    Message?: boolean;
    Modal?: boolean;
    Select?: boolean;
    Table?: boolean;
    Tabs?: boolean;
    Typography?: boolean;
}

export interface AppendStyleParams {
    prefixCls?: string;
    antPrefixCls?: string;
    resetLink?: boolean;
    higherPriority?: boolean;
    injectAll?: boolean;
    inject?: InjectOptions;
}

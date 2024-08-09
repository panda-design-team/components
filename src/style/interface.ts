import {AliasToken} from 'antd/es/theme/interface';

export interface InjectOptions {
    Button?: boolean;
    Icon?: boolean;
    Menu?: boolean;
    Message?: boolean;
    Modal?: boolean;
    Select?: boolean;
    Table?: boolean;
    Typography?: boolean;
}

export interface AppendStyleParams {
    token: AliasToken;
    prefixCls?: string;
    antPrefixCls?: string;
    resetLink?: boolean;
    higherPriority?: boolean;
    injectAll?: boolean;
    inject?: InjectOptions;
}

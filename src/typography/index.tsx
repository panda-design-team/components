import {TextProps as AntTextProps} from 'antd/es/typography/Text';
import {Typography} from 'antd';
import {FC} from 'react';

export interface TextProps extends Omit<AntTextProps, 'type'> {
    type?: 'secondary' | 'success' | 'warning' | 'danger' /* 新增 */ | 'tertiary' | 'quaternary' | 'info' | 'error';
}

export const Text = Typography.Text as FC<TextProps>;

import {StyleSheet, TextInput, type TextInputProps} from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import React from "react";

export type ThemedTextInputProps = TextInputProps & {
    textLightColor?: string;
    textDarkColor?: string;
};

export function ThemedTextInput({
                               style,
                               textLightColor,
                               textDarkColor,
                               ...rest
                           }: ThemedTextInputProps) {
    const textColor = useThemeColor({ light: textLightColor, dark: textDarkColor }, 'text');
    const placeholderTextColor = useThemeColor({}, 'placeholder');
    const borderColor = useThemeColor({}, 'borderColor');

    return (
        <TextInput
            style={[
                { color: textColor, borderColor },
                styles.default,
                style,
            ]}
            placeholderTextColor={placeholderTextColor}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    }
});

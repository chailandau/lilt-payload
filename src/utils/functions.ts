import { Field } from 'payload/types';

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - String to be capitalized.
 * @return {string} Capitalized string.
 */
export const capitalizeWord = (str: string): string => {
    if (!str) {
        return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const restOfWord = str.slice(1);

    return firstLetter + restOfWord;
};

/**
 * Duplicates field configuration with `required` set to true.
 *
 * @param {Field[]} fieldConfig - Field configuration to duplicate.
 * @return {Field[]} A duplicate field configuration with the "required" property set to true.
 */
export const requiredField = (fieldConfig: Field[]): Field[] => {
    if (!fieldConfig) {
        return [];
    }

    return fieldConfig.map((config) => ({
        ...config,
        required: true,
    }));
};

/**
 * Validates if string is a valid http or https URL with a TLD.
 *
 * @param {string} str - String to be validated as a URL.
 * @return {boolean} Returns true if the string is a valid URL, otherwise returns false.
 */
export const isValidUrl = (str: string): boolean => {
    try {
        const url = new URL(str);

        const originSplit = url.origin.split('.');
        if (originSplit.length === 1 || originSplit[1] === '') {
            return false;
        }

        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (err) {
        return false;
    }
};

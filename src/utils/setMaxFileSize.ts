import { Field } from 'payload/types';

export const setMaxFileSize = (max: number) => {

    const bytesToMb = (bytes: number) => {
        const toMb = bytes / (1024 * 1024);

        return Math.round(toMb * 100) / 100;
    };

    return ([{
        name: 'filesize',
        label: 'File Size',
        type: 'number',
        admin: {
            readOnly: true,
            hidden: true
        },
        validate: async (val: number) => {
            if (val > max) {
                throw new Error(`Images must be ${bytesToMb(max)}MB or below. This image is ${bytesToMb(val)}MB`);
            }

            return true;
        }
    }]) as Field[];
};

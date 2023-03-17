import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";

export type product = {
    id: Key | null | undefined;
    name:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | null
        | undefined;
    image: string | undefined;
    desc:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
    price:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
};

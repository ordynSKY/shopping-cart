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

export type cartItemType = {
    cartQuantity: number;
    desc: string;
    id: number;
    image: string;
    name: string;
    price: number;
};

export type cartType = {
    cartItems: cartItemType[];
    cartTotalAmount: number;
    cartTotalQuantity: number;
};

export type productType = {
    error: null;
    items: string;
    status: string;
};

export type configType = {
    focused: boolean;
    keepUnusedDataFor: number;
    middlewareRegistered: boolean;
    online: boolean;
    reducerPath: string;
    refetchOnFocus: boolean;
    refetchOnMountOrArgChange: boolean;
    refetchOnReconnect: boolean;
};

export type productsApiType = {
    config: configType;
    mutations: object;
    provided: object;
    queries: object;
    subscriptions: object;
};

export type stateType = {
    cart: cartType;
    products: productType;
    productsApi: productsApiType;
};

export type cartTotalType = {
    quantity: number;
    total: number;
};

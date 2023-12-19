const host = "http://localhost:3000";
export const dbhost = "http://localhost:8080"; //assuming db.json run on 

export const USER_GET = `${host}/user`;
export const USER_LOGIN = `${host}/user/login`;
export const USER_SIGNUP = `${host}/user/signup`;

export const CAOUSEL_AD_GET = `${host}/caousel-ad`;

export const PRODUCT = `${host}/product`;
export const PRODUCT_SEARCH = `${host}/product-search`;
export const PRODUCT_DETAILS = `${host}/product-details`

export const MAIN_CATEGORY_GET = `${host}/mainCategory`;
export const SUB_CATEGORY_GET = `${host}/subCategory`;

export const CART = `${host}/cart`;
export const CART_ADD = `${host}/cart/add`;
export const CART_UPDATE = `${host}/cart/update`;

export const ADDRESS = `${host}/address`;
export const ADDRESS_CREATE = `${host}/addressCreate`;

export const ORDER_CREATE = `${host}/order/create`;
export const ORDER = `${host}/order`;
export const ORDER_SUCCESS = `${host}/order/orderSuccess`;
export const ORDER_FAILED = `${host}/order/orderFailed`;


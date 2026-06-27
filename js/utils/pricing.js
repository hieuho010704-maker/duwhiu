import { SHIPPING, COUPONS } from './constants.js';
import { getAppliedCoupon } from './storage.js';

export function calcSubtotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calcShipping(subtotal) {
    return subtotal >= SHIPPING.FREE_THRESHOLD ? 0 : SHIPPING.FEE;
}

export function calcDiscount(subtotal, couponCode) {
    const code = couponCode || getAppliedCoupon();
    const coupon = COUPONS[code];
    if (!coupon) return 0;
    return Math.round(subtotal * coupon.discount);
}

export function calcGrandTotal(cart, couponCode) {
    const subtotal = calcSubtotal(cart);
    const discount = calcDiscount(subtotal, couponCode);
    const afterDiscount = Math.max(0, subtotal - discount);
    const shipping = calcShipping(afterDiscount);
    return {
        subtotal,
        discount,
        shipping,
        grandTotal: afterDiscount + shipping
    };
}

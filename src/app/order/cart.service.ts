import { Injectable } from '@angular/core';
import { CartItem } from '../entities/cart.model';
import { Item } from '../entities/item.model';

@Injectable()
export class CartService {
    cart:Array<CartItem> = [];
    constructor() {}

    addItem(cartItem:CartItem){
        this.cart.push(cartItem);
        return this.cart;
    };

}
export function cartReducer(state,{type,payload}){
    switch (type) {
        case "FETCH_PRODUCTS":{
            return {
                ...state,
                products:payload
            }
        }
        case "ADD_TO_CART":{
            return {
                ...state,
                cart:[...state.cart,{...payload,quantity:1}]
            }
        }
        case "REMOVE_FROM_CART":{
            return {
                ...state,
                cart:state.cart.filter((item)=>item.id!==payload.id)
            }
        }
        case "CHANGE_QUANTITY":{
            return {
                ...state,
                cart:state.cart.filter((item)=>
                item.id===payload.id?item.quantity+=payload.num:item.quantity)
            }
        }
    default: return state;
    }
}
export function productReducer(state,{type,payload}){
    switch (type) {
        case "BY_COLOR":{
            return {
                ...state,
                color:payload
            }
        }
        case "BY_GENDER":{
            return {
                ...state,
                gender:payload
            }
        }
        case "BY_PRICE":{
            return {
                ...state,
                price:payload
            }
        }
        case "BY_TYPE":{
            return {
                ...state,
                type:payload
            }
        }
        case "BY_MAX_PRICE":{
            return {
                ...state,
                max_price:payload
            }
        }
        case "BY_SEARCH":{
            return {
                ...state,
                search:payload
            }
        }
    default: return state;
    }
}
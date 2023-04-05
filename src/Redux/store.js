import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import { cartReducer } from "./Cart/reducer";
// import { wishlistReducer } from "./Wishlist/reducer";
import { productReducer } from "./Products/reducer";
import { cartReducer } from "./Cart/reducer";
import { loginReducer } from "./login/reducer.login";
// import { reducer as adminReducer } from "./admin/admin.reducer";

const rootreducer = combineReducers({
  cartReducer,
//   wishlistReducer,
  productReducer,
  loginReducer,
//   adminReducer,
});

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export { store };

import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReduser } from "./redusers";

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);

console.log(store.getState())
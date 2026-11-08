import { db, auth } from "./firebaseConfig";
import { ref, onValue, push } from "firebase/database";

export function listenerVendas(user, callback, cancelCallback) {
  const pathRef = ref(db, `/vendas/${user.uid}`);
  return onValue(pathRef, callback, cancelCallback, { onlyOnce: true });
}

export function cadastrarVenda(user, venda) {
  const pathRef = ref(db, `/vendas/${user.uid}`);
  push(pathRef, venda);
}

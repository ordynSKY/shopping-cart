import { put, call, takeEvery } from "redux-saga/effects";
import { fetchProducts } from "./request";
import { getProducts, setProducts } from "slices/productsSlice";

export function* getProductsData() {
  try {
    const { data } = yield call(fetchProducts);
    yield put(setProducts(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherSaga() {
  yield takeEvery(getProducts.type, getProductsData);
}

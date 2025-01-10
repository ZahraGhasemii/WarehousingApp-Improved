import http from "./httpService";

export function getProductsApi() {
  return http.get("/production/list").then(({ data }) => data.data);
}

export function getProductsWithQueryStringApi(qs) {
  return http.get(`/production/list${qs}`).then(({ data }) => data.data);
}

export function removeProductApi(id) {
  return http.delete(`/production/${id}`).then(({ data }) => data.data);
}

export function createProductApi(data) {
  return http.post(`/production/add`, data).then(({ data }) => data.data);
}

export function editProductApi({ id, newProduct }) {
  return http
    .patch(`/production/update/${id}`, newProduct)
    .then(({ data }) => data.data);
}

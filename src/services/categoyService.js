import http from "./httpService";

export function getListOfCategoriesApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}

export function getListOfCategoriesWithQueryStringApi(qs) {
  return http.get(`/category/list${qs}`).then(({ data }) => data.data);
}

export function getCategoryByIdApi(id) {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
}

export function checkExistCategoryApi(id) {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
}

export function findCategoryWithTitleApi(englishTitle) {
  return http.get(`/category/${englishTitle}`).then(({ data }) => data.data);
}

export function addNewCategoryApi(data) {
  return http.post(`/category/add`, data).then(({ data }) => data.data);
}

export function updateCategoryApi({ id, newCategory }) {
  return http
    .patch(`/category/update/${id}`, newCategory)
    .then(({ data }) => data.data);
}

export function removeCategoryApi(id) {
  return http.delete(`/category/${id}`).then(({ data }) => data.data);
}

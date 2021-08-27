import { Observable } from "rxjs/Observable";
import { ajax } from "rxjs/observable/dom/ajax";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

const baseURL = `https://worktrial.herokuapp.com/`;

const requestHeader = () => {
  let headers = {};

  headers = {
    "Content-Type": "application/json",
  };

  return headers;
};

const handleError = (operation) => (err) => {
  const errMsg = `Error in ${operation}()`;
  console.log(`${errMsg}:`, err);

  return throwError(err);
};

export const getCustomers = () =>
  ajax({
    headers: requestHeader(),
    method: "GET",
    url: `${baseURL}/api/v1/customers`,
  }).pipe(catchError(handleError("getCustomers")));

export const getProducts = () =>
  ajax({
    headers: requestHeader(),
    method: "GET",
    url: `${baseURL}/api/v1/products`,
  }).pipe(catchError(handleError("getProducts")));

export const addCustomer = (payload) =>
  ajax({
    headers: requestHeader(),
    method: "POST",
    url: `${baseURL}/api/v1/customers`,
    body: payload,
  }).pipe(catchError(handleError("addCustomer")));

export const deleteCustomer = (id) =>
  ajax({
    headers: requestHeader(),
    method: "DELETE",
    url: `${baseURL}/api/v1/customers/${id}`,
  }).pipe(catchError(handleError()));

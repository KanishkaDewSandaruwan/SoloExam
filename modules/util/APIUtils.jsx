import {  API_BASE_URL,file_upload } from "../../@jumbo/constants/Endpoints";

const request = (options) => {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  // let headers = new Headers();
  // headers.append('Accept', 'application/json');

  // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  // headers.append('Access-Control-Allow-Credentials', 'true');
  // headers.append('POST', 'OPTIONS');


  // if(localStorage.getItem(ACCESS_TOKEN)) {
  //     headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
  // }

  const defaults = { headers: headers};
  options = Object.assign({}, defaults, options);

  if (options.formData) {
    options.headers["Content-Type"] = "multipart/form-data";
    delete options["formData"];
  }

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function signin(data) {
  return request({
    url: API_BASE_URL + "signin/",
    method: "POST",
    body: JSON.stringify(data),
  });
}
export function signup(data) {
  return request({
    url: API_BASE_URL + "addUser/",
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function UpdateUser(data) {
  return request({
    url: API_BASE_URL + "updateUser/",
    method: "PUT",
    body: JSON.stringify(data),
  });
}
export function removeUser(data) {
  return request({
    url: API_BASE_URL + "removeUser/",
    method: "DELETE",
    body: JSON.stringify(data),
  });
}
export function getUserByEmail(email) {
  return request({
    url: API_BASE_URL + "getUserByEmail/" + email,
    method: "GET",
  });
}





export function add(data, url) {
  return request({
    url: API_BASE_URL + url,
    method: "POST",
    body: JSON.stringify(data),
  });
}
export function addMany(data, url) {
  return request({
    url: API_BASE_URL + url + "/list",
    method: "POST",
    body: JSON.stringify(data),
  });
}
export function uniqueCheck(data, url, field) {
  return request({
    url: API_BASE_URL + url + "/unique/" + field,
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function uniqueCheckList(data, url, field) {
  return request({
    url: API_BASE_URL + url + "/uniqueList/" + field,
    method: "POST",
    body: JSON.stringify(data),
  });
}
export function edit(data, url, key) {
  return request({
    url: API_BASE_URL + url + "/" + key,
    method: "PUT",
    body: JSON.stringify(data),
  });
}
export function remove(url, key) {
  return request({
    url: API_BASE_URL + url + "/" + key,
    method: "DELETE",
  });
}
export function removeAll(url) {
  return request({
    url: API_BASE_URL + url + "/all",
    method: "DELETE",
  });
}
export function get(url, key) {
  return request({
    url: API_BASE_URL + url + "/single/" + key,
    method: "GET",
  });
}
export function getAll(url) {
  return request({
    url: API_BASE_URL + url + "/all",
    method: "GET",
  });
}
export function getMaxId(url) {
  return request({
    url: API_BASE_URL + url + "/max",
    method: "GET",
  });
}


export function remove_key(url, key) {
  return request({
    url: API_BASE_URL + url + "_key" + "/" + key,
    method: "DELETE",
  });
}





export async function handleUpload(file) {
  const formData = new FormData();
  formData.append("file", file);
  let options = {
    method: "POST",
    body: formData,
  };
  let res=await fetch(file_upload, options)
  let jData=res.json()
  return jData
}


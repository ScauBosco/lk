function xhrPromise(method, url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onreadystatechange = function () {
      if ((xhr.readyState = XMLHttpRequest.DONE)) {
        if (xhr.status == 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    };
    xhr.onerror = function () {
      console.log("Error");
    };
    
    xhr.timeout = 5000;
    xhr.send(data);
  });
}
xhrPromise("GET", "/api/upload")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

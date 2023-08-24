let xhr = new XMLHttpRequest();

xhr.open("POST", "http://example.com/api/upload", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    if (xhr.status == 200) {
      let res = JSON.parse(xhr.responseText);
      xhr.resp
      console.log(res);
    } else {
      console.error();
    }
  }
};
xhr.setRequestHeader("Content-Type", "application/json");
xhr.withCredentials = true;
let postForm = new FormData();
postForm.append("file", "fffffffffff");
xhr.onerror = function () {
  console.log(xhr.statusText);
};
xhr.timeout=5000
xhr.send(postForm);

const request = (url) => {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
            data = JSON.parse(xhr.responseText);
            if (data.name === "Shuzenji") {
                return location.reload();
            }
          } else {
            reject(xhr.status)
          }
        }
      }
      xhr.ontimeout = function () {
        reject('timeout')
      }
      xhr.open('get', url, true)
      xhr.send()
    })
};
const requestURL = 'https://api.unsplash.com/photos/random?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'


function getData() {
  fetch(requestURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
getData();

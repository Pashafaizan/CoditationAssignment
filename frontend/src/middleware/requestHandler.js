const proxy = `http://localhost:7860/api/v1`;


export async function fetchData(path, requestOptions) {
  console.log(path);
  let response;

  requestOptions.headers = {
    ...requestOptions.headers,
  
  };

  console.log(requestOptions);
  await fetch(proxy + path, requestOptions).then(
    (res) => (response = res.json())
  );
  
  return response;
}

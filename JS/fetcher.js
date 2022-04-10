//Quick snippet of Fetch
/*

console test code:
let getAURLData = async () => {
    console.log('sending...');
    const a = await fetcher('https://catfact.ninja/fact1');
    console.log(a);
}
getAURLData();

*/

function fetcher(url, data = undefined, method = undefined) {
  return fetch(url, {
    method: method ? method : data ? "POST" : "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status > 399 && res.status < 200) { throw new Error(); }
      return res.json();
    })
    .catch((error) => {
      return error.message;
    });
}

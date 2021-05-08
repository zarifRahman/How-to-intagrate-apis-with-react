###### Learn API integration with react

### HTTP Request Options

- Fetch API
- Axios
- jQuery
- XMLHttpRequest

### Fetch API

Structure

```
fetch(
url,
{
method: "POST",
body: JSON.stringify(data),
headers: { "Content-Type": "application/json" }
});
```

Example

```
fetch("/path/to/api")
.then(response => response.json())
.then(data => { /* ... */ });
const response = await fetch("/path/to/api");
const data = await response.json();
```

[Fetch in MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Axios

Structure

```
axios(
{
url: "/path/to/api",
method: "POST",
data: data,
headers: { "Content-Type": "application/json" }
});
```

Example

```
axios.get("/path/to/api")
.then(response => { /* ... */ });
axios.post(
"/path/to/api",
{ name: "value" })
.then(response => { /* ... */ });
```

[Axios Doc](https://github.com/axios/axios)

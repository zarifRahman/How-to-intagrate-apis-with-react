###### Learn API integration with react

### HTTP Request Options

- Fetch API
- Axios
- jQuery
- XMLHttpRequest

### Fetch API

```
Structure
fetch(
url,
{
method: "POST",
body: JSON.stringify(data),
headers: { "Content-Type": "application/json" }
});

Example ---
fetch("/path/to/api")
.then(response => response.json())
.then(data => { /* ... */ });
const response = await fetch("/path/to/api");
const data = await response.json();

[MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
```

###### Learn API integration with react

### HTTP Request Options

- Fetch API
- Axios
- jQuery
- XMLHttpRequest

### Fetch API

```
fetch("/path/to/api")
.then(response => response.json())
.then(data => { /* ... */ });
const response = await fetch("/path/to/api");
const data = await response.json();
fetch(
url,
{
method: "POST",
body: JSON.stringify(data),
headers: { "Content-Type": "application/json" }
});
```

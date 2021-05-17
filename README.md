# Learn API integration with react

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

### React Query

##### npm install react-query

```
import
{ QueryClient, QueryClientProvider }
from "react-query";

function App() {
  return (
  <QueryClientProvider
    client={queryClient}>
  </QueryClientProvider>
)
}
```

```
const query = useQuery(   // React Query hook
"events",                 // Hook key
() => axios.get(url)      // Async function returning Promise
);
query == { status, data, error, isLoading } // Structure of returned data
if (isLoading) {  // Message while loading
  return ( <div>Loading ...</div>);
}
return (
  query.data.map(...)   // Output once data is available
);

```

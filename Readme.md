### Node simple practice session

**When to use node:**
```shell
1.	Data Streaming applications: Example Instagram, when you search anything, it will show you unlimited data.
2.	Real time chat applications: example WhatsApp
3.	I/O bound:  input/output is non-blocking. Means if one thread is taking time.

```
![Alt Text](images/img.png)

```shell
And another thread is ready to return result then it will return the result
of second thread first. Suppose you hit 2 calls one is to access DB, and another
is to hit API. DB call is taking 10 seconds to return the result and API is only
taking 3 seconds to return the call then it returns the API result and after
7 seconds you will also get DB result.
```
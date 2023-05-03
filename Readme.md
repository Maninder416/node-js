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

**REPL feature: Read, Eval, Print, Loop:**

```shell
It is same as command line in window.
How to open editor mode in node:
Enter node, once you enter into node then write “.editor” and enter you code.
Below is the example in which I am writing a function.

```
![Alt Text](images/img_1.png)

```shell
Once you write the code, then press ctrl +D

How to write, read content in node:

We can use FS to read, write in node.

```
![Alt Text](images/img_2.png)

```shell
In case, it returns you binary code like this:

```
![Alt Text](images/img_3.png)

```shell
Convert it into string and then print it:

```
![Alt Text](images/img_4.png)

```shell
Read, append, delete file in node using fs:

```
![Alt Text](images/img_5.png)

**Synchronous and Asynchronous:**
```shell
Synchronous and asynchronous are two ways of coordinating tasks or communication
between different systems or components.

Synchronous communication means that two or more components or systems work 
together in a coordinated way, where each component waits for the other to
complete a task before moving on to the next one. In other words, synchronous
communication is like a conversation between two people where each person takes
turns speaking and listening, and nothing else can happen until the current
speaker is finished.

On the other hand, asynchronous communication means that components or systems
can work independently and in parallel, without waiting for each other to complete
a task. Asynchronous communication is like sending an email or text message, where
the sender can send the message and move on to other tasks without waiting for
an immediate response.
In simpler terms, synchronous communication is like a queue where everyone has to wait for their turn, while asynchronous communication is like a group chat where people can send and receive messages at their own pace.

Synchronous example:

```
![Alt Text](images/img_6.png)

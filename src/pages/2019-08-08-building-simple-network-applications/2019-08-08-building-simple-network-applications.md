---
path: "/building-simple-network-applications"
date: "2019-08-08"
title: "Learn by Building: Simple Network Apps"
tags: ['Computer Science', 'Python']
excerpt: "Recently, I started reading Computer Networking: A Top-down Approach to solidify my vague knowledge about the subject. It's been super interesting finally learning about many of the things I have been working with for so long already. In particular, I found the chapter on the Application Layer to be very interesting. Here are a few of the projects I worked on that were assigned at the end of the chapter."
---

Not too long ago, I decided to take the time to revisit all of the Computer Science topics I never formally learned about. In my quest to fill in my holes of knowledge, I began reading "Computer Networking: A Top-down Approach". So far, I've been finding the book very enlightening: the author does a great job explaining the various elements in a simple and easy-to-understand way.

Most recently, I completed the chapter on the Application Layer. It was a great read, and I was super happy to finally understand many of the technologies I had been working with over the years. At the end of the chapter, readers are presented with a series of assignments to help solidify what was just read. Below are my implementation of these projects.

Everything was written in Python, and the results are rudimentary at best. Also note that I have done very little testing, keeping things mostly to my own localhost. In any case, check them out and let me know what you think!

###Web Server###

[This web server project](https://github.com/chickenn00dle/cntda-web-server) is a barebones server that only accepts `GET` requests. It listens for `http` requests on the port of your choosing and upon receiving one fetches files from a data directory. Under the hood, it does the following:

- Parses the request header and creates a `req_header` dictionary
- Checks that the request method is GET
- Checks that the path is valid
- Based on the above checks, crafts a relevant response header
- If the request is valid, fetches data from the file in question and crafts a response body
- Puts it all together and responds to the request

There are a few other things going on as well, but this is the gist of it. To test this out, you can clone the project and run the server:

```
git clone https://github.com/chickenn00dle/cntda-web-server.git [project-name]
cd [project-name]
./server.py --port 8081
```

After this, you can send a request using something like [HTTPie](https://httpie.org/)

```
http localhost:8081/test/test.txt
```

###UDP Pinger###

[The UDP pinger project](https://github.com/chickenn00dle/cntda-udp-pinger) is a bit simpler than the web server project above. It runs as both the server and client depending on the included flag. As the server, the pinger:

- Listens for a message on the designated port (default is 2081)
- Upon receiving a packet, responds with an "empty" packet to the client address

As the client the pinger:

- Establishes a connection with the server
- Logs a start time
- Sends a "ping" packet to the server
- Waits one second for a reply
- If there is a reply before this time, the pinger logs an end time and calculates the round trip time of the request/response
- If there is no reply within this time, the pinger gives up
- The above steps are repeated 10 times

To get this bad mammajamma up and running, you can clone the project and run the server:

```
git clone phttps://github.com/chickenn00dle/cntda-udp-pinger.git [project-name]
cd [project-name]
./ping.py --run-server
```

And in a separate shell, initiate the ping:

```
./ping.py
```

###Mail Client###

This one is a bit more involved as it requires setting up a gmail account for testing. [The mail client project](https://github.com/chickenn00dle/cntda-mail-client) is a simplified client that is only capable of sending simple text emails. I also made it interactive as it was becoming a bit cumbersome to include so many arguments when calling the script.

Under the hood, the mail client does the following:

- Interactively obtains the password associated with the sending email address (the testing account mentioned above)
- Interactively obtains the recipient, subject, and message for the email to be sent
- Using the above information, crafts a message object
- Attempts to establish a connection with the mail server
- If the connection is successful, sends the message
- If the connection is unsuccessful, returns the error

Finally, to get this one running, you can clone the project, and run the program alongwith the necessary arguments:

```
git clone phttps://github.com/chickenn00dle/cntda-udp-pinger.git [project-name]
cd [project-name]
./mail-client.py [_email address from above_] [_mail server_]
```

I've only tested this using a dummy gmail account. To test things out, I suggest doing the same. You'll need to also be sure to [allow less secure apps to access your test gmail account](https://devanswers.co/allow-less-secure-apps-access-gmail-account/).

As previously mentioned, all of these network apps are super rudimentary, and nowhere near production quality. Mostly, I just wanted to quickly get something running that would give me exposure to the technologies used in actual apps. And overall, I'd say mission accomplished. I learned a ton from these projects and have a much better understanding of the protocols that underly much of the internet.

As always, feel free to reach out with any questions or feedback!

In this article we'll review HTTP requests and how POST requests are handled via Rails.

### Learning Goals

- Review the HTTP verbs GET and POST
- Introduce additional HTTP verbs PUT, PATCH, and DELETE
- Manually send an HTTP POST request in Rails to save some content
- Learn about browser developer tools to view network requests

### A Review of HTTP

When we want to view a website, our browser will submit an **HTTP request** through the network to the server we want to talk to. When the server receives the HTTP request it will respond with an **HTTP response** that is sent back to our browser. The HTTP response will usually include some HTML that our browser knows how to display to the user.

![HTTP Request/Response Cycle](https://s3.amazonaws.com/horizon-production/images/http-request-response-cycle.png)

**GET** requests are used to retrieve information from a server while **POST** requests are used to modify or persist information. The most common way to submit an HTTP POST is by submitting an HTML form. The inputs on the form are sent as **parameters** to the server where the information may be persisted in a database. For example, when we fill out a product review form on Amazon and click "submit", our review will be persisted in Amazon's database somewhere.

### POST Requests

Let's explore what an HTTP POST request looks like in a Rails application. Run the following commands to clone and run Launcher News application if is not already setup:

```no-highlight
$ et get rails-requests
$ cd rails-requests
$ bundle
$ bundle exec rake db:setup
```

Now start the Rails server:

```no-highlight
$ bundle exec rails server --binding=0.0.0.0

=> Booting WEBrick
=> Rails 4.0.0 application starting in development on http://0.0.0.0:3000
...
```

We can view the site in a browser by visiting [http://localhost:3000/](http://localhost:3000) which shows a few sample articles. If we wanted to submit a new article we can fill out the form at [http://localhost:3000/articles/new](http://localhost:3000/articles/new).

When we submit the new article form, our browser will send an HTTP POST request to our web server which will persist the article in the database. To see how our application handles that request we can run the `rake routes` command in a new tab in the terminal:

```no-highlight
$ bundle exec rake routes
         Prefix Verb URI Pattern                Controller#Action
           root GET  /                          articles#index
search_articles GET  /articles/search(.:format) articles#search
       articles GET  /articles(.:format)        articles#index
                POST /articles(.:format)        articles#create
    new_article GET  /articles/new(.:format)    articles#new
        article GET  /articles/:id(.:format)    articles#show
```

Notice that we have the verb and the path for each route (e.g. `GET /` will access the `index` action of the `ArticlesController`). We can also see that each route corresponds to a particular controller action.

The action that we're interested in is `articles#create` since this is what will actually save a new article to the database. We can see that this route requires a `POST` request to be sent to the `/articles` path.

Let's see if we can simulate this POST request with `curl`.

Before you do that, please go into your `controller/application_controller.rb` and comment out the `protect_from_forgery unless: -> { request.format.json? }` line. Rails builds this in to protect your site from Cross-Site Request Forgery (CSRF) attacks, in which a potentially malicious user tries to pass off their HTTP request as one originating from your own server.

However, since we are simply `curl`ing to our server from the command line, we can disable it for our current purposes. Knowing about Rails' CSRF protection will also become important as you build API endpoints to integrate React and Rails.

Back to our POST request with `curl`: Make sure you are running `rails server --binding=0.0.0.0` in one tab. Now open up another.

To submit the actual HTTP request, we can copy and paste this snippet into the new tab:

```no-highlight
$ curl --data "article%5Btitle%5D=hello&article%5Burl%5D=http%3A%2F%2Fexample.com&article%5Bdescription%5D=blarg%21" localhost:3000/articles
```

First we include the request body which contains the actual form data we want to submit. Although it looks like a bunch of gibberish, certain characters are not allowed to be sent in the HTTP request body so they are **encoded** instead (e.g. the `!` character is encoded as `%21`). If we were to decode the above string it would look something like:

```no-highlight
article[title]=hello&article[url]=http://example.com&article[description]=blarg!
```

When Rails is parsing the request it will extract these parameters into a hash structure:

```no-highlight
{"article"=>{"title"=>"hello", "url"=>"http://example.com", "description"=>"blarg!"}}
```

This becomes part of the **params** hash that we can access in the controller to read in user input.

The second part of the request is the route to which we are posting. We know that this `curl` command is a `POST` request because we are supplying `--data` along with the request.

If we're successful, we should get a response that looks something like:

```no-highlight
<html><body>You are being <a href="http://localhost/articles/10">redirected</a>.</body></html>
```

The 302 HTTP response code is redirecting us to another page to view the article that we just created. If we visit [http://localhost:3000](http://localhost:3000) we should see our new article has been added to the list.

If we look back to our first console tab where our rails server is running, we should see that the request was successfully made.

```no-highlight
Started POST "/articles" for ::1 at 2017-04-10 14:52:44 -0400
Processing by ArticlesController#create as */*
  Parameters: {"article"=>{"title"=>"hello", "url"=>"http://example.com", "description"=>"blarg!"}}
   (0.2ms)  BEGIN
  SQL (1.0ms)  INSERT INTO "articles" ("title", "url", "description", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["title", "hello"], ["url", "http://example.com"], ["description", "blarg!"], ["created_at", 2017-04-10 18:52:44 UTC], ["updated_at", 2017-04-10 18:52:44 UTC]]
   (2.4ms)  COMMIT
Redirected to http://localhost:3000/articles/7
Completed 302 Found in 43ms (ActiveRecord: 17.9ms)
```

This shows that the rails server has successfully parsed the parameters supplied by the request and saved them to the database.

If we want to check out the html from the page to which the request redirected us, we can make another `curl` request in the second tab.

```no-highlight
$ curl localhost:3000/articles/7
```

### PUT, PATCH, DELETE

While GET and POST are the most common HTTP requests you'll encounter, Rails also makes use of a handful of other HTTP verbs.

A **PUT** request is similar to a POST except that it is typically used to replace an existing resource rather than creating a new one. **PATCH** is similar to PUT except that it is used for partially modifying a resource without replacing the entire resource. A **DELETE** request is used when you want to remove a particular resource. The full list of verbs can be found [here](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods).

For the most part, we don't need to worry too much about whether to send a POST vs. PUT or a PUT vs. PATCH as Rails will handle these details for us. The meaning of these verbs is primarily for semantic purposes and are used by Rails to simplify URLs. It's important to realize that every route is made up of both the verb _and_ the path: there is a very big difference between `GET /articles` and `POST /articles` (the former retrieves all articles and the latter will create a new article).

### HTTP is Stateless

One very important aspect of HTTP is that it is **stateless**. This means that after we are done communicating with a server (i.e. we sent a request and received a response) the server can close the connection and forget all about us. The next time we connect to the server it won't necessarily retain any information about our past requests.

This simplifies the development of our application a bit. We don't have to worry about storing information about who connected and what they did in case they come back. If we do receive another request from the same client we can treat them as if they were total strangers.

The downside to this is that sometimes we do want to remember when someone has visited our site before. For example, if someone logs in on one request, we probably want to know that they are authenticated the next request they send to the site. For this we can use something called **HTTP cookies** to send bits of information back and forth with each request. This information could include the client's identity so the server knows whether they're logged in.

### External Resources

- [List of HTTP Response Codes](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [List of HTTP Verbs](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
- [HTTP Tutorial](http://net.tutsplus.com/tutorials/tools-and-tips/http-the-protocol-every-web-developer-must-know-part-1/)

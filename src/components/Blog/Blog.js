import React from "react";

const Blog = () => {
  return (
    <div className="container mt-4">
      <div>
        <h1>
          {" "}
          <strong>Question:1</strong> What is cors
        </h1>
        <p>
          <strong>Answer:</strong> Cross-Origin Resource Sharing (CORS) is an
          HTTP-header based mechanism that allows a server to indicate any
          origins (domain, scheme, or port) other than its own from which a
          browser should permit loading resources. CORS also relies on a
          mechanism by which browsers make a "preflight" request to the server
          hosting the cross-origin resource, in order to check that the server
          will permit the actual request. In that preflight, the browser sends
          headers that indicate the HTTP method and headers that will be used in
          the actual request.
        </p>
      </div>
      <div>
        <h1>
          {" "}
          <strong>Question:2</strong> Why are you using firebase? What other
          options do you have to implement authentication?
        </h1>
        <p>
          <strong>Answer:</strong> Firebase provides tools to grow your app and
          business, for startups & global enterprises. Get your app up and
          running quickly & securely with fully managed backend infrastructure.
          Monitor App Performance. Backed by Google. Cross-Platform Solutions.{" "}
          <br />
          The best Firebase alternatives
          <ol>
            <li>Back4App </li>
            <li>Backendless</li>
            <li>Kuzzle</li>
            <li>Pubnub</li>
            <li>Kumulos </li>
            <li>Appwrite</li>
            <li>Deployd </li>
            <li>NHost</li>
            <li>AWS Amplify</li>
            <li>Heroku</li>
          </ol>
        </p>
      </div>
      <div>
        <h1>
          {" "}
          <strong>Question:3</strong> How does the private route work?
        </h1>
        <p>
          <strong>Answer:</strong> The private route component is similar to the
          public route, the only change is that redirect URL and authenticate
          condition. If the user is not authenticated he will be redirected to
          the login page and the user can only access the authenticated routes
          If he is authenticated (Logged in).
        </p>
      </div>
      <div>
        <h1>
          {" "}
          <strong>Question:4</strong> What is node? How does node work?
        </h1>
        <p>
          <strong>Answer:</strong> Node allows developers to write JavaScript
          code that runs directly in a computer process itself instead of in a
          browser. Node can, therefore, be used to write server-side
          applications with access to the operating system, file system, and
          everything else required to build fully-functional applications.{" "}
          <br />
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive
        </p>
      </div>
    </div>
  );
};

export default Blog;

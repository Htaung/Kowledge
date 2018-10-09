<h2>Learn from The Net Ninja Youtube</h2>

https://www.youtube.com/watch?v=1US-P13yKVs

https://github.com/iamshaunjp/node-js-playlist
https://stackabuse.com/learn-node-js-a-beginners-guide/
https://ilovecoding.org/courses/nodejs


<h1>downloaded at 35 </h1>
https://www.youtube.com/watch?v=L4OP8JGKbQU&index=35&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

<h4>Learning end at 27</h4>
https://www.youtube.com/watch?v=9TSBKO59u0Y


<h4> node js is written in c++ </h4>
<p>
heart of node js is V8 Engine
V8 engine convert js code to machine code 
</p>


<h4>Stream in node js</h4>
<p>
can create streams in node.js to transfer data
increase performance
</p>


<h4> Installing express </h4>
<code>npm install express</code>
<p>
to installed in the module that we created in our web app
go to that diretory and then type
<pre>
<code>
npm init // that will create basic folder structure for web 
nmp install express -save // that -save option will add dependencies in package.json
</code>
</pre>
if we add dependencies in package.json after that type in cmd 
<pre><code>npm install </code></pre>
it will install all dependencies required in our app
</p>


<h4>install nodemon ==> monitoring the changes of file realtime without having server to restart</h4>
<pre>
<code>
npm install -g nodemon
nodemon app.js 
</code>
</pre>

<h3>Express</h3>
<p>
Easy and flexible routing system
integrates with many template engines
contains a middleware framework	
</p>

<pre>
Responding to request
GET ==> app.get('route', fn)
POST ==> app.post('route', fn)
DELETE ==> app.delete('route', fn)
</pre>


<h4> Installing Template Engine View Engine </h4>
<p> like viewResolver in java tileViewResolver 
<pre>
<code>
npm install ejs -save


var express = require('express');

var app = express();

//set view engine like view resolver in spring tileViewResolver, 
app.set('view engine', 'ejs');
//by default template will look into /views folder

</code>
</pre>
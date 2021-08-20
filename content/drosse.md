+++
title = "Drosse"
description = "A stateful and program&shy;mable mock server"
weight = 0
template = "product.html"

[extra]
theme = "drosse"

[extra.product]
audience = "(Frontend) developers"
license = "Free / Open source"
website = "https://drosse.dev"
techs = ["NodeJS"]
logo = """
<svg viewBox="0 0 90 75" width="343" height="128">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8264 13.4384L13.2227 12.0422L16.3984 15.2179L15.0021 16.6141L11.8264 13.4384ZM16.2082 17.8202L19.3839 20.9959L20.7802 19.5997L17.6045 16.424L16.2082 17.8202ZM21.9863 20.8058L20.5901 22.2021L23.7659 25.3779L25.1621 23.9816L21.9863 20.8058ZM26.3682 25.1877L24.972 26.584L28.1478 29.7598L29.544 28.3635L26.3682 25.1877ZM30.7502 29.5697L29.3539 30.9659L32.5297 34.1417L33.926 32.7455L30.7502 29.5697ZM35.1321 33.9516L33.7359 35.3478L36.9117 38.5237L38.3079 37.1274L35.1321 33.9516ZM39.514 38.3335L38.1178 39.7298L41.2936 42.9056L42.6898 41.5093L39.514 38.3335ZM43.896 42.7155L42.4997 44.1117L45.6755 47.2875L47.0718 45.8913L43.896 42.7155ZM48.2779 47.0974L46.8817 48.4936L50.0575 51.6695L51.4537 50.2732L48.2779 47.0974ZM52.6598 51.4793L51.2636 52.8756L54.4394 56.0514L55.8356 54.6551L52.6598 51.4793ZM57.0418 55.8613L55.6455 57.2575L58.8213 60.4333L60.2176 59.0371L57.0418 55.8613ZM61.4237 60.2432L60.0274 61.6394L63.2033 64.8153L64.5995 63.419L61.4237 60.2432ZM65.8056 64.6251L64.4094 66.0214L67.5852 69.1972L68.9814 67.8009L65.8056 64.6251ZM70.1876 69.0071L68.7913 70.4033L71.9671 73.5791L73.3634 72.1829L70.1876 69.0071ZM74.5695 73.389L73.1732 74.7852L73.1733 74.7853L74.5696 73.3891L74.5695 73.389Z" fill="#BBBBBB"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0690918 43.5257L4.56036 43.5257L4.56036 42.0956L0.0690919 42.0956L0.0690918 43.5257ZM6.26608 42.0956L6.26608 43.5257L10.7574 43.5257V42.0956L6.26608 42.0956ZM12.4631 42.0956V43.5257L16.9543 43.5257V42.0956L12.4631 42.0956ZM18.6601 42.0956V43.5257L23.1513 43.5257V42.0956L18.6601 42.0956ZM24.857 42.0956L24.857 43.5257L29.3483 43.5257V42.0956L24.857 42.0956ZM31.054 42.0956V43.5257L35.5453 43.5257V42.0956L31.054 42.0956ZM37.251 42.0956L37.251 43.5257L41.7423 43.5257V42.0956L37.251 42.0956ZM43.448 42.0956V43.5257L47.9393 43.5257L47.9393 42.0956L43.448 42.0956ZM49.645 42.0956V43.5257L54.1363 43.5257V42.0956L49.645 42.0956ZM55.842 42.0956V43.5257L60.3333 43.5257V42.0956L55.842 42.0956ZM62.039 42.0956V43.5257L66.5302 43.5257V42.0956L62.039 42.0956ZM68.236 42.0956V43.5257L72.7272 43.5257V42.0956L68.236 42.0956ZM74.433 42.0956V43.5257L78.9241 43.5257V42.0956L74.433 42.0956ZM80.6298 42.0956V43.5257L85.1209 43.5257V42.0956L80.6298 42.0956Z" fill="#BBBBBB"></path>
    <path d="M51.1713 28.0907L52.68 26.582L50.7496 25.673C48.2833 24.5116 45.5302 23.8626 42.6335 23.8626C32.1422 23.8626 23.5691 32.3663 23.5691 42.8702C23.5691 53.3741 32.1422 61.8777 42.6335 61.8777C53.1247 61.8777 61.6979 53.3741 61.6979 42.8702C61.6979 39.9966 61.0549 37.2685 59.9048 34.8235L58.9961 32.892L57.4868 34.4014L46.5002 45.388L47.4093 46.2971L46.5002 45.388C45.1658 46.7224 43.8223 47.1891 42.6847 47.1891C41.5271 47.1891 40.4519 46.7071 39.6599 45.9152C38.868 45.1232 38.386 44.048 38.386 42.8904C38.386 41.7527 38.8527 40.4093 40.1871 39.0749L51.1713 28.0907Z" fill="#A4FCBC" stroke="rgba(0,0,0, 0.75)" stroke-width="2"></path>
    <path d="M59.0012 33.0487L58.2344 33.8156L58.7222 34.7841C59.9459 37.2137 60.6356 39.9592 60.6356 42.8701C60.6356 52.8124 52.5758 60.8723 42.6335 60.8723C32.6912 60.8723 24.6314 52.8124 24.6314 42.8701C24.6314 32.9278 32.6912 24.868 42.6335 24.868C45.5444 24.868 48.29 25.5578 50.7195 26.7815L51.6881 27.2693L52.4549 26.5025L54.5917 24.3656L55.995 22.9624L54.2622 21.9952C50.8192 20.0734 46.8519 18.9788 42.6335 18.9788C29.4387 18.9788 18.7422 29.6753 18.7422 42.8701C18.7422 56.065 29.4387 66.7615 42.6335 66.7615C55.8283 66.7615 66.5248 56.065 66.5248 42.8701C66.5248 38.6517 65.4302 34.6844 63.5085 31.2415L62.5412 29.5087L61.138 30.9119L59.0012 33.0487Z" fill="#34F76B" stroke="rgba(0,0,0, 0.75)" stroke-width="2"></path>
    <path d="M66.0857 27.3179L67.1463 26.2572L66.0857 25.1966L60.3073 19.4182L59.2466 18.3575L58.1859 19.4182L39.4061 38.198L39.4061 38.198C38.0756 39.5285 37.4319 41.0721 37.4319 42.5993C37.4319 44.1066 38.0603 45.4742 39.045 46.4589C40.0296 47.4436 41.3973 48.072 42.9045 48.0719C44.4318 48.0719 45.9753 47.4282 47.3058 46.0977L66.0857 27.3179ZM41.9668 42.8701C41.9668 42.5018 42.2654 42.2032 42.6337 42.2032C43.002 42.2032 43.3006 42.5018 43.3006 42.8701C43.3006 43.2385 43.002 43.537 42.6337 43.537C42.2654 43.537 41.9668 43.2385 41.9668 42.8701Z" fill="#34F76B" stroke="rgba(0,0,0, 0.75)" stroke-width="2"></path>
    <path d="M64.1851 24.6496L65.2458 25.7103L66.3064 24.6496L68.1596 22.7964C71.4389 23.4635 74.9843 22.5265 77.5315 19.9793C81.5653 15.9455 81.5653 9.40545 77.5315 5.37166C73.8816 1.72176 68.1826 1.37509 64.1412 4.32844C63.7149 4.64003 63.3076 4.98789 62.9239 5.37166L61.8632 6.43232L62.9239 7.49298L65.8948 10.4639L66.9555 11.5246L68.0161 10.4639C69.2376 9.24254 71.2178 9.24254 72.4392 10.4639C73.6606 11.6853 73.6606 13.6656 72.4392 14.887C71.2881 16.0382 69.4612 16.1045 68.2336 15.0854L68.0257 14.8774L66.9739 13.8257L65.9133 14.8685L61.1888 19.5141L60.1102 20.5747L61.1798 21.6443L64.1851 24.6496Z" fill="#34F76B" stroke="rgba(0,0,0, 0.75)" stroke-width="2"></path>
</svg>
"""

[extra.product.hero]
terminal = "data/terminal/drosse_serve.json"
+++

{% block() %}
*Drosse* is a web server written in javascript that focuses on
mocking APIs in frontend projects.

---

Unlike other similar tools that only serve static
content, Drosse can serve [dynamic content](https://drosse.dev#dynamic-mocks)
and ships with an internal [in-memory database](https://drosse.dev#data-persistence),
allowing developers to modify and persist data.
{% end %}

{% block(title="RESTful in peace") %}
Drosse has been built to be the *go to* web server for frontend development.
It's designed to meet every possible use case developers might encounter.
{% end %}

{% block() %}
### <j-icon name="airballoon" size="32" color="var(--c-secondary)"></j-icon> Lightweight
Drosse is as light as a nodejs process can be.
<small class="block opacity-50">
Install it as an `npm` dev dependency to your project or gloablly (or run it via docker...)
</small>

---

### <j-icon name="paperclip" size="32" color="var(--c-secondary)"></j-icon> Tight to your project
Your mocks come with you and so do your mock-server.
<small class="block opacity-50">
You can launch your backend in the same `npm` command as your frontend app.
</small>
{% end %}

{% block() %}
### <j-icon name="graph" size="32" color="var(--c-secondary)"></j-icon> Cascading config
Route definitions and plugins (throttle, proxy, etc.) are written in a single
JSON file in a tree structure.
<small class="block opacity-50">
Inherit plugin configs from parent route, or overwrite them, it's that simple!
</small>

---

### <j-icon name="extension" size="32" color="var(--c-secondary)"></j-icon> Fully extensible
Need session management, jwt auth or consume a 3<sup>rd</sup> party API at runtime?
<small class="block opacity-50">
Drosse is compatible with express middlewares. Use its built-in ones or write your own(s)!
</small>
{% end %}

{% block() %}
### <j-icon name="database" size="32" color="var(--c-secondary)"></j-icon> Data persistence
Drosse ships with a fully integrated document database accessible through a super
easy-to-use API.
<small class="block opacity-50">
for advanced querying you can always use the built-in mongo-like syntax.
</small>

---

### &nbsp;:nerd_face: &nbsp;Hackers compatible
Extensible REPL CLI, scraping mode, chainable proxying...
<small class="block opacity-50">
Wanna go hard on tweaking? Be our guest!
</small>
{% end %}

{% block(isFull=true, centerH=true) %}
<br><br>
<j-cta url="https://drosse.dev" label="Discover all features" target="_blank"></j-cta>
{% end %}

{% block(title="Use cases / Testimonials") %}
### Full microservice API simulation
> We needed to simulate a full microservice backend in javascript with
mocked/anonymized data, including user login/session, helpdesk/3rd party
system simulation so we built Drosse to manage all that...

<j-author img="/img/author/jaw.jpg" name="Juniors @ Work" url="/about-us#juniors-work"></j-author>


### Testing a chat widget integration
> I had to mock a chat module backend to test its frontend widget tracking
> integration.
>
> Drosse let me do that in less than 5 minutes.

<j-author img="/img/author/tadai.jpg" name="Tadaï" url="/about-us/tadai"></j-author>


### Replace bloated mocking tool
> I mocked missing endpoints on top of an existing complex mock server.
The new endpoints were done in no time with Drosse while the rest of the API
fell back on the other mock server.
>
> Some weeks later, the bloated mocking solution was dropped in favor of
> Drosse... *:shrug:*


<j-author img="/img/author/jorinho.jpg" name="Joriñho" url="/about-us/jorinho"></j-author>

### Connect the dots
> I had this next.js app that I wanted to connect to my local sitecore backend
> API running on HTTPS with a self-signed certificate and could not figure out
> how to have next.js's proxy disable SSL checking.
>
> After 30 minutes of unsuccessful attempts, I `npm install`-ed drosse and got it
working in split seconds...
>
> What else? *:coffee:*

<j-author img="/img/author/tadai.jpg" name="Tadaï" url="/about-us/tadai"></j-author>

---

### Trick CMS form validation
> I had to hook into Sitecore's *:rage:* jQuery form validation from my Vue.js app
> without any access to the Sitecore instance.
>
> I was about to throw myself through the window when I thought maybe Drosse
> could help me solve that issue.
>
> I copied the jQuery scripts into a static folder served by Drosse and added
> a route for the form submission (POST) and voilà!
> 
> Thank you Drosse's authors to make my life easier!

<j-author img="/img/author/tadai.jpg" name="Tadaï" url="/about-us/tadai"></j-author>

### E2E state management
> Drosse helped me bind my SPA to an e2e testing tool to reset state
automatically (through custom user defined commands) before running my test
scenarios and ensure the tests always run against the same backend state.
> 
> The goal here was to use only one set of mock for both local development and
> e2e testing.
>
> Goal achieved, huge gain of time, more time to spend with my daughter
(if I had one...) *:joy:*

<j-author img="/img/author/jorinho.jpg" name="Joriñho" url="/about-us/jorinho"></j-author>

### Data edition with moderation
> I wanted to mock the edition of person address data. But the changes must not
> applied directly ⏤ they are delayed for further control and validation.
>
> With Drosse and its built-in database, it’s possible to handle that.
> And it’s even possible, with the advanced CLI feature to create a script
> that will apply the person modifications by simply calling a custom command
> in the terminal.
>
> Drosse saved my entire life *:heart: :pray:*

<j-author img="/img/author/jorinho.jpg" name="Joriñho" url="/about-us/jorinho"></j-author>
{% end %}

<!--
{% block(title="One UI to rule them all...") %}
One UI to find them,
<br>One UI to bring them all
<br>And on your desktop bind them :eye: :fire:

<img
    width="100%"
    height="auto"
    src="/img/product/drosse-ui-json.png"
    srcset="/img/product/drosse-ui-json@2x.png 2x, /img/product/drosse-ui-json@3x.png 3x"
>
{% end %}
-->
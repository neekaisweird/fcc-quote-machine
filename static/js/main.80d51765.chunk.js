(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),u=n(1),s=n.n(u),i=n(5),l=n(2),m=function(e){var t=e.quote,n=e.newQuote,a=e.loader;return r.a.createElement("div",{id:"quote-box"},a?r.a.createElement("h1",{className:"loader"},"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"text"},t.text),r.a.createElement("h4",{id:"author"},"-",t.author)),r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{id:"tweet-quote",href:a?"https://twitter.com/intent/tweet":'https://twitter.com/intent/tweet?text="'.concat(t.text,'" ').concat(t.author)},"Tweet"),r.a.createElement("button",{id:"new-quote",onClick:function(e){e.preventDefault(),n()}},"New Quote")))},h=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!0),u=Object(l.a)(c,2),h=u[0],p=u[1],f=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://quotes.stormconsultancy.co.uk/random.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Error with network response");case 6:return e.next=8,t.json();case 8:n=e.sent,o({text:n.quote,author:n.author}),p(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(m,{loader:h,quote:n,newQuote:function(){p(!0),f()}}))};n(12);c.a.render(r.a.createElement(h,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.80d51765.chunk.js.map
(this["webpackJsonpsso-login-panel"]=this["webpackJsonpsso-login-panel"]||[]).push([[12],{1345:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(480);e.default=function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(s.a,{title:"\u4f5c\u8005\u535a\u5ba2",source:'\n    \u4f5c\u8005\u535a\u5ba2\u8bf7\u6233\u8fd9\u91cc <a href="https://nlrx-wjc.github.io/Blog/" target="_blank">\u96be\u51c9\u70ed\u8840\u7684\u535a\u5ba2</a>\u3002\n    \u6b22\u8fce\u5927\u5bb6\u4e0e\u6211\u4ea4\u6d41\uff0c\u5982\u679c\u89c9\u5f97\u535a\u5ba2\u4e0d\u9519\uff0c\u4e5f\u9ebb\u70e6\u7ed9\u535a\u5ba2\u8d4f\u4e2a star \u54c8\u3002\n  '}))}},480:function(t,e,n){"use strict";n(487);var a=n(486),i=n(0),s=n.n(i),o=n(42),r=n(43),l=function(){function t(e){Object(o.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(r.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var n=Array.from(t.childNodes),a=0;a<n.length;a++){var i=n[a];if(3===i.nodeType)e=e.concat(i.nodeValue.split(""));else if(1===i.nodeType){var s=[];s=this.convert(i,s),e.push({dom:i,val:s})}}return e}},{key:"print",value:function(t,e,n){setTimeout((function(){t.appendChild(document.createTextNode(e)),n()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var n=t.val.shift();if("string"===typeof n)this.print(t.dom,n,(function(){e.play(t)}));else{var a=n.dom.cloneNode();t.dom.appendChild(a),this.play({parent:t,dom:a,val:n.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),c=function(t){var e=t.title,n=t.source,o=Object(i.useRef)(),r=Object(i.useRef)();return Object(i.useEffect)((function(){new l({source:o.current,output:r.current,delay:30}).start()}),[]),s.a.createElement(a.a,{bordered:!1,className:"card-item",title:e},s.a.createElement("div",{style:{display:"none"},ref:o,dangerouslySetInnerHTML:{__html:n}}),s.a.createElement("div",{ref:r}))};c.defaultProps={title:"",source:""};e.a=c}}]);
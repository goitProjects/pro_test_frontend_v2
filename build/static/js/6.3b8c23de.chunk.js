(this["webpackJsonppro-test-react"]=this["webpackJsonppro-test-react"]||[]).push([[6],{120:function(e,t,s){"use strict";s.d(t,"e",(function(){return r})),s.d(t,"d",(function(){return n})),s.d(t,"c",(function(){return c})),s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return u}));var r=function(e){return e.tests.test},n=function(e){return e.tests.type},a=function(e){return e.tests.answers},c=function(e){return e.tests.loading},u=function(e){return Boolean(r(e).length)}},148:function(e,t,s){e.exports={container:"Diagram_container__SV_hN",chart:"Diagram_chart__2Anff",answers:"Diagram_answers__3WG_L",textAnswers:"Diagram_textAnswers__2TOsu",textAnswersNumber:"Diagram_textAnswersNumber__3AgBh"}},149:function(e,t,s){e.exports={results:"Results_results__3m9nn",resultTitle:"Results_resultTitle__2oSXK",resultName:"Results_resultName__yP_OD",catImages:"Results_catImages__234r9",mainMessage:"Results_mainMessage__2oEoF",secondaryMessage:"Results_secondaryMessage__3Oprw",button:"Results_button__1zoal",buttonText:"Results_buttonText__3iLfh"}},160:function(e,t,s){"use strict";s.r(t);var r=s(46),n=s(47),a=s(49),c=s(48),u=s(0),i=s(24),o=s(146),l=s(148),p=s.n(l),b=s(1),h=function(e){Object(a.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={percent:null},e}return Object(n.a)(s,[{key:"componentDidUpdate",value:function(e,t){var s=this.props.percent.slice(0,-1);s!==t.percent&&this.setState({percent:s})}},{key:"render",value:function(){return"0%"===this.state.percent?Object(b.jsx)("div",{className:p.a.container,children:Object(b.jsxs)("div",{className:p.a.answers,children:[Object(b.jsxs)("p",{className:p.a.textAnswers,children:["Correct answers -"," ",Object(b.jsx)("span",{className:p.a.textAnswersNumber,children:"0"})]}),Object(b.jsxs)("p",{className:p.a.textAnswers,children:["Total questions -"," ",Object(b.jsx)("span",{className:p.a.textAnswersNumber,children:"12"})]})]})}):Object(b.jsxs)("div",{className:p.a.container,children:[Object(b.jsx)(o.a,{className:p.a.chart,chartType:"PieChart",loader:Object(b.jsx)("div",{children:"Loading Chart"}),data:[["Task","Hours per Day"],["".concat(30,"%  Correct "),30],["".concat(95,"%  Incorrect "),95]],options:{pieStartAngle:100,pieSliceText:"none",slices:{0:{color:"#FF6B01"},1:{color:"#D7D7D7"}},chartArea:{left:100,top:10,width:"90%",height:"90%"},backgroundColor:"#f5f6fb"},rootProps:{"data-testid":"1"}}),Object(b.jsxs)("div",{className:p.a.answers,children:[Object(b.jsxs)("p",{className:p.a.textAnswers,children:["Correct answers -"," ",Object(b.jsx)("span",{className:p.a.textAnswersNumber,children:Number(Math.round(this.state.percent/100*12))})]}),Object(b.jsxs)("p",{className:p.a.textAnswers,children:["Total questions -"," ",Object(b.jsx)("span",{className:p.a.textAnswersNumber,children:"12"})]})]})]})}}]),s}(u.Component),j=s.p+"static/media/catResultPage.aa40c4d6.png",d=s(120),m=s(5),f=s.n(m),O=s(11),x=s(29),_=s(28),g=s(30),v=function(e){return e.tests.answers},w=function(e){return e.resultsOfTest.results},N=s(12),y=s(149),A=s.n(y),T=s(50),k=function(e){Object(a.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={results:null},e}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.testAnswers,s=e.typeOfTests,r=e.results,n=e.resultsOperation;t&&12===t.length&&n(t,s),null===r.answers&&0===t.length&&this.props.history.push("/")}},{key:"componentDidUpdate",value:function(e,t){var s=this.props.results;s!==t.results&&this.setState({results:s})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.resetResults,s=e.resetTest;t(),s()}},{key:"render",value:function(){var e=this.props.results;return e.answers?Object(b.jsx)(T.a,{}):Object(b.jsxs)("div",{className:A.a.results,children:[Object(b.jsx)("h2",{className:A.a.resultTitle,children:"Results"}),Object(b.jsx)("p",{className:A.a.resultName,children:"technical"===this.props.typeOfTests?"[ Testing technical_ ]":"[ Testing theory_ ]"}),Object(b.jsx)(h,{percent:e.result}),Object(b.jsx)("img",{className:A.a.catImages,src:j,alt:"cat"}),Object(b.jsx)("p",{className:A.a.mainMessage,children:e.mainMessage}),Object(b.jsx)("p",{className:A.a.secondaryMessage,children:e.secondaryMessage}),Object(b.jsx)("button",{className:A.a.button,type:"button",children:"Try again"})]})}}]),s}(u.Component),D={resultsOperation:function e(t,s){return function(){var r=Object(O.a)(f.a.mark((function r(n){var a,c;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n(Object(x.c)()),"technical"!==s){r.next=14;break}return r.prev=2,r.next=5,Object(_.g)(t);case 5:a=r.sent,n(Object(x.d)(a)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),n(Object(g.a)({error:r.t0,cb:function(){return e(t,s)},errAction:x.b}));case 12:r.next=24;break;case 14:return r.prev=14,r.next=17,Object(_.h)(t);case 17:c=r.sent,n(Object(x.d)(c)),r.next=24;break;case 21:r.prev=21,r.t1=r.catch(14),n(Object(g.a)({error:r.t1,cb:function(){return e(t,s)},errAction:x.b}));case 24:case"end":return r.stop()}}),r,null,[[2,9],[14,21]])})));return function(e){return r.apply(this,arguments)}}()},resetTest:N.f,resetResults:x.a};t.default=Object(i.b)((function(e){return{testAnswers:v(e),results:w(e),typeOfTests:Object(d.d)(e)}}),D)(k)}}]);
//# sourceMappingURL=6.3b8c23de.chunk.js.map
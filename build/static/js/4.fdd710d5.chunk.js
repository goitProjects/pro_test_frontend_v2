(this["webpackJsonppro-test-react"]=this["webpackJsonppro-test-react"]||[]).push([[4],{148:function(e,t,n){e.exports={container:"ModalErrorMessage_container__1-nel"}},149:function(e,t,n){e.exports={container:"AuthForm_container__1xBVX",desc:"AuthForm_desc__3eLKn",googleButton:"AuthForm_googleButton__3jDXc",form:"AuthForm_form__3UO1a",input:"AuthForm_input__1CzQO",buttonContainer:"AuthForm_buttonContainer__3ZyOK",button:"AuthForm_button__3HtB7"}},150:function(e,t,n){e.exports={enter:"modalAnimation_enter__ELlc_",enterActive:"modalAnimation_enterActive__2mqhH",exit:"modalAnimation_exit__2dw_o",exitActive:"modalAnimation_exitActive__2M3EC"}},151:function(e,t,n){e.exports={container:"AuthPage_container__11JmH",box:"AuthPage_box__JzxRT",header:"AuthPage_header__2RPJ3",content:"AuthPage_content__qFNm6",contentAccent:"AuthPage_contentAccent__2WQf-",inner:"AuthPage_inner__ABAeK"}},158:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(6),s=n.n(o),r=n(11),i=n(2),c=n(48),l=n(49),u=n(51),d=n(50),m=n(24),p=n(136),h=n(25),b=n(31),j=n(148),_=n.n(j),g=n(1),x=function(){return Object(g.jsxs)("div",{className:_.a.container,children:[Object(g.jsx)("h3",{children:"WARNING"}),Object(g.jsx)("p",{children:"Please make sure you're using a correct data"})]})},O=n(149),f=n.n(O),w=n(150),A=n.n(w),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",isModal:!1},e.onHandleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(i.a)({},a,o))},e.onHandleSubmit=function(){var t=Object(r.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"login"!==n.nativeEvent.submitter.dataset.action){t.next=7;break}return t.next=5,e.props.onLogin({email:e.state.email,password:e.state.password});case 5:t.next=11;break;case 7:return t.next=9,e.props.onRegister({email:e.state.email,password:e.state.password});case 9:return t.next=11,e.props.onLogin({email:e.state.email,password:e.state.password});case 11:e.props.error&&(e.setState({isModal:!0}),e.timeoutId=setTimeout(e.onToggleModal,3e3));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onHandleSigIn=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.replace("https://protest-backend.goit.global/auth/google");case 1:case"end":return e.stop()}}),e)}))),e.onToggleModal=function(){e.setState({isModal:!1})},e}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId),this.setState({email:"",password:"",isModal:!1})}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.isModal,o=this.props.error;return Object(g.jsxs)("div",{className:f.a.container,children:[Object(g.jsx)(p.a,{in:!!o&&a,classNames:A.a,timeout:500,unmountOnExit:!0,children:Object(g.jsx)(x,{})}),Object(g.jsx)("p",{className:f.a.desc,children:"You can use your Google Account to authorize:"}),Object(g.jsx)("button",{onClick:this.onHandleSigIn,className:f.a.googleButton,children:"Google"}),Object(g.jsx)("p",{className:f.a.desc,children:"Or login to our app using e-mail and password:"}),Object(g.jsxs)("form",{className:f.a.form,onSubmit:this.onHandleSubmit,children:[Object(g.jsx)("input",{type:"email",className:f.a.input,name:"email",value:t,placeholder:"E-mail",required:!0,onChange:this.onHandleChange}),Object(g.jsx)("input",{type:"password",className:f.a.input,name:"password",value:n,placeholder:"Password",required:!0,onChange:this.onHandleChange}),Object(g.jsxs)("div",{className:f.a.buttonContainer,children:[Object(g.jsx)("button",{type:"submit",className:f.a.button,"data-action":"login",children:"Sign in"}),Object(g.jsx)("button",{type:"submit",className:f.a.button,"data-action":"signup",children:"Sign up"})]})]})]})}}]),n}(a.Component),N={onRegister:h.f,onLogin:h.c},y=Object(m.b)((function(e){return{error:Object(b.a)(e)}}),N)(v),k=n(151),C=n.n(k);t.default=function(){return Object(g.jsx)("div",{className:C.a.container,children:Object(g.jsxs)("div",{className:C.a.inner,children:[Object(g.jsxs)("div",{className:C.a.box,children:[Object(g.jsx)("h2",{className:C.a.header,children:"Pro Test"}),Object(g.jsxs)("p",{className:C.a.content,children:[Object(g.jsx)("strong",{children:"["})," We will help you find weak points in knowledge so that you can strengthen it. We will show you what is relevant to know for a ",Object(g.jsx)("span",{className:C.a.contentAccent,children:"QA Engineer"})," and will try to make the learning process more diverse_"," ",Object(g.jsx)("strong",{children:"]"})]})]}),Object(g.jsx)(y,{})]})})}}}]);
//# sourceMappingURL=4.fdd710d5.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{232:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){return e?void 0:"Field is require"},r=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbol"):void 0}}},233:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(243),r=n(0),u=n.n(r),l=n(234),o=n.n(l),s=function(e){var t=e.Element,n=e.meta,r=e.input,l=Object(a.a)(e,["Element","meta","input"]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(t,Object.assign({className:n.error&&n.touched&&o.a.element},r,l))),u.a.createElement("div",null,n.error&&n.touched&&u.a.createElement("span",null,n.error)))}},234:function(e,t,n){e.exports={element:"FormControler_element__3MPTr"}},236:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(21),l=n(2),o=function(e){return{isAuthorized:e.auth.isAuthorized}};t.a=function(e){return Object(u.b)(o)(function(t){return t.isAuthorized?r.a.createElement(e,t):r.a.createElement(l.a,{to:"/login"})})}},256:function(e,t,n){e.exports=n.p+"static/media/presswall.1ad3742e.jpg"},257:function(e,t,n){e.exports={presswall:"Profileinfo_presswall__2OoRz",avatar:"Profileinfo_avatar__3wYR-",link:"Profileinfo_link__3YBJM"}},258:function(e,t,n){e.exports={item:"Post_item__3iSFZ"}},259:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__33DC9"}},318:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(27),u=n(29),l=n(28),o=n(30),s=n(0),i=n.n(s),c=n(21),m=n(53),f=n(256),p=n.n(f),d=n(58),E=n.n(d),v=n(257),b=n.n(v),h=n(59),P=n(10),g=function(e){var t=Object(s.useState)(!1),n=Object(P.a)(t,2),a=n[0],r=n[1],u=Object(s.useState)(e.userStatus),l=Object(P.a)(u,2),o=l[0],c=l[1];Object(s.useEffect)(function(){return c(e.userStatus)},[e.userStatus]);var m=function(t){a?(r(!1),e.updateUserStatus(t.target.value)):r(!0)};return i.a.createElement("div",null,a&&i.a.createElement("input",{onChange:function(e){c(e.target.value)},autoFocus:!0,onBlur:m,value:o}),!a&&i.a.createElement("span",{onDoubleClick:m},o||"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"))},j=function(e){return e.userProfile?i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{className:b.a.presswall,src:p.a,alt:"presswall"})),i.a.createElement("div",null,i.a.createElement("div",null,e.userProfile.fullName),i.a.createElement("img",{className:b.a.avatar,src:e.userProfile.photos.large||E.a,alt:"avatar"}),i.a.createElement(g,{updateUserStatus:e.updateUserStatus,userStatus:e.userStatus}),i.a.createElement("br",null),i.a.createElement("div",null,"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b:",e.userProfile.lookingForAJob?e.userProfile.lookingForAJobDescription:"\u0423\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e"),i.a.createElement("div",{className:b.a.link},i.a.createElement("br",null),"\u0413\u0434\u0435 \u043c\u0435\u043d\u044f \u043d\u0430\u0439\u0442\u0438:",Object.keys(e.userProfile.contacts).map(function(t){return i.a.createElement("div",null,"==> ",i.a.createElement("a",{href:"https://"+e.userProfile.contacts[t]},t))})))):i.a.createElement(h.a,null)},O=n(258),S=n.n(O),_=function(e){return i.a.createElement("div",{className:S.a.item},i.a.createElement("img",{src:"https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",alt:"avatar"}),e.message,i.a.createElement("div",null,"Like: ",e.likeCount))},w=n(259),k=n.n(w),y=n(108),U=n(109),x=n(232),N=n(233),z=Object(x.a)(50),C=Object(U.a)({form:"post"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(y.a,{validate:[x.b,z],component:N.a,name:"newpost",Element:"textarea"})),i.a.createElement("div",null,i.a.createElement("button",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}),A=function(e){var t=e.postDate.map(function(e){return i.a.createElement(_,{message:e.message,likeCount:e.likeCount})});return console.log("MYpost rerender"),i.a.createElement("div",{className:k.a.myPosts},"My posts",i.a.createElement(C,{onSubmit:function(t){console.log(t),e.addNewPost(t.newpost)}}),i.a.createElement("div",null,t))},D=Object(c.b)(function(e){return{postDate:e.profilePage.postDate,newPostText:e.profilePage.newPostText}},{addNewPost:m.a})(A),M=function(e){return i.a.createElement("div",null,i.a.createElement(j,e),i.a.createElement(D,null))},F=n(236),J=n(19),I=n(78),T=function(e){return e.profilePage.userProfile},Y=function(e){return e.profilePage.userStatus},B=function(e){return e.auth.id},R=function(e){return e.auth.isAuthorized},q=function(e){function t(){return Object(a.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.router.params.userId||this.props.authorizedUserId;this.props.setUserProfile(e),this.props.setUserStatus(e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(M,this.props))}}]),t}(i.a.Component);t.default=Object(J.d)(Object(c.b)(function(e){return{userProfile:T(e),userStatus:Y(e),authorizedUserId:B(e),isAuthorized:R(e)}},{setUserProfile:m.c,setUserStatus:m.d,updateUserStatus:m.e}),I.a,F.a)(q)}}]);
//# sourceMappingURL=5.59cbb2e1.chunk.js.map
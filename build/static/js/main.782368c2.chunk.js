(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(22),o=a.n(r),s=a(8),d=a(7),l=a(27),c=a(28),m=a(10),p=a(19),h=a(115),f=a(2);const x=f.a.div`
  background-color: #f7fafc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,g=f.a.form`
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,u=f.a.img`
  align-self: center;
  height: 50px;
  width: auto;
  margin-bottom: 30px;
`,w=f.a.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,v=f.a.label`
  color: #2d3748;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,b=f.a.input`
  color: #2d3748;
  font-size: 16px;
  padding: 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  outline: none;
  background-color: #edf2f7;

  &:focus {
    border-color: #3182ce;
    background-color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,E=f.a.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,k=f.a.div`
  display: flex;
  align-items: center;
`,y=f.a.input`
  margin-right: 12px;
  accent-color: #3182ce;

  &:checked {
    accent-color: #3182ce;
  }
`,D=f.a.label`
  color: #2d3748;
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,M=f.a.button`
  color: #ffffff;
  background-color: #3182ce;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2b6cb0;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,S=f.a.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`,z=f.a.p`
  margin-top: 10px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 478px) {
    font-size: 12px;
    margin-top: 8px;
  }
`;var C=Object(d.g)(class extends i.Component{constructor(){super(...arguments),this.state={username:"",password:"",confirmPassword:"",gender:"male",location:"",email:"",showPassword:!1,errorMsg:"",isError:!1},this.setUsername=(e=>{this.setState({username:e.target.value})}),this.setUseremail=(e=>{this.setState({email:e.target.value})}),this.setPassword=(e=>{this.setState({password:e.target.value})}),this.setConfirmPassword=(e=>{this.setState({confirmPassword:e.target.value})}),this.setGender=(e=>{this.setState({gender:e.target.value})}),this.setLocation=(e=>{this.setState({location:e.target.value})}),this.onSubmitSuccess=(()=>{const{history:e}=this.props;e.replace("/login")}),this.submitForm=(async e=>{e.preventDefault();const{username:t,email:a,password:i,confirmPassword:n,gender:r,location:o}=this.state;if(i!==n)return void this.setState({errorMsg:"Passwords do not match",isError:!0});if(!t||!a||!i||!o)return void this.setState({errorMsg:"Please fill all required fields",isError:!0});const s={username:t,email:a,password:i,confirmPassword:n,gender:r,location:o};await h.a.post("https://nxtwatch-backend.onrender.com/api/register",s).then(e=>{e.data.error?this.setState({errorMsg:e.data.error,isError:!0}):(console.log("Response from server:",e.data),this.onSubmitSuccess())}).catch(e=>{const t=e.response.data||"Registration failed. Please try again.";this.setState({errorMsg:t,isError:!0})})})}render(){const{errorMsg:e,isError:t}=this.state;return n.a.createElement(x,null,n.a.createElement(g,{as:"form",onSubmit:this.submitForm,autoComplete:"off"},n.a.createElement(u,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",alt:"website logo"}),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"username"},"USERNAME"),n.a.createElement(b,{type:"text",id:"username",placeholder:"Enter username",onChange:this.setUsername})),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"email"},"EMAIL"),n.a.createElement(b,{type:"text",id:"email",placeholder:"Enter email",onChange:this.setUseremail})),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"password"},"PASSWORD"),n.a.createElement(b,{type:"password",id:"password",placeholder:"Enter your password",onChange:this.setPassword})),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"confirmPassword"},"CONFIRM PASSWORD"),n.a.createElement(b,{type:"password",id:"confirmPassword",placeholder:"Confirm Password",onChange:this.setConfirmPassword})),n.a.createElement(E,null,n.a.createElement(v,null,"GENDER"),n.a.createElement(k,null,n.a.createElement(y,{type:"radio",id:"genderMale",value:"male",name:"gender",checked:"male"===this.state.gender,onChange:this.setGender}),n.a.createElement(D,{htmlFor:"genderMale"},"Male"),n.a.createElement(y,{type:"radio",id:"genderFemale",value:"female",name:"gender",checked:"female"===this.state.gender,onChange:this.setGender}),n.a.createElement(D,{htmlFor:"genderFemale"},"Female"))),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"location"},"LOCATION"),n.a.createElement(b,{type:"text",id:"location",placeholder:"Enter Location",onChange:this.setLocation})),n.a.createElement(M,{type:"submit"},"Register"),n.a.createElement(z,null,"Already have an account?",n.a.createElement(s.b,{to:"/login"},"Login")),t&&n.a.createElement(S,null,"*",e)))}}),L=a(15),$=a.n(L);var j=n.a.createContext({isDarkMode:!1,changeThemeMode:()=>{},navMenuStyle:()=>{},menuList:[],savedList:[],onLike:()=>{},onDisLike:()=>{},onSave:()=>{},getVideosListApi:()=>{},homeVideoList:[],trendingVideoList:[],gamesVideoList:[],onRetryFailure:()=>{},onChangeActiveId:()=>{},token:"",setToken:()=>{}});const A=f.a.div`
  background-color: #f0f4f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,N=f.a.form`
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 40px;
    max-width: 500px;
  }
`,I=f.a.img`
  align-self: center;
  height: 50px;
  width: auto;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    height: 60px;
  }
`,R=f.a.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,T=f.a.label`
  color: #2d3748;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,P=f.a.input`
  color: #2d3748;
  font-size: 16px;
  padding: 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  background-color: #edf2f7;
  outline: none;
  transition: background-color 0.3s, border-color 0.3s;

  &:focus {
    border-color: #3182ce;
    background-color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,F=(f.a.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,f.a.input`
  margin-right: 10px;
  accent-color: #3182ce;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`,f.a.label`
  color: #2d3748;
  font-size: 14px;
  padding-left: 5px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,f.a.button`
  color: #ffffff;
  background-color: #3182ce;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #2b6cb0;
    transform: translateY(-2px);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`),O=f.a.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`,U=f.a.p`
  text-align: right;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;var V=class extends i.Component{constructor(){super(...arguments),this.state={email:"",password:"",showPassword:!1,errorMsg:"",isError:!1},this.setUserEmail=(e=>{this.setState({email:e.target.value})}),this.setPassword=(e=>{this.setState({password:e.target.value})}),this.setPasswordStatus=(()=>{this.setState(e=>({showPassword:!e.showPassword}))}),this.onSubmitSuccess=(e=>{const t=new Date(Date.now()+36e5);$.a.set("jwt_token",e,{expires:t});const{history:a}=this.props;a.replace("/")}),this.submitForm=(async e=>{e.preventDefault();const{email:t,password:a}=this.state,i={email:t,password:a};try{const e=await h.a.post("https://nxtwatch-backend.onrender.com/api/login",i);this.onSubmitSuccess(e.data.jwt_token)}catch(n){console.log(n),this.setState({isError:!0,errorMsg:n.response?n.response.data:"Something went wrong"})}})}render(){const{showPassword:e,errorMsg:t,isError:a}=this.state;return n.a.createElement(j.Consumer,null,i=>{const{isDarkMode:r}=i,o=r?n.a.createElement(I,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png",alt:"website logo"}):n.a.createElement(I,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",alt:"website logo"});return n.a.createElement(A,{isDarkMode:!0},n.a.createElement(N,{isDarkMode:r,onSubmit:this.submitForm,autoComplete:"on"},o,n.a.createElement(R,null,n.a.createElement(T,{htmlFor:"email",isDarkMode:!0},"EMAIL"),n.a.createElement(P,{isDarkMode:!0,type:"text",id:"email",placeholder:"Enter your email",onChange:this.setUserEmail})),n.a.createElement(R,{isDarkMode:!0},n.a.createElement(T,{isDarkMode:!0,htmlFor:"password"},"PASSWORD"),n.a.createElement(P,{type:e?"text":"password",id:"password",placeholder:"Enter your password",onChange:this.setPassword,isDarkMode:!0})),n.a.createElement(F,{isDarkMode:!0},"Login"),n.a.createElement(U,null,"Don't have account?",n.a.createElement(s.b,{to:"/register"},"Register")),a&&n.a.createElement(O,{className:"error-Msg"},"*",t)))})}},G=a(29),_=a(44);a(69);const B=f.a.li`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  width: 60vw;
  flex-direction: row;
  align-items: center;
  background-color: ${e=>e.isActive?"#f1f5f9":null};
  background-color: ${e=>e.isDarkMode&&e.isActive?" #181818":null};
  @media screen and (min-width: 576px) {
    width: 35vw;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 18vw;
    background-color: ${e=>e.isActive?"#f1f5f9":null};
    background-color: ${e=>e.isDarkMode&&e.isActive?" #181818":null};
  }
`,W=f.a.p`
  padding-left: 20px;
  color: ${e=>{const{isActive:t,isDarkMode:a}=e;return t?a?"#ffffff":"# #181818":a?"#94a3b8":"#1e293b"}};
  font-weight: ${e=>{const{isActive:t}=e;return t?600:400}};
  font-size: 15px;
`,Y=f.a.span`
  font-size: 20px;
  color: ${e=>{const{isDarkMode:t,isActive:a}=e;return a?"#ff0000":t?"#94a3b8":"#231f20"}};
`;var q=Object(d.g)(function(e){return n.a.createElement(j.Consumer,null,t=>{const{linkDetails:a,menuLogo:i}=e,{id:r,text:o,linkText:d}=a,{location:l}=e,c=l.pathname===d,{isDarkMode:m,navMenuStyle:p}=t;return n.a.createElement(s.b,{to:d,className:"link"},n.a.createElement("button",{className:"link-button",onClick:()=>{p(r)},type:"button"},n.a.createElement(B,{key:r,isActive:c,isDarkMode:m},n.a.createElement(Y,{isDarkMode:m,isActive:c},i),n.a.createElement(W,{isDarkMode:m,isActive:c},o))))})});const H=f.a.div`
  width: 100vw;
  height: 10vh;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: ${e=>e.isDarkMode?"#212121":"#ffffff"};
  visibility: visible;
`,J=f.a.img`
  width: 13vw;
  height: 5vh;

  @media screen and (max-width: 576px) {
    width: 18vw;
    height: 5vh;
  }
`,K=f.a.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;
  @media screen and (min-width: 300px) {
    width: 50vw;
  }
  @media screen and (min-width: 478px) {
    width: 40vw;
  }
  @media screen and (min-width: 600px) {
    width: 30vw;
  }
  @media screen and (min-width: 768px) {
    width: 20vw;
  }
  @media screen and (min-width: 992px) {
    width: 18vw;
  }
`,Q=f.a.button`
  border: none;
  background-color: transparent;
`,X=f.a.button`
  border: none;
  background-color: transparent;
  color: ${e=>e.isDarkMode?"#ffffff":"#0f0f0f"};
  font-size: 30px;
`,Z=f.a.img`
  height: 30px;
  width: 30px;
`,ee=f.a.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`,te=f.a.button`
  border: ${e=>`2px solid ${e.isDarkMode?"#ffffff":e.border}`};
  background-color: ${e=>e.bgColor?e.bgColor:"transparent"};
  color: ${e=>e.isDarkMode?"#ffffff":e.color};
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  margin-left: 10px;
  display: none;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 8px;
    display: flex;
  }
`,ae=f.a.button`
  border: ${e=>`2px solid ${e.isDarkMode?"#ffffff":e.border}`};
  background-color: ${e=>e.bgColor?e.bgColor:"transparent"};
  color: ${e=>e.isDarkMode?"#ffffff":e.color};
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 8px;
    display: flex;
  }
`,ie=f.a.button`
  border: none;
  background-color: transparent;
  color: ${e=>e.isDarkMode?"#ffffff":"#0f0f0f"};
  border-radius: 5px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,ne=f.a.div`
  width: 90vw;
  height: 30vh;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${e=>e.isDarkMode?"#212121":"#f4f4f4"};

  @media screen and (min-width: 576px) {
    width: 60vw;
    height: 30vh;
  }

  @media screen and (min-width: 768px) {
    width: 40vw;
    height: 30vh;
  }
`,re=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#231f20"};
  font-size: 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`,oe=f.a.button`
  background-color: transparent;
  border: none;
`,se=f.a.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.isDarkMode?"#212121":"#ffffff"};
  margin: 0px;
  margin-top: 7px;
  width: 60vw;
  padding: 0px;
  @media screen and (min-width: 576px) {
    width: 35vw;
  }
  @media screen and (min-width: 768px) {
  }
`,de=f.a.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 20px;
  outline: none;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
`,le=f.a.div`
  background-color: ${e=>e.isDarkMode?"#2c2c2c":"#f7f8fc"};
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
  height: auto;
  width: 60vw;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  margin: 0 auto;

  @media (min-width: 576px) {
    width: 40vw;
  }

  @media (min-width: 768px) {
    width: 40vw;
  }

  @media (min-width: 992px) {
    width: 30vw;
  }
`,ce=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid
    ${e=>e.isDarkMode?"#3d3d3d":"#e0e0e0"};

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,me=f.a.p`
  font-size: 14px;
  color: ${e=>e.isDarkMode?"#c7c7c7":"#666"};
  margin: 0;
  padding-left: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;f.a.div`
  font-size: 40px;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
  margin-bottom: 10px;
  align-self: center;

  @media (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 15px;
  }
`,f.a.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
  align-self: flex-end;
  transition: color 0.3s ease;

  &:hover {
    color: ${e=>e.isDarkMode?"#e0e0e0":"#333"};
    transform: scale(1.1);
  }
`;a(70);var pe=Object(d.g)(function(e){const{history:t}=e,{changeThemeMode:a,isDarkMode:r,menuList:o}=Object(i.useContext)(j),[d,c]=Object(i.useState)(null),p=$.a.get("jwt_token");Object(i.useEffect)(()=>{const e=async()=>{try{const i="https://nxtwatch-backend.onrender.com/api/my-profile",n={headers:{Authorization:`Bearer ${p}`}},r=(await h.a.get(i,n)).data;c(r)}catch(a){var t;"ECONNRESET"===a.code?(console.log("Connection reset. Retrying..."),e()):console.error("Error fetching profile data:",(null===(t=a.response)||void 0===t?void 0:t.data)||a.message)}};p?e():t.replace("/login")},[p,t]);const f=()=>{$.a.remove("jwt_token"),t.replace("/login")},x=r?n.a.createElement(l.b,{className:"theme-light-icons"}):n.a.createElement(m.e,{className:"theme-dark-icons"}),g=r?n.a.createElement(m.d,{className:"hamberger-icon theme-light-icons"}):n.a.createElement(m.d,{className:"hamberger-icon theme-dark-icons"}),u=()=>{t.replace("/")},w=r?n.a.createElement(s.b,{to:"/",className:"link"},n.a.createElement(oe,{onClick:u},n.a.createElement(J,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png",alt:"website logo"}))):n.a.createElement(s.b,{to:"/",className:"link"},n.a.createElement(oe,{onClick:u},n.a.createElement(J,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",alt:"website logo"})));return n.a.createElement(H,{isDarkMode:r},w,n.a.createElement(K,null,n.a.createElement(Q,{onClick:()=>{a()}},x),n.a.createElement(G.a,{trigger:n.a.createElement(X,null,n.a.createElement(Z,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png",alt:"profile"})),position:"bottom right"},n.a.createElement(le,{isDarkMode:r},n.a.createElement(_.a,{className:"profile-icon"}),n.a.createElement(ce,{isDarkMode:r},n.a.createElement(me,{isDarkMode:r},(null===d||void 0===d?void 0:d.username)||"User")),n.a.createElement(ce,{isDarkMode:r},n.a.createElement(me,{isDarkMode:r},(null===d||void 0===d?void 0:d.email)||"email")),n.a.createElement(ce,{isDarkMode:r},n.a.createElement(me,{isDarkMode:r},(null===d||void 0===d?void 0:d.location)||"location")))),n.a.createElement(G.a,{trigger:n.a.createElement(ee,{isDarkMode:r},g),className:"popup-content",position:"bottom right"},e=>n.a.createElement(se,{isDarkMode:r},n.a.createElement(de,{"data-testid":"close",onClick:()=>e(),isDarkMode:r},n.a.createElement(m.c,null)),o.map(e=>n.a.createElement(q,{key:e.id,linkDetails:e,menuLogo:n.a.createElement(e.logo,null)})))),n.a.createElement(G.a,{modal:!0,trigger:n.a.createElement("div",null,n.a.createElement(te,{isDarkMode:r,color:"#3b82f6",border:"#3b82f6",className:"desktop-logout-button"},"Logout"),n.a.createElement(ie,{isDarkMode:r,className:"mobile-logout-button"},n.a.createElement(m.a,null))),className:"popup-content",position:"bottom-left"},e=>n.a.createElement(ne,{isDarkMode:r},n.a.createElement(re,{isDarkMode:r},"Are you sure you want to logout?"),n.a.createElement("div",{className:"popup-button-container"},n.a.createElement(ae,{color:"#7e858e",border:"#7e858e",onClick:()=>e()},"Cancel"),n.a.createElement(ae,{bgColor:"#3b82f6",color:"#ffffff",border:"#3b82f6",onClick:f},"Confirm"))))))});a(71);const he=f.a.div`
  width: 18vw;
  height: 90vh;
  padding: 10px;
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.isDarkMode?"#212121":"#ffffff"};
  }
`,fe=(f.a.div`
  height: 90vh;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 80vw;
    padding: 20px;
  }
`,f.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),xe=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`,ge=(f.a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,f.a.p`
  color: ${e=>e.isDarkMode?"#94a3b8":"#231f20"};
  font-size: 12px;
`),ue=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#1e293b"};
  font-size: 14px;
`;var we=function(){return n.a.createElement(j.Consumer,null,e=>{const{isDarkMode:t,menuList:a}=e;return n.a.createElement(he,{isDarkMode:t},n.a.createElement(fe,null,a.map(e=>n.a.createElement(q,{key:e.id,linkDetails:e,menuLogo:n.a.createElement(e.logo,null)}))),n.a.createElement(xe,null,n.a.createElement(ue,{isDarkMode:t},"CONTACT US"),n.a.createElement("div",{className:"sociel-media-img-container"},n.a.createElement("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png ",alt:"facebook logo",className:"media-logo"}),n.a.createElement("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png ",alt:"twitter logo",className:"media-logo"}),n.a.createElement("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png ",alt:"linked in logo",className:"media-logo"})),n.a.createElement(ge,{isDarkMode:t},"Enjoy! Now to see your channels and recommendations!")))})},ve=a(13),be=a.n(ve),Ee=a(116);const ke=f.a.li`
  list-style-type: none;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  margin: 8px;
  width: 90vw;
  height: 40vh;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px darkgray;
  }

  @media screen and (min-width: 576px) {
    width: 40vw;
    height: 60vh;
    margin-left: 30px;
  }
  @media screen and (min-width: 768px) {
    width: 35vw;
    height: 60vh;
    margin: 10px;
    margin-left: 30px;
  }
  @media screen and (min-width: 992px) {
    width: 24vw;
    height: 55vh;
    margin-left: 25px;
  }
`,ye=f.a.img`
  width: 100%;
  height: 60%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;

`,De=f.a.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  margin: 0px;
  height: 40%;
`,Me=f.a.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  height: 100%;
`,Se=f.a.img`
  height: 30px;
  width: 30px;
  margin-right: 8px;
  margin-top: 8px;
  border-radius: 50%;
`,ze=f.a.h1`
  color: ${e=>e.isDarkMode?"#ffffff":"#1e293b"};
  font-size: 13px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 478px) {
    font-size: 14px;
  }
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`,Ce=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#475569"};
  font-size: 13px;
  font-weight: 500;
  margin: 0px;
  padding-top: 3px;
  color: #94a3b8;
  @media screen and (min-width: 478px) {
    font-size: 14px;
  }
`,Le=f.a.div`
  display: flex;
  align-items: center;
  padding: 0;
  color: #94a3b8;
`,$e=f.a.p`
  color: #94a3b8;
  font-size: 13px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`,je=f.a.p`
  color: #94a3b8;
  font-size: 14px;
  padding-bottom: 8px;
  margin: 7px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`;f.a.p``;a(90);var Ae=function(e){return n.a.createElement(j.Consumer,null,t=>{const{isDarkMode:a}=t,{videoItem:i}=e,{name:r,profileImageUrl:o,id:d,publishedAt:l,thumbnailUrl:c,title:m,viewCount:p}=i,h=new Date(l),f=Object(Ee.a)(h);return n.a.createElement(s.b,{to:`/videos/${d}`,className:"link"},n.a.createElement(ke,{isDarkMode:a},n.a.createElement(ye,{src:c,alt:"video thumbnail"}),n.a.createElement(De,null,n.a.createElement("div",null,n.a.createElement(Se,{src:o,alt:"channel logo"})),n.a.createElement(Me,null,n.a.createElement(ze,{isDarkMode:a},m),n.a.createElement(Ce,{isDarkMode:a},r),n.a.createElement(Le,null,n.a.createElement($e,null,function(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:e}(p)," views"),n.a.createElement(je,{className:"dot"},"."),n.a.createElement($e,null,f))))))})};const Ne=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  padding: 30px;
  margin-top: 30px;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,Ie=f.a.img`
  height: 40vh;
  width: 60vw;
  @media screen and (min-width: 576px) {
    height: 40vh;
    width: 50vw;
  }
  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 35vw;
  }
  @media screen and (min-width: 992px) {
    height: 40vh;
    width: 30vw;
  }
`,Re=f.a.h1`
  color: ${e=>e.isDarkMode?"#ffffff":"#181818"};
  font-size: 18px;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`,Te=f.a.p`
  color: #475569;
  text-align: center;
`,Pe=f.a.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 18px;
  border: none;
  padding: 8px;
  border-radius: 7px;
`;var Fe=function(e){return n.a.createElement(j.Consumer,null,t=>{const{isDarkMode:a}=t,{onApiRetry:i}=e,r=a?"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png";return n.a.createElement(Ne,{isDarkMode:a},n.a.createElement(Ie,{src:r,alt:"failure view"}),n.a.createElement(Re,{isDarkMode:a},"Oops! Something Went Wrong"),n.a.createElement(Te,{isDarkMode:a},"We are having some trouble to complete your request. Please try again"),n.a.createElement(Pe,{type:"button",onClick:()=>{i()}},"Retry"))})};const Oe=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  padding: 30px;
  height: 70vh;
`,Ue=f.a.img`
  height: 40vh;
  width: 60vw;

  @media screen and (min-width: 576px) {
    height: 40vh;
    width: 50vw;
  }
  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 35vw;
  }
  @media screen and (min-width: 992px) {
    height: 40vh;
    width: 30vw;
  }
`,Ve=f.a.h1`
  color: ${e=>e.isDarkMode?"#ffffff":"#181818"};
  font-size: 20px;

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`,Ge=f.a.p`
  color: #475569;
  text-align: center;
`,_e=f.a.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 20px;
  border: none;
  padding: 8px;
  border-radius: 7px;
`;var Be=function(e){return n.a.createElement(j.Consumer,null,t=>{const{isDarkMode:a}=t,{onRetryEmptyResults:i}=e;return n.a.createElement(Oe,{isDarkMode:a},n.a.createElement(Ue,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png ",alt:"no videos"}),n.a.createElement(Ve,{isDarkMode:a},"No Search results found"),n.a.createElement(Ge,{isDarkMode:a},"Try different key words or remove search filter"),n.a.createElement(_e,{type:"type",onClick:i},"Retry"))})};a(91);const We=f.a.div`
  width: 100vw;
  height: 90vh;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  display: flex;
  flex-direction: column;
  margin-left: auto;
  overflow: scroll;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,Ye=f.a.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,qe=(f.a.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    margin-top: 10vh;
  }
`,f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,f.a.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 95vw;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 85vw;
    padding: 10px;
  }
`),He=(f.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8vw;
`,f.a.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  align-self: center;
  margin-bottom: 7px;

  @media screen and (min-width: 768px) {
    background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    background-size: cover;
    width: 85vw;
    height: 30vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-top: 0px;
  }
`),Je=f.a.p`
  color: #1e293b;
`,Ke=f.a.button`
  color: #1e293b;
  border: 2px solid #1e293b;
  background-color: transparent;
  padding: 8px;
  border-radius: 6px;
`,Qe=f.a.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
`,Xe=f.a.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 85vw;
    padding: 20px;
    background-color: transparent;
  }
`,Ze=f.a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`,et=f.a.input`
  color: #94a3b8;
  border: 2px solid #94a3b8;
  background-color: transparent;
  width: 40vw;
  font-size: 20px;
  outline: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  @media screen and (max-width: 576px) {
    width: 60vw;
  }
`,tt=f.a.button`
  color: #94a3b8;
  border: 2px solid #94a3b8;
  background-color: transparent;
  width: 10vw;
  font-size: 19px;
  border-left: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`,at={initial:"INITIAL",success:"SUCCESS",failure:"FAILURE",progress:"IN_PROGRESS"};var it=class extends i.Component{constructor(){super(...arguments),this.state={searchInput:"",banner:!0,search:"",videoList:[],apiStatus:at.initial},this.getVideosListApi=(async()=>{this.setState({apiStatus:at.progress});try{const t=await h.a.get("https://nxtwatch-backend.onrender.com/api/home");200===t.status?this.setState({videoList:t.data,apiStatus:at.success}):(t.status,this.setState({apiStatus:at.failure}))}catch(e){console.error("Error fetching videos:",e),this.setState({apiStatus:at.failure})}}),this.hideBanner=(()=>{this.setState({banner:!1})}),this.setSearchInput=(e=>{this.setState({searchInput:e.target.value})}),this.onSearchFilter=(()=>{const{searchInput:e}=this.state,t=e.toLowerCase();this.setState(e=>({videoList:e.videoList.filter(e=>e.title.toLowerCase().includes(t))}))}),this.onRetryEmptyResults=(()=>{this.setState({searchInput:""},this.getVideosListApi)}),this.bannerContainer=(()=>{const{banner:e}=this.state;return e?n.a.createElement(He,{"data-testid":"banner"},n.a.createElement("div",null,n.a.createElement("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",alt:"nxt watch logo",className:"website-logo"}),n.a.createElement(Je,null,"Buy Nxt Watch Premium prepaid plans with UPI"),n.a.createElement(Ke,{type:"button"},"GET IT NOW")),n.a.createElement(Qe,{onClick:this.hideBanner,"data-testid":"close"},n.a.createElement(m.c,null))):null}),this.getVideoCardList=(()=>{const{videoList:e}=this.state;return n.a.createElement(qe,null,e.map(e=>n.a.createElement(Ae,{key:e.id,videoItem:e})))}),this.onApiRetry=(()=>{this.getVideosListApi()})}componentDidMount(){this.getVideosListApi()}componentDidUpdate(e){this.state}render(){const{searchInput:e}=this.state;return n.a.createElement(j.Consumer,null,t=>{const{isDarkMode:a}=t,i=()=>n.a.createElement(Fe,{onApiRetry:this.onApiRetry}),r=()=>{const{videoList:t}=this.state;return n.a.createElement(n.a.Fragment,null,this.bannerContainer(),n.a.createElement(Xe,null,n.a.createElement(Ze,{"data-testid":"searchButton"},n.a.createElement(et,{type:"search",onChange:this.setSearchInput,"data-testid":"searchButton",value:e}),n.a.createElement(tt,{onClick:this.onSearchFilter,"data-testid":"searchButton"},n.a.createElement(m.f,null))),0===t.length?n.a.createElement(Be,{onRetryEmptyResults:this.onRetryEmptyResults}):this.getVideoCardList()))};return n.a.createElement(We,{isDarkMode:a},n.a.createElement(Ye,null,(()=>{const{apiStatus:e}=this.state;switch(e){case at.success:return r();case at.failure:return i();case at.progress:return n.a.createElement("div",{className:"loader-container","data-testid":"loader"},n.a.createElement(be.a,{type:"ThreeDots",color:a?"#ffffff":"#0b69ff",height:"50",width:"50"}));default:return null}})()))})}};const nt=f.a.li`
  width: 90vw;
  max-height: 70vh;
  list-style-type: none;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px darkgray;
  }

  @media screen and (min-width: 576px) {
    width: 40vw;
    margin-left: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 80vw;
    height: 30vh;
    display: flex;
    margin-left: 0px;
  }
  @media screen and (min-width: 992px) {
    width: 70vw;
    display: flex;
    align-items: center;
  }
`,rt=f.a.img`
  width: 90vw;
  height: 30vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media screen and (min-width: 576px) {
    width: 40vw;
    height: 35vh;
  }
  @media screen and (min-width: 768px) {
    border-top-left-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
    max-width: 30vw;
    height: 30vh;
  }
  @media screen and (min-width: 992px) {
    max-width: 25vw;
  }
`,ot=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
`,st=f.a.h1`
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: ${e=>e.isDarkMode?"#ffffff":"#1e293b"};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`,dt=(f.a.br`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,f.a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
`),lt=f.a.p`
  color: #94a3b8;
  font-size: 15px;
`,ct=f.a.p`
  color: #94a3b8;
  font-size: 15px;
`,mt=f.a.p`
  color: #94a3b8;
  font-size: 15px;
`,pt=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#475569"};
  font-size: 14px;
  padding-bottom: 9px;
  margin: 7px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`;var ht=function(e){return n.a.createElement(j.Consumer,null,t=>{const{isDarkMode:a}=t,{trendingCardItem:i}=e,{name:r,id:o,publishedAt:d,thumbnailUrl:l,title:c,viewCount:m}=i;console.log(i);const p=Object(Ee.a)(new Date(d));return n.a.createElement(s.b,{to:`/videos/${o}`,className:"link"},n.a.createElement(nt,null,n.a.createElement(rt,{src:l,alt:c}),n.a.createElement(ot,null,n.a.createElement(st,{isDarkMode:a},c),n.a.createElement(lt,null,r),n.a.createElement(dt,null,n.a.createElement(ct,null,function(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:e}(m)," views"),n.a.createElement(pt,{className:"dot"},"."),n.a.createElement(mt,null,p," ago")))))})};const ft=f.a.div`
  width: 100vw;
  height: 90vh;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: scroll;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,xt=(f.a.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    margin-top: 10vh;
    width: 85vw;
  }
`,f.a.div`
  height: 8vh;
  width: 100vw;
  background-color: ${e=>e.isDarkMode?"#313131":"#f1f1f1"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 576px) {
    height: 10vh;
    width: 100vw;
  }
  @media screen and (min-width: 768px) {
    height: 15vh;
    width: 85vw;
  }
`),gt=(f.a.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,f.a.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.isDarkMode?"#231f20":"#cbd5e1"};
  @media screen and (min-width: 576px) {
    height: 40px;
    width: 40px;
  }
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`),ut=f.a.p`
  font-size: 23px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`,wt=f.a.h1`
  font-size: 25px;
  padding-left: 10px;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding-left: 10px;
    color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
  }
`,vt=f.a.ul`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  margin-left: 0;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 85vw;
  }
`,bt={initial:"INITIAL",success:"SUCCESS",failure:"FAILURE",progress:"IN_PROGRESS"};var Et=class extends i.Component{constructor(){super(...arguments),this.state={trendingList:[],apiStatus:bt.initial},this.getTrendingList=(async()=>{this.setState({apiStatus:bt.progress});try{const t=await h.a.get("https://nxtwatch-backend.onrender.com/api/trending");200===t.status?this.setState({trendingList:t.data,apiStatus:bt.success}):this.setState({apiStatus:bt.failure})}catch(e){console.error("Error fetching videos:",e),this.setState({apiStatus:bt.failure})}}),this.onApiRetry=(()=>{this.getTrendingList()})}componentDidMount(){this.getTrendingList()}render(){return n.a.createElement(j.Consumer,null,e=>{let{isDarkMode:t}=e;const a=()=>n.a.createElement(Fe,{onApiRetry:this.onApiRetry}),i=()=>{const{trendingList:e}=this.state;return n.a.createElement(n.a.Fragment,null,e.map(e=>n.a.createElement(ht,{key:e.id,trendingCardItem:e})))};return n.a.createElement(ft,{isDarkMode:t,"data-testid":"trending"},n.a.createElement(xt,{isDarkMode:t},n.a.createElement(gt,{isDarkMode:t},n.a.createElement(ut,{isDarkMode:t},n.a.createElement(c.a,null))),n.a.createElement(wt,{isDarkMode:t},"Trending")),n.a.createElement(vt,null,(()=>{const{apiStatus:e}=this.state;switch(e){case bt.success:return i();case bt.failure:return a();case bt.progress:return n.a.createElement("div",{className:"loader-container"},n.a.createElement(be.a,{type:"ThreeDots",color:t?"#ffffff":"#0b69ff",height:"50",width:"50"}));default:return null}})()))})}};const kt=f.a.li`
  list-style-type: none;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  margin: 10px;
  padding:0;
  width: 90vw;
  height: 40vh;
  border-radius: 5px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px darkgray;
  }

  @media screen and (min-width: 576px) {
    width: 35vw;
    height: 60vh;
    margin-left: 30px;
  }
  @media screen and (min-width: 768px) {
    width: 35vw;
    height: 60vh;
    margin: 10px;
    margin-left: 30px;
  }
  @media screen and (min-width: 992px) {
    width: 24vw;
    height: 55vh;
    margin-left: 25px;
  }
`,yt=f.a.img`
  height: 30vh;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
  height: 70%;
`,Dt=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  height: 30%;
  object-fit: fit;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
`,Mt=f.a.h1`
  color: ${e=>e.isDarkMode?"#ffffff":"#1e293b"};
  font-size: 13px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`,St=f.a.p`
  color: #94a3b8;
  font-size: 13px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`;var zt=function(e){return n.a.createElement(j.Consumer,null,t=>{const{isDarkMode:a}=t,{trendingCardItem:i}=e,{id:r,thumbnailUrl:o,title:d,name:l}=i;return n.a.createElement(s.b,{to:`/videos/${r}`,className:"link"},n.a.createElement(kt,{isDarkMode:a},n.a.createElement(yt,{src:o,alt:"video thumbnail"}),n.a.createElement(Dt,{isDarkMode:a},n.a.createElement(Mt,{isDarkMode:a},d),n.a.createElement(St,null,l))))})};const Ct=f.a.div`
  width: 100vw;
  height: 90vh;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  display: flex;
  flex-direction: column;
  margin-left: auto;
  overflow: scroll;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,Lt=(f.a.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    margin-top: 10vh;
    width: 85vw;
  }
`,f.a.div`
  height: 8vh;
  width: 100vw;
  background-color: ${e=>e.isDarkMode?"#313131":"#f1f1f1"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 576px) {
    height: 10vh;
    width: 100vw;
  }
  @media screen and (min-width: 768px) {
    height: 15vh;
    width: 85vw;
  }
`),$t=f.a.div`
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-top: 0px;
  }
`,jt=f.a.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.isDarkMode?"#231f20":"#cbd5e1"};
  @media screen and (min-width: 576px) {
    height: 40px;
    width: 40px;
  }
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`,At=f.a.p`
  font-size: 23px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`,Nt=f.a.h1`
  font-size: 25px;
  padding-left: 10px;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding-left: 10px;
    color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
  }
`,It=f.a.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 95vw;
  margin: auto;
  padding: 0;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 85vw;
    padding: 10px;
  }
`,Rt={initial:"INITIAL",success:"SUCCESS",failure:"FAILURE",progress:"IN_PROGRESS"};var Tt=class extends i.Component{constructor(){super(...arguments),this.state={trendingList:[],apiStatus:Rt.initial},this.getTrendingList=(async()=>{this.setState({apiStatus:Rt.progress});try{const t=await h.a.get("https://nxtwatch-backend.onrender.com/api/gaming");200===t.status?this.setState({trendingList:t.data,apiStatus:Rt.success}):this.setState({apiStatus:Rt.failure})}catch(e){console.error("Error fetching videos:",e),this.setState({apiStatus:Rt.failure})}}),this.onApiRetry=(()=>{this.getTrendingList()})}componentDidMount(){this.getTrendingList()}render(){return n.a.createElement(j.Consumer,null,e=>{const{isDarkMode:t}=e,a=()=>n.a.createElement(Fe,{onApiRetry:this.onApiRetry}),i=()=>{const{trendingList:e}=this.state;return n.a.createElement(n.a.Fragment,null,e.map(e=>n.a.createElement(zt,{key:e.id,trendingCardItem:e})))};return n.a.createElement(Ct,{isDarkMode:t},n.a.createElement($t,{isDarkMode:t},n.a.createElement(Lt,{isDarkMode:t},n.a.createElement(jt,{isDarkMode:t},n.a.createElement(At,{isDarkMode:t},n.a.createElement(m.b,null))),n.a.createElement(Nt,{isDarkMode:t},"Gaming")),n.a.createElement(It,null,(()=>{const{apiStatus:e}=this.state;switch(e){case Rt.success:return i();case Rt.failure:return a();case Rt.progress:return n.a.createElement("div",{className:"loader-container"},n.a.createElement(be.a,{type:"ThreeDots",color:t?"#ffffff":"#0b69ff",height:"50",width:"50"}));default:return null}})())))})}};const Pt=f.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding: 30px;
  height: 90vh;
`,Ft=f.a.img`
  height: 40vh;
  width: 60vw;

  @media screen and (min-width: 576px) {
    height: 40vh;
    width: 50vw;
  }

  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 35vw;
  }

  @media screen and (min-width: 992px) {
    height: 40vh;
    width: 30vw;
  }
`,Ot=f.a.h1`
  color: ${e=>e.isDarkMode?"#ffffff":"#181818"};
  font-size: 20px;

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`,Ut=f.a.p`
  color: #475569;
  text-align: center;
`;var Vt=function(){return n.a.createElement(j.Consumer,null,e=>{const{isDarkMode:t}=e;return n.a.createElement(Pt,{isDarkMode:t},n.a.createElement(Ft,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png",alt:"no saved videos"}),n.a.createElement(Ot,{isDarkMode:t},"No saved videos found"),n.a.createElement(Ut,{isDarkMode:t},"You can save your videos while watching them"))})};const Gt=f.a.div`
  width: 100vw;
  height: 90vh;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  display: flex;
  flex-direction: column;
  margin-left: auto;
  overflow: scroll;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,_t=(f.a.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    margin-top: 10vh;
    width: 85vw;
  }
`,f.a.div`
  height: 8vh;
  width: 100vw;
  background-color: ${e=>e.isDarkMode?"#313131":"#f1f1f1"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 576px) {
    height: 10vh;
    width: 100vw;
  }
  @media screen and (min-width: 768px) {
    height: 15vh;
    width: 85vw;
  }
`),Bt=f.a.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-top: 0px;
    display: block;
  }
`,Wt=f.a.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.isDarkMode?"#231f20":"#cbd5e1"};
  @media screen and (min-width: 576px) {
    height: 40px;
    width: 40px;
  }
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`,Yt=f.a.p`
  font-size: 23px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`,qt=f.a.h1`
  font-size: 25px;
  padding-left: 10px;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
`,Ht=f.a.ul`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: auto;
  margin: auto;
  flex-wrap: wrap;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 85vw;
  }
`;var Jt=class extends i.Component{render(){return n.a.createElement(j.Consumer,null,e=>{const{isDarkMode:t,savedList:a}=e;return n.a.createElement(Gt,{isDarkMode:t,"data-testid":"savedVideos"},n.a.createElement(Bt,{isDarkMode:t},0===a.length?n.a.createElement(Vt,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(_t,{isDarkMode:t},n.a.createElement(Wt,{isDarkMode:t},n.a.createElement(Yt,{isDarkMode:t},n.a.createElement(p.a,null))),n.a.createElement(qt,{isDarkMode:t},"Saved Videos")),n.a.createElement(Ht,null,a.map(e=>n.a.createElement(ht,{key:e.id,trendingCardItem:e}))))))})}},Kt=a(47),Qt=a.n(Kt),Xt=a(46),Zt=a.n(Xt),ea=a(34);const ta=f.a.div`
  width: 100vw;
  height: 90vh;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  display: flex;
  flex-direction: column;
  margin-left: auto;
  overflow: scroll;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,aa=(f.a.div`
  display: flex;
  flex-direction: row;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    align-self: flex-end;
    width: 85vw;
  }
`,f.a.aside`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`),ia=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,na=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#181818"};
  font-size: 15px;

  @media screen and (min-width: 576px) {
    font-size: 17px;
  }

  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`,ra=f.a.p`
  color: #1e293b;
  font-size: 15px;

  @media screen and (min-width: 576px) {
    color: #1e293b;
    font-size: 17px;
  }

  @media screen and (min-width: 992px) {
    color: #1e293b;
    font-size: 20px;
  }
`,oa=f.a.div`
  display: flex;
  align-items: center;
`,sa=f.a.p`
  color: ${e=>e.like?"#2563eb":"#64748b"};
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`,da=f.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,la=f.a.div`
  display: flex;
  align-items: center;
`,ca=f.a.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.like?"#2563eb":"#64748b"};
`,ma=f.a.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.disLike?"#2563eb":"#64748b"};
`,pa=f.a.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.isSaved?"#2563eb":"#64748b"};
`,ha=f.a.p`
  color: ${e=>e.like?"#2563eb":"#64748b"};
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`,fa=f.a.p`
  color: ${e=>e.disLike?"#2563eb":"#64748b"};
  font-size: 13px;
  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`,xa=f.a.p`
  color: ${e=>e.isSaved?"#2563eb":"#64748b"};
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`,ga=f.a.hr`
  width: 90vw;
  color: #475569;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`,ua=f.a.div`
  display: flex;
`,wa=f.a.img`
  height: 30px;
  width: 30px;
  margin-top: 10px;
  border-radius: 50%;
`,va=f.a.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`,ba=f.a.p`
  font-size: 14px;
  color: ${e=>e.isDarkMode?"#ffffff":"#94a3b8"};
`,Ea=f.a.p`
  font-size: 13px;
  color: ${e=>e.isDarkMode?"#ffffff":"#94a3b8"};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ka=(f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#475569"};
  font-size: 14px;
  padding-bottom: 9px;
  margin: 7px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`,f.a.p`
  font-size: 14px;
  color: ${e=>e.isDarkMode?"#ffffff":"#94a3b8"};
  font-weight: 500;
`);a(93);const ya={initial:"INITIAL",success:"SUCCESS",failure:"FAILURE",progress:"IN_PROGRESS"};var Da=class extends i.Component{constructor(){super(...arguments),this.state={videoItemDetails:"",apiStatus:ya.initial},this.getVideosDetails=(async()=>{const{match:e}=this.props,{params:t}=e,{id:a}=t;this.setState({apiStatus:ya.success});const i=`https://nxtwatch-backend.onrender.com/api/video-details/${a}`;try{const e=await h.a.get(i);console.log(e),200===e.status?this.setState({videoItemDetails:e.data,apiStatus:ya.success}):(e.status,this.setState({apiStatus:ya.failure}))}catch(n){this.setState({apiStatus:ya.failure})}}),this.onSaveChange=(e=>{const{videoItemDetails:t}=this.state,a=!t.isSaved;this.setState({videoItemDetails:{...t,isSaved:a}},()=>{e(t)})})}componentDidMount(){this.getVideosDetails()}render(){return n.a.createElement(j.Consumer,null,e=>{const{videoItemDetails:t}=this.state,{name:a,description:i,id:r,publishedAt:o,title:s,videoUrl:d,viewCount:l,isSaved:c,isLike:m,isDisLike:h,thumbnailUrl:f}=t,{isDarkMode:x,onSave:g}=e,u=()=>{const e=!t.isLike,a=!e&&t.isDisLike;this.setState({videoItemDetails:{...t,isLike:e,isDisLike:a}})},w=()=>{const e=!t.isDisLike,a=!e&&t.isLike;this.setState({videoItemDetails:{...t,isLike:a,isDisLike:e}})},v=()=>{this.onSaveChange(g)},b=()=>n.a.createElement(Fe,{onApiRetry:this.onApiRetry});return n.a.createElement(ta,{isDarkMode:x},n.a.createElement(aa,null,(()=>{const{apiStatus:e}=this.state;switch(e){case ya.success:return(()=>{const e=Zt()(o).format("DD MMMM, YYYY");return n.a.createElement(ia,{key:r},n.a.createElement("div",{className:"player-wrapper"},n.a.createElement(Qt.a,{className:"react-player",url:d,width:"100%",height:"100%"})),n.a.createElement(ra,{isDarkMode:x},n.a.createElement(na,{isDarkMode:x},s),n.a.createElement(da,null,n.a.createElement(oa,null,n.a.createElement(sa,{isDarkMode:x},function(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:e}(l)," views")),n.a.createElement(la,null,n.a.createElement(ca,{type:"button",onClick:u,like:m},n.a.createElement(ea.b,null),n.a.createElement(ha,{like:m},"Like")),n.a.createElement(ma,{type:"button",onClick:w,disLike:h},n.a.createElement(ea.a,null),n.a.createElement(fa,{disLike:h},"Dislike")),n.a.createElement(pa,{type:"button",onClick:v,isSaved:c},n.a.createElement(p.a,null),n.a.createElement(xa,{isSaved:c},c?"Saved":"Save")))),n.a.createElement(ga,null),n.a.createElement(ua,null,n.a.createElement(wa,{src:f,alt:"channel logo"}),n.a.createElement(va,null,n.a.createElement(ba,{isDarkMode:x},a),n.a.createElement(ka,{isDarkMode:x},e),n.a.createElement(Ea,{isDarkMode:x},i)))))})();case ya.failure:return b();case ya.progress:return n.a.createElement("div",{className:"loader-container","data-testid":"loader"},n.a.createElement(be.a,{type:"ThreeDots",color:x?"#ffffff":"#0b69ff",height:"50",width:"50","data-testid":"loader"}));default:return null}})()))})}};const Ma=f.a.div`
  width: 100vw;
  background-color: ${e=>e.isDarkMode?"#0f0f0f":"#f9f9f9"};
`,Sa=f.a.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,za=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  padding: 30px;
`,Ca=(f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f.a.img`
  height: 50vh;
  width: 60vw;
  @media screen and (min-width: 576px) {
    height: 40vh;
    width: 50vw;
  }
  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 35vw;
  }
  @media screen and (min-width: 992px) {
    height: 40vh;
    width: 30vw;
  }
`),La=f.a.h1`
  color: ${e=>e.isDarkMode?"#ffffff":"#181818"};
  font-size: 20px;

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`,$a=f.a.p`
  color: #475569;
  text-align: center;
`;var ja=function(){return n.a.createElement(j.Consumer,null,e=>{const{isDarkMode:t}=e,a=t?"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png";return n.a.createElement(Ma,{isDarkMode:t},n.a.createElement(Sa,null,n.a.createElement(we,null),n.a.createElement(za,{isDarkMode:t},n.a.createElement(Ca,{src:a,alt:"not found"}),n.a.createElement(La,{isDarkMode:t},"Page Not Found"),n.a.createElement($a,{isDarkMode:t},"we are sorry, the page you requested could not be found."))))})};var Aa=function(e){return void 0!==$.a.get("jwt_token")?n.a.createElement(d.b,e):n.a.createElement(d.a,{to:"/Login"})};a(99);const Na=[{id:"HOME",logo:l.a,text:"Home",linkText:"/"},{id:"TRENDING",logo:c.a,text:"Trending",linkText:"/trending"},{id:"GAMES",logo:m.b,text:"Gaming",linkText:"/gaming"},{id:"SAVEDVIDEOS",logo:p.a,text:"Saved Videos",linkText:"/saved-videos"}];var Ia=Object(d.g)(class extends i.Component{constructor(){super(...arguments),this.state={isDarkMode:!1,menuList:[...Na],savedList:[],token:""},this.changeThemeMode=(()=>{this.setState(e=>({isDarkMode:!e.isDarkMode}))}),this.navMenuStyle=(e=>{this.setState(t=>({menuList:t.menuList.map(t=>t.id===e?{...t,isActive:!t.isActive}:{...t,isActive:!1})}))}),this.onSave=(e=>{this.setState(t=>t.savedList.some(t=>t.id===e.id)?null:{savedList:[...t.savedList,e]})}),this.setToken=(e=>{this.setState({token:e})})}render(){const{isDarkMode:e,menuList:t,savedList:a,token:i}=this.state,{location:r}=this.props,o="/login"!==r.pathname&&"/register"!==r.pathname;return n.a.createElement(j.Provider,{value:{isDarkMode:e,changeThemeMode:this.changeThemeMode,menuList:t,navMenuStyle:this.navMenuStyle,onSave:this.onSave,savedList:a,token:i,setToken:this.setToken}},o&&n.a.createElement(pe,null),o&&n.a.createElement(we,null),n.a.createElement(d.d,null,n.a.createElement(d.b,{exact:!0,path:"/register",component:C}),n.a.createElement(d.b,{exact:!0,path:"/login",component:V}),n.a.createElement(Aa,{exact:!0,path:"/",component:it}),n.a.createElement(Aa,{exact:!0,path:"/trending",component:Et}),n.a.createElement(Aa,{exact:!0,path:"/gaming",component:Tt}),n.a.createElement(Aa,{exact:!0,path:"/saved-videos",component:Jt}),n.a.createElement(Aa,{exact:!0,path:"/videos/:id",component:Da}),n.a.createElement(d.b,{component:ja})))}});o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,null,n.a.createElement(Ia,null))),document.getElementById("root"))},50:function(e,t,a){e.exports=a(100)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},99:function(e,t,a){}},[[50,15,16]]]);
//# sourceMappingURL=main.782368c2.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),r=i(23),o=i.n(r),s=i(8),d=i(7),l=i(28),c=i(29),m=i(10),p=i(19),h=i(115),f=i(2);const x=f.a.div`
  background-color: #f7fafc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,u=f.a.form`
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
`,g=f.a.img`
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
`;var C=Object(d.g)(class extends a.Component{constructor(){super(...arguments),this.state={username:"",password:"",confirmPassword:"",gender:"male",location:"",email:"",showPassword:!1,errorMsg:"",isError:!1},this.setUsername=(e=>{this.setState({username:e.target.value})}),this.setUseremail=(e=>{this.setState({email:e.target.value})}),this.setPassword=(e=>{this.setState({password:e.target.value})}),this.setConfirmPassword=(e=>{this.setState({confirmPassword:e.target.value})}),this.setGender=(e=>{this.setState({gender:e.target.value})}),this.setLocation=(e=>{this.setState({location:e.target.value})}),this.onSubmitSuccess=(()=>{const{history:e}=this.props;e.replace("/login")}),this.submitForm=(async e=>{e.preventDefault();const{username:t,email:i,password:a,confirmPassword:n,gender:r,location:o}=this.state;if(a!==n)return void this.setState({errorMsg:"Passwords do not match",isError:!0});if(!t||!i||!a||!o)return void this.setState({errorMsg:"Please fill all required fields",isError:!0});const s={username:t,email:i,password:a,confirmPassword:n,gender:r,location:o};await h.a.post("https://nxtwatch-backend.onrender.com/register",s).then(e=>{e.data.error?this.setState({errorMsg:e.data.error,isError:!0}):(console.log("Response from server:",e.data),this.onSubmitSuccess())}).catch(e=>{const t=e.response.data||"Registration failed. Please try again.";this.setState({errorMsg:t,isError:!0})})})}render(){const{errorMsg:e,isError:t}=this.state;return n.a.createElement(x,null,n.a.createElement(u,{as:"form",onSubmit:this.submitForm,autoComplete:"off"},n.a.createElement(g,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",alt:"website logo"}),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"username"},"USERNAME"),n.a.createElement(b,{type:"text",id:"username",placeholder:"Enter username",onChange:this.setUsername})),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"email"},"EMAIL"),n.a.createElement(b,{type:"text",id:"email",placeholder:"Enter email",onChange:this.setUseremail})),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"password"},"PASSWORD"),n.a.createElement(b,{type:"password",id:"password",placeholder:"Enter your password",onChange:this.setPassword})),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"confirmPassword"},"CONFIRM PASSWORD"),n.a.createElement(b,{type:"password",id:"confirmPassword",placeholder:"Confirm Password",onChange:this.setConfirmPassword})),n.a.createElement(E,null,n.a.createElement(v,null,"GENDER"),n.a.createElement(k,null,n.a.createElement(y,{type:"radio",id:"genderMale",value:"male",name:"gender",checked:"male"===this.state.gender,onChange:this.setGender}),n.a.createElement(D,{htmlFor:"genderMale"},"Male"),n.a.createElement(y,{type:"radio",id:"genderFemale",value:"female",name:"gender",checked:"female"===this.state.gender,onChange:this.setGender}),n.a.createElement(D,{htmlFor:"genderFemale"},"Female"))),n.a.createElement(w,null,n.a.createElement(v,{htmlFor:"location"},"LOCATION"),n.a.createElement(b,{type:"text",id:"location",placeholder:"Enter Location",onChange:this.setLocation})),n.a.createElement(M,{type:"submit"},"Register"),n.a.createElement(z,null,"Already have an account?",n.a.createElement(s.b,{to:"/login"},"Login")),t&&n.a.createElement(S,null,"*",e)))}}),L=i(15),A=i.n(L);var I=n.a.createContext({isDarkMode:!1,changeThemeMode:()=>{},navMenuStyle:()=>{},menuList:[],savedList:[],onLike:()=>{},onDisLike:()=>{},onSave:()=>{},getVideosListApi:()=>{},homeVideoList:[],trendingVideoList:[],gamesVideoList:[],onRetryFailure:()=>{},onChangeActiveId:()=>{},token:"",setToken:()=>{}});const j=f.a.div`
  background-color: #f0f4f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,R=f.a.form`
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
`,$=f.a.img`
  align-self: center;
  height: 50px;
  width: auto;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    height: 60px;
  }
`,N=f.a.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,P=f.a.label`
  color: #2d3748;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,U=f.a.input`
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
`,T=(f.a.div`
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
`),F=f.a.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`,O=f.a.p`
  text-align: right;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;var B=class extends a.Component{constructor(){super(...arguments),this.state={email:"",password:"",showPassword:!1,errorMsg:"",isError:!1},this.setUserEmail=(e=>{this.setState({email:e.target.value})}),this.setPassword=(e=>{this.setState({password:e.target.value})}),this.setPasswordStatus=(()=>{this.setState(e=>({showPassword:!e.showPassword}))}),this.onSubmitSuccess=(e=>{const t=new Date(Date.now()+36e5);A.a.set("jwt_token",e,{expires:t});const{history:i}=this.props;i.replace("/")}),this.submitForm=(async e=>{e.preventDefault();const{email:t,password:i}=this.state,a={email:t,password:i};try{const e=await h.a.post("https://nxtwatch-backend.onrender.com/login",a);this.onSubmitSuccess(e.data.jwt_token)}catch(n){console.log(n),this.setState({isError:!0,errorMsg:n.response?n.response.data:"Something went wrong"})}})}render(){const{showPassword:e,errorMsg:t,isError:i}=this.state;return n.a.createElement(I.Consumer,null,a=>{const{isDarkMode:r}=a,o=r?n.a.createElement($,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png",alt:"website logo"}):n.a.createElement($,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",alt:"website logo"});return n.a.createElement(j,{isDarkMode:!0},n.a.createElement(R,{isDarkMode:r,onSubmit:this.submitForm,autoComplete:"on"},o,n.a.createElement(N,null,n.a.createElement(P,{htmlFor:"email",isDarkMode:!0},"EMAIL"),n.a.createElement(U,{isDarkMode:!0,type:"text",id:"email",placeholder:"Enter your email",onChange:this.setUserEmail})),n.a.createElement(N,{isDarkMode:!0},n.a.createElement(P,{isDarkMode:!0,htmlFor:"password"},"PASSWORD"),n.a.createElement(U,{type:e?"text":"password",id:"password",placeholder:"Enter your password",onChange:this.setPassword,isDarkMode:!0})),n.a.createElement(T,{isDarkMode:!0},"Login"),n.a.createElement(O,null,"Don't have account?",n.a.createElement(s.b,{to:"/register"},"Register")),i&&n.a.createElement(F,{className:"error-Msg"},"*",t)))})}},G=i(21),V=i(44);i(69);const Y=f.a.li`
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
`,Q=f.a.p`
  padding-left: 20px;
  color: ${e=>{const{isActive:t,isDarkMode:i}=e;return t?i?"#ffffff":"# #181818":i?"#94a3b8":"#1e293b"}};
  font-weight: ${e=>{const{isActive:t}=e;return t?600:400}};
  font-size: 15px;
`,W=f.a.span`
  font-size: 20px;
  color: ${e=>{const{isDarkMode:t,isActive:i}=e;return i?"#ff0000":t?"#94a3b8":"#231f20"}};
`;var _=Object(d.g)(function(e){return n.a.createElement(I.Consumer,null,t=>{const{linkDetails:i,menuLogo:a}=e,{id:r,text:o,linkText:d}=i,{location:l}=e,c=l.pathname===d,{isDarkMode:m,navMenuStyle:p}=t;return n.a.createElement(s.b,{to:d,className:"link"},n.a.createElement("button",{className:"link-button",onClick:()=>{p(r)},type:"button"},n.a.createElement(Y,{key:r,isActive:c,isDarkMode:m},n.a.createElement(W,{isDarkMode:m,isActive:c},a),n.a.createElement(Q,{isDarkMode:m,isActive:c},o))))})});const X=f.a.div`
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
`,q=f.a.img`
  width: 13vw;
  height: 5vh;

  @media screen and (max-width: 576px) {
    width: 18vw;
    height: 5vh;
  }
`,Z=f.a.div`
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
`,H=f.a.button`
  border: none;
  background-color: transparent;
`,J=f.a.button`
  border: none;
  background-color: transparent;
  color: ${e=>e.isDarkMode?"#ffffff":"#0f0f0f"};
  font-size: 30px;
`,K=f.a.img`
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
`,ie=f.a.button`
  border: none;
  background-color: transparent;
  color: ${e=>e.isDarkMode?"#ffffff":"#0f0f0f"};
  border-radius: 5px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,ae=f.a.div`
  width: 90vw;
  height: 30vh;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${e=>e.isDarkMode?"#212121":"#f4f4f4"};

  @media screen and (min-width: 768px) {
    width: 40vw;
    height: 30vh;
  }
`,ne=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#231f20"};
  font-size: 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`,re=f.a.button`
  background-color: transparent;
  border: none;
`,oe=f.a.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.isDarkMode?"#212121":"#ffffff"};
  margin: 0px;
  width: 60vw;
  padding: 0px;
  @media screen and (min-width: 576px) {
    width: 35vw;
  }
  @media screen and (min-width: 768px) {
  }
`,se=f.a.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 20px;
  outline: none;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
`,de=f.a.div`
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
`,le=f.a.div`
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
`,ce=f.a.p`
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
`;i(70);var me=Object(d.g)(function(e){const{history:t}=e,{changeThemeMode:i,isDarkMode:r,menuList:o}=Object(a.useContext)(I),[d,c]=Object(a.useState)(null),p=A.a.get("jwt_token");Object(a.useEffect)(()=>{const e=async()=>{const t={headers:{authorization:p}};try{const a=(await h.a.get("https://nxtwatch-backend.onrender.com/myprofile",t)).data;c(a)}catch(i){"ECONNRESET"===i.code?(console.log("Connection reset. Retrying..."),e()):console.error("Error fetching profile data:",i)}};p?e():t.replace("/login")},[p,t]);const f=()=>{A.a.remove("jwt_token"),t.replace("/login")},x=r?n.a.createElement(l.b,{className:"theme-light-icons"}):n.a.createElement(m.e,{className:"theme-dark-icons"}),u=r?n.a.createElement(m.d,{className:"hamberger-icon theme-light-icons"}):n.a.createElement(m.d,{className:"hamberger-icon theme-dark-icons"}),g=()=>{t.replace("/")},w=r?n.a.createElement(s.b,{to:"/",className:"link"},n.a.createElement(re,{onClick:g},n.a.createElement(q,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png",alt:"website logo"}))):n.a.createElement(s.b,{to:"/",className:"link"},n.a.createElement(re,{onClick:g},n.a.createElement(q,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",alt:"website logo"})));return n.a.createElement(X,{isDarkMode:r},w,n.a.createElement(Z,null,n.a.createElement(H,{onClick:()=>{i()}},x),n.a.createElement(G.a,{trigger:n.a.createElement(J,null,n.a.createElement(K,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png",alt:"profile"})),position:"bottom right"},n.a.createElement(de,{isDarkMode:r},n.a.createElement(V.a,{className:"profile-icon"}),n.a.createElement(le,{isDarkMode:r},n.a.createElement(ce,{isDarkMode:r},(null===d||void 0===d?void 0:d.username)||"User")),n.a.createElement(le,{isDarkMode:r},n.a.createElement(ce,{isDarkMode:r},(null===d||void 0===d?void 0:d.email)||"email")),n.a.createElement(le,{isDarkMode:r},n.a.createElement(ce,{isDarkMode:r},(null===d||void 0===d?void 0:d.location)||"location")))),n.a.createElement(G.a,{trigger:n.a.createElement(ee,{isDarkMode:r},u),className:"popup-content",position:"bottom right"},e=>n.a.createElement(oe,{isDarkMode:r},n.a.createElement(se,{"data-testid":"close",onClick:()=>e(),isDarkMode:r},n.a.createElement(m.c,null)),o.map(e=>n.a.createElement(_,{key:e.id,linkDetails:e,menuLogo:n.a.createElement(e.logo,null)})))),n.a.createElement(G.a,{modal:!0,trigger:n.a.createElement(te,{isDarkMode:r,color:"#3b82f6",border:"#3b82f6"},"Logout"),className:"popup-content",position:"bottom-left"},e=>n.a.createElement(ae,{isDarkMode:r},n.a.createElement(ne,{isDarkMode:r},"Are you sure you want to logout?"),n.a.createElement("div",{className:"popup-button-container"},n.a.createElement(te,{color:"#7e858e",border:"#7e858e",onClick:()=>e()},"Cancel"),n.a.createElement(te,{bgColor:"#3b82f6",color:"#ffffff",border:"#3b82f6",onClick:f},"Confirm")))),n.a.createElement(G.a,{modal:!0,trigger:n.a.createElement(ie,{isDarkMode:r,className:"mobile-logout-button"},n.a.createElement(m.a,null)),className:"popup-content",position:"bottom-left"},e=>n.a.createElement(ae,{isDarkMode:r},n.a.createElement(ne,{isDarkMode:r},"Are you sure you want to logout?"),n.a.createElement("div",{className:"popup-button-container"},n.a.createElement(te,{color:"#7e858e",border:"#7e858e",onClick:()=>e()},"Cancel"),n.a.createElement(te,{bgColor:"#3b82f6",color:"#ffffff",border:"#3b82f6",onClick:f},"Confirm"))))))});i(71);const pe=f.a.div`
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
`,he=(f.a.div`
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
`),fe=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`,xe=(f.a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,f.a.p`
  color: ${e=>e.isDarkMode?"#94a3b8":"#231f20"};
  font-size: 12px;
`),ue=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#1e293b"};
  font-size: 14px;
`;var ge=function(){return n.a.createElement(I.Consumer,null,e=>{const{isDarkMode:t,menuList:i}=e;return n.a.createElement(pe,{isDarkMode:t},n.a.createElement(he,null,i.map(e=>n.a.createElement(_,{key:e.id,linkDetails:e,menuLogo:n.a.createElement(e.logo,null)}))),n.a.createElement(fe,null,n.a.createElement(ue,{isDarkMode:t},"CONTACT US"),n.a.createElement("div",{className:"sociel-media-img-container"},n.a.createElement("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png ",alt:"facebook logo",className:"media-logo"}),n.a.createElement("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png ",alt:"twitter logo",className:"media-logo"}),n.a.createElement("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png ",alt:"linked in logo",className:"media-logo"})),n.a.createElement(xe,{isDarkMode:t},"Enjoy! Now to see your channels and recommendations!")))})},we=i(13),ve=i.n(we),be=i(116);const Ee=f.a.li`
  list-style-type: none;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  margin: 8px;
  width: 90vw;
  height: 50vh;
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
`,ke=f.a.img`
  width: 100%;
  height: 30vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;

  @media screen and (min-width: 576px) {
    height: 25vh;
  }
  @media screen and (min-width: 768px) {
    height: 28vh;
  }
  @media screen and (min-width: 992px) {
    height: 25vh;
  }
`,ye=f.a.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px;
`,De=f.a.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`,Me=f.a.img`
  height: 30px;
  width: 30px;
  margin-right: 8px;
  margin-top: 8px;
  border-radius: 50%;
`,Se=f.a.h1`
  color: ${e=>e.isDarkMode?"#ffffff":"#1e293b"};
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`,ze=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#475569"};
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
  padding-top: 3px;
  color: #94a3b8;
`,Ce=f.a.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  color: #94a3b8;
`,Le=f.a.p`
  color: #94a3b8;
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`,Ae=f.a.p`
  color: #94a3b8;
  font-size: 14px;
  padding-bottom: 9px;
  margin: 7px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`;i(90);var Ie=function(e){return n.a.createElement(I.Consumer,null,t=>{const{isDarkMode:i}=t,{videoItem:a}=e,{name:r,profileImageUrl:o,id:d,publishedAt:l,thumbnailUrl:c,title:m,viewCount:p}=a,h=new Date(l),f=Object(be.a)(h);return n.a.createElement(s.b,{to:`/videos/${d}`,className:"link"},n.a.createElement(Ee,{isDarkMode:i},n.a.createElement(ke,{src:c,alt:"video thumbnail"}),n.a.createElement(ye,null,n.a.createElement("div",null,n.a.createElement(Me,{src:o,alt:"channel logo"})),n.a.createElement(De,null,n.a.createElement(Se,{isDarkMode:i},m),n.a.createElement(ze,{isDarkMode:i},r),n.a.createElement(Ce,null,n.a.createElement(Le,null,function(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:e}(p)," views"),n.a.createElement(Ae,{className:"dot"},"."),n.a.createElement(Le,null,f))))))})};const je=f.a.div`
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
`,Re=f.a.img`
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
`,$e=f.a.h1`
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
`,Ne=f.a.p`
  color: #475569;
  text-align: center;
`,Pe=f.a.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 18px;
  border: none;
  padding: 8px;
  border-radius: 7px;
`;var Ue=function(e){return n.a.createElement(I.Consumer,null,t=>{const{isDarkMode:i}=t,{onApiRetry:a}=e,r=i?"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png";return n.a.createElement(je,{isDarkMode:i},n.a.createElement(Re,{src:r,alt:"failure view"}),n.a.createElement($e,{isDarkMode:i},"Oops! Something Went Wrong"),n.a.createElement(Ne,{isDarkMode:i},"We are having some trouble to complete your request. Please try again"),n.a.createElement(Pe,{type:"button",onClick:()=>{a()}},"Retry"))})};const Te=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  padding: 30px;
  height: 70vh;
`,Fe=f.a.img`
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
`,Oe=f.a.h1`
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
`,Be=f.a.p`
  color: #475569;
  text-align: center;
`,Ge=f.a.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 20px;
  border: none;
  padding: 8px;
  border-radius: 7px;
`;var Ve=function(e){return n.a.createElement(I.Consumer,null,t=>{const{isDarkMode:i}=t,{onRetryEmptyResults:a}=e;return n.a.createElement(Te,{isDarkMode:i},n.a.createElement(Fe,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png ",alt:"no videos"}),n.a.createElement(Oe,{isDarkMode:i},"No Search results found"),n.a.createElement(Be,{isDarkMode:i},"Try different key words or remove search filter"),n.a.createElement(Ge,{type:"type",onClick:a},"Retry"))})};i(91);const Ye=f.a.div`
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
`,Qe=f.a.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,We=(f.a.div`
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
`),_e=(f.a.div`
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
`),Xe=f.a.p`
  color: #1e293b;
`,qe=f.a.button`
  color: #1e293b;
  border: 2px solid #1e293b;
  background-color: transparent;
  padding: 8px;
  border-radius: 6px;
`,Ze=f.a.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
`,He=f.a.div`
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
`,Je=f.a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`,Ke=f.a.input`
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
`,et=f.a.button`
  color: #94a3b8;
  border: 2px solid #94a3b8;
  background-color: transparent;
  width: 10vw;
  font-size: 19px;
  border-left: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`,tt={initial:"INITIAL",success:"SUCCESS",failure:"FAILURE",progress:"IN_PROGRESS"};var it=class extends a.Component{constructor(){super(...arguments),this.state={searchInput:"",banner:!0,search:"",videoList:[],apiStatus:tt.initial},this.getVideosListApi=(async()=>{this.setState({apiStatus:tt.progress});try{const t=await h.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=[jasYgnLgaQg,x8gQ86lBpWM,URb1QqTtazA,k1wGcg7F-gM,6jYfu8-Ih4E,0H51GDlLZQY,LoyofAcxDW0,ZPM7zgAiNjg,BfaooWYVw3s,jg_BsP83fXk,AZ_y53YbF3A,LrBEJpSmDpg,Dm7ARZosyns,AY1Ya7RQW3s,eDf9mwznMG8,rA7347CEemw,tStfqP3gc54,jxOQ6M8t2wQ,pRwaPSkgviI,IxRjC7yPUD4,_pidO9FhgSU,MWsybhicTDE,yISAvosdByY,S7UTTvsCmP4,i569nmZBSWQ,MopPP0Z-6os,LgzspKb2YEk,keg_2PlBnbY,lF3AbdaNey4,WQdqgrWvy6g,oVZv7rrL6J0,zpCCBJud5iY,X4gfyBUcJtE,4uKBaXc9hDM,7wf3PDOa-Do,rZY1qy92cio,1yAmf9VAZfM,B3QQL24bIUI,nXzqXq8CXFM,TEBG4DYKJG8,C_yFoy7lf7s,ruw6WyY3eKo,v5Jb04gONUk,-l3mLElCUBg,9qsRj2RVSqo,Y-5kcNdmQwA,5xRVAOHQ888,1hMAoC7PCp0,5GdEbmsssxk,vdNrPdeEuYQ]&key=AIzaSyCS0G3xyHx56VRRLE2pHikgDYXKL_831x0");if(200===t.status){const e=t.data.items.map(e=>{var t,i,a,n,r,o,s,d,l,c;return{name:null===e||void 0===e?void 0:null===(t=e.snippet)||void 0===t?void 0:t.channelTitle,profileImageUrl:null===e||void 0===e?void 0:null===(i=e.snippet)||void 0===i?void 0:null===(a=i.thumbnails)||void 0===a?void 0:null===(n=a.high)||void 0===n?void 0:n.url,id:null===e||void 0===e?void 0:e.id,publishedAt:null===e||void 0===e?void 0:null===(r=e.snippet)||void 0===r?void 0:r.publishedAt,thumbnailUrl:null===e||void 0===e?void 0:null===(o=e.snippet)||void 0===o?void 0:null===(s=o.thumbnails)||void 0===s?void 0:null===(d=s.high)||void 0===d?void 0:d.url,viewCount:null===e||void 0===e?void 0:null===(l=e.statistics)||void 0===l?void 0:l.viewCount,title:null===e||void 0===e?void 0:null===(c=e.snippet)||void 0===c?void 0:c.title,isSaved:!1}});this.setState({videoList:e,apiStatus:tt.success})}else t.status,this.setState({apiStatus:tt.failure})}catch(e){console.error("Error fetching videos:",e),this.setState({apiStatus:tt.failure})}}),this.hideBanner=(()=>{this.setState({banner:!1})}),this.setSearchInput=(e=>{this.setState({searchInput:e.target.value})}),this.onSearchFilter=(()=>{const{searchInput:e}=this.state,t=e.toLowerCase();this.setState(e=>({videoList:e.videoList.filter(e=>e.title.toLowerCase().includes(t))}))}),this.onRetryEmptyResults=(()=>{this.setState({searchInput:""},this.getVideosListApi)}),this.bannerContainer=(()=>{const{banner:e}=this.state;return e?n.a.createElement(_e,{"data-testid":"banner"},n.a.createElement("div",null,n.a.createElement("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",alt:"nxt watch logo",className:"website-logo"}),n.a.createElement(Xe,null,"Buy Nxt Watch Premium prepaid plans with UPI"),n.a.createElement(qe,{type:"button"},"GET IT NOW")),n.a.createElement(Ze,{onClick:this.hideBanner,"data-testid":"close"},n.a.createElement(m.c,null))):null}),this.getVideoCardList=(()=>{const{videoList:e}=this.state;return n.a.createElement(We,null,e.map(e=>n.a.createElement(Ie,{key:e.id,videoItem:e})))}),this.onApiRetry=(()=>{this.getVideosListApi()})}componentDidMount(){this.getVideosListApi()}componentDidUpdate(e){this.state}render(){const{searchInput:e}=this.state;return n.a.createElement(I.Consumer,null,t=>{const{isDarkMode:i}=t,a=()=>n.a.createElement(Ue,{onApiRetry:this.onApiRetry}),r=()=>{const{videoList:t}=this.state;return n.a.createElement(n.a.Fragment,null,this.bannerContainer(),n.a.createElement(He,null,n.a.createElement(Je,{"data-testid":"searchButton"},n.a.createElement(Ke,{type:"search",onChange:this.setSearchInput,"data-testid":"searchButton",value:e}),n.a.createElement(et,{onClick:this.onSearchFilter,"data-testid":"searchButton"},n.a.createElement(m.f,null))),0===t.length?n.a.createElement(Ve,{onRetryEmptyResults:this.onRetryEmptyResults}):this.getVideoCardList()))};return n.a.createElement(Ye,{isDarkMode:i},n.a.createElement(Qe,null,(()=>{const{apiStatus:e}=this.state;switch(e){case tt.success:return r();case tt.failure:return a();case tt.progress:return n.a.createElement("div",{className:"loader-container","data-testid":"loader"},n.a.createElement(ve.a,{type:"ThreeDots",color:i?"#ffffff":"#0b69ff",height:"50",width:"50"}));default:return null}})()))})}};const at=f.a.li`
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
`,nt=f.a.img`
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
`,rt=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
`,ot=f.a.h1`
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
`,st=(f.a.br`
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
`),dt=f.a.p`
  color: #94a3b8;
  font-size: 15px;
`,lt=f.a.p`
  color: #94a3b8;
  font-size: 15px;
`,ct=f.a.p`
  color: #94a3b8;
  font-size: 15px;
`,mt=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#475569"};
  font-size: 14px;
  padding-bottom: 9px;
  margin: 7px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`;var pt=function(e){return n.a.createElement(I.Consumer,null,t=>{const{isDarkMode:i}=t,{trendingCardItem:a}=e,{name:r,id:o,publishedAt:d,thumbnailUrl:l,title:c,viewCount:m}=a;console.log(a);const p=Object(be.a)(new Date(d));return n.a.createElement(s.b,{to:`/videos/${o}`,className:"link"},n.a.createElement(at,null,n.a.createElement(nt,{src:l,alt:c}),n.a.createElement(rt,null,n.a.createElement(ot,{isDarkMode:i},c),n.a.createElement(dt,null,r),n.a.createElement(st,null,n.a.createElement(lt,null,function(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:e}(m)," views"),n.a.createElement(mt,{className:"dot"},"."),n.a.createElement(ct,null,p," ago")))))})};const ht=f.a.div`
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
`,ft=(f.a.div`
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
`),xt=(f.a.aside`
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
`,gt=f.a.h1`
  font-size: 25px;
  padding-left: 10px;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding-left: 10px;
    color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
  }
`,wt=f.a.ul`
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
`,vt={initial:"INITIAL",success:"SUCCESS",failure:"FAILURE",progress:"IN_PROGRESS"};var bt=class extends a.Component{constructor(){super(...arguments),this.state={trendingList:[],apiStatus:vt.initial},this.getTrendingList=(async()=>{this.setState({apiStatus:vt.progress});try{const t=await h.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=[cLASivNQfqM,cj5ELha66ZI,1v5oUZHMzpA,tDTb3RY-eBk,JMBdQ6zz5fg,CUCs7lQ7RVw,qFbHCr7PFJQ,Z_SSvPx4Yng,OeZ0stGxrXw,bPhqkXBqe9w,oCWejadnl3E,Pc8hoIw6myQ,nI1xiOLeeYM,xLPryuRC8g8,wkSycA21kPg,U-L3Bbxy6UU,dfTq14sSsJ8,cwcyhbSktPE,Ij2_XYuvMBU,0LcbbUgq0kE,Njtym0zGVSk,nXp1Gy-HDTc,6IXvzy6Q5z4,uUXPmJWKfIQ,kP3q85zjXp4,EzMmBEPgWyc,A4eAossQcXE,9_tt8OkBkAk,UaUCK3CGXcw,kipR0eWWrvU,cQU7OG9yRcc,SWzMyQxkD8E,QEYoPkGYRSk,rvO0s4ae0_M,ii77II509Iw,VJZ8fO1iSIU,BdBVuUH5Mec,eQCMMhgbMXc,hHMwHjTagU4,RdMNsvN4ixI,4QRNYG2e60U,NPGwQIA3G6E,wEKLdOWSXSw,u6Ry4jrB5nk,t1v4nWZ4MhY,8oeaBDWIsMs,n-5SvuM7vzE,gXfWWptjTSI,30RcaMm4YSk,yCSDg07h82w]&key=AIzaSyCS0G3xyHx56VRRLE2pHikgDYXKL_831x0");if(200===t.status){const e=t.data.items.map(e=>{var t,i,a,n,r,o,s,d,l,c;return{name:null===e||void 0===e?void 0:null===(t=e.snippet)||void 0===t?void 0:t.channelTitle,profileImageUrl:null===e||void 0===e?void 0:null===(i=e.snippet)||void 0===i?void 0:null===(a=i.thumbnails)||void 0===a?void 0:null===(n=a.high)||void 0===n?void 0:n.url,id:null===e||void 0===e?void 0:e.id,publishedAt:null===e||void 0===e?void 0:null===(r=e.snippet)||void 0===r?void 0:r.publishedAt,thumbnailUrl:null===e||void 0===e?void 0:null===(o=e.snippet)||void 0===o?void 0:null===(s=o.thumbnails)||void 0===s?void 0:null===(d=s.high)||void 0===d?void 0:d.url,viewCount:null===e||void 0===e?void 0:null===(l=e.statistics)||void 0===l?void 0:l.viewCount,title:null===e||void 0===e?void 0:null===(c=e.snippet)||void 0===c?void 0:c.title,isSaved:!1}});this.setState({trendingList:e,apiStatus:vt.success})}else this.setState({apiStatus:vt.failure})}catch(e){console.error("Error fetching videos:",e),this.setState({apiStatus:vt.failure})}}),this.onApiRetry=(()=>{this.getTrendingList()})}componentDidMount(){this.getTrendingList()}render(){return n.a.createElement(I.Consumer,null,e=>{let{isDarkMode:t}=e;const i=()=>n.a.createElement(Ue,{onApiRetry:this.onApiRetry}),a=()=>{const{trendingList:e}=this.state;return n.a.createElement(n.a.Fragment,null,e.map(e=>n.a.createElement(pt,{key:e.id,trendingCardItem:e})))};return n.a.createElement(ht,{isDarkMode:t,"data-testid":"trending"},n.a.createElement(ft,{isDarkMode:t},n.a.createElement(xt,{isDarkMode:t},n.a.createElement(ut,{isDarkMode:t},n.a.createElement(c.a,null))),n.a.createElement(gt,{isDarkMode:t},"Trending")),n.a.createElement(wt,null,(()=>{const{apiStatus:e}=this.state;switch(e){case vt.success:return a();case vt.failure:return i();case vt.progress:return n.a.createElement("div",{className:"loader-container"},n.a.createElement(ve.a,{type:"ThreeDots",color:t?"#ffffff":"#0b69ff",height:"50",width:"50"}));default:return null}})()))})}};const Et=f.a.li`
  list-style-type: none;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
  margin: 8px;
  width: 90vw;
  height: 55vh;
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
    width: 34vw;
    height: 60vh;
    margin: 10px;
    margin-left: 30px;
  }
  @media screen and (min-width: 992px) {
    width: 24vw;
    height: 60vh;
    margin-left: 25px;
  }
`,kt=f.a.img`
  height: 30vh;
  width: 80vw;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media screen and (min-width: 576px) {
    height: 35vh;
    width: 40vw;
  }

  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 35vw;
    margin-right: 20px;
  }

  @media screen and (min-width: 992px) {
    height: 40vh;
    width: 24vw;
  }
`,yt=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  background-color: ${e=>e.isDarkMode?"#181818":"#f9f9f9"};
`,Dt=f.a.h1`
  color: ${e=>e.isDarkMode?"#ffffff":"#1e293b"};
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`,Mt=f.a.p`
  color: #94a3b8;
`;var St=function(e){return n.a.createElement(I.Consumer,null,t=>{const{isDarkMode:i}=t,{trendingCardItem:a}=e,{id:r,thumbnailUrl:o,title:d,name:l}=a;return n.a.createElement(s.b,{to:`/videos/${r}`,className:"link"},n.a.createElement(Et,{isDarkMode:i},n.a.createElement(kt,{src:o,alt:"video thumbnail"}),n.a.createElement(yt,{isDarkMode:i},n.a.createElement(Dt,{isDarkMode:i},d),n.a.createElement(Mt,null,l))))})};const zt=f.a.div`
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
`,Ct=(f.a.div`
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
`),Lt=f.a.div`
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-top: 0px;
  }
`,At=f.a.div`
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
`,It=f.a.p`
  font-size: 23px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`,jt=f.a.h1`
  font-size: 25px;
  padding-left: 10px;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding-left: 10px;
    color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
  }
`,Rt=f.a.ul`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: cenetr;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,$t={initial:"INITIAL",success:"SUCCESS",failure:"FAILURE",progress:"IN_PROGRESS"};var Nt=class extends a.Component{constructor(){super(...arguments),this.state={trendingList:[],apiStatus:$t.initial},this.getTrendingList=(async()=>{this.setState({apiStatus:$t.progress});try{const t=await h.a.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLiZN0Fd_jMqemqNeeFfV6Tc8OZ3sXAgkZ&key=AIzaSyB2kPZq_q_ju7SBl2dpp61zzxpjhjROkX0&key=AIzaSyCS0G3xyHx56VRRLE2pHikgDYXKL_831x0");if(200===t.status){const e=t.data.items.map(e=>{var t,i,a,n,r,o,s,d,l,c;return{name:null===e||void 0===e?void 0:null===(t=e.snippet)||void 0===t?void 0:t.channelTitle,profileImageUrl:null===e||void 0===e?void 0:null===(i=e.snippet)||void 0===i?void 0:null===(a=i.thumbnails)||void 0===a?void 0:null===(n=a.high)||void 0===n?void 0:n.url,id:null===e||void 0===e?void 0:null===(r=e.snippet)||void 0===r?void 0:r.resourceId.videoId,publishedAt:null===e||void 0===e?void 0:null===(o=e.snippet)||void 0===o?void 0:o.publishedAt,thumbnailUrl:null===e||void 0===e?void 0:null===(s=e.snippet)||void 0===s?void 0:null===(d=s.thumbnails)||void 0===d?void 0:null===(l=d.high)||void 0===l?void 0:l.url,title:null===e||void 0===e?void 0:null===(c=e.snippet)||void 0===c?void 0:c.title,isSaved:!1}});this.setState({trendingList:e,apiStatus:$t.success})}else this.setState({apiStatus:$t.failure})}catch(e){console.error("Error fetching videos:",e),this.setState({apiStatus:$t.failure})}}),this.onApiRetry=(()=>{this.getTrendingList()})}componentDidMount(){this.getTrendingList()}render(){return n.a.createElement(I.Consumer,null,e=>{const{isDarkMode:t}=e,i=()=>n.a.createElement(Ue,{onApiRetry:this.onApiRetry}),a=()=>{const{trendingList:e}=this.state;return n.a.createElement(n.a.Fragment,null,e.map(e=>n.a.createElement(St,{key:e.id,trendingCardItem:e})))};return n.a.createElement(zt,{isDarkMode:t},n.a.createElement(Lt,{isDarkMode:t},n.a.createElement(Ct,{isDarkMode:t},n.a.createElement(At,{isDarkMode:t},n.a.createElement(It,{isDarkMode:t},n.a.createElement(m.b,null))),n.a.createElement(jt,{isDarkMode:t},"Gaming")),n.a.createElement(Rt,null,(()=>{const{apiStatus:e}=this.state;switch(e){case $t.success:return a();case $t.failure:return i();case $t.progress:return n.a.createElement("div",{className:"loader-container"},n.a.createElement(ve.a,{type:"ThreeDots",color:t?"#ffffff":"#0b69ff",height:"50",width:"50"}));default:return null}})())))})}};const Pt=f.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding: 30px;
  height: 90vh;
`,Ut=f.a.img`
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
`,Tt=f.a.h1`
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
`,Ft=f.a.p`
  color: #475569;
  text-align: center;
`;var Ot=function(){return n.a.createElement(I.Consumer,null,e=>{const{isDarkMode:t}=e;return n.a.createElement(Pt,{isDarkMode:t},n.a.createElement(Ut,{src:"https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png",alt:"no saved videos"}),n.a.createElement(Tt,{isDarkMode:t},"No saved videos found"),n.a.createElement(Ft,{isDarkMode:t},"You can save your videos while watching them"))})};const Bt=f.a.div`
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
`,Gt=(f.a.div`
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
`),Vt=f.a.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-top: 0px;
    display: block;
  }
`,Yt=f.a.div`
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
`,Qt=f.a.p`
  font-size: 23px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`,Wt=f.a.h1`
  font-size: 25px;
  padding-left: 10px;
  color: ${e=>e.isDarkMode?"#ffffff":"#212121"};
`,_t=f.a.ul`
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
`;var Xt=class extends a.Component{render(){return n.a.createElement(I.Consumer,null,e=>{const{isDarkMode:t,savedList:i}=e;return n.a.createElement(Bt,{isDarkMode:t,"data-testid":"savedVideos"},n.a.createElement(Vt,{isDarkMode:t},0===i.length?n.a.createElement(Ot,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(Gt,{isDarkMode:t},n.a.createElement(Yt,{isDarkMode:t},n.a.createElement(Qt,{isDarkMode:t},n.a.createElement(p.a,null))),n.a.createElement(Wt,{isDarkMode:t},"Saved Videos")),n.a.createElement(_t,null,i.map(e=>n.a.createElement(pt,{key:e.id,trendingCardItem:e}))))))})}},qt=i(47),Zt=i.n(qt),Ht=i(46),Jt=i.n(Ht),Kt=i(34);const ei=f.a.div`
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
`,ti=(f.a.div`
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
`),ii=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,ai=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#181818"};
  font-size: 15px;

  @media screen and (min-width: 576px) {
    font-size: 17px;
  }

  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`,ni=f.a.p`
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
`,ri=f.a.div`
  display: flex;
  align-items: center;
`,oi=f.a.p`
  color: #475569;
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`,si=f.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,di=f.a.div`
  display: flex;
  align-items: center;
`,li=f.a.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.like?"#2563eb":"#64748b"};
`,ci=f.a.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.disLike?"#2563eb":"#64748b"};
`,mi=f.a.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.isSaved?"#2563eb":"#64748b"};
`,pi=f.a.p`
  color: ${e=>e.like?"#2563eb":"#64748b"};
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`,hi=f.a.p`
  color: ${e=>e.disLike?"#2563eb":"#64748b"};
  font-size: 13px;
  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`,fi=f.a.p`
  color: ${e=>e.isSaved?"#2563eb":"#64748b"};
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`,xi=f.a.hr`
  width: 90vw;
  color: #475569;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`,ui=f.a.div`
  display: flex;
`,gi=f.a.img`
  height: 30px;
  width: 30px;
  margin-top: 10px;
  border-radius: 50%;
`,wi=f.a.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`,vi=f.a.p`
  font-size: 14px;
  color: ${e=>e.isDarkMode?"#ffffff":"#94a3b8"};
`,bi=f.a.p`
  font-size: 13px;
  color: ${e=>e.isDarkMode?"#ffffff":"#94a3b8"};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Ei=f.a.p`
  color: ${e=>e.isDarkMode?"#ffffff":"#475569"};
  font-size: 14px;
  padding-bottom: 9px;
  margin: 7px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`;i(93);const ki={initial:"INITIAL",success:"SUCCESS",failure:"FAILURE",progress:"IN_PROGRESS"};var yi=class extends a.Component{constructor(){super(...arguments),this.state={videoItemDetails:"",apiStatus:ki.initial},this.getVideosDetails=(async()=>{const{match:e}=this.props,{params:t}=e,{id:i}=t;this.setState({apiStatus:ki.success});const a=`https://www.googleapis.com/youtube/v3/videos?id=${i}&key=AIzaSyCS0G3xyHx56VRRLE2pHikgDYXKL_831x0&part=statistics,snippet,contentDetails,status`;try{const e=await h.a.get(a);if(200===e.status){const t={name:e.data.items[0].snippet.channelTitle,profileImageUrl:`https://www.youtube.com/watch?v=${e.data.items[0].id}`,description:e.data.items[0].snippet.description,id:e.data.items[0].id,publishedAt:e.data.items[0].snippet.publishedAt,thumbnailUrl:e.data.items[0].snippet.thumbnails.high.url,title:e.data.items[0].snippet.title,videoUrl:`https://www.youtube.com/watch?v=${e.data.items[0].id}`,viewCount:e.data.items[0].statistics.viewCount,tags:e.data.items[0].snippet.tags||[],channelTitle:e.data.items[0].snippet.channelTitle};this.setState({videoItemDetails:t,apiStatus:ki.success})}else e.status,this.setState({apiStatus:ki.failure})}catch(n){this.setState({apiStatus:ki.failure})}}),this.onSaveChange=(e=>{const{videoItemDetails:t}=this.state,i=!t.isSaved;this.setState({videoItemDetails:{...t,isSaved:i}},()=>{e(t)})})}componentDidMount(){this.getVideosDetails()}render(){return n.a.createElement(I.Consumer,null,e=>{const{videoItemDetails:t}=this.state,{name:i,description:a,id:r,publishedAt:o,title:s,videoUrl:d,viewCount:l,isSaved:c,isLike:m,isDisLike:h,thumbnailUrl:f}=t,{isDarkMode:x,onSave:u}=e,g=()=>{const e=!t.isLike,i=!e&&t.isDisLike;this.setState({videoItemDetails:{...t,isLike:e,isDisLike:i}})},w=()=>{const e=!t.isDisLike,i=!e&&t.isLike;this.setState({videoItemDetails:{...t,isLike:i,isDisLike:e}})},v=()=>{this.onSaveChange(u)},b=()=>n.a.createElement(Ue,{onApiRetry:this.onApiRetry});return n.a.createElement(ei,{isDarkMode:x},n.a.createElement(ti,null,(()=>{const{apiStatus:e}=this.state;switch(e){case ki.success:return(()=>{const e=Jt()(o).fromNow();return n.a.createElement(ii,{key:r},n.a.createElement("div",{className:"player-wrapper"},n.a.createElement(Zt.a,{className:"react-player",url:d,width:"100%",height:"100%"})),n.a.createElement(ni,{isDarkMode:x},n.a.createElement(ai,{isDarkMode:x},s),n.a.createElement(si,null,n.a.createElement(ri,null,n.a.createElement(oi,{isDarkMode:x},function(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:e}(l)," views"),n.a.createElement(Ei,{className:"dot"},"."),n.a.createElement(oi,null,e," ago")),n.a.createElement(di,null,n.a.createElement(li,{type:"button",onClick:g,like:m},n.a.createElement(Kt.b,null),n.a.createElement(pi,{like:m},"Like")),n.a.createElement(ci,{type:"button",onClick:w,disLike:h},n.a.createElement(Kt.a,null),n.a.createElement(hi,{disLike:h},"Dislike")),n.a.createElement(mi,{type:"button",onClick:v,isSaved:c},n.a.createElement(p.a,null),n.a.createElement(fi,{isSaved:c},c?"Saved":"Save")))),n.a.createElement(xi,null),n.a.createElement(ui,null,n.a.createElement(gi,{src:f,alt:"channel logo"}),n.a.createElement(wi,null,n.a.createElement(vi,{isDarkMode:x},i),n.a.createElement(bi,{isDarkMode:x},a)))))})();case ki.failure:return b();case ki.progress:return n.a.createElement("div",{className:"loader-container","data-testid":"loader"},n.a.createElement(ve.a,{type:"ThreeDots",color:x?"#ffffff":"#0b69ff",height:"50",width:"50","data-testid":"loader"}));default:return null}})()))})}};const Di=f.a.div`
  width: 100vw;
  background-color: ${e=>e.isDarkMode?"#0f0f0f":"#f9f9f9"};
`,Mi=f.a.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`,Si=f.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  padding: 30px;
`,zi=(f.a.div`
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
`),Ci=f.a.h1`
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
`,Li=f.a.p`
  color: #475569;
  text-align: center;
`;var Ai=function(){return n.a.createElement(I.Consumer,null,e=>{const{isDarkMode:t}=e,i=t?"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png";return n.a.createElement(Di,{isDarkMode:t},n.a.createElement(Mi,null,n.a.createElement(ge,null),n.a.createElement(Si,{isDarkMode:t},n.a.createElement(zi,{src:i,alt:"not found"}),n.a.createElement(Ci,{isDarkMode:t},"Page Not Found"),n.a.createElement(Li,{isDarkMode:t},"we are sorry, the page you requested could not be found."))))})};var Ii=function(e){return void 0!==A.a.get("jwt_token")?n.a.createElement(d.b,e):n.a.createElement(d.a,{to:"/Login"})};i(99);const ji=[{id:"HOME",logo:l.a,text:"Home",linkText:"/"},{id:"TRENDING",logo:c.a,text:"Trending",linkText:"/trending"},{id:"GAMES",logo:m.b,text:"Gaming",linkText:"/gaming"},{id:"SAVEDVIDEOS",logo:p.a,text:"Saved Videos",linkText:"/saved-videos"}];var Ri=Object(d.g)(class extends a.Component{constructor(){super(...arguments),this.state={isDarkMode:!1,menuList:[...ji],savedList:[],token:""},this.changeThemeMode=(()=>{this.setState(e=>({isDarkMode:!e.isDarkMode}))}),this.navMenuStyle=(e=>{this.setState(t=>({menuList:t.menuList.map(t=>t.id===e?{...t,isActive:!t.isActive}:{...t,isActive:!1})}))}),this.onSave=(e=>{this.setState(t=>t.savedList.some(t=>t.id===e.id)?null:{savedList:[...t.savedList,e]})}),this.setToken=(e=>{this.setState({token:e})})}render(){const{isDarkMode:e,menuList:t,savedList:i,token:a}=this.state,{location:r}=this.props,o="/login"!==r.pathname&&"/register"!==r.pathname;return n.a.createElement(I.Provider,{value:{isDarkMode:e,changeThemeMode:this.changeThemeMode,menuList:t,navMenuStyle:this.navMenuStyle,onSave:this.onSave,savedList:i,token:a,setToken:this.setToken}},o&&n.a.createElement(me,null),o&&n.a.createElement(ge,null),n.a.createElement(d.d,null,n.a.createElement(d.b,{exact:!0,path:"/register",component:C}),n.a.createElement(d.b,{exact:!0,path:"/login",component:B}),n.a.createElement(Ii,{exact:!0,path:"/",component:it}),n.a.createElement(Ii,{exact:!0,path:"/trending",component:bt}),n.a.createElement(Ii,{exact:!0,path:"/gaming",component:Nt}),n.a.createElement(Ii,{exact:!0,path:"/saved-videos",component:Xt}),n.a.createElement(Ii,{exact:!0,path:"/videos/:id",component:yi}),n.a.createElement(d.b,{component:Ai})))}});o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,null,n.a.createElement(Ri,null))),document.getElementById("root"))},50:function(e,t,i){e.exports=i(100)},69:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){},90:function(e,t,i){},91:function(e,t,i){},93:function(e,t,i){},99:function(e,t,i){}},[[50,15,16]]]);
//# sourceMappingURL=main.1ddeae09.chunk.js.map
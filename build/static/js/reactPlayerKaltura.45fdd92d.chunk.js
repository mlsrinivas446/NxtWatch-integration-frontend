(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(e,t,r){var s,o=Object.create,a=Object.defineProperty,l=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,r,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of n(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(s=l(t,o))||s.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!==typeof t?t+"":t,r),r),h={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(h,{default:()=>b}),e.exports=(s=h,p(a({},"__esModule",{value:!0}),s));var c=((e,t,r)=>(r=null!=e?o(i(e)):{},p(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r(1)),y=r(22),m=r(48);const f="https://cdn.embed.ly/player-0.1.0.min.js",P="playerjs";class b extends c.Component{constructor(){super(...arguments),d(this,"callPlayer",y.callPlayer),d(this,"duration",null),d(this,"currentTime",null),d(this,"secondsLoaded",null),d(this,"mute",()=>{this.callPlayer("mute")}),d(this,"unmute",()=>{this.callPlayer("unmute")}),d(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,y.getSDK)(f,P).then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.on("ready",()=>{setTimeout(()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()},500)}))},this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",e=>{let{duration:t,seconds:r}=e;this.duration=t,this.currentTime=r})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return c.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}d(b,"displayName","Kaltura"),d(b,"canPlay",m.canPlay.kaltura)}}]);
//# sourceMappingURL=reactPlayerKaltura.45fdd92d.chunk.js.map
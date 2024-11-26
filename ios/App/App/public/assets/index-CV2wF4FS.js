const __vite__fileDeps=["assets/web-CzQlVIlD.js","assets/index-BVa5phYe.js","assets/index-4rJc_ijy.css","assets/index-Cwenx0lJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a8 as _,d as B,b as P,f as E,h as S,e as D,g as T,c as O,Y as R,Q as W,R as x,n as z,u as N,P as A,y as H,z as V,A as $,_ as F,i as j,w as a,r as c,o as q,j as r,k,l as G}from"./index-BVa5phYe.js";import{r as K,C as f}from"./index-Cwenx0lJ.js";const n=K("CapacitorGoogleMaps",{web:()=>_(()=>import("./web-CzQlVIlD.js"),__vite__mapDeps([0,1,2,3])).then(s=>new s.CapacitorGoogleMapsWeb)});n.addListener("isMapInFocus",s=>{var e;const i=s.x,t=s.y,o=document.elementFromPoint(i,t),d=((e=o==null?void 0:o.dataset)===null||e===void 0?void 0:e.internalId)===s.mapId;n.dispatchMapEvent({id:s.mapId,focus:d})});class J{constructor(e){this.southwest=e.southwest,this.center=e.center,this.northeast=e.northeast}async contains(e){return(await n.mapBoundsContains({bounds:this,point:e})).contains}async extend(e){const i=await n.mapBoundsExtend({bounds:this,point:e});return this.southwest=i.bounds.southwest,this.center=i.bounds.center,this.northeast=i.bounds.northeast,this}}var M;(function(s){s.Normal="Normal",s.Hybrid="Hybrid",s.Satellite="Satellite",s.Terrain="Terrain",s.None="None"})(M||(M={}));class Q extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="",f.getPlatform()=="ios"){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",Q);class y{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static async create(e,i){const t=new y(e.id);if(!e.element)throw new Error("container element is required");e.config.androidLiteMode===void 0&&(e.config.androidLiteMode=!1),t.element=e.element,t.element.dataset.internalId=e.id;const o=await y.getElementBounds(e.element);if(e.config.width=o.width,e.config.height=o.height,e.config.x=o.x,e.config.y=o.y,e.config.devicePixelRatio=window.devicePixelRatio,f.getPlatform()=="android"&&t.initScrolling(),f.isNativePlatform()){e.element={};const h=()=>{var l,u;const C=(u=(l=t.element)===null||l===void 0?void 0:l.getBoundingClientRect())!==null&&u!==void 0?u:{};return{x:C.x,y:C.y,width:C.width,height:C.height}},d=()=>{n.onDisplay({id:t.id,mapBounds:h()})},m=()=>{n.onResize({id:t.id,mapBounds:h()})},g=t.element.closest(".ion-page");f.getPlatform()==="ios"&&g&&(g.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{d()},100)}),g.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{d()},100)}));const L={width:o.width,height:o.height,isHidden:!1};t.resizeObserver=new ResizeObserver(()=>{if(t.element!=null){const l=t.element.getBoundingClientRect(),u=l.width===0&&l.height===0;u||(L.isHidden?f.getPlatform()==="ios"&&!g&&d():(L.width!==l.width||L.height!==l.height)&&m()),L.width=l.width,L.height=l.height,L.isHidden=u}}),t.resizeObserver.observe(t.element)}if(await new Promise((h,d)=>{setTimeout(async()=>{try{await n.create(e),h(void 0)}catch(m){d(m)}},200)}),i){const h=await n.addListener("onMapReady",d=>{d.mapId==t.id&&(i(d),h.remove())})}return t}static async getElementBounds(e){return new Promise(i=>{let t=e.getBoundingClientRect();if(t.width==0){let o=0;const h=setInterval(function(){t.width==0&&o<30?(t=e.getBoundingClientRect(),o++):(o==30&&console.warn("Map size could not be determined"),clearInterval(h),i(t))},100)}else i(t)})}async enableTouch(){return n.enableTouch({id:this.id})}async disableTouch(){return n.disableTouch({id:this.id})}async enableClustering(e){return n.enableClustering({id:this.id,minClusterSize:e})}async disableClustering(){return n.disableClustering({id:this.id})}async addMarker(e){return(await n.addMarker({id:this.id,marker:e})).id}async addMarkers(e){return(await n.addMarkers({id:this.id,markers:e})).ids}async removeMarker(e){return n.removeMarker({id:this.id,markerId:e})}async removeMarkers(e){return n.removeMarkers({id:this.id,markerIds:e})}async addPolygons(e){return(await n.addPolygons({id:this.id,polygons:e})).ids}async addPolylines(e){return(await n.addPolylines({id:this.id,polylines:e})).ids}async removePolygons(e){return n.removePolygons({id:this.id,polygonIds:e})}async addCircles(e){return(await n.addCircles({id:this.id,circles:e})).ids}async removeCircles(e){return n.removeCircles({id:this.id,circleIds:e})}async removePolylines(e){return n.removePolylines({id:this.id,polylineIds:e})}async destroy(){var e;return f.getPlatform()=="android"&&this.disableScrolling(),f.isNativePlatform()&&((e=this.resizeObserver)===null||e===void 0||e.disconnect()),this.removeAllMapListeners(),n.destroy({id:this.id})}async setCamera(e){return n.setCamera({id:this.id,config:e})}async getMapType(){const{type:e}=await n.getMapType({id:this.id});return M[e]}async setMapType(e){return n.setMapType({id:this.id,mapType:e})}async enableIndoorMaps(e){return n.enableIndoorMaps({id:this.id,enabled:e})}async enableTrafficLayer(e){return n.enableTrafficLayer({id:this.id,enabled:e})}async enableAccessibilityElements(e){return n.enableAccessibilityElements({id:this.id,enabled:e})}async enableCurrentLocation(e){return n.enableCurrentLocation({id:this.id,enabled:e})}async setPadding(e){return n.setPadding({id:this.id,padding:e})}async getMapBounds(){return new J(await n.getMapBounds({id:this.id}))}async fitBounds(e,i){return n.fitBounds({id:this.id,bounds:e,padding:i})}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let i=0;i<e.length;i++)e[i].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();n.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}async setOnCameraIdleListener(e){this.onCameraIdleListener&&this.onCameraIdleListener.remove(),e?this.onCameraIdleListener=await n.addListener("onCameraIdle",this.generateCallback(e)):this.onCameraIdleListener=void 0}async setOnBoundsChangedListener(e){this.onBoundsChangedListener&&this.onBoundsChangedListener.remove(),e?this.onBoundsChangedListener=await n.addListener("onBoundsChanged",this.generateCallback(e)):this.onBoundsChangedListener=void 0}async setOnCameraMoveStartedListener(e){this.onCameraMoveStartedListener&&this.onCameraMoveStartedListener.remove(),e?this.onCameraMoveStartedListener=await n.addListener("onCameraMoveStarted",this.generateCallback(e)):this.onCameraMoveStartedListener=void 0}async setOnClusterClickListener(e){this.onClusterClickListener&&this.onClusterClickListener.remove(),e?this.onClusterClickListener=await n.addListener("onClusterClick",this.generateCallback(e)):this.onClusterClickListener=void 0}async setOnClusterInfoWindowClickListener(e){this.onClusterInfoWindowClickListener&&this.onClusterInfoWindowClickListener.remove(),e?this.onClusterInfoWindowClickListener=await n.addListener("onClusterInfoWindowClick",this.generateCallback(e)):this.onClusterInfoWindowClickListener=void 0}async setOnInfoWindowClickListener(e){this.onInfoWindowClickListener&&this.onInfoWindowClickListener.remove(),e?this.onInfoWindowClickListener=await n.addListener("onInfoWindowClick",this.generateCallback(e)):this.onInfoWindowClickListener=void 0}async setOnMapClickListener(e){this.onMapClickListener&&this.onMapClickListener.remove(),e?this.onMapClickListener=await n.addListener("onMapClick",this.generateCallback(e)):this.onMapClickListener=void 0}async setOnPolygonClickListener(e){this.onPolygonClickListener&&this.onPolygonClickListener.remove(),e?this.onPolygonClickListener=await n.addListener("onPolygonClick",this.generateCallback(e)):this.onPolygonClickListener=void 0}async setOnCircleClickListener(e){this.onCircleClickListener&&this.onCircleClickListener.remove(),e?this.onCircleClickListener=await n.addListener("onCircleClick",this.generateCallback(e)):this.onCircleClickListener=void 0}async setOnMarkerClickListener(e){this.onMarkerClickListener&&this.onMarkerClickListener.remove(),e?this.onMarkerClickListener=await n.addListener("onMarkerClick",this.generateCallback(e)):this.onMarkerClickListener=void 0}async setOnPolylineClickListener(e){this.onPolylineClickListener&&this.onPolylineClickListener.remove(),e?this.onPolylineClickListener=await n.addListener("onPolylineClick",this.generateCallback(e)):this.onPolylineClickListener=void 0}async setOnMarkerDragStartListener(e){this.onMarkerDragStartListener&&this.onMarkerDragStartListener.remove(),e?this.onMarkerDragStartListener=await n.addListener("onMarkerDragStart",this.generateCallback(e)):this.onMarkerDragStartListener=void 0}async setOnMarkerDragListener(e){this.onMarkerDragListener&&this.onMarkerDragListener.remove(),e?this.onMarkerDragListener=await n.addListener("onMarkerDrag",this.generateCallback(e)):this.onMarkerDragListener=void 0}async setOnMarkerDragEndListener(e){this.onMarkerDragEndListener&&this.onMarkerDragEndListener.remove(),e?this.onMarkerDragEndListener=await n.addListener("onMarkerDragEnd",this.generateCallback(e)):this.onMarkerDragEndListener=void 0}async setOnMyLocationButtonClickListener(e){this.onMyLocationButtonClickListener&&this.onMyLocationButtonClickListener.remove(),e?this.onMyLocationButtonClickListener=await n.addListener("onMyLocationButtonClick",this.generateCallback(e)):this.onMyLocationButtonClickListener=void 0}async setOnMyLocationClickListener(e){this.onMyLocationClickListener&&this.onMyLocationClickListener.remove(),e?this.onMyLocationClickListener=await n.addListener("onMyLocationClick",this.generateCallback(e)):this.onMyLocationClickListener=void 0}async removeAllMapListeners(){this.onBoundsChangedListener&&(this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=void 0),this.onCameraIdleListener&&(this.onCameraIdleListener.remove(),this.onCameraIdleListener=void 0),this.onCameraMoveStartedListener&&(this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=void 0),this.onClusterClickListener&&(this.onClusterClickListener.remove(),this.onClusterClickListener=void 0),this.onClusterInfoWindowClickListener&&(this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=void 0),this.onInfoWindowClickListener&&(this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=void 0),this.onMapClickListener&&(this.onMapClickListener.remove(),this.onMapClickListener=void 0),this.onPolylineClickListener&&(this.onPolylineClickListener.remove(),this.onPolylineClickListener=void 0),this.onMarkerClickListener&&(this.onMarkerClickListener.remove(),this.onMarkerClickListener=void 0),this.onPolygonClickListener&&(this.onPolygonClickListener.remove(),this.onPolygonClickListener=void 0),this.onCircleClickListener&&(this.onCircleClickListener.remove(),this.onCircleClickListener=void 0),this.onMarkerDragStartListener&&(this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=void 0),this.onMarkerDragListener&&(this.onMarkerDragListener.remove(),this.onMarkerDragListener=void 0),this.onMarkerDragEndListener&&(this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=void 0),this.onMyLocationButtonClickListener&&(this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=void 0),this.onMyLocationClickListener&&(this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=void 0)}generateCallback(e){const i=this.id;return t=>{t.mapId==i&&e(t)}}}const Y=B({name:"g-mapScreen",components:{IonToolbar:P,IonPage:E,IonFooter:S,IonHeader:D,IonContent:T,IonTitle:O,IonRouterOutlet:R,IonTabBar:W,IonTabButton:x,IonIcon:z,IonLabel:N,IonTabs:A},data(){return{apiKey:"AIzaSyA7nyAevnZcR1GncVAydyO9Nkip0JCBnb8"}},methods:{async initMap(){const s=document.getElementById("map");await y.create({id:"my-map",element:s,apiKey:this.apiKey,config:{center:{lat:10.292198386924168,lng:123.71660311714773},zoom:25}})}},async mounted(){this.initMap()},setup(){return{home:H,accessibility:V,square:$}}});function Z(s,e,i,t,o,h){const d=c("ion-title"),m=c("ion-toolbar"),g=c("ion-header"),L=c("ion-content"),l=c("ion-router-outlet"),u=c("ion-icon"),C=c("ion-label"),v=c("ion-tab-button"),w=c("ion-tab-bar"),p=c("ion-tabs"),b=c("ion-footer"),I=c("ion-page");return q(),j(I,null,{default:a(()=>[r(g,null,{default:a(()=>[r(m,{color:"primary"},{default:a(()=>[r(d,null,{default:a(()=>e[0]||(e[0]=[k(" Map ")])),_:1})]),_:1})]),_:1}),r(L,null,{default:a(()=>e[1]||(e[1]=[G("div",{id:"map"},null,-1)])),_:1}),r(b,null,{default:a(()=>[r(m,null,{default:a(()=>[r(p,null,{default:a(()=>[r(l),r(w,{slot:"bottom"},{default:a(()=>[r(v,{tab:"home",href:"/home"},{default:a(()=>[r(u,{"aria-hidden":"true",icon:s.home},null,8,["icon"]),r(C,null,{default:a(()=>e[2]||(e[2]=[k("Home")])),_:1})]),_:1}),r(v,{tab:"Login",href:"/Login"},{default:a(()=>[r(u,{"aria-hidden":"true",icon:s.accessibility},null,8,["icon"]),r(C,null,{default:a(()=>e[3]||(e[3]=[k("Log-in Screen")])),_:1})]),_:1}),r(v,{tab:"Profile",href:"/Profile"},{default:a(()=>[r(u,{"aria-hidden":"false",icon:s.square},null,8,["icon"]),r(C,null,{default:a(()=>e[4]||(e[4]=[k("Profile Screen")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const U=F(Y,[["render",Z],["__scopeId","data-v-993cab80"]]),ne=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{J as L,M,ne as i};
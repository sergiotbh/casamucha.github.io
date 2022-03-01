"use strict";(self.webpackChunkcasamucha=self.webpackChunkcasamucha||[]).push([[941],{3374:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(3284),c=n.n(a),r=n(2359),o=n(7294),i=n(2182),s=n(7815),l=n(3085),u=n(5671),p=n(3144),m=n(7326),d=n(136),f=n(2963),b=n(1120);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,b.Z)(e);if(t){var c=(0,b.Z)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return(0,f.Z)(this,n)}}function h(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},x=function(e){(0,d.Z)(n,e);var t=w(n);function n(e){var a,c;return(0,u.Z)(this,n),(a=t.call(this,e)).reCalculateColumnCount=a.reCalculateColumnCount.bind((0,m.Z)(a)),a.reCalculateColumnCountDebounce=a.reCalculateColumnCountDebounce.bind((0,m.Z)(a)),c=a.props.breakpointCols&&a.props.breakpointCols.default?a.props.breakpointCols.default:parseInt(a.props.breakpointCols)||2,a.state={columnCount:c},a}return(0,p.Z)(n,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});var n=1/0,a=t.default||2;for(var c in t){var r=parseInt(c);r>0&&e<=r&&r<n&&(n=r,a=t[c])}a=Math.max(1,parseInt(a)||1),this.state.columnCount!==a&&this.setState({columnCount:a})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=o.Children.toArray(this.props.children),a=0;a<n.length;a++){var c=a%e;t[c]||(t[c]=[]),t[c].push(n[a])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,a=void 0===n?{}:n,c=e.columnClassName,r=this.itemsInColumns(),i="".concat(100/r.length,"%"),s=c;s&&"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var l=C(C(C({},t),a),{},{style:C(C({},a.style),{},{width:i}),className:s});return r.map((function(e,t){return o.createElement("div",y({},l,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=h(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),a=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(a="my-masonry-grid")),o.createElement("div",y({},n,{className:a}),this.renderColumns())}}]),n}(o.Component);x.defaultProps=j;var O=x,k=function(e){var t=e.data;return(0,o.useEffect)((function(){c().init({duration:2e3})}),[]),o.createElement(s.Z,{noHero:!0},o.createElement("section",{className:"px-12 pt-12 md:pl-16 lg:pl-32 md:pr-0 md:py-0"},o.createElement("section",{className:"md:flex pt-16 md:pt-28"},o.createElement("section",{className:"flex-grow md:flex md:flex-col lg:justify-center items-center mb-12 md:mb-0 mr-5"},o.createElement("img",{src:l.Z,alt:"Logo Recepcion",className:"w-40 md:w-56 mb-8 mx-auto"}),o.createElement(i.Paragraph,{customStyle:"md:max-w-md mb-10"},"La Recepción es una tienda donde podrás encontrar arte y artículos utilitarios que reflejan la inspiración de Casa Mucha. Donde nuestros artistas favoritos cuentan sus historias y tú te podrás llevar un pedacito de ellas.")),o.createElement(r.S,{src:"../assets/images/recepcion_01.jpeg",width:709,height:450,__imageData:n(1732)})),o.createElement("section",{className:"grid md:grid-cols-5 md:flex-row items-center"},o.createElement(r.S,{src:"../assets/images/recepcion_02.jpeg",width:709,height:450,className:"flex-grow mt-10 md:ml-18 md:-mt-5 xl:-mt-24 col-span-3",__imageData:n(3090)}),o.createElement(i.Paragraph,{customStyle:"col-span-2 p-8 xl:py-0 lg:-mt-12 xl:-mt-24 lg:px-12"},"Nuestra recepción es el lugar donde podremos conocernos mejor y te daremos recomendaciones acerca de lo que hay en el barrio para que te enamores de Guadalajara tanto como nosotros."))),o.createElement("section",{className:"flex justify-center mx-12 py-12"},o.createElement(i.PageSubtitle,{customStyle:"text-center"},"Conoce más de nuestros productos aquí")),o.createElement(O,{breakpointCols:3,className:"flex p-5 md:px-32 md:pt-0 md:pb-32"},t.recepcionPhotos.edges.map((function(e,t){return o.createElement("div",{"data-aos":"fade-in",className:"",key:t},o.createElement(r.G,{image:(0,r.d)(e.node.childImageSharp),className:"m-1 md:m-2"}))}))))}},3090:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#786858","images":{"fallback":{"src":"/static/8c4a8ed10b181494311b4fcb9140f078/66b33/recepcion_02.jpg","srcSet":"/static/8c4a8ed10b181494311b4fcb9140f078/5f1a6/recepcion_02.jpg 177w,\\n/static/8c4a8ed10b181494311b4fcb9140f078/9c08a/recepcion_02.jpg 355w,\\n/static/8c4a8ed10b181494311b4fcb9140f078/66b33/recepcion_02.jpg 709w,\\n/static/8c4a8ed10b181494311b4fcb9140f078/d072b/recepcion_02.jpg 1418w","sizes":"(min-width: 709px) 709px, 100vw"},"sources":[{"srcSet":"/static/8c4a8ed10b181494311b4fcb9140f078/eef78/recepcion_02.webp 177w,\\n/static/8c4a8ed10b181494311b4fcb9140f078/455bb/recepcion_02.webp 355w,\\n/static/8c4a8ed10b181494311b4fcb9140f078/68ec2/recepcion_02.webp 709w,\\n/static/8c4a8ed10b181494311b4fcb9140f078/e6272/recepcion_02.webp 1418w","type":"image/webp","sizes":"(min-width: 709px) 709px, 100vw"}]},"width":709,"height":450}')},1732:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#885838","images":{"fallback":{"src":"/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/66b33/recepcion_01.jpg","srcSet":"/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/5f1a6/recepcion_01.jpg 177w,\\n/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/9c08a/recepcion_01.jpg 355w,\\n/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/66b33/recepcion_01.jpg 709w,\\n/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/d072b/recepcion_01.jpg 1418w","sizes":"(min-width: 709px) 709px, 100vw"},"sources":[{"srcSet":"/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/eef78/recepcion_01.webp 177w,\\n/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/455bb/recepcion_01.webp 355w,\\n/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/68ec2/recepcion_01.webp 709w,\\n/static/ec74c8ea8db63a7cd1910cc73a0f2b4a/e6272/recepcion_01.webp 1418w","type":"image/webp","sizes":"(min-width: 709px) 709px, 100vw"}]},"width":709,"height":450}')}}]);
//# sourceMappingURL=component---src-pages-la-recepcion-js-b0cbff59dccf631f2fa4.js.map
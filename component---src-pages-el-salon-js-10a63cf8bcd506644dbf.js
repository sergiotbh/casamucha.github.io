"use strict";(self.webpackChunkcasamucha=self.webpackChunkcasamucha||[]).push([[918],{9246:function(M,c,e){var s=e(2359),L=e(7294),t=e(1639);c.Z=function(M){var c=M.images,e=M.logoOverlay,a=M.noOverlay,N=M.photoCaption,u=(0,L.useState)(0),j=u[0],w=u[1];(0,L.useEffect)((function(){var M=window.setInterval((function(){i()}),1e4);return function(){window.clearInterval(M)}}),[]);var i=function(){w((function(M){return M>=c.length-1?0:M+1}))};return L.createElement("div",{className:"relative h-screen"},L.createElement(s.G,{image:(0,s.d)(c[j].node.childImageSharp),fullWidth:!0,className:"h-full"}),L.createElement("div",{className:"absolute top-0 z-40 flex justify-center items-center w-full h-screen bg-black "+(a?"bg-opacity-0":"bg-opacity-40")},e),L.createElement(t.lH,{dark:!a,customStyle:"absolute bottom-2 right-2"},N))}},611:function(M,c,e){e.r(c),e.d(c,{default:function(){return u}});var s=e(7294),L=e(9246),t=e(8746),a=e(1639),N=e(2359),u=function(M){var c=M.data;return s.createElement(t.Z,null,s.createElement(L.Z,{images:c.homeHeroPhotos.edges,logoOverlay:s.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBkYXRhLW5hbWU9IkNhcGEgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzkyIDQxMi42NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmZmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMyNS44NSwyMTEuODljMTIuNDUsOS4xNiwyNi42MSwxNy40NiwyNi42MSwyOS4zLDAsMTEuMTEtMTMuMDYsMjMuNjgtMzIuNDcsMjMuNjgtMTQuNzcsMC0yMi45NS0zLjMtMzAuMzktMTEuNkwzMDQsMjM4YzUuMzcsOC42NywxMi45NCwxNywyNy4yMiwxNyw1LjEzLDAsNy4yLTEuNDYsNy4yLTQsMC01LjYxLTEyLjY0LTE2LjE3LTI1LjYzLTI2LjQ5LTEyLjQ1LTkuODgtMjEuMzYtMTYuODQtMjEuMzYtMjcuNzEsMC0xMS4xLDEwLjEzLTIyLjcsMzAuNjQtMjIuNywxMy42NywwLDIxLjI0LDMuOSwyNSw3LjMyTDM0MCwyMDAuNTRjLTguNDItNi43Mi0xOC4wNy0xNS41MS0zMC44OC0xNS41MS0zLjY3LDAtNi4xMS43Ni02LjExLDMuNzlDMzAzLDE5My4wOSwzMTQuNiwyMDMuNjIsMzI1Ljg1LDIxMS44OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNDMuMDksMjYzLjYySDE4NWM0LjUzLTUuMjIsNC43NS0xMy4wNiw0Ljc2LTE0LjE2VjE5MC4zN2MwLTEuMS0uMjMtOC45NC00Ljc2LTE0LjE2aDI0Ljc4YTI5LjEsMjkuMSwwLDAsMC00LjY0LDE0LjI5djY0LjY5aDE4LjhhOC41Nyw4LjU3LDAsMCwwLDMuMTctLjczLDE4LjA5LDE4LjA5LDAsMCwwLDItMS4xbDcuNy02WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ0My43MSwyNjMuNjRINDE0LjI5czMuNS0zLjU4LDMuNS04LjNhOS42Myw5LjYzLDAsMCwwLS4zMi0yLjQ0LDkyLjcxLDkyLjcxLDAsMCwwLTUuMzctMTQuNzdIMzg0Ljg3bC0yLjE5LDcuOTRjLTEuMjksNC41My0yLjI3LDcuOS0yLjI3LDEwLjg1YTEwLjc1LDEwLjc1LDAsMCwwLDIuMjcsNi43MmgtMjIuMWE0My45Myw0My45MywwLDAsMCwxMS4xMS0xNy41N2wxOC42OC01NC44MmMxLjg4LTUsMi42NC04LjE3LDIuNjQtMTEuMDZhMjEuNjQsMjEuNjQsMCwwLDAtLjgxLTUuNTRoMTMuOTFsMjIuMzQsNjEuMjhDNDMyLjM2LDI0NS41OCw0MzYuMjcsMjU4LDQ0My43MSwyNjMuNjRabS00NS41My02Mi4zN0wzODcuOCwyMjkuNzFsMjEuMjUuMTJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTc1LDI2My42NUgxMTUuNTFjNC41My01LjIyLDQuNzUtMTMuMDYsNC43Ni0xNC4xNlYxOTAuNGMwLTEuMS0uMjMtOC45NC00Ljc2LTE0LjE2SDE3NWwtNi4zNSwxNi4yNC03LjY5LTZhMTkuNDIsMTkuNDIsMCwwLDAtMS45NS0xLjEsOC42LDguNiwwLDAsMC0zLjE4LS43M0gxMzd2MzAuNzZoMTIuOTVjMS4wOSwwLDguOTQtLjIzLDE0LjE1LTQuNzZ2MTcuODJhMjksMjksMCwwLDAtMTQuMjgtNC42NEgxMzd2MzEuMzdoMTguOGE4LjYsOC42LDAsMCwwLDMuMTgtLjczLDE5LjQyLDE5LjQyLDAsMCwwLDEuOTUtMS4xbDcuNjktNloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01NTAuNDUsMTc0LjYxYy0yMS4xMiwwLTM4LjA4LDEyLjA4LTM4LjA4LDQ1LjUzczE3LDQ1LjI5LDM4LjA4LDQ1LjI5LDM4LjA5LTExLjg0LDM4LjA5LTQ1LjI5QzU4OC41NCwxODcuMTgsNTcxLjU3LDE3NC42MSw1NTAuNDUsMTc0LjYxWm0xMy40Myw4MS4wNmMtMjIuNDYsMC0zMC40LTE1LTM0LjkxLTMxLjg3YTg5LjMxLDg5LjMxLDAsMCwxLTMuNDItMjIuMWMwLTguNjYsMi40LTE0LjQsOC0xNC40aC4xMWMyOC4wNywwLDMxLjczLDE0LDM2Ljc0LDMyLjcyLDEuOTQsNy4yNCwzLjY0LDE1LjIzLDMuNjQsMjEuODFDNTc0LDI0OS43OCw1NzEuNSwyNTUuNjcsNTYzLjg4LDI1NS42N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MTkuNDgsMTc2LjI0bDQyLDYwLjNWMTkzLjgxYzAtOC4xNy0xLjM0LTEyLjMzLTQuMzktMTcuNTdoMTkuNDFjLTMsNS4yNC00LjQsOS41Mi00LjQsMTYuODR2NzIuMjdzLTYuMS0uMTItMTAuMTMtMi4yYy0zLjc4LTEuOTUtNy4zNS03LTcuMzUtN2wtMzcuNDUtNTIuMTJ2NDJjMCw4LjE4LDEuNDcsMTIuMzMsNC41MiwxNy41OEg2MDIuMjdjMy4wNS01LjI1LDQuMzktOS40LDQuMzktMTcuNThWMTkzLjgxYzAtOC4xNy0xLjM0LTEyLjMzLTQuMzktMTcuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTEwLjIzLDI2My42Mkg0NTIuMTJjNC41NC01LjIyLDQuNzUtMTMuMDYsNC43Ni0xNC4xNlYxOTAuMzdjMC0xLjEtLjIyLTguOTQtNC43Ni0xNC4xNkg0NzYuOWEyOS4xLDI5LjEsMCwwLDAtNC42NCwxNC4yOXY2NC42OWgxOC44YTguNiw4LjYsMCwwLDAsMy4xOC0uNzMsMTkuNDIsMTkuNDIsMCwwLDAsMS45NS0xLjFsNy42OS02WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU3Ni41NCwxNDcuMjJhNjQuODQsNjQuODQsMCwwLDEtMjUuNzYsMTcuODNsOS4xNi0xNy44M1oiLz48L3N2Zz4=",className:"w-60 md:w-96",alt:"Casa Mucha"})}),s.createElement("section",{className:"grid grid-cols-12 ml-32 gap-6 my-28"},s.createElement("section",{className:"flex flex-col items-end col-span-5"},s.createElement(a.sB,{customStyle:"mb-24"},"El Salón es un espacio para que las personas compartan sus saberes, oficios y creaciones."),s.createElement(N.S,{src:"../assets/images/muchas_07.jpg",width:478,height:629,__imageData:e(5129)})),s.createElement("section",{className:"col-span-7"},s.createElement(N.S,{src:"../assets/images/muchas_06.jpg",width:589,height:393,className:"mb-12 shadow-lg",__imageData:e(6579)}),s.createElement(N.S,{src:"../assets/images/muchas_05.jpg",width:709,height:629,__imageData:e(4756)}))))}},4756:function(M){M.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#585838","images":{"fallback":{"src":"/static/990fc8e255eb23a6608397761eff7c16/e14e8/muchas_05.jpg","srcSet":"/static/990fc8e255eb23a6608397761eff7c16/69345/muchas_05.jpg 177w,\\n/static/990fc8e255eb23a6608397761eff7c16/3f81d/muchas_05.jpg 355w,\\n/static/990fc8e255eb23a6608397761eff7c16/e14e8/muchas_05.jpg 709w","sizes":"(min-width: 709px) 709px, 100vw"},"sources":[{"srcSet":"/static/990fc8e255eb23a6608397761eff7c16/24b95/muchas_05.webp 177w,\\n/static/990fc8e255eb23a6608397761eff7c16/5b095/muchas_05.webp 355w,\\n/static/990fc8e255eb23a6608397761eff7c16/76e7c/muchas_05.webp 709w","type":"image/webp","sizes":"(min-width: 709px) 709px, 100vw"}]},"width":709,"height":629}')},5129:function(M){M.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8d91bc026ef1ef581988832a3904bffd/50e4a/muchas_07.jpg","srcSet":"/static/8d91bc026ef1ef581988832a3904bffd/a0122/muchas_07.jpg 120w,\\n/static/8d91bc026ef1ef581988832a3904bffd/1fb72/muchas_07.jpg 239w,\\n/static/8d91bc026ef1ef581988832a3904bffd/50e4a/muchas_07.jpg 478w,\\n/static/8d91bc026ef1ef581988832a3904bffd/d3166/muchas_07.jpg 956w","sizes":"(min-width: 478px) 478px, 100vw"},"sources":[{"srcSet":"/static/8d91bc026ef1ef581988832a3904bffd/c8137/muchas_07.webp 120w,\\n/static/8d91bc026ef1ef581988832a3904bffd/6d1c7/muchas_07.webp 239w,\\n/static/8d91bc026ef1ef581988832a3904bffd/de5bf/muchas_07.webp 478w,\\n/static/8d91bc026ef1ef581988832a3904bffd/8a792/muchas_07.webp 956w","type":"image/webp","sizes":"(min-width: 478px) 478px, 100vw"}]},"width":478,"height":629}')},6579:function(M){M.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/78c28f5722bf5601421c7376c3cc5ea2/4ac3d/muchas_06.jpg","srcSet":"/static/78c28f5722bf5601421c7376c3cc5ea2/f0384/muchas_06.jpg 147w,\\n/static/78c28f5722bf5601421c7376c3cc5ea2/fa808/muchas_06.jpg 295w,\\n/static/78c28f5722bf5601421c7376c3cc5ea2/4ac3d/muchas_06.jpg 589w","sizes":"(min-width: 589px) 589px, 100vw"},"sources":[{"srcSet":"/static/78c28f5722bf5601421c7376c3cc5ea2/540e4/muchas_06.webp 147w,\\n/static/78c28f5722bf5601421c7376c3cc5ea2/6966e/muchas_06.webp 295w,\\n/static/78c28f5722bf5601421c7376c3cc5ea2/45294/muchas_06.webp 589w","type":"image/webp","sizes":"(min-width: 589px) 589px, 100vw"}]},"width":589,"height":393}')}}]);
//# sourceMappingURL=component---src-pages-el-salon-js-10a63cf8bcd506644dbf.js.map
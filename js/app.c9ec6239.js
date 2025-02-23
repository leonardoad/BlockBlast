(function(){"use strict";var e={6097:function(e,t,r){var o=r(5130),s=r(6768);function a(e,t,r,o,a,n){const h=(0,s.g2)("GameBoard");return(0,s.uX)(),(0,s.Wv)(h)}var n=r(4232);const h={class:"game-board"},l={class:"score-board"},i={class:"high-score"},c={class:"shape-selection"},d={key:0,class:"game-over-overlay"};function u(e,t,r,a,u,p){const f=(0,s.g2)("Block");return(0,s.uX)(),(0,s.CE)("div",h,[t[4]||(t[4]=(0,s.Lk)("div",{class:"title"},"Block Blast!",-1)),(0,s.Lk)("div",l,[(0,s.Lk)("div",i,"High Score: "+(0,n.v_)(u.highScore),1),(0,s.Lk)("div",{class:(0,n.C4)(["score",{highlight:u.isHighScoreAnimated}])},(0,n.v_)(u.scoreDisplay),3)]),(0,s.Lk)("div",{class:"grid",onDragover:t[0]||(t[0]=(0,o.D$)(((...t)=>e.handleDragOver&&e.handleDragOver(...t)),["prevent"])),onDrop:t[1]||(t[1]=(...e)=>p.handleDrop&&p.handleDrop(...e)),ref:"gameBoard"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(u.board,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"row",key:t},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e,((e,r)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,n.C4)(["cell",{"filled-cell":e,"hover-cell":p.isHoverCell(t,r)}]),key:r,style:(0,n.Tr)(p.applyCellStyle(e))},null,6)))),128))])))),128))],544),(0,s.Lk)("div",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(u.currentShapes,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.bF)(f,{shape:u.shapes[e],name:e,index:t,onShapeClicked:p.handleShapeClicked,onShapeDragged:p.handleShapeDragged,onShapeDropped:p.handleShapeDropped},null,8,["shape","name","index","onShapeClicked","onShapeDragged","onShapeDropped"])])))),128))]),u.gameOver?((0,s.uX)(),(0,s.CE)("div",d,[t[3]||(t[3]=(0,s.Lk)("div",{class:"game-over-message"},"Game Over!",-1)),(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>p.resetBoard&&p.resetBoard(...e)),class:"restart-button"},"Restart")])):(0,s.Q3)("",!0)])}r(4114),r(8111),r(1148),r(7588),r(3579);function p(e,t,r,o,a,h){return(0,s.uX)(),(0,s.CE)("div",{class:"shape",onMousedown:t[0]||(t[0]=(...e)=>h.handleMouseDown&&h.handleMouseDown(...e)),onDragstart:t[1]||(t[1]=(...e)=>h.handleDragStart&&h.handleDragStart(...e)),onDragend:t[2]||(t[2]=(...t)=>e.handleDragEnd&&e.handleDragEnd(...t)),onTouchstart:t[3]||(t[3]=(...e)=>h.handleTouchStart&&h.handleTouchStart(...e)),onTouchmove:t[4]||(t[4]=(...e)=>h.handleTouchMove&&h.handleTouchMove(...e)),onTouchend:t[5]||(t[5]=(...e)=>h.handleTouchEnd&&h.handleTouchEnd(...e)),style:(0,n.Tr)(h.shapeStyle),draggable:"true"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.shape,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"row",key:t},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e,((e,r)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,n.C4)(["block",{fill:h.applyStyles(t,r),dragging:a.isDragging}]),key:r,style:(0,n.Tr)(h.applyStyles(t,r))},null,6)))),128))])))),128))],36)}var f={name:"BlockComponent",props:{name:{type:String,required:!1,default:"Block"},shape:{type:Array,required:!0},index:{type:Number,required:!0}},data(){return{blockStyle:{},offsetX:0,offsetY:0,touchCurrentX:0,touchCurrentY:0,isDragging:!1,color:this.getRandomColor()}},computed:{shapeStyle(){return this.isDragging?{position:"absolute",left:`${this.touchCurrentX}px`,top:`${this.touchCurrentY}px`,zIndex:1e3}:{}}},methods:{applyStyles(e,t){if(this.shape)return this.shape[e][t]?{background:`linear-gradient(145deg, ${this.color}, ${this.color} 50%, ${this.color} 50%, ${this.color} 100%)`}:void 0},handleMouseDown(){this.$emit("shapeClicked",{name:this.name,color:this.color})},handleDragStart(e){e.dataTransfer.setData("name",this.name);const t=e.target.getBoundingClientRect(),r=e.clientX-t.left,o=e.clientY-t.top;e.dataTransfer.setData("offsetX",r),e.dataTransfer.setData("offsetY",o)},handleTouchStart(e){e.preventDefault();const t=e.target.parentElement.getBoundingClientRect();this.offsetX=e.touches[0].clientX-t.left,this.offsetY=e.touches[0].clientY-t.top,this.touchCurrentX=e.touches[0].clientX-this.offsetX,this.touchCurrentY=e.touches[0].clientY-this.offsetY-60*this.shape.length,this.isDragging=!0,this.$emit("shapeClicked",{name:this.name,color:this.color})},handleTouchMove(e){const t=e.touches[0];this.touchCurrentX=t.clientX-this.offsetX,this.touchCurrentY=t.clientY-this.offsetY-60*this.shape.length,this.$emit("shapeDragged",{name:this.name,clientX:t.clientX,clientY:t.clientY-this.offsetY-55*this.shape.length,offsetX:this.offsetX,offsetY:this.offsetY})},handleTouchEnd(e){this.isDragging=!1;const t=e.changedTouches[0];this.$emit("shapeDropped",{name:this.name,clientX:t.clientX,clientY:t.clientY-60*this.shape.length,offsetX:this.offsetX,offsetY:this.offsetY})},getRandomColor(){const e="0123456789ABCDEF";let t="#";for(let r=0;r<6;r++)t+=e[Math.floor(16*Math.random())];return t}}},g=r(1241);const m=(0,g.A)(f,[["render",p]]);var v=m,S={components:{Block:v},name:"GameBoard",data(){return{board:Array.from({length:8},(()=>Array(8).fill(null))),shapes:{square:[[1,1],[1,1]],line:[[1,1,1,1]],line2:[[1],[1],[1],[1]],t:[[1,1,1],[0,1,0]],t2:[[1,0],[1,1],[1,0]],t3:[[0,1,0],[1,1,1]],t4:[[0,1],[1,1],[0,1]],single:[[1]],l:[[1,0],[1,0],[1,1]],l2:[[1,1],[0,1],[0,1]],l3:[[1,1],[1,0],[1,0]],l4:[[1,1,1],[0,0,1]],l5:[[1,1,1],[1,0,0]],j:[[0,1],[0,1],[1,1]],s:[[0,1,1],[1,1,0]],z:[[1,1,0],[0,1,1]],bSquare:[[1,1,1],[1,1,1],[1,1,1]],rectangle:[[1,1,1],[1,1,1]],rectangle2:[[1,1],[1,1],[1,1]],corner:[[1,1],[0,1]],corner2:[[1,0],[1,1]],corner3:[[0,1],[1,1]],corner4:[[1,1],[1,0]]},currentShapes:[],selectedShape:"",selectedShapeColor:"",gameOver:!1,score:0,scoreDisplay:0,highScore:0,isHighScoreAnimated:!1,hoverCells:[]}},watch:{score(e,t){this.incrementScoreDisplay(e,t),e>this.highScore&&this.animateHighScore()}},methods:{incrementScoreDisplay(e,t){if(e>t){let r=1;e-t>50?r=10:e-t>10&&(r=5);const o=setInterval((()=>{this.scoreDisplay+=r,this.scoreDisplay>=this.score&&(this.scoreDisplay=this.score,clearInterval(o))}),1)}},animateHighScore(){this.isHighScoreAnimated=!0,setTimeout((()=>{this.isHighScoreAnimated=!1}),1e3)},resetBoard(){this.board=Array.from({length:8},(()=>Array(8).fill(null))),this.getRandomShapes(),this.gameOver=!1,this.highScore=Math.max(this.highScore,this.score),localStorage.setItem("highScore",this.highScore),this.score=0},addShape(e,t,r){if(!this.checkCollision(e,t,r)){for(let o=0;o<e.length;o++)for(let s=0;s<e[o].length;s++)1===e[o][s]&&(this.board[t+o][r+s]=this.selectedShapeColor,this.score+=1);this.removeShape(this.selectedShape),setTimeout((()=>{this.checkRows(),this.checkColumns(),setTimeout((()=>{this.gameOver=this.checkGameOver()}),1e3)}),500)}},checkCollision(e,t,r){for(let o=0;o<e.length;o++)for(let s=0;s<e[o].length;s++)if(1===e[o][s]&&(void 0===this.board[t+o]||void 0===this.board[t+o][r+s]||null!==this.board[t+o][r+s]))return!0;return!1},checkRows(){for(let e=0;e<this.board.length;e++)this.board[e].every((e=>null!==e))&&(this.board[e].forEach(((t,r)=>{setTimeout((()=>{this.board[e].splice(r,1,null)}),10*r)})),this.score+=40)},checkColumns(){for(let e=0;e<this.board[0].length;e++)this.board.every((t=>null!==t[e]))&&(this.board.forEach(((t,r)=>{setTimeout((()=>{this.board[r].splice(e,1,null)}),10*r)})),this.score+=40)},checkGameOver(){for(let e of this.currentShapes)for(let t=0;t<=this.board.length-this.shapes[e].length;t++)for(let r=0;r<=this.board[0].length-this.shapes[e][0].length;r++)if(!this.checkCollision(this.shapes[e],t,r))return!1;return!0},handleShapeClicked(e){this.selectedShape=e.name,this.selectedShapeColor=e.color},handleShapeDragged(e){const t=parseFloat(e.offsetX),r=parseFloat(e.offsetY),o=this.$refs.gameBoard.getBoundingClientRect(),s=e.clientX-o.left-t,a=e.clientY-o.top-r,n=Math.floor(a/40),h=Math.floor(s/40);this.updateHoverCells(this.shapes[this.selectedShape],n,h)},handleShapeDropped(e){const t=parseFloat(e.offsetX),r=parseFloat(e.offsetY),o=this.$refs.gameBoard.getBoundingClientRect(),s=e.clientX-o.left-t,a=e.clientY-o.top-r,n=Math.floor(a/40),h=Math.floor(s/40);this.addShape(this.shapes[this.selectedShape],n,h),this.clearHoverCells()},handleDrop(e){const t=e.dataTransfer.getData("name");if(!t)return;const r=parseFloat(e.dataTransfer.getData("offsetX")),o=parseFloat(e.dataTransfer.getData("offsetY")),s=this.$refs.gameBoard.getBoundingClientRect(),a=e.clientX-s.left-r,n=e.clientY-s.top-o,h=Math.floor(n/40),l=Math.floor(a/40);this.addShape(this.shapes[t],h,l),this.clearHoverCells()},removeShape(e){const t=this.currentShapes.indexOf(e);t>-1&&this.currentShapes.splice(t,1),0===this.currentShapes.length&&this.getRandomShapes()},getRandomShapes(){this.currentShapes=Array.from({length:3},(()=>Object.keys(this.shapes)[Math.floor(Math.random()*Object.keys(this.shapes).length)])),this.checkGameOver()&&this.getRandomShapes()},applyCellStyle(e){return null!==e?{background:`linear-gradient(145deg, ${e}, ${e} 50%, ${e} 50%, ${e} 100%)`}:{}},updateHoverCells(e,t,r){if(this.hoverCells=[],!this.checkCollision(e,t,r))for(let o=0;o<e.length;o++)for(let s=0;s<e[o].length;s++)1===e[o][s]&&this.hoverCells.push({row:t+o,col:r+s})},clearHoverCells(){this.hoverCells=[]},isHoverCell(e,t){return this.hoverCells.some((r=>r.row===e&&r.col===t))}},mounted(){const e=localStorage.getItem("highScore");null!==e&&(this.highScore=parseInt(e,10)),this.resetBoard()}};const C=(0,g.A)(S,[["render",u]]);var y=C,k={name:"App",components:{GameBoard:y}};const b=(0,g.A)(k,[["render",a]]);var D=b;(0,o.Ef)(D).mount("#app")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,s,a){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],a=e[c][2];for(var h=!0,l=0;l<o.length;l++)(!1&a||n>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(h=!1,a<n&&(n=a));if(h){e.splice(c--,1);var i=s();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,s,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,n=o[0],h=o[1],l=o[2],i=0;if(n.some((function(t){return 0!==e[t]}))){for(s in h)r.o(h,s)&&(r.m[s]=h[s]);if(l)var c=l(r)}for(t&&t(o);i<n.length;i++)a=n[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=self["webpackChunkblock_blast"]=self["webpackChunkblock_blast"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(6097)}));o=r.O(o)})();
//# sourceMappingURL=app.c9ec6239.js.map
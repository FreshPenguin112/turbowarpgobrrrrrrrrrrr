(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[49],{1627:function(t,e,n){"use strict";n.r(e),n.d(e,"resources",(function(){return o}));const o={"userscript.js":async function({addon:t,global:e,console:n}){const o=await t.tab.traps.getBlockly(),r=o.BubbleDragger.prototype.endBubbleDrag;o.BubbleDragger.prototype.endBubbleDrag=function(e,n){if(!t.self.disabled&&this.draggingBubble_.comment){const t=this.draggingBubble_.comment.iconXY_.y-o.ScratchBubble.TOP_BAR_HEIGHT/2;n.y=t-this.startXY_.y}return r.call(this,e,n)}}}}}]);
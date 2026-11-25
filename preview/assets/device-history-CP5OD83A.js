import{a as e,c as t,d as n,f as r,l as i,m as a,r as o,s,u as c}from"./index-gLdssqoe.js";import{a as l,i as u,n as d,r as f,t as p}from"./chart-NRMFf3Cu.js";var m=864e5;function h(e,t,n,r,i){let a=e.filter(e=>e.at<=n);if(a.length===0)return{days:[],since:null,count:0};let o=a.map((e,r)=>({from:e.at,to:a[r+1]?.at??n,on:r===a.length-1?t??e.on:e.on})),s=p(n,r),c=[];for(let e=0;e<7;e++){let t=e===0?s:p(s-e*m+m/2,r),a=e===0?n:c[e-1].start,l=o.filter(e=>e.to>t&&e.from<a).map(e=>({from:Math.max(e.from,t),to:Math.min(e.to,a),on:e.on}));if(l.length===0)break;let u=e===0?i(`chart.today`):e===1?i(`chart.yesterday`):new Intl.DateTimeFormat(i.locale,{timeZone:r,weekday:`short`,day:`numeric`}).format(t).replace(/\./g,``);c.push({start:t,end:a,label:u,stretches:l})}return{days:c,since:a[0].at,count:a.length}}var g=[0,6,12,18,24],_=864e5,v=0,y=class extends c{static properties={switches:{attribute:!1},t:{attribute:!1},nowOn:{attribute:!1},now:{type:Number},zone:{type:String},name:{type:String},baseId:{type:String},empty:{type:Boolean,reflect:!0},picked:{state:!0}};sentenceId=`strip-${v+=1}`;days=[];items=[];since=null;count=0;constructor(){super(),this.switches=null,this.nowOn=null,this.now=Date.now(),this.zone=void 0,this.name=``,this.baseId=`onoff`,this.empty=!0,this.picked=null}static styles=[e,a`
    :host { display: block; }
    :host([empty]) { display: none; }
    .head { display: flex; justify-content: space-between; gap: var(--space-8); color: var(--chart-label-fg); font-size: var(--type-label-s-size); line-height: var(--type-label-s-line); }
    .picked { color: inherit; font-size: var(--type-label-m-size); line-height: var(--type-label-m-line); font-variant-numeric: tabular-nums; }
    .rows { position: relative; display: grid; grid-template-columns: max-content minmax(0, 1fr); column-gap: var(--space-12); margin-top: var(--space-8); border-radius: var(--shape-md); }
    .row { grid-column: 1 / -1; display: grid; grid-template-columns: subgrid; align-items: center; min-height: var(--target-min); cursor: pointer; }
    .day { color: var(--chart-label-fg); font-size: var(--type-label-s-size); min-width: var(--target-min); }
    .bar { position: relative; height: var(--chart-band-height); }
    .bar span { position: absolute; top: 0; bottom: 0; left: var(--_from); width: var(--_width); }
    .bar .off { background: var(--chart-band-track); }
    .bar .on { background: var(--chart-band-on); border-radius: var(--shape-xs); }
    .bar .ring { outline: var(--focus-width) solid var(--focus-color); outline-offset: var(--chart-cursor-width); border-radius: var(--shape-xs); }
    .bar .end { width: var(--chart-cursor-width); background: var(--chart-label-fg); left: var(--_from); }
    .times { grid-column: 1 / -1; display: grid; grid-template-columns: subgrid; color: var(--chart-label-fg); font-size: var(--type-label-s-size); }
    .times div { display: flex; justify-content: space-between; font-variant-numeric: tabular-nums; }
    .times .gutter { min-width: var(--target-min); font-style: normal; }
    .reader { position: absolute; inset: 0; border-radius: var(--shape-md); pointer-events: none; }
  `];willUpdate(e){if(e.has(`switches`)||e.has(`nowOn`)||e.has(`now`)||e.has(`zone`)||e.has(`t`)){let e=this.switches&&this.t?h(this.switches.changes,this.nowOn,this.now,this.zone,this.t):{days:[],since:null,count:0};this.days=e.days,this.since=e.since,this.count=e.count,this.items=[...e.days].reverse().flatMap(e=>e.stretches.map(t=>({day:e,stretch:t}))),this.picked!==null&&this.picked>=this.items.length&&(this.picked=null)}this.empty=this.days.length===0}updated(){for(let e of this.shadowRoot?.querySelectorAll(`[data-from]`)??[])e.style.setProperty(`--_from`,`${e.dataset.from}%`),e.style.setProperty(`--_width`,`${e.dataset.width}%`)}lengthOf(e){return p(e.start+_*1.5,this.zone)-e.start}time(e){return d(`last24Hours`,e,this.zone,this.t)}until(e){return e.to>=this.now?this.t(`chart.now`):this.time(e.to)}onKey(e){if(this.items.length===0)return;let t=this.items.length-1,n=this.picked;switch(e.key){case`ArrowLeft`:case`ArrowDown`:n=this.picked===null?t:Math.max(0,this.picked-1);break;case`ArrowRight`:case`ArrowUp`:n=this.picked===null?t:Math.min(t,this.picked+1);break;case`Home`:n=0;break;case`End`:n=t;break;case`Escape`:if(this.picked===null)return;n=null,e.stopPropagation();break;default:return}e.preventDefault(),this.picked=n}onRow(e,t){let n=t.currentTarget.querySelector(`.bar`)?.getBoundingClientRect();if(!n||n.width<=0)return;let r=e.start+Math.min(1,Math.max(0,(t.clientX-n.left)/n.width))*this.lengthOf(e),i=null;this.items.forEach((t,n)=>{t.day===e&&(r<t.stretch.from?t.stretch.from-r:r>t.stretch.to?r-t.stretch.to:0)<(i===null?1/0:(()=>{let e=this.items[i].stretch;return r<e.from?e.from-r:r>e.to?r-e.to:0})())&&(i=n)}),this.picked=i}sentence(){if(this.since===null)return``;let e=this.days[0],t=e?e.stretches.filter(e=>e.on):[],n=this.switches.changes.filter(t=>t.on&&e&&t.at>=e.start&&t.at<=this.now).length,r=t.reduce((e,t)=>e+(t.to-t.from),0)/6e4,i=this.switches.changes.filter(e=>e.at<=this.now).at(-1);return l({name:this.name,baseId:this.baseId,count:this.count,since:d(`last7Days`,this.since,this.zone,this.t),todayTimes:n,todayDuration:s(r,this.t),nowOn:this.nowOn,nowSince:i?this.time(i.at):null},this.t)}render(){if(this.days.length===0)return n;let e=u(this.baseId,this.t),t=this.picked===null?null:this.items[this.picked],i=e=>String(Math.round(e*1e4)/100);return r`
      <div class="head">
        ${t?r`<span class="picked" aria-hidden="true">${this.t(`chart.stretch`,{state:t.stretch.on?e.on:e.off,from:this.time(t.stretch.from),to:this.until(t.stretch)})}</span>`:r`<span></span>`}
        <span class="since">${this.t(this.count===1?`chart.switches.sinceOne`:`chart.switches.since`,{count:this.count,since:d(`last7Days`,this.since,this.zone,this.t)})}</span>
      </div>
      <div class="rows">
        ${this.days.map(e=>{let a=this.lengthOf(e);return r`<div class="row" @click=${t=>this.onRow(e,t)}>
            <span class="day">${e.label}</span>
            <span class="bar">
              ${e.stretches.map(t=>r`<span class=${t.on?`on`:`off`}
                data-from=${i((t.from-e.start)/a)} data-width=${i((t.to-t.from)/a)}></span>`)}
              ${t?.day===e?r`<span class="ring" data-from=${i((t.stretch.from-e.start)/a)} data-width=${i((t.stretch.to-t.stretch.from)/a)}></span>`:n}
              ${e.end>=this.now?r`<span class="end" data-from=${i((e.end-e.start)/a)} data-width="0"></span>`:n}
            </span>
          </div>`})}
        <div class="reader" role="slider" tabindex="0" aria-label=${this.name} aria-describedby=${this.sentenceId}
          aria-valuemin="0" aria-valuemax=${this.items.length-1} aria-valuenow=${this.picked??this.items.length-1}
          aria-valuetext=${(t=>this.t(`chart.stretch.said`,{day:t.day.label,state:(t.stretch.on?e.on:e.off).toLowerCase(),from:this.time(t.stretch.from),to:this.until(t.stretch)}))(t??this.items.at(-1))} @keydown=${this.onKey}></div>
        <div class="times" aria-hidden="true"><i class="gutter"></i><div>${g.map(e=>r`<span>${String(e).padStart(2,`0`)}:00</span>`)}</div></div>
      </div>
      <span class="unseen" id=${this.sentenceId}>${this.sentence()}</span>
    `}};customElements.define(`mh-onoff-strip`,y);var b=[{id:`last24Hours`,key:`chart.day`},{id:`last7Days`,key:`chart.week`},{id:`last31Days`,key:`chart.month`},{id:`year`,key:`chart.year`}],x=[`last24Hours`,`last7Days`],S=class extends c{static properties={ctx:{attribute:!1},device:{attribute:!1},source:{attribute:!1},switchSources:{attribute:!1},readable:{type:Boolean},period:{state:!0},series:{state:!0},loading:{state:!0},switches:{state:!0}};asked=0;timer=null;constructor(){super(),this.source=null,this.switchSources=[],this.readable=!0,this.period=`last24Hours`,this.series=null,this.loading=!1,this.switches={}}static styles=[e,a`
    :host { display: grid; gap: var(--space-8); }
    .card { display: grid; gap: var(--space-12); padding: var(--space-16); border-radius: var(--sheet-row-radius); background: var(--sheet-row-bg); }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: var(--space-8); flex-wrap: wrap; }
    .head b { font-size: var(--type-label-l-size); line-height: var(--type-label-l-line); font-weight: var(--weight-strong); }
    .head span { color: var(--chart-label-fg); font-size: var(--type-label-m-size); font-variant-numeric: tabular-nums; }
    .note { color: var(--chart-label-fg); font-size: var(--type-body-s-size); line-height: var(--type-body-s-line); margin: 0; }
    mh-chart { margin-top: var(--space-24); }
  `];connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>{document.visibilityState!==`hidden`&&this.read()},o)}disconnectedCallback(){super.disconnectedCallback(),this.timer!==null&&clearInterval(this.timer),this.timer=null}willUpdate(e){e.has(`source`)&&e.get(`source`)?.log!==this.source?.log?(this.series=null,this.read()):e.has(`period`)&&this.read(),e.has(`switchSources`)&&this.readSwitches()}read(){let{source:e,period:t}=this,n=this.ctx?.history;if(!e||!n)return;let r=++this.asked;this.loading=this.series===null,n.series(e,t).then(e=>{r===this.asked&&(this.series=e,this.loading=!1)},()=>{r===this.asked&&(this.loading=!1)})}readSwitches(){let e=this.ctx?.history;if(e)for(let t of this.switchSources)e.switches(t).then(e=>{e&&(this.switches={...this.switches,[t.log]:e})},()=>{})}format(e){let n=this.device.capabilities[e];return e=>n?i(t({...n,value:e},`full`,this.ctx.t)):String(e)}renderNumbers(e){let{t}=this.ctx,i=this.device.capabilities[e.capabilityId];if(!i)return n;let a=this.format(e.capabilityId),o=(this.series?.points??[]).flatMap(e=>e.value===null?[]:[e.value]),s=typeof i.value==`number`&&Number.isFinite(i.value)?i.value:null,c=s===null?o:[...o,s],l=c.length>0?t(`chart.range`,{low:a(Math.min(...c)),high:a(Math.max(...c))}):``,u=this.series?.points.find(e=>e.value!==null)?.at??null,p=this.series&&u!==null&&u-this.series.start>this.series.step*2,m=this.series!==null&&o.length===0;return r`<div class="card">
      <div class="head"><b>${i.title} · ${f(this.period,t)}</b><span>${l}</span></div>
      ${m?r`<p class="note">${t(`chart.noneInPeriod`)}</p>`:n}
      <mh-chart variant="window" .series=${m?null:this.series} ?loading=${this.loading} .kind=${{baseId:i.baseId,units:i.units}}
        .format=${a} .t=${t} period=${this.period} name=${i.title} .now=${Date.now()} .nowValue=${s} ?area=${x.includes(this.period)}
        ?readable=${this.readable}></mh-chart>
      ${p?r`<p class="note">${t(`chart.measuredSince`,{since:d(`last31Days`,u,void 0,t)})}</p>`:n}
      <mh-choice-group label=${t(`chart.periods`)} .options=${b.map(e=>({id:e.id,label:t(e.key)}))} value=${this.period}
        @change=${e=>{e.stopPropagation(),this.period=e.detail.value}}></mh-choice-group>
    </div>`}renderSwitches(e){let{t}=this.ctx,i=this.switches[e.log],a=this.device.capabilities[e.capabilityId];return!i||!a?n:r`<div class="card">
      <div class="head"><b>${this.switchSources.length>1?a.title:t(a.baseId===`alarm_contact`?`chart.openClosed`:a.baseId===`alarm_motion`?`chart.motionTitle`:`chart.onOff`)}</b></div>
      <mh-onoff-strip .switches=${i} .t=${t} .nowOn=${typeof a.value==`boolean`?a.value:null} .now=${Date.now()}
        name=${a.title} baseId=${a.baseId}></mh-onoff-strip>
    </div>`}render(){return!this.ctx||!this.device?n:r`${this.source?this.renderNumbers(this.source):n}${this.switchSources.map(e=>this.renderSwitches(e))}`}};customElements.get(`mh-device-history`)||customElements.define(`mh-device-history`,S);
"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59527],{89592:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>s});var n=o(24691);const a={},i=(0,o(89260).A)(a,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"tuya-ts004f",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-ts004f"},[(0,n.Lk)("span",null,"Tuya TS004F")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"TS004F")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Wireless switch with 4 buttons")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, operation_mode, action, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS004F.png",alt:"Tuya TS004F"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="serialnumber" tabindex="-1"><a class="header-anchor" href="#serialnumber"><span>Serialnumber</span></a></h3><table><thead><tr><th>Location</th><th>Serial</th></tr></thead><tbody><tr><td>Above the battery</td><td>ESW-OZBA-EU</td></tr></tbody></table><h3 id="button-positions" tabindex="-1"><a class="header-anchor" href="#button-positions"><span>Button positions</span></a></h3><table><thead><tr><th>1</th><th>2</th></tr></thead><tbody><tr><td>3</td><td>4</td></tr></tbody></table><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To enter pairing mode hold button 3 (about 10 seconds) until all 4 LEDs start flashing. Note: When the battery is low, it will also flash all 4 leds, so if your pairing is failing, double check your battries.</p><h3 id="device-modes" tabindex="-1"><a class="header-anchor" href="#device-modes"><span>Device modes</span></a></h3><p>This device has two modes:</p><ol><li>dimmer mode</li><li>switch mode <em>(to have the 12 actions mentioned below)</em></li></ol><p>To switch between modes hold buttons 2+4 (about 6 seconds) until light 3 flashes once.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',12)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum"><span>Operation mode (enum)</span></a></h3><p>Operation mode: &quot;command&quot; - for group control, &quot;event&quot; - for clicks. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>, <code>brightness_stop</code>, <code>1_single</code>, <code>1_double</code>, <code>1_hold</code>, <code>2_single</code>, <code>2_double</code>, <code>2_hold</code>, <code>3_single</code>, <code>3_double</code>, <code>3_hold</code>, <code>4_single</code>, <code>4_double</code>, <code>4_hold</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11))])}]]),s=JSON.parse('{"path":"/devices/TS004F.html","title":"Tuya TS004F control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS004F control via MQTT","description":"Integrate your Tuya TS004F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-30T19:17:03.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Serialnumber","slug":"serialnumber","link":"#serialnumber","children":[]},{"level":3,"title":"Button positions","slug":"button-positions","link":"#button-positions","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Device modes","slug":"device-modes","link":"#device-modes","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729798646000},"filePathRelative":"devices/TS004F.md"}')}}]);
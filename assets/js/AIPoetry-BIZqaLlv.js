import{d as se,f as d,e as L,A as oe,z as re,g as r,h as t,l as D,q as x,j as ie,t as o,k as ue,D as ce,n as N,F as z,i as E,C as q,o as i}from"./vendor-BA6P5Hzh.js";import{s as G,i as O,_ as de}from"./index-CqFJ73M8.js";const ve={class:"ai-poetry-container"},he={class:"toolbar"},me={class:"toolbar-actions"},pe={class:"main-content"},ge={class:"image-panel"},fe={class:"artwork-display"},ye=["src"],_e={class:"artwork-info"},ke={class:"theme-input"},be={key:0,class:"hint error"},Me={key:1,class:"hint"},Ce={class:"action-buttons"},we=["disabled"],Ie=["disabled"],Pe={class:"poetry-panel"},Te={key:0,class:"poetry-container"},Ae={class:"poem-title"},Se={class:"calligraphy-styles"},$e={class:"style-options"},Le=["onClick"],xe={key:1,class:"poetry-placeholder"},Ne={key:0,class:"gallery-panel"},Fe={class:"gallery-header"},Ve={class:"gallery-grid"},We=["onClick"],je=["src"],Be={class:"item-title"},De=se({__name:"AIPoetry",setup(ze){const R=ie(),I=d(0),u=d(""),b=d(!1),P=d(!1),v=d(""),h=d(!1),c=d(""),M=d("regular"),g=d(""),U=L(()=>G[I.value]),C=L(()=>O(I.value)),H=d([{id:"regular",name:"楷书",description:"端正规范的书写风格，笔画分明"},{id:"running",name:"行书",description:"介于楷书与草书之间，兼具规范与流畅"},{id:"seal",name:"篆书",description:"古老典雅的书体，线条均匀、富有韵律感"}]),A=[{title:"山水画卷",poem:`山峦叠嶂云雾绕，
水墨丹青寄情思。
画境天成通造化，
卷舒自在得天时。`},{title:"江南春色",poem:`江水潺潺绕青山，
南国春来百花鲜。
春风拂面香满径，
色彩斑斓醉人眼。`},{title:"青绿山川",poem:`青山绿水映朝霞，
绿树成荫鸟语花。
山重水复疑无路，
川流不息向天涯。`},{title:"墨竹清风",poem:`墨痕淡淡竹影长，
竹节摇曳舞清风。
清气满园如洗礼，
风雅传承古今同。`},{title:"松鹤延年",poem:`松柏常青寿且长，
鹤舞云端显祥瑞。
延年益寿福满堂，
年年岁岁乐无穷。`},{title:"快乐生活",poem:`快马加鞭追日月，
乐享清闲品人生。
生机勃勃春常在，
活力四射笑开颜。`},{title:"美食佳肴",poem:`美味佳肴齐上桌，
食客欢颜笑开怀。
佳节团圆共举杯，
肴香四溢情谊长。`},{title:"数码科技",poem:`数据奔流如江河，
码农熬夜写代码。
科学创新求突破，
技艺精湛智慧多。`},{title:"网络时代",poem:`网罗万象信息流，
络绎不绝新鲜事。
时光荏苒难停步，
代代相传智慧火。`},{title:"城市夜景",poem:`城墙高耸历沧桑，
市井繁华霓虹亮。
夜幕低垂星月明，
景色迷人醉人心。`},{title:"花间蝶舞",poem:`花绽琼枝映日红，
间有彩蝶戏芳丛。
蝶衣轻展随风舞，
舞入香蕊觅春踪。`},{title:"梅雀报春",poem:`梅蕊含香雪未消，
雀鸣枝头唤春潮。
报得东君传暖意，
春色先临白玉桥。`},{title:"荷塘翠羽",poem:`荷风送爽碧连天，
塘畔蒹葭隐翠烟。
翠色欲流映日影，
羽衣仙子立蓬前。`},{title:"竹雀图",poem:`竹影婆娑映碧空，
雀鸣婉转和清风。
图成自有天然趣，
妙笔生花意未穷。`},{title:"秋菊双禽",poem:`秋色平分菊正黄，
菊丛隐现锦禽双。
双栖不惧寒霜重，
禽语啾啾话晚凉。`}],J=()=>{if(u.value.trim())return u.value.trim();const l=C.value.title;return l.length<=4?l:l.replace(/图/g,"")},F=async()=>{if(u.value.trim()&&!W(u.value.trim())){g.value="请只输入中文字符";return}b.value=!0,v.value="",g.value="",c.value=J();let l=u.value.trim()||C.value.title;if(await new Promise(e=>setTimeout(e,2e3)),c.value.length<2){g.value="主题词至少需要2个字",b.value=!1;return}if(c.value.length>=2&&c.value.length<=8){const e=A.find(n=>n.title===l);e?(v.value=e.poem,c.value=l):(v.value=K(c.value),c.value=l)}else{const e=A[Math.floor(Math.random()*A.length)];v.value=e.poem,c.value=e.title}b.value=!1},K=l=>{const e={花:{五言:["花香满庭院","花开春满园","花落知多少","花容映日明","花气袭人来"],七言:["花气袭人知昼暖","花开富贵满庭芳","花影摇窗春梦醒","花落砚池香入墨","花枝招展好风姿"]},鸟:{五言:["鸟鸣山更幽","鸟语报春来","鸟飞入云天","鸟啼惊晓梦","鸟栖何处寻"],七言:["鸟度屏风境自幽","鸟语殷勤报晴晖","鸟宿池边星月静","鸟衔春色入帘来","鸟鸣涧户千山绿"]},山:{五言:["山色映晚霞","山中日已斜","山泉流不息","山静云亦闲","山花烂漫开"],七言:["山峦叠嶂云雾绕","山河壮丽气象新","山色空蒙雨亦奇","山中高士隐幽居","山花烂漫春意浓"]},水:{五言:["水光潋滟明","水映碧天蓝","水流心不变","水边花自香","水清见游鱼"],七言:["水墨丹青寄情思","水波荡漾映晚霞","水光潋滟晴方好","水村渔舍掩映中","水天一色境界美"]}},n={五言:{动词开头:["寻梦入青山","携手踏春光","听雨忆伊人","品茗话古今","赏花踏春去"],形容词开头:["清风拂山巅","幽谷藏仙踪","美景入诗来","高楼望月明","深夜思悠远"],名词开头:["山水入诗来","春风送暖意","梦里寻故人","花开满庭芳","月照千山雪"]},七言:{动词开头:["听雨声落知春深处","看云舒卷兴无穷","思悠悠似水长流","品诗书乐在其中","赏花草踏春风处"],形容词开头:["清风徐来水波动","幽谷鸟啼山更静","美景如画心飞扬","高楼望月情无限","深夜思归倚栏杆"],名词开头:["山重水复疑无路","春风十里不如你","梦回故园心悠悠","花开花落又一春","月照长河映千里"]}},m=Math.random()>.3,p=m?"七言":"五言",f=m?7:5,j=Math.random()>.2,ne=Math.random()>.6,B=["※ 此诗依《平水韵》格律而作","※ 诗中暗含文人画意境","※ 诗句平仄相间，韵律和谐","※ 借鉴古典诗词意象",`※ 采用${p}格式创作`,"※ 诗风受宋词影响","※ 寓意吉祥如意"];let S="";const $=[];for(let _=0;_<l.length;_++){const k=l.charAt(_);let a="",T=!1;if(k in e&&e[k][p]){const s=e[k][p];a=s[Math.floor(Math.random()*s.length)],T=!0}if(!T){const s=Object.keys(n[p]),y=s[Math.floor(Math.random()*s.length)],w=n[p][y],ae=w[Math.floor(Math.random()*w.length)];a=k+ae.substring(1),T=!0}if(!T||a.length!==f)if(j){const s=["春","夏","秋","冬","风","花","雪","月","山","水","云","雨","诗","画","琴","茶","松","竹","梅","兰"];a=k;for(let y=1;y<f;y++)a+=s[Math.floor(Math.random()*s.length)]}else{a=k;const s=f-1;let y=1;for(;y<f;){const w=Math.min(s-y+1,Math.floor(Math.random()*2)+1);a+=V(w),y+=w}}if(a.length<f)for(;a.length<f;)a+=V(1);else a.length>f&&(a=a.substring(0,f));if($.push(a.charAt(a.length-1)),_>0&&_%2===1&&$.length>=2&&Math.random()>.5){const s=$[0];a=a.substring(0,a.length-1)+s}S+=a+(_<l.length-1?`，
`:"。")}return ne&&j&&(S+=`

`+B[Math.floor(Math.random()*B.length)]),S},V=l=>{const e=["山","水","云","雨","风","花","鸟","月","日","雪","松","竹","梅","兰","菊","雾","露","霜","春","夏","秋","冬","江","河","湖","海","峰","岭","林","泉","山川","河流","云雾","江南","松竹","梅花","鸟鸣","溪水","高山","流水","明月","清风","绿树","青山","流云","落花","天地","日月","春秋","风雨","雪霜","烟雨","晨昏","朝夕","诗书","琴棋","丹青","墨宝","翰墨","山水","梅兰","烟雨","长亭路","小桥流","山野间","水云乡","明月夜","落花雨","春风暖","夏日凉","秋叶红","冬雪白","芳草地","碧水湾","情","思","愁","喜","悲","忧","恋","爱","怨","恨","乐","忆","念","盼","叹","羡","嫉","慕","赞","慨","欢喜","忧愁","相思","离别","团圆","笑颜","泪眼","心情","温暖","感动","激情","平静","思念","怀念","期待","向往","欣慰","悲伤","愉悦","惆怅","眷恋","心酸","愤懑","宁静","喜悦情","忧伤心","思念意","爱恋人","欢乐时","悲伤处","满心欢","一腔愁","千般情","万种意","多情人","痴心者","城","街","楼","车","机","网","灯","桥","影","歌","茶","酒","餐","饮","画","琴","笛","香","光","影","咖啡","茶香","美食","旅行","音乐","电影","书香","游戏","城市","乡村","公园","商场","街道","小区","写字楼","地铁","高铁","飞机","轮船","酒店","咖啡","餐厅","医院","学校","咖啡店","茶餐厅","小酒馆","书店里","影院中","街角处","城市风","乡村景","高楼群","小村落","老街区","新时代","赞","评","转","发","拍","看","刷","追","潮","酷","萌","燃","怼","秀","撩","戏","怂","宠","躺","卷","热搜","点赞","转发","评论","奶茶","外卖","快递","网购","手机","电脑","平板","耳机","充电","信号","流量","WIFI","直播","短视频","表情包","朋友圈","沙雕","佛系","宅家","社恐","网红店","打卡地","朋友圈","短视频","刷手机","追剧中","云旅游","宅生活","深夜食","早餐饮","网购节","直播间","加班","摸鱼","脱发","熬夜","减肥","宵夜","聚会","蹦迪","单身","脱单","打游戏","刷剧","追星","吐槽","吃瓜","皮一下","吃土","吃货","晒娃","养生","佛系","葛优躺","打工人","修仙"],n=e.filter(p=>p.length<=l);return n.length===0?e[Math.floor(Math.random()*e.length)].substring(0,l):n[Math.floor(Math.random()*n.length)]},Q=async()=>{v.value||await F(),P.value=!0,await new Promise(l=>setTimeout(l,1500)),P.value=!1},X=l=>{M.value=l},Y=l=>{I.value=l,h.value=!1,v.value="",u.value="",c.value=""},Z=()=>{alert("分享功能需要集成社交媒体API，演示版未实现")},ee=()=>{alert("作品已保存到本地（模拟）")};oe(()=>{});const te=L(()=>({"calligraphy-content":!0,"style-regular":M.value==="regular","style-running":M.value==="running","style-seal":M.value==="seal"}));re(h,l=>{l?document.body.style.overflow="hidden":document.body.style.overflow=""});const W=l=>/^[\u4e00-\u9fa5]+$/.test(l),le=l=>{const e=l.target.value;if(!e){g.value="";return}W(e)?(g.value="",u.value=e):(g.value="请只输入中文字符",u.value=e.replace(/[^\u4e00-\u9fa5]/g,""))};return(l,e)=>(i(),r("div",ve,[t("div",he,[t("button",{class:"back-button",onClick:e[0]||(e[0]=n=>x(R).push("/interactive"))},"返回"),e[5]||(e[5]=t("h1",null,"AI题诗创作",-1)),t("div",me,[t("button",{onClick:e[1]||(e[1]=n=>h.value=!h.value)},o(h.value?"关闭图库":"选择图片"),1)])]),t("div",pe,[t("div",ge,[t("div",fe,[t("img",{src:U.value,alt:"参考作品",class:"reference-image"},null,8,ye),t("div",_e,[t("h3",null,o(C.value.title),1),t("p",null,o(C.value.artist)+" · "+o(C.value.dynasty),1)])]),t("div",ke,[e[6]||(e[6]=t("label",null,"自定义藏头字词：",-1)),ue(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=n=>u.value=n),placeholder:"输入2-8个字的中文词语",maxlength:"8",onInput:le},null,544),[[ce,u.value]]),g.value?(i(),r("p",be,o(g.value),1)):(i(),r("p",Me,"留空则使用画作标题"))]),t("div",Ce,[t("button",{onClick:F,disabled:b.value},o(b.value?"生成中...":"生成藏头诗"),9,we),t("button",{onClick:Q,disabled:P.value||!v.value},o(P.value?"渲染中...":"书法渲染"),9,Ie)])]),t("div",Pe,[v.value?(i(),r("div",Te,[t("h3",Ae,"《"+o(c.value)+"》",1),t("div",{class:N(te.value)},[t("pre",null,o(v.value),1)],2),t("div",Se,[e[7]||(e[7]=t("h4",null,"书法风格",-1)),t("div",$e,[(i(!0),r(z,null,E(H.value,n=>(i(),r("div",{key:n.id,class:N(["style-option",{active:M.value===n.id}]),onClick:m=>X(n.id)},[t("span",null,o(n.name),1),t("small",null,o(n.description),1)],10,Le))),128))])]),t("div",{class:"share-save-buttons"},[t("button",{onClick:Z},"分享作品"),t("button",{onClick:ee},"保存作品")])])):(i(),r("div",xe,e[8]||(e[8]=[t("p",null,[q("选择一幅画作或输入您喜欢的词语，"),t("br"),q("AI将为您创作藏头诗")],-1),t("div",{class:"placeholder-icon"},"🖋️",-1)])))])]),h.value?(i(),r("div",Ne,[t("div",Fe,[e[9]||(e[9]=t("h3",null,"选择参考画作",-1)),t("button",{onClick:e[3]||(e[3]=n=>h.value=!1),class:"close-button"},"×")]),t("div",Ve,[(i(!0),r(z,null,E(x(G).slice(0,15),(n,m)=>(i(),r("div",{key:m,class:N(["gallery-item",{active:I.value===m}]),onClick:p=>Y(m)},[t("img",{src:n,alt:"画作"},null,8,je),t("div",Be,o(x(O)(m).title),1)],10,We))),128))])])):D("",!0),h.value?(i(),r("div",{key:1,class:"gallery-overlay",onClick:e[4]||(e[4]=n=>h.value=!1)})):D("",!0)]))}}),Ge=de(De,[["__scopeId","data-v-3edfd130"]]);export{Ge as default};

(()=>{var e={745:e=>{e.exports={dataQuotes:[{ru:{text:"«Си» позволяет очень просто выстрелить себе в ногу. На «Си++» сделать это сложнее, но, когда вам это удается, ногу отрывает полностью",author:"Бьёрн Страуструп"},en:{text:"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg",author:"Bjarne Stroustrup"}},{ru:{text:"Использование «КОБОЛа» калечит рассудок, следовательно, его преподавание должно быть приравнено к уголовному преступлению",author:"Эдсгер Вибе Дейкстра"},en:{text:"The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense",author:"Edsger Wybe Dijkstra"}},{ru:{text:"Я изобрел понятие «объектно-ориентированный», но могу заявить, что не имел в виду C++ при этом",author:"Алан Кей"},en:{text:"I invented the term 'Object-Oriented', and I can tell you I did not have C++ in mind.",author:"Alan Kay"}},{ru:{text:"Изучение программирования имеет такое же отношение к проектированию интерактивных систем, как обучение слепой печати к написанию стихов",author:"Тед Нельсон"},en:{text:"Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry",author:"Ted Nelson"}},{ru:{text:"Если бы McDonalds была бы софтверной компанией, то у них один из ста Биг Маков был бы отравленным, и их ответ на это был бы: «Мы сожалеем, вот вам купон на ещё два Биг Мака",author:"Марк Минаси"},en:{text:"If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more",author:"Mark Minasi"}},{ru:{text:"Опасайтесь багов в приведенном выше коде; я только доказал корректность, но не запускал его",author:"Дональд Эрвин Кнут"},en:{text:"Beware of bugs in the above code; I have only proved it correct, not tried it",author:"Donald E. Knuth"}},{ru:{text:"Анализ компьютерных систем — это как воспитание детей; можно нанести огромный вред, но нельзя гарантировать успех",author:"Том ДеМарко"},en:{text:"Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success",author:"Tom DeMarco"}},{ru:{text:"Меня не интересует, будет ли это работать на ваших машинах! Мы не отдаем их заказчику!",author:"Платон"},en:{text:"I don't care if it works on your machine! We are not shipping your machine!",author:"Vidiu Platon"}},{ru:{text:"Иногда лучше остаться спать дома в понедельник, чем провести всю неделю отлаживая написанный в понедельник код",author:"Кристофер Томпсон"},en:{text:"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code",author:"Christopher Thompson"}},{ru:{text:"Сначала учите науку программирования и всю теорию. Далее выработаете свой программистский стиль. Затем забудьте все и просто программируйте",author:"Джордж Гаррет"},en:{text:"First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack",author:"George Carrette"}}]}},121:e=>{e.exports={playListArr:[{title:"Aqua Caelestis",src:"../assets/sounds/Aqua Caelestis.mp3",duration:"00:58",id:0},{title:"River Flows In You",src:"../assets/sounds/River Flows In You.mp3",duration:"03:50",id:1},{title:"Ennio Morricone",src:"../assets/sounds/Ennio Morricone.mp3",duration:"01:37",id:2},{title:"Summer Wind",src:"../assets/sounds/Summer Wind.mp3",duration:"01:50",id:3}]}}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}(()=>{"use strict";const{playListArr:e}=o(121),{dataQuotes:t}=o(745),n=document.querySelector(".time"),s=document.querySelector(".date"),a=document.querySelector(".greeting"),r=document.querySelector(".greeting-container"),c=document.querySelector(".footer"),i=document.querySelector(".weather"),l=document.querySelector(".todo"),u=document.querySelector(".myName"),d=document.getElementById("body"),m=document.querySelector(".slide-next"),g=document.querySelector(".slide-prev"),h=document.querySelector(".weather-icon"),y=document.querySelector(".temperature"),p=document.querySelector(".weather-description"),v=document.querySelector(".wind"),S=document.querySelector(".humidity"),L=document.querySelector(".city"),w=document.querySelector(".quote"),f=document.querySelector(".author"),k=document.querySelector(".change-quote"),q=new Audio,b=document.querySelector(".play"),x=document.querySelector(".play-prev"),E=document.querySelector(".play-next"),C=document.querySelector(".play-list"),I=document.querySelector(".background"),$=document.querySelector(".background-list");let M=$.querySelectorAll(".background-list_item"),A=M[0].textContent;L.value="Minsk";let T=!1,_=0;const j={"ru-mor":"Доброe","ru-day":"Добрый","ru-nig":"Доброй",en:"Good"},D=document.querySelectorAll(".languages-list__item"),W=document.querySelector(".languages"),N=document.querySelector(".languages-list"),P=document.querySelector(".player");let U=0;const B=document.querySelector(".sound-volume"),F=document.querySelector(".play-volume"),H=document.querySelector(".audio-title");H.textContent=e[0].title;const R=document.querySelector(".player-time"),O=document.querySelector(".player-currentTime");R.textContent="0:39",O.textContent=0;const Q=document.querySelector(".duration-player");e.forEach((e=>{!function(e){let t=document.createElement("li");t.innerHTML=`\n  <button id=${e.id} class="track-button player-icon"></button>\n  <p class="track-title"> ${e.title}</p>\n  `,t.classList.add("track-item"),C.appendChild(t)}(e)}));const X=document.querySelectorAll(".track-button"),z=document.querySelectorAll(".switch"),G=document.querySelector(".settings-list"),K=document.querySelector(".button-language"),Y=document.querySelector(".button-background"),Z=document.querySelector(".tags-background"),V=document.querySelectorAll(".tags-background__item"),J=document.querySelector(".btn-Flickr"),ee=document.querySelector(".btn-Unsplash");let te="nature",oe=0,ne={language:"ru","switch-time":n,"switch-date":s,"switch-greeting":r,"switch-quote":c,"switch-weather":i,"switch-audio":P,"switch-todolist":l,"Unsplash API":ce,"Flickr API":ie};function se(e){const t=(new Date).getHours();let o;return o=t>=0&&t<6?"ru"==e?"ночи":"night":t>=6&&t<12?"ru"==e?"утро":"morning":t>=12&&t<18?"ru"==e?"день":"afternoon":"ru"==e?"вечер":"evening",t>=0&&t<6&&(a.textContent=`${j[e]} ${o}`),o}function ae(e){console.log("one"),M[0].classList.add("item-active");let t="",o=se("en");e<10?t=t+0+e:t+=e;const n=new Image;n.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${o}/${t}.jpg`,n.onload=()=>{d.style.backgroundImage=`url(${n.src})`}}window.addEventListener("beforeunload",(function(){localStorage.setItem("myName",u.value),localStorage.setItem("city",L.value)})),window.addEventListener("load",(function(){localStorage.getItem("myName")&&(u.value=localStorage.getItem("myName")),localStorage.getItem("city")&&(L.value=localStorage.getItem("city"))})),document.addEventListener("DOMContentLoaded",le),J.addEventListener("click",(()=>{Z.classList.toggle("tags-visible")})),ee.addEventListener("click",(()=>{Z.classList.toggle("tags-visible")})),Z.addEventListener("click",(e=>{let t=e.target.closest(".tags-background__item");V.forEach((e=>{e.querySelector(".jackdaw").classList.remove("selected"),t.textContent==e.textContent&&(e.querySelector(".jackdaw").classList.add("selected"),te=t.textContent)})),"Unsplash API"==A?ce(te):ie(te)}));let re=1+Math.floor(20*Math.random());async function ce(e){console.log("third"),se("en");const t=`https://api.unsplash.com/photos/random?query=${e}&client_id=UvhvAbs-46QHertW_43aBtFMLgoi9H6oMZZWAXqrkiM`,o=await fetch(t),n=await o.json(),s=new Image;s.src=n.urls.regular,s.onload=()=>{d.style.backgroundImage=`url(${s.src})`,d.style.backgroundSize="cover"}}async function ie(e){console.log("second"),se("en");const t=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1c4e26e0ace2f0ca9e27b3c2b26ca4e9&tags=${e}&extras=url_l&format=json&nojsoncallback=1`,o=await fetch(t),n=await o.json();let s=Math.floor(100*Math.random());const a=new Image;a.src=n.photos.photo[s].url_l,a.onload=()=>{d.style.backgroundImage=`url(${a.src})`,d.style.backgroundSize="cover"}}async function le(){L.value||alert("Выводятся данные города Минск, заполните поле ввода названия города");const e=`https://api.openweathermap.org/data/2.5/weather?q=${L.value?L.value:"Minsk"}&lang=${ne.language}&appid=c252e54d54de12924451c52d0fd76a2f&units=metric`,t=await fetch(e);t.status>=400&&(alert("Введите корректное название города"),alert("Выводятся данные о погоде с учетом предыдущего корректного ввода данных "));const o=await t.json();h.className="weather-icon owf",h.classList.add(`owf-${o.weather[0].id}`),y.textContent=`${o.main.temp}°C`,p.textContent=o.weather[0].description,v.textContent=`Wind speed: ${o.wind.speed} m/s`,S.textContent=`Humidity: ${o.main.humidity}%`}function ue(){oe=Math.floor(Math.random()*t.length),w.textContent=`"${t[oe][ne.language].text}"`,f.textContent=`${t[oe][ne.language].author}`}function de(t){t?(q.src=e[t].src,_=t,q.currentTime=0):(q.src=e[_].src,q.currentTime=U),q.play(),setInterval((()=>{P.querySelector(".progress").style.width=q.currentTime/q.duration*100+"%",R.textContent=he(q.duration),O.textContent=he(q.currentTime),H.textContent=e[_].title}),500),T=!0,q.addEventListener("ended",ge)}function me(e){T&&b.classList.contains("pause")?(U=q.currentTime,q.pause(),b.classList.remove("pause"),T=!1,X.forEach((e=>{e.classList.remove("pause")}))):"number"==typeof e?(de(e),b.classList.add("pause")):(de(),b.classList.add("pause"),X[_].classList.add("pause"))}function ge(){_==e.length-1?_=0:_++,U=0,de(),b.classList.add("pause"),X.forEach((e=>{e.classList.remove("pause")})),X[_].classList.add("pause")}function he(e){let t=parseInt(e),o=parseInt(t/60);t-=60*o;const n=parseInt(o/60);return o-=60*n,0===n?`${o}:${String(t%60).padStart(2,0)}`:`${String(n).padStart(2,0)}:${o}:${String(t%60).padStart(2,0)}`}ue(),ae(re),function e(){const t=new Date;let o;"ru"!=ne.language||(o="ru-Ru");const a=t.toLocaleTimeString(o);setTimeout(e,1e3),n.textContent=a,function(e){const t=(new Date).toLocaleDateString(e,{weekday:"long",month:"long",day:"numeric"});s.textContent=t}(o)}(),se(ne.language),F.addEventListener("click",(()=>{q.muted=!q.muted,F.classList.toggle("mute")})),$.addEventListener("click",(e=>{let t=e.target.closest(".background-list_item");M.forEach((e=>{e.querySelector(".jackdaw").classList.remove("selected"),e.textContent==t.textContent&&(A=t.textContent,e.querySelector(".jackdaw").classList.add("selected"),"The Rolling Scopes School"==A?ae(re):"Unsplash API"==A?ce():ie())}))})),N.addEventListener("click",(e=>{let o=e.target.closest(".languages-list__item");D.forEach((e=>{e.querySelector(".jackdaw").classList.remove("selected"),o.id==e.id&&(ne.language=e.id,se(ne.language),le(),e.querySelector(".jackdaw").classList.add("selected"),w.textContent=`"${t[oe][ne.language].text}"`,f.textContent=`${t[oe][ne.language].author}`)}))})),Q.addEventListener("click",(e=>{const t=window.getComputedStyle(Q).width,o=e.offsetX/parseInt(t)*q.duration;q.currentTime=o})),b.addEventListener("click",me),x.addEventListener("click",(function(){0==_?_=e.length-1:_--,U=0,de(),b.classList.add("pause")})),E.addEventListener("click",ge),k.addEventListener("click",ue),L.addEventListener("change",le),m.addEventListener("click",(function(){"The Rolling Scopes School"==A?(20==re?re=1:re++,ae(re)):"Unsplash API"==A?ce(te):ie(te)})),g.addEventListener("click",(function(){"The Rolling Scopes School"==A?(0==re?re=20:re--,ae(re)):"Unsplash API"==A?ce(te):ie(te)})),B.addEventListener("click",(function(e){const t=window.getComputedStyle(B).width;let o=e.offsetX/parseInt(t);o<0&&(o=0),o>1&&(o=1),q.volume=o})),C.addEventListener("click",(e=>{var t;t=e.target,X.forEach((e=>{e.id!=t.id||T?e.id==t.id&&T&&t.classList.contains("pause")?(e.classList.remove("pause"),me()):e.id==t.id&&T&&!e.classList.add("pause")?(e.classList.add("pause"),de(e.id)):e.classList.remove("pause"):(e.classList.add("pause"),me(e.id))}))})),G.addEventListener("change",(e=>{let t=e.target.closest(".switch");z.forEach((e=>{t.id==e.id&&function(e){for(let t in ne)e==t&&ne[t].classList.toggle("visible")}(t.id)}))})),K.addEventListener("click",(()=>{W.classList.toggle("setting-visible-elems"),I.classList.contains("setting-visible-elems")&&I.classList.remove("setting-visible-elems"),Z.classList.contains("tags-visible")&&Z.classList.remove("tags-visible")})),Y.addEventListener("click",(()=>{I.classList.toggle("setting-visible-elems"),W.classList.contains("setting-visible-elems")&&W.classList.remove("setting-visible-elems"),Z.classList.contains("tags-visible")&&Z.classList.remove("tags-visible")}));const ye=document.querySelector(".add-task"),pe=document.querySelector(".text-task"),ve=document.querySelector(".todo__list");let Se=0,Le=0;ye.addEventListener("click",(function(){if(10==Le)return;let e=document.createElement("div");e.id=`task-${Se+1}`,Se++,e.innerHTML=`\n  <p class = 'description'>${pe.value}</p>\n  <input type ="checkbox" class="checkbox">\n  <div class='delete'></div>\n  `,ve.appendChild(e),pe.value="",e.classList.add("todo-item"),l.style.bottom="-140px",Le++})),ve.addEventListener("click",(e=>{let t=e.target.closest(".delete");ve.querySelectorAll(".delete").forEach((e=>{t.closest(".todo-item").id==e.closest(".todo-item").id&&(t.closest(".todo-item").remove(),Le--)}))}));const we=document.querySelector(".settings");document.querySelector(".setting-btn").addEventListener("click",(()=>{we.classList.toggle("settings-visible"),W.classList.toggle("show"),I.classList.toggle("show"),Z.classList.remove("tags-visible"),W.classList.remove("setting-visible-elems"),I.classList.remove("setting-visible-elems")}))})()})();
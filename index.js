// celestaver 2020
// version 1.0
// prod by nik shipov | Nikname913 on Github

// ----------
// ----------
// ----------

// модуль обучения работе с сервисом

var stepNine = () => {
	$(".__messHelp__steps__step8").click(function() {
		$(".caropka-headline__text__help__mess").remove();
		document.getElementsByClassName('caropka-headline__text__help')[0].removeAttribute('id');
		document.getElementsByClassName('caropka-headline__text__select')[0].removeAttribute('disabled');
		document.getElementsByClassName('caropka-headline__text__select')[1].removeAttribute('disabled');
	});
}

var stepEight = () => {
	$(".__messHelp__steps__step7").click(function() {
		$(".caropka-headline__text__help__mess").remove();
		document.getElementsByClassName('caropka-headline__count')[0].value = '22400872';
		document.getElementsByClassName('caropka-headline__text')[0].style.opacity = '0';
      	setTimeout(function() {
      		document.getElementsByClassName('caropka-headline__text')[0].style.display = 'none';
      	}, 300);
		var mes = document.createElement('p');
      	mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
        var dt = new Date();
        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();
      	mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Обратите внимание на блок-список в основной рабочей области - теперь там появился наш с вами тег. Снизу находится белое поле, туда нужно вписывать номер счетчика. Сейчас мы туда его уже добавили. Вам осталось нажать кнопку "Получить код", после чего откроется окно со сформированным тегом. Вы можете разместить его на сайте любым удобным способом, в том числе опубликовать при помощи Инсайдера, при условии, что вы авторизованы.<br><br>А на этом все, вы познакомились с базовым функционалом сервиса и теперь имеете представление о принципах его работы.<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step8">Закрыть модуль</span>';
      	var mesClose = document.createElement('span');
      	mesClose.className = 'caropka-headline__text__help__mess__close';
      	if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      		document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      		stepNine();
      	}});}

var stepSeven = () => {
	$(".__messHelp__steps__step6").click(function() {
		$(".caropka-headline__text__help__mess").remove();
		var mes = document.createElement('p');
      	mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
        var dt = new Date();
        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();
      	mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Хорошая работа, ваш тег добавлен. Поля ввода стали пустыми, заметили? Осталось всего пара шагов - ввести номер счетчика Метрики и получить сформированный тег для публикации.<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step7">Далее</span>';
      	var mesClose = document.createElement('span');
      	mesClose.className = 'caropka-headline__text__help__mess__close';
      	if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      		document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      		stepEight();
      	}});}

var stepSix = () => {
	$(".__messHelp__steps__step5").click(function() {
		$(".caropka-headline__text__help__mess").remove();
		document.getElementsByClassName('caropka-headline__text__select')[1].value = 'metrikaGoalId';
		var mes = document.createElement('p');
      	mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
        var dt = new Date();
        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();
      	mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Итак, мы почти сформировали наш тег. Теперь его нужно добавить в список для публикации. Для этого нажмите кнопку "Добавить тег в список" и нажмите Готово. Осталось совсем немного!<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step6">Готово</span>';
      	var mesClose = document.createElement('span');
      	mesClose.className = 'caropka-headline__text__help__mess__close';
      	if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      		document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      		stepSeven();
      	}});}

var stepFive = () => {
	$(".__messHelp__steps__step4").click(function() {
		$(".caropka-headline__text__help__mess").remove();
		var mes = document.createElement('p');
      	mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
        var dt = new Date();
        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();
      	mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Теперь нам нужно задать значение рабочего компонента. В зависимости о того, какой вид операции вы планируете, тип значения может меняться. К примеру, если вы ставите на сайт якорь, в это поле нужно вписать название. Для реализации подмены заголовка - новый вариант этого заголовка. В нашем мы примере мы ставим на элемент цель Метрики, поэтому в поле нам нужно вписать ее идентификатор. Нажмите Далее, чтобы добавить название цели.<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step5">Далее</span>';
      	var mesClose = document.createElement('span');
      	mesClose.className = 'caropka-headline__text__help__mess__close';
      	if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      		document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      		stepSix();
      	}});}

var stepFour = () => {
	document.getElementsByClassName('caropka-headline__text__p')[2].addEventListener('click', function() {
		if (document.getElementsByClassName('caropka-headline__text__help')[0].getAttribute('id') == 'learnDesk') {
		$(".caropka-headline__text__help__mess").remove();
		var mes = document.createElement('p');
      	mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
        var dt = new Date();
        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();
      	mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Как видите, один из параметров элемента добавился в поле "Характеристики триггера". Вы можете комбинировать набор параметров по своему усмотрению, однако есть несколько советов.<br><br>1. Чем больше параметров добавлено, тем лучше.<br>2. Не используйте в таргетинге атрибуты общего характера, вида "class=btn". Это может привести к пересечениям.<br>3. Не бойтесь ошибиться! Инсайдер это не волшебная палочка, а инструмент, головой работать тоже придется. Но со временем вы освоитесь и все будет получаться.<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step4">Далее</span>';
      	var mesClose = document.createElement('span');
      	mesClose.className = 'caropka-headline__text__help__mess__close';
      	if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      		document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      		stepFive();
      	}}});}

var stepThree = () => {
	$(".__messHelp__steps__step3").click(function() {
		$(".caropka-headline__text__help__mess").remove();
		$(".you-element-here").remove();
		$(".caropka-headline__text__select").attr("disabled", "");
		var mes = document.createElement('p');
      	mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
        var dt = new Date();
        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();
      	mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Всего есть три типа таргетинга на элемент: название тега, содержимое элемента (иннер) и набор его атрибутов. Чтобы добавить один из критериев к списку просто нажмите на него левой кнопой мыши. Давайте применим таргетинг нашей кнопки по иннеру.<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step3">Задайте критерий</span>';
      	var mesClose = document.createElement('span');
      	mesClose.className = 'caropka-headline__text__help__mess__close';
      	if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      		document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      		stepFour();
      	}});}

var stepTwo = () => {
	$(".__messHelp__steps__step2").contextmenu(function() {
		var mes = document.createElement('p');
      	mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
        var dt = new Date();
        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();
      	mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Отлично! Обратите внимание, слева появилось основное рабочее окно Инсайдера. В этом окне вы будете определять ключевые параметры элемента, по которым сервис будет ориентироваться, чтобы определить элемент для манипуляций. Рассмотрим рабочее окно подробнее.<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step3">Далее</span>';
      	var mesClose = document.createElement('span');
      	mesClose.className = 'caropka-headline__text__help__mess__close';
      	if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      		document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      		stepThree();
      	}});}

var stepOne = () => {
	$(".__messHelp__steps__step1").click(function() {
		$(".caropka-headline__text__help__mess").remove();
		if ( document.getElementsByClassName('caropka-headline__text__help__messHelp')[0] == undefined ) {
      		var mes = document.createElement('p');
      		mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
          	var dt = new Date();
          	var h = dt.getHours();
          	var m = dt.getMinutes();
          	var s = dt.getSeconds();
      		mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Работа с сервисом Insider строится по очень простому принципу: "Хотите провести какие-то манипуляции с элементом - кликните по нему правой кнопкой мыши. Так вы сфокусируете на нем внимание сервиса для дальнейшей работы". Давайте попробуем, выберите кнопку под этим сообщением.<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step2">Выбери меня!</span>';
      		var mesClose = document.createElement('span');
      		mesClose.className = 'caropka-headline__text__help__mess__close';
      		if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      			document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      			stepTwo();
      	}}});}
      	
// основной код приложения 

var domCreate = (tag, cls, par, attr=[]) => {
	
	var elem = document.createElement(tag);
	elem.className = cls;
	
	if ( attr.length > 0 ) {
		
		for ( var i = 0; i < attr.length; i++ ) {
			
			elem.setAttribute(attr[i].split('::')[0], attr[i].split('::')[1]);
			
		}
		
	}
	
	par.appendChild(elem);
	return elem;

}

var domCreat = (elem, cls, attr = [], par) => {
      	
    var el = document.createElement(elem);
	el.className = cls;
	if ( attr.length != 0 ) {
      		
		for ( var i = 0; i < attr.length; i++ ) {
      			
			el.setAttribute(attr[i].split("::")[0], attr[i].split("::")[1]);
      			
		}
      		
	}
      	
	par.appendChild(el);
      	
	return el;
      	
}

function CelestaverStart() {
	this.init = function() {
		var URL = document.location.href;
    	console.log(URL + '. LOCSTOR - ' +  localStorage.getItem('insider'));
    	var lsCheck = false;
    	if ( localStorage.getItem('insider') == 'on' ) { lsCheck = true; }
    	if ( lsCheck === true ) {
    		localStorage.setItem('insider', 'on');
    		var fontLabelOne = domCreate('link', '', document.head, ['href::https://fonts.googleapis.com/css?family=Roboto', 'rel::stylesheet']);
    		var fontLabelTwo = domCreate('link', '', document.head, ['href::https://fonts.googleapis.com/css?family=Cabin+Sketch', 'rel::stylesheet']);
    		document.body.style.overflowX = 'hidden';
    		//
    		var headline = document.createElement('main');
    		headline.className = 'caropka-headline';
    		headline.setAttribute('style', 'box-sizing: border-box !important; font-weight: 200;filter: grayscale(0); display: flex; flex-direction: row; z-index: 2000; position: fixed; width: 500px; max-height: 920px; min-height: 760px; height: 100% !important; left: 0; top: 0; box-shadow: 0px 0px 5px black; border-bottom-right-radius: 20px;');
    		// 
    		var modalComp = domCreat('span', 'caropka-headline__comps--modal', [], headline);
    		var modalCompTitle = domCreat('span', 'caropka-headline__comps--modal__title', [], modalComp);
    		modalCompTitle.innerHTML = 'Раздел Модалки';
    		/// ------
    		/// events
    		/// ------
    		modalComp.addEventListener('click', function() {
    			var round = setInterval(function() {
    				if ( document.getElementsByClassName('__about-site__table__modal__ws__param')[0] != undefined ) {
    					//
    				}
    			});
    		});
    		/// ------
    		/// events
    		/// ------
    		var icon = domCreate('div', 'caropka-headline__logo', headline, []);
    		icon.style.cssText = 'background-color: white; border-radius: 50%; display: block; position: absolute; left: 0; width: 100px; height: 100px; margin-left: 20px; background-size: 60%; background-position: center; background-repeat: no-repeat; color: transparent; top: 0; margin-top: 20px;';
    		var codeHidden = domCreat('span', 'caropka-headline__codeHidden', [], headline);
    		codeHidden.innerHTML = 'Показать рабочее окно'
    		/// ------
    		/// events
    		/// ------
    		codeHidden.onclick = function() {
      			document.getElementsByClassName('caropka-headline__text')[0].style.display = 'block';
      			var self = this;
      			$(".caropka-headline__codeHidden").css("background-color", "transparent");
      			$(".caropka-headline__codeHidden").css("box-shadow", "none");
      			setTimeout(function() { document.getElementsByClassName('caropka-headline__text')[0].style.opacity = '1'; }, 40);
    		}
    		/// ------
    		/// events
    		/// ------
    		var textHead = domCreate('div', 'caropka-headline__head', headline, []);
    		textHead.innerHTML = 'celestaver';
    		textHead.style.cssText = 'font-family: "Cabin Sketch", cursive !important; font-size: 28px; display: block; position: absolute; width: 186px; height: 40px; line-height: 38px; margin-left: 110px; color: white; left: 0; top: 0; margin-top: 54px; padding-left: 42px; border-right: 2px solid white;';
    		var newsBlock = domCreate('span', 'caropka-headline__head__news', textHead, []);
    		newsBlock.innerHTML = 'Инфомодуль';
    		var intModeEl = domCreate('span', 'caropka-headline__head__intMode', headline, []);
    		intModeEl.id="IntModeOff";
    		/// ------
    		/// events
    		/// ------
    		intModeEl.addEventListener('click', function() {
      			if ( this.getAttribute('id') == 'IntModeOn' ) { this.setAttribute('id', 'IntModeOff'); }
      			else { this.setAttribute('id', 'IntModeOn'); }
    		});
    		/// ------
    		/// events
    		/// ------
    		var ck = document.cookie;
    		for ( var i = 0; i < ck.split('; ').length; i++ ) {
      		if ( ck.split('; ')[i].indexOf('logInIns') != (-1) ) {
      			newsBlock.innerHTML = ck.split('; ')[i].split('=')[1]; 
      		}}
      		/// ------
    		/// events
    		/// ------
    		newsBlock.addEventListener('click', function() {
      			var dataBlock = domCreate('span', 'caropka-headline__about-site', headline, []);
      			setTimeout(function() { dataBlock.style.opacity = '1'; }, 40);
      			document.documentElement.style.overflowY = 'hidden';
    			var table = domCreate('section', 'caropka-headline__about-site__table', dataBlock, []);
    			var close = domCreate('span', 'caropka-headline__about-site__table__close', table, []);
    			/// ------
    			/// events
    			/// ------
    			close.addEventListener('click', function() {
    				$.post('https://caropka.ru/insiderCab/addTags.php', { fork: 'logins' }, cbLog);
    				function cbLog(data) {
      					var dt = data.split('$$');
      					var host = document.location.hostname;
      					console.log('Logout check');
      					for ( var i = 0; i < dt.length - 1; i++ ) {
      						if ( document.getElementsByClassName('caropka-headline__head__news')[0] != undefined ) {
      							if ( dt[i].indexOf(host) != (-1) && dt[i].split('**')[1] == 'on' ) {
      								document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML = dt[i].split('**')[0].split('::')[1];
      							}
      							else if ( dt[i].indexOf(host) != (-1) && dt[i].split('**')[1] != 'on' ) {
      								document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML = 'Инфомодуль';
      							}}} 
    				}
    				$(".caropka-headline__about-site").css("opacity", "0");
      				document.documentElement.style.overflowY = 'scroll';
      				setTimeout(function() { $(".caropka-headline__about-site").remove(); }, 40);
    			});
    			/// ------
    			/// events
    			/// ------
    			var head = domCreate('h3', 'caropka-headline__about-site__table__headline', table, []);
      			head.innerHTML = 'Информационный модуль Инсайдера';
      			var rand = (Math.random() * 10000).toFixed(0);
      			var logo = domCreate('span', 'caropka-headline__logo caropka-headline__logo--min', head, []);
      	
      			var newsFrame = document.createElement('iframe');
    			newsFrame.className = 'caropka-headline__newsFrame caropka-headline__newsFrameJS';
    			newsFrame.setAttribute('src', 'https://caropka.ru/insiderCab/index.js?randParam=' + rand + '&hostParam=' + document.location.hostname);
    			newsFrame.setAttribute('name', 'newsFrame');
    			table.appendChild(newsFrame);
      	
      			var newsFrame = document.createElement('iframe');
    			newsFrame.className = 'caropka-headline__newsFrame';
    			newsFrame.setAttribute('src', 'https://caropka.ru/insiderCab/index.php?fork=content&randParam=' + rand + '&hostParam=' + document.location.hostname);
    			newsFrame.setAttribute('name', 'newsFrame');
    			table.appendChild(newsFrame);
    		});
    		/// ------
    		/// events
    		/// ------
    		var menu = domCreate('section', 'caropka-headline__menu', headline, []);
    		menu.style.cssText = 'margin-left: 0px; display: block; flex-direction: column; flex-wrap: wrap; justify-content: flex-start; align-content: center; position: absolute; width: 500px !important; height: 200px; top: 145px; border-top: 1px dashed grey; border-bottom: 1px dashed grey; border-top-left-radius: 5px;';
    		var getGoals = localStorage.getItem('goalsPack');
    		console.log('getGoals - ' + getGoals);
    		if ( getGoals != null ) {
      		var goalArr = getGoals.split('$$'); {
      			for ( let i = 0; i < goalArr.length - 1; i++ ) {
	      			var goalBlock = domCreate('span', 'caropka-headline__menu__gblock', menu, []);
      		     	goalBlock.innerHTML = goalArr[i].split('||')[0].split("::")[1];
    	  	     	goalBlock.setAttribute('goal-param', goalArr[i].split('||')[1].split("::")[1]);
	      	     	goalBlock.setAttribute('trigger', goalArr[i].split('||')[2].split("::")[1]);
      			}}}
      		var menu = domCreate('input', 'caropka-headline__count', headline, ['maxlength::12', 'placeholder::Введите номер счетчика']);
    		menu.value = 'Номер счетчика Метрики';	
    		/// ------
    		/// events
    		/// ------
    		menu.addEventListener('focus', function() {
    			if ( this.value == 'Номер счетчика Метрики' || this.value == '' ) {
    				if ( document.getElementsByClassName('caropka-headline__text__help__messCount')[0] == undefined ) {
    					this.value = '';
      					var mes = document.createElement('p');
      					mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messCount';
      					var dt = new Date();
          				var h = dt.getHours();
          				var m = dt.getMinutes();
          				var s = dt.getSeconds();
      					mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Номер счетчика нужно вводить только в том случае, если вы устанавливаете цели Метрики. Во всех остальных случаях впишите в поле значение 0000.';
      		
    				}
    			}
    		});
    		/// ------
    		/// events
    		/// ------
    		var menu = domCreate('span', 'caropka-headline__count__go', headline, []);
    		menu.innerHTML = 'Получить код';
    		/// ------
    		/// events
    		/// ------
    		menu.addEventListener('click', function() {
    			if ( document.getElementsByClassName('caropka-headline__count')[0].value != '' && document.getElementsByClassName('caropka-headline__menu')[0].innerHTML != '' &&
      				 document.getElementsByClassName('caropka-headline__count')[0].value.match(/[а-я]/) == null ) {
      				 	document.getElementsByClassName('caropka-headline__text')[0].style.display = 'block';
      					var self = this;
      					setTimeout(function() { document.getElementsByClassName('caropka-headline__text')[0].style.opacity = '1'; }, 40);
      					for ( var i = 0; i < document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock').length; i++ ) {
      						goalPack += 'TGC2019("' + document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock')[i].innerHTML +'::' + document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock')[i].getAttribute('goal-param') + '", "' + document.getElementsByClassName('caropka-headline__count')[0].value + '", "' + document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock')[i].getAttribute('trigger') + '");'
      					}
      					var correctShadow = domCreate('section', 'caropka-headline__passCode', document.getElementsByClassName('caropka-headline__text')[0], []);
      					document.getElementsByClassName('caropka-headline__text')[0].scrollTop = 0;
      					$(".caropka-headline__text").css("overflow-y", "hidden");
      					var codeBlock = domCreate('textarea', 'caropka-headline__text__codeBlock', correctShadow, []);
      					// var goalData = "function TGC2019(t,e,a){window.dataLayerMetrika=window.dataLayerMetrika||[];var i=e,n=t,r=n.split(\"::\")[0],s=n.split(\"::\")[1],u=document.querySelectorAll(\"*\");if(\"none\"==a){if(-1!=s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(var f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName)&&-1!=s.indexOf(u[f].innerHTML)){for(var o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].innerHTML)&&\"\"!=u[f].innerHTML){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1!=s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName)){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\"))for(f=0;f<u.length;f++)if(\"HTML\"!=u[f].tagName&&\"BODY\"!=u[f].tagName&&\"HEAD\"!=u[f].tagName&&\"SCRIPT\"!=u[f].tagName&&\"BR\"!=u[f].tagName&&\"STYLE\"!=u[f].tagName&&\"META\"!=u[f].tagName){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(\"utm\"==a.split(\"::\")[0]&&-1!=document.location.href.indexOf(a.split(\"::\")[1]))if(-1!=s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName)&&-1!=s.indexOf(u[f].innerHTML)){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].innerHTML)&&\"\"!=u[f].innerHTML){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1!=s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName)){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\"))for(f=0;f<u.length;f++)if(\"HTML\"!=u[f].tagName&&\"BODY\"!=u[f].tagName&&\"HEAD\"!=u[f].tagName&&\"SCRIPT\"!=u[f].tagName&&\"BR\"!=u[f].tagName&&\"STYLE\"!=u[f].tagName&&\"META\"!=u[f].tagName){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}setInterval(function(){" + goalPack + '},4000);';
      					var goalData = "function TGC2019(t,e,a){window.dataLayerMetrika=window.dataLayerMetrika||[];var i=e,n=t,r=n.split(\"::\")[0],s=n.split(\"::\")[1],u=document.querySelectorAll(\"*\");if(\"none\"==a){if(-1!=s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(var f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName+\".intag\")&&-1!=s.indexOf(u[f].innerHTML)){for(var o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].innerHTML)&&\"\"!=u[f].innerHTML){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1!=s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName+\".intag\")){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\"))for(f=0;f<u.length;f++)if(\"HTML\"!=u[f].tagName&&\"BODY\"!=u[f].tagName&&\"HEAD\"!=u[f].tagName&&\"SCRIPT\"!=u[f].tagName&&\"BR\"!=u[f].tagName&&\"STYLE\"!=u[f].tagName&&\"META\"!=u[f].tagName){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(\"utm\"==a.split(\"::\")[0]&&-1!=document.location.href.indexOf(a.split(\"::\")[1]))if(-1!=s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName+\".intag\")&&-1!=s.indexOf(u[f].innerHTML)){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].innerHTML)&&\"\"!=u[f].innerHTML){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1!=s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName+\".intag\")){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\"))for(f=0;f<u.length;f++)if(\"HTML\"!=u[f].tagName&&\"BODY\"!=u[f].tagName&&\"HEAD\"!=u[f].tagName&&\"SCRIPT\"!=u[f].tagName&&\"BR\"!=u[f].tagName&&\"STYLE\"!=u[f].tagName&&\"META\"!=u[f].tagName){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?u[f].className=u[f].getAttribute(\"class\")+\" \"+r:u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+i+'.reachGoal(\"'+r+'\")'))}}setInterval(function() {" + goalPack + "});";
      					codeBlock.value = goalData;
      					var publick = domCreate('input', 'caropka-headline__text__codeBlock__publ __text__codeBlock__publInp', document.getElementsByClassName('caropka-headline__passCode')[0], ['placeholder::Название тега, от 4 символов', 'maxlength::30']);
		      			var publick = domCreate('span', 'caropka-headline__text__codeBlock__publ', document.getElementsByClassName('caropka-headline__passCode')[0], []);
      					publick.innerHTML = 'Опубликовать компонент';
      					/// ------
			    		/// events
    					/// ------
    					publick.addEventListener('click', function() {
    						var self = this;
    						if ( document.getElementsByClassName('__text__codeBlock__publInp')[0].value.length >= 4 ) {
    							$.post('https://caropka.ru/insiderCab/addTags.php', {
      								dat: document.getElementsByClassName('__text__codeBlock__publInp')[0].value + '??' + goalData + '$$',
      								login: document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML,
				      				fork: 'write'
		      		
		      					}, cb);
		      					function cb(data) {
									self.innerHTML = 'Публикация данных..';
      								setTimeout(function() {
      									$(".caropka-headline__passCode").remove();
      									document.getElementsByClassName('caropka-headline__count')[0].value = '';
      									document.getElementsByClassName('caropka-headline__menu')[0].innerHTML = '';
      								}, 3000);
      							}
    						}
    						else {
    							this.innerHTML = 'Введите название тега';
      							var self = this;
      							setTimeout(function() { self.innerHTML = 'Опубликовать компонент'; }, 3000);
    						}
    					});
    					/// ------
    					/// events
    					/// ------   
    					var ck = document.cookie;
    					if ( document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML == 'Инфомодуль' ) {
    						document.getElementsByClassName('__text__codeBlock__publInp')[0].setAttribute('placeholder', 'Вы не авторизованы');
      						document.getElementsByClassName('__text__codeBlock__publInp')[0].setAttribute('disabled', '');
      						$(".caropka-headline__text__codeBlock__publ:eq(1)").remove();
    					}
    					var close = domCreate('span', 'caropka-headline__text__codeBlock__close', correctShadow, []);
    					/// ------
    					/// events
    					/// ------
    					close.onclick = function() { $(".caropka-headline__passCode").remove(); }
    					/// ------
    					/// events
    					/// ------
      				 }
			});
			/// ------
    		/// events
    		/// ------
    		var menuLine = domCreate('span', 'caropka-headline__menu-line', headline, []);
    		var menu = domCreate('span', 'caropka-headline__count__delete', headline, []);
    		menu.innerHTML = 'Удалить строку';
    		/// ------
    		/// events
    		/// ------
    		menu.addEventListener('click', function() {
    			if ( document.getElementsByClassName('caropka-headline__menu__gblock')[0] != undefined ) {
    				document.getElementsByClassName('caropka-headline__menu__gblock')[document.getElementsByClassName('caropka-headline__menu__gblock').length - 1].remove();
    				localStorage.removeItem('goalsPack');
					var table = document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock');
      	     		var allGoals = '';
      	     		for ( var i = 0; i < table.length; i++ ) {
      	     			allGoals += 'goalId::' + table[i].innerHTML + '||goalTrigger::' + table[i].getAttribute('goal-param') + '||dopTrigger::' + table[i].getAttribute('trigger') + '$$'
      	     		}
      	     		localStorage.setItem('goalsPack', allGoals);
      	     		console.log(localStorage.getItem('goalsPack'));
    			}
    		});
    		/// ------
    		/// events
    		/// ------
    		var tabelText = domCreate('aside', 'caropka-headline__text', headline, []);
    		var inp = domCreate('p', 'caropka-headline__text__p', tabelText, []);
    		inp.innerHTML = 'Тег не выбран. Категория не определена';
    		var ttLabel = domCreate('span', 'caropka-headline__text__icon', inp, []);
		    var inp = domCreate('p', 'caropka-headline__text__p', tabelText, []);
    		inp.innerHTML = 'Количество уровней вложенностей неизвестно';
    		var ttLabel = domCreate('span', 'caropka-headline__text__icon', inp, []);
    		var inp = domCreate('p', 'caropka-headline__text__p', tabelText, []);
    		inp.innerHTML = 'Собственный иннер не определен';
    		var ttLabel = domCreate('span', 'caropka-headline__text__icon', inp, []);
    		var inp = domCreate('p', 'caropka-headline__text__p', tabelText, []);
    		inp.innerHTML = 'Набор атрибутов не определен';
    		var select = domCreate('input', 'caropka-headline__text__select', tabelText, ['type::text', 'trigger::none', 'placeholder::Характеристики триггера. Введите набор через запятую']);
    		/// ------
    		/// events
    		/// ------
    		select.addEventListener('focus', function() {
    			if ( document.getElementsByClassName('caropka-headline__text__help__messHTr')[0] == undefined ) {
    				var mes = document.createElement('p');
      				mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHTr';
      				var dt = new Date();
          			var h = dt.getHours();
          			var m = dt.getMinutes();
          			var s = dt.getSeconds();
          			mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Через запятую перечислите набор характеристик, по которому нужно будет определять элемент. Не рекомендуется использовать общие классы и рекомендуется использовать в наборе название тега.';
      				var mesClose = domCreate('span', 'caropka-headline__text__help__mess__close', mes, []);
      				/// ------
    				/// events
    				/// ------
    				mesClose.addEventListener('click', function() { this.parentNode.remove(); });
    				/// ------
    				/// events
    				/// ------
    				if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      					document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      				}
    			}
    			if ( document.getElementsByClassName('caropka-headline__text__help__messHTr2')[0] == undefined ) {
    				var mes = document.createElement('p');
      				mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHTr2';
      				var dt = new Date();
          			var h = dt.getHours();
          			var m = dt.getMinutes();
          			var s = dt.getSeconds();
          			mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Набор специальных команд, для дополнительных возможностей.<br>Слово "якорь" - для установки на выбранный элемент навигационного якоря.<br>Слово "контент" - для изменения содержимого элемента.<br>Слово "копирайт" - для уточнения срабатывания цели только при выделении текста.<br>Слово "класс" - для добавления нового класса к элементу.';
      				var mesClose = domCreate('span', 'caropka-headline__text__help__mess__close', mes, []);
      				/// ------
    				/// events
    				/// ------
    				mesClose.addEventListener('click', function() { this.parentNode.remove(); });
    				/// ------
    				/// events
    				/// ------
    				if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      					document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      				}
    			}
    		});
    		/// ------
    		/// events
    		/// ------
    		var inp = document.createElement('p');
    		inp.className = 'caropka-headline__text__p';
    		inp.innerHTML = 'Вводите набор через запятую, в любом порядке (поле выше)';
    		var select = domCreate('input', 'caropka-headline__text__select', tabelText, ['type::text', 'placeholder::Goal ID или другие значения']);
    		/// ------
    		/// events
    		/// ------
    		select.addEventListener('focus', function() {
    			if ( document.getElementsByClassName('caropka-headline__text__help__messWCV')[0] == undefined ) {
    				var mes = document.createElement('p');
      				mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messWCV';
      				var dt = new Date();
          			var h = dt.getHours();
          			var m = dt.getMinutes();
          			var s = dt.getSeconds();
          			mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> В это поле нужно ввести идентификатор цели, обозначение якоря на латинском языке или контент, который нужно добавить - в зависимости о того, какой тип компонента вы выбрали для работы.';
      				var mesClose = domCreate('span', 'caropka-headline__text__help__mess__close', mes, []);
      				/// ------
    				/// events
    				/// ------
    				mesClose.addEventListener('click', function() { this.parentNode.remove(); });
    				/// ------
    				/// events
					/// ------
					if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      					document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
					}
    			}
    		});
    		/// ------
    		/// events
    		/// ------
    		var go = domCreate('span', 'caropka-headline__text__go', tabelText, []);
    		go.innerHTML = 'Добавить тег в список';
    		var go2 = domCreate('span', 'caropka-headline__text__go caropka-headline__text__go2', tabelText, []);
    		go2.innerHTML = 'Расширенные триггеры';
    		/// ------
    		/// events
    		/// ------
    		go2.addEventListener('click', function() {
    			var dataBlock = domCreate('span', 'caropka-headline__about-site', document.getElementsByClassName('caropka-headline')[0], []);
    			setTimeout(function() { dataBlock.style.opacity = '1'; }, 40);
    			document.documentElement.style.overflowY = 'hidden';
    			var table = domCreate('section', 'caropka-headline__about-site__table', dataBlock, []);
      			var close = domCreate('span', 'caropka-headline__about-site__table__close', table, []);
      			/// ------
    			/// events
    			/// ------
    			close.addEventListener('click', function() {
    				$(".caropka-headline__about-site").css("opacity", "0");
      				document.documentElement.style.overflowY = 'scroll';
      				setTimeout(function() { $(".caropka-headline__about-site").remove(); }, 40);
    			});	
    			/// ------
    			/// events
    			/// ------
    			var head = domCreate('h3', 'caropka-headline__about-site__table__headline', table, []);
      			head.innerHTML = 'Расширенные триггеры для корректировок';
      			var logo = domCreate('span', 'caropka-headline__logo caropka-headline__logo--min', head, []);
      			for ( var i = 0; i < 3; i++ ) {
      				var line = domCreate('article', 'caropka-headline__about-site__table__trigger', table, []);
      				var lab = domCreate('span', '__table__trigger__name', line, []);
      				if ( i == 0 ) { lab.innerHTML = 'UTM метки'; }
      				else if ( i == 1 ) { lab.innerHTML = 'Разрешение экрана'; }
      				else if ( i == 2 ) { lab.innerHTML = 'Часть URL'; }
      				var icon = domCreate('span', '__table__trigger__name__logo', lab, []);
      				var lab2 = domCreate('input', '__table__trigger__value', line, []);
      				if ( i == 0 ) { lab2.setAttribute('placeholder', 'Впишите параметры разметки через запятую');}
      				else if ( i == 1 ) { lab2.setAttribute('placeholder', 'Разрешение экрана. В разработке'); lab2.setAttribute('onfocus', 'return false');}
      				else if ( i == 2 ) { lab2.setAttribute('placeholder', 'Часть URL. В разработке'); lab2.setAttribute('onfocus', 'return false');}
      			}
      			var go3 = domCreate('span', 'caropka-headline__text__go caropka-headline__text__go2', table, []);
      			go3.innerHTML = 'Сохранить условия';
      			/// ------
    			/// events
    			/// ------
    			go3.addEventListener('click', function() {
    				if ( document.getElementsByClassName('__table__trigger__value')[0].value != '' ) {
    					document.getElementsByClassName('caropka-headline__text__select')[0].setAttribute('trigger', 'utm::' + document.getElementsByClassName('__table__trigger__value')[0].value);
    					document.documentElement.style.overflowY = 'scroll';
    					$(".caropka-headline__about-site").remove();
    				}	
    			});
    			/// ------
    			/// events
    			/// ------
    		});
    		/// ------
    		/// events
    		/// ------
    		var close = domCreate('span', 'caropka-headline__text__min', tabelText, []);
    		/// ------
    		/// events
    		/// ------
    		close.addEventListener('click', function() {
    			this.parentNode.style.opacity = '0';
      			var self = this;
      			setTimeout(function() { self.parentNode.style.display = 'none'; }, 300);
    		});
    		go.addEventListener('click', function() {
    			if ( (document.getElementsByClassName('caropka-headline__text__select')[0].value != 'Определяющие характеристики элемента' && document.getElementsByClassName('caropka-headline__text__select')[0].value != '') &&
      	    		 (document.getElementsByClassName('caropka-headline__text__select')[1].value != 'Идентификатор цели' && document.getElementsByClassName('caropka-headline__text__select')[1].value != '') ) {
      	    			if ( document.getElementsByClassName('caropka-headline__menu')[0].innerHTML.toString().indexOf(document.getElementsByClassName('caropka-headline__text__select')[1].value) == (-1) ) {
      						localStorage.removeItem('goalsPack');
      						var str = document.getElementsByClassName('caropka-headline__text__select')[1].value + '::' + document.getElementsByClassName('caropka-headline__text__select')[0].value;
      						var goalBlock = domCreate('span', 'caropka-headline__menu__gblock', document.getElementsByClassName('caropka-headline__menu')[0], []);
      						goalBlock.innerHTML = document.getElementsByClassName('caropka-headline__text__select')[1].value;
      	     				goalBlock.setAttribute('goal-param', document.getElementsByClassName('caropka-headline__text__select')[0].value);
      	     				goalBlock.setAttribute('trigger', document.getElementsByClassName('caropka-headline__text__select')[0].getAttribute('trigger'));
      	     				// localStorage.setItem('goalsPack', allGoals + 'goalId::' + document.getElementsByClassName('caropka-headline__text__select')[1].value + ', goalTrigger::' + document.getElementsByClassName('caropka-headline__text__select')[0].value + ', dopTrigger::' + document.getElementsByClassName('caropka-headline__text__select')[0].getAttribute('trigger') + '$$');
      	     				$(".caropka-headline__text__select").val("");
      	     				var table = document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock');
      	     				var allGoals = '';
      	     				for ( var i = 0; i < table.length; i++ ) {
      	     					allGoals += 'goalId::' + table[i].innerHTML + '||goalTrigger::' + table[i].getAttribute('goal-param') + '||dopTrigger::' + table[i].getAttribute('trigger') + '$$';
      	     				}
      	     				localStorage.setItem('goalsPack', allGoals);
      	     				console.log(localStorage.getItem('goalsPack'));
      	    			}
      	    			else {
      	    				var self = this;
      	     				self.innerHTML = 'Цель уже создана';
      	     				setTimeout(function() { self.innerHTML = 'Добавить цель'; }, 2000);
      	    			}
      	    	}
    		});
    		menu.addEventListener('click', function() {
    			if ( document.getElementsByClassName('caropka-headline__menu')[0].getElementsByTagName('input')[0] != undefined ) {
    				var men = document.getElementsByClassName('caropka-headline__menu')[0].getElementsByTagName('input')[document.getElementsByClassName('caropka-headline__menu')[0].getElementsByTagName('input').length - 1].remove();
      				var allEl = document.querySelectorAll('*');
      				for ( var i = 0; i < allEl.length; i++ ) {
      					if ( allEl[i].hasAttribute('inside-type') == true ) {
      						allEl[i].removeAttribute('inside-type');
        					allEl[i].style.outline = 'none';
      					}
      				}
    			}
    		});
    		/// ------
    		/// events
    		/// ------
    		headline.appendChild(menu);
    		var menu = document.createElement('span');
    		menu.className = 'caropka-headline__count__ec';
    		menu.innerHTML = 'Пользовательский HTML';
    		/// ------
    		/// events
    		/// ------
    		menu.addEventListener('click', function() {
    			document.getElementsByClassName('caropka-headline__text')[0].style.display = 'block';
      			var self = this;
      			setTimeout(function() { document.getElementsByClassName('caropka-headline__text')[0].style.opacity = '1'; }, 40);
      			var correctShadow = domCreate('section', 'caropka-headline__passCode', document.getElementsByClassName('caropka-headline__text')[0], []);
      			document.getElementsByClassName('caropka-headline__text')[0].scrollTop = 0;
      			$(".caropka-headline__text").css("overflow-y", "hidden");
      			var codeBlock = domCreate('textarea', 'caropka-headline__text__codeBlock', correctShadow, ['placeholder::Впишите ваш код сюда']);
      			var publick = domCreate('input', 'caropka-headline__text__codeBlock__publ __text__codeBlock__publInp', document.getElementsByClassName('caropka-headline__passCode')[0], ['placeholder::Название тега, от 4 символов', 'maxlength::30']);
      			var publick = domCreate('span', 'caropka-headline__text__codeBlock__publ', document.getElementsByClassName('caropka-headline__passCode')[0], []);
      			publick.innerHTML = 'Опубликовать компонент';
      			/// ------
    			/// events
    			/// ------
    			publick.addEventListener('click', function() {
    				var self = this;
      				if ( document.getElementsByClassName('__text__codeBlock__publInp')[0].value.length >= 4 ) {
      					var goalData = document.getElementsByClassName('caropka-headline__text__codeBlock')[0].value;
      					$.post('https://caropka.ru/insiderCab/addTags.php', {
      						dat: document.getElementsByClassName('__text__codeBlock__publInp')[0].value + '??' + goalData + '$$',
      						login: document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML,
      						fork: 'write'
		      			}, cb);
		      			function cb(data) {
      						self.innerHTML = 'Публикация данных..';
      						setTimeout(function() { $(".caropka-headline__passCode").remove(); }, 3000);
      					}
      				}
      				else {
      					this.innerHTML = 'Введите название тега';
      					var self = this;
      					setTimeout(function() { self.innerHTML = 'Опубликовать компонент'; }, 3000);
      				}
    			});
    			/// ------
    			/// events
    			/// ------
    			var ck = document.cookie;
    			if ( document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML == 'Инфомодуль' ) {
    				document.getElementsByClassName('__text__codeBlock__publInp')[0].setAttribute('placeholder', 'Вы не авторизованы');
      				document.getElementsByClassName('__text__codeBlock__publInp')[0].setAttribute('disabled', '');
      				$(".caropka-headline__text__codeBlock__publ:eq(1)").remove();
    			}
    			var close = domCreate('span', 'caropka-headline__text__codeBlock__close', correctShadow, []);
    			/// ------
    			/// events
    			/// ------
    			close.addEventListener('click', function() {
    				$(".caropka-headline__passCode").remove();
    			});
    			/// ------
    			/// events
    			/// ------
    		});
    		/// ------
    		/// events
    		/// ------
    		headline.appendChild(menu);
    		var helpWindow = document.createElement('div');
    		helpWindow.className = 'caropka-headline__text__help';
    		var topElem = domCreate('span', 'caropka-headline__text__help__top', helpWindow, []);
    		var deskLine = domCreate('span', 'caropka-headline__text__help__border', helpWindow, []);
    		var deskLineTwo = domCreate('span', 'caropka-headline__text__help__border caropka-headline__text__help__borderTwo', deskLine, []);
    		var deskLine = domCreate('span', 'caropka-headline__text__help__border', helpWindow, []);
    		var deskLineTwo = domCreate('span', 'caropka-headline__text__help__border caropka-headline__text__help__borderTwo', deskLine, []);
    		var winHead = domCreate('h3', 'caropka-headline__text__help__head', helpWindow, []);
    		winHead.innerHTML = 'Информационная панель';
    		var drag = domCreate('span', 'caropka-headline__text__help__head__drag', winHead, []);
    		/// ------
    		/// functions
    		/// ------
    		function dragOne(event) {
				document.body.addEventListener('mousemove', dragTwo);
      			document.getElementsByClassName('caropka-headline__text__help')[0].addEventListener('mousemove', dragTwo);
    		}
    		function dragTwo(event) {
      			document.getElementsByClassName('caropka-headline__text__help')[0].style.left = event.clientX + 421 + 'px';
      			document.getElementsByClassName('caropka-headline__text__help')[0].style.top = event.clientY - 54 + 'px';
    		}
    		/// ------
    		/// functions
    		/// ------
    		/// ------
    		/// events
    		/// ------
    		drag.addEventListener('mousedown', dragOne);
    		drag.addEventListener('mouseup', function() {
      			document.body.removeEventListener('mousemove', dragTwo);
      			winHead.removeEventListener('mousemove', dragTwo);
      			document.getElementsByClassName('caropka-headline__text__help')[0].removeEventListener('mousemove', dragTwo);
    		});
    		winHead.addEventListener('mouseup', function() {
      			document.body.removeEventListener('mousemove', dragTwo);
      			winHead.removeEventListener('mousemove', dragTwo);
      			document.getElementsByClassName('caropka-headline__text__help')[0].removeEventListener('mousemove', dragTwo);
    		});
    		document.body.addEventListener('mouseup', function() {
      			document.body.removeEventListener('mousemove', dragTwo);
      			winHead.removeEventListener('mousemove', dragTwo);
      			document.getElementsByClassName('caropka-headline__text__help')[0].removeEventListener('mousemove', dragTwo);
    		});
    		/// ------
    		/// events
    		/// ------
    		var showWorkspace = domCreate('span', 'caropka-headline__text__help__ws', helpWindow, []);
    		showWorkspace.innerHTML = 'Показать рабочую область';
    		/// ------
    		/// events
    		/// ------
    		showWorkspace.addEventListener('click', function() {
    			document.getElementsByClassName('caropka-headline')[0].style.transform = 'translateX(0px)';
    			setTimeout(function() {
        			$(".caropka-headline__text__help__ws").css("opacity", "0");
        			setTimeout(function() { $(".caropka-headline__text__help__ws").css("display", "none"); }, 300);
        		}, 1000);
    		});
    		/// ------
    		/// events
    		/// ------
    		document.documentElement.insertBefore(helpWindow, document.body);
    		var menu = domCreate('span', 'caropka-headline__count__custom', headline, []);
    		menu.innerHTML = 'Сведения о сайте';
    		/// ------
    		/// events
    		/// ------
    		menu.addEventListener('click', function() {
    			var dataBlock = document.createElement('span');
      			dataBlock.className = 'caropka-headline__about-site';
      			setTimeout(function() { dataBlock.style.opacity = '1'; }, 40);
      			document.getElementsByClassName('caropka-headline')[0].appendChild(dataBlock);
      			document.documentElement.style.overflowY = 'hidden';
      			var table = domCreate('section', 'caropka-headline__about-site__table', headline, []);
      			var head = domCreate('h3', 'caropka-headline__about-site__table__headline', table, []);
      			head.innerHTML = 'Таблица с базовыми характеристиками сайта';
      			var logo = domCreate('span', 'caropka-headline__logo caropka-headline__logo--min', head, []);
      			var t = domCreate('article', 'caropka-headline__about-site__table__t', table, []);
      			var close = domCreate('span', 'caropka-headline__about-site__table__close', table, []);
      			/// ------
    			/// events
    			/// ------
    			close.addEventListener('click', function() {
    				$(".caropka-headline__about-site").css("opacity", "0");
      				document.documentElement.style.overflowY = 'scroll';
      				setTimeout(function() { $(".caropka-headline__about-site").remove(); }, 40);
    			});
    			/// ------
    			/// events
    			/// ------
    			for ( var i = 0; i < 8; i++ ) {
    				var line = domCreate('div', 'caropka-headline__about-site__table__t__line', t, []);
    				var a = domCreate('span', '__t__line__ceil', line, []);
    				if ( i == 0 ) { a.innerHTML = 'Число тегов в body'; }
      				else if ( i == 1 ) { a.innerHTML = 'Тег title'; }
      				else if ( i == 2 ) { a.innerHTML = 'Описание сайта'; }
      				else if ( i == 3 ) { a.innerHTML = 'Код Метрики'; }
      				else if ( i == 4 ) { a.innerHTML = 'Набор якорей'; }
      				else if ( i == 5 ) { a.innerHTML = 'Набор целей'; }
      				else if ( i == 6 ) { a.innerHTML = 'Число ссылок'; }
      				else if ( i == 7 ) { a.innerHTML = 'Кодировка сайта'; }
      				var a = domCreate('span', '__t__line__ceil', line, []);
      				if ( i == 0 ) { a.innerHTML = 'Обнаружено ' + document.body.querySelectorAll('*').length + ' тегов'; }
      				else if ( i == 1 ) { 
      					if ( document.getElementsByTagName('title')[0].innerHTML != '' ) {
      						a.innerHTML = document.getElementsByTagName('title')[0].innerHTML;
      					}
      					else {
      						a.innerHTML = 'Тег title незаполнен';
		      			}
      			
      				}
      				else if ( i == 2 ) {
      					a.innerHTML = 'Тега description на сайте не обнаружено';
      					for ( var ii = 0; ii < document.head.querySelectorAll('*').length; ii++ ) {
      						if ( document.head.querySelectorAll('*')[ii].tagName == 'META' && document.querySelectorAll('*')[ii].getAttribute('name') == 'description' ) {
      							a.innerHTML = document.head.querySelectorAll('*')[ii].getAttribute('content');
      						}
      				
      					}
      			
      				}
      				else if ( i == 3 ) { a.innerHTML = 'Модуль отображения в разработке'; }
      				else if ( i == 4 ) {
      					var str = '';
      					for ( var ii = 0; ii < document.querySelectorAll('*').length; ii++ ) {
      						if ( document.querySelectorAll('*')[ii].hasAttribute('id') == true && document.querySelectorAll('*')[ii].getAttribute('id') != '' ) {
      							str += 'Якорь на элементе ' + document.querySelectorAll('*')[ii].tagName + '. ' + document.querySelectorAll('*')[ii].getAttribute('id') + '<br>';
      						}
      					}
      					a.style.height = 'auto';
      					a.style.lineHeight = '22px';
      					a.style.paddingTop = '12px';
      					a.style.paddingBottom = '12px';
      					if ( str != '' ) {
      						a.innerHTML = str;
      					}
      					else { a.innerHTML = 'Якорей на сайте не обнаружено'; }
      					}
      					else if ( i == 5 ) {
      						var str = '';
      						for ( var ii = 0; ii < document.querySelectorAll('*').length; ii++ ) {
      							if ( document.querySelectorAll('*')[ii].tagName != 'BR' && document.querySelectorAll('*')[ii].tagName != 'HR' && document.querySelectorAll('*')[ii].tagName != 'NOINDEX' && document.querySelectorAll('*')[ii].tagName != 'SCRIPT' ) {
      								var attrCollect = document.querySelectorAll('*')[ii].attributes;
      								for ( var z = 0; z < attrCollect.length; z++ ) {
      									if ( attrCollect[z].value.indexOf('yaCounter') != (-1) ) {
      										str += 'Tag ' + document.querySelectorAll('*')[ii].tagName + '. ' + attrCollect[z].value + '<br>';
      									}
      								}
      							}
      						}
      						a.style.height = 'auto';
      						a.style.lineHeight = '22px';
      						a.style.paddingTop = '12px';
      						a.style.paddingBottom = '12px';
      						if ( str != '' ) {
      							a.innerHTML = str;
      						}
      						else { a.innerHTML = 'Целей Метрики не обнаружено'; }
      					}
      					else if ( i == 6 ) {
      						var count = 0;
      						for ( var ii = 0; ii < document.querySelectorAll('*').length; ii++ ) {
      							if ( document.querySelectorAll('*')[ii].tagName == 'A' ) {
      								count++;
      							}
      						}
      						a.innerHTML = 'Обнаружено ' + count + ' ссылок';
      					}
      					else if ( i == 7 ) {
      						for ( var ii = 0; ii < document.querySelectorAll('*').length; ii++ ) {
      							if ( document.querySelectorAll('*')[ii].tagName == 'META' ) {
      								var attrCollect = document.querySelectorAll('*')[ii].attributes;
      								for ( var z = 0; z < attrCollect.length; z++ ) {
      									if ( attrCollect[z].value.indexOf('UTF-8') != (-1) || attrCollect[z].value.indexOf('utf-8') != (-1) ) {
      										a.innerHTML = attrCollect[z].value;
      									}
      								}
      							}
      						}
      					}
    			}
    		});
    		/// ------
    		/// events
    		/// ------
    		var menu = domCreate('span', 'caropka-headline__count__close-module caropka-headline__count__hidden-module', headline, []);
    		menu.innerHTML = '';
    		/// ------
    		/// events
    		/// ------
    		menu.addEventListener('click', function() {
    			this.parentNode.style.transform = 'translateX(-650px)';
    			$(".caropka-headline__text__help__ws").css("display", "block");
    			setTimeout(function() { $(".caropka-headline__text__help__ws").css("opacity", "1"); }, 100);
    		});
    		/// ------
    		/// events
    		/// ------
    		var menu = domCreate('span', 'caropka-headline__count__close-module', headline, []);
    		/// ------
    		/// events
    		/// ------
    		menu.addEventListener('click', function() {
      			document.location.href = document.location.href.split('?param=goals-mode')[0];
      			localStorage.removeItem('insider')
      			console.log(localStorage.getItem('insider'));
    		});
    		/// ------
    		/// events
    		/// ------
    		var menu = domCreate('span', 'caropka-headline__count__close-module caropka-headline__count__close-module__docs', headline, []);
    		menu.innerHTML = 'Инструкция';
    		var menu = domCreate('span', 'caropka-headline__count__close-module caropka-headline__count__close-module__docs caropka-headline__count__close-module__cont', headline, []);
    		menu.innerHTML = 'Контакты';
    		/// ------
    		/// events
    		/// ------
    		menu.addEventListener('click', function() {
      			$(".caropka-headline__count__close-module__cont__table").css("transform", "translateY(0px)");
    		});
    		/// ------
    		/// events
    		/// ------
    		var contTable = domCreate('span', 'caropka-headline__count__close-module__cont__table', headline, []);
    		var p = domCreate('p', '', contTable, []);
    		p.innerHTML = 'Целеставер, 2020 год.<br>Наша группа ВК - https://vk.com/celestaver<br>Сайт, посвященный Целеставеру - https://vk.com/celestaver';
    		var p = domCreate('p', '', contTable, []);
    		p.innerHTML = 'Екатеринбург. Свободное распространение.<br>Политика использования сервиса<br>Email - nik.shipov@gmail.com';
    		var logo = domCreate('span', '__cont__table__logo', p, []);
    		var close = domCreate('span', '__cont__table__close', p, []);
    		close.innerHTML = 'Свернуть окно';
    		/// ------
    		/// events
    		/// ------
    		close.addEventListener('click', function() {
      			$(".caropka-headline__count__close-module__cont__table").css("transform", "translateY(-300px)");
    		});
    		/// ------
    		/// events
    		/// ------
    		var textHead = domCreate('p', 'caropka-headline__head caropka-headline__head--help', headline, []);
    		textHead.innerHTML = 'Если нужна помощь в работе с сервисом нажмите на этот блок и обратите внимание на информационную доску справа';
    		textHead.style.cssText = 'font-size: 12px; color: black; border-top-left-radius: 30px; border-bottom-left-radius: 30px; background-color: white; padding: 14px; padding-left: 20px; display: block; position: absolute; text-align: right; width: 320px; height: auto; line-height: 21px; margin-left: -320px; left: 100%; top: 0; margin-top: 530px;';
    		var icon = domCreate('span', 'caropka-headline__head__icon', textHead, []);
    		/// ------
    		/// events
    		/// ------
    		textHead.addEventListener('click', function() {
    			if ( document.getElementsByClassName('caropka-headline__text__help__messHelp')[0] == undefined ) {
    				this.value = '';
      				var mes = document.createElement('p');
      				mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHelp';
      				var dt = new Date();
          			var h = dt.getHours();
          			var m = dt.getMinutes();
          			var s = dt.getSeconds();
          			mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Привет! Вы активировали интерактивный модуль обучения. Чтобы что-то понять, нужно это сделать. Этим мы сейчас и займемся. Готовы? Тогда нажмите Далее.<span class="caropka-headline__text__help__messHelp__steps __messHelp__steps__step1">Далее</span>';
      				var mesClose = document.createElement('span');
      				mesClose.className = 'caropka-headline__text__help__mess__close';
      				if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      					document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      					document.getElementsByClassName('caropka-headline__text__help')[0].setAttribute('id', 'learnDesk');
      					stepOne();
      				}
    			}
    		});
    		/// ------
    		/// events
    		/// ------
    		document.documentElement.insertBefore(headline, document.body);
    		var ELEMS = document.querySelectorAll('*');
    		for ( var i = 0; i < ELEMS.length; i++ ) {
    			ELEMS[i].setAttribute('oncontextmenu', 'return false');
    			/// ------
    			/// events
    			/// ------
    			ELEMS[i].addEventListener('contextmenu', function(event) {
    				document.getElementsByClassName('caropka-headline__text__select')[0].value = '';
    				$(".caropka-headline").css("transform", "translateX(0px)");
        			setTimeout(function() {
        				$(".caropka-headline__text__help__ws").css("opacity", "0");
        				setTimeout(function() { $(".caropka-headline__text__help__ws").css("display", "none"); }, 300);
        			}, 1000);
        			$(".caropka-headline__text").css("display", "block");
        			setTimeout(function() { $(".caropka-headline__text").css("opacity", "1"); }, 600);
        			$(".caropka-headline__text__p:eq(0)").html('<span class="caropka-headline__text__icon"></span>Выбран элемент с тегом ' + event.target.tagName);
        			$(".caropka-headline__text__p:eq(0)").attr("tag-val", event.target.tagName + '.intag');
        			if ( document.getElementsByClassName('caropka-headline__text__select')[0].value.indexOf(event.target.tagName + '.intag') == (-1) ) {
        				document.getElementsByClassName('caropka-headline__text__select')[0].value += event.target.tagName + '.intag, ';
        			}
        			if ( event.target.innerHTML.toString().indexOf('<') == (-1) ) { $(".caropka-headline__text__p:eq(1)").html('<span class="caropka-headline__text__icon"></span>Вложенных элементов не обнаружено'); 
        				if ( event.target.innerHTML != '' ) { $(".caropka-headline__text__p:eq(2)").html('<span class="caropka-headline__text__icon"></span>Элемент с иннером "' + event.target.innerHTML + '"'); 
        					$(".caropka-headline__text__p:eq(2)").attr("onselectstart", "return false");
        					$(".caropka-headline__text__p:eq(2)").attr("inner-val", event.target.innerHTML + '.inin');
        					if ( document.getElementsByClassName('caropka-headline__text__select')[0].value.indexOf(event.target.innerHTML + '.inin') == (-1) ) {
        						document.getElementsByClassName('caropka-headline__text__select')[0].value += event.target.innerHTML + '.inin, ';
        					}
        				}
        				else { $(".caropka-headline__text__p:eq(2)").html('<span class="caropka-headline__text__icon"></span>Иннер отсутствует'); }
        			} 
        			else {
        				$(".caropka-headline__text__p:eq(1)").html('<span class="caropka-headline__text__icon"></span>Число вложенных элементов ' + event.target.querySelectorAll('*').length);
        				var bd = document.body.querySelectorAll('*');
        				for ( var i = 0; i < bd.length; i++ ) {
        					bd[i].removeAttribute('domstartpoint');
        				}
        				var collect = event.target.querySelectorAll('*');
        				console.log(collect);
        				event.target.setAttribute('domstartpoint', 'true');
        				/// ------
    					/// events
    					/// ------
    					document.getElementsByClassName('caropka-headline__text__p')[1].addEventListener('click', function() {
    						$(".caropka-headline__text__p__collect").remove();
    						if ( document.getElementsByClassName('caropka-headline__text__p__collect')[0] == undefined ) {
    							var self = this;
    							var wind = domCreate('article', 'caropka-headline__text__p__collect', self, []);
    							var line = domCreate('span', '__p__collect__line __p__collect__line--title', wind, []);
    							for ( var i = 0; i < collect.length; i++ ) {
    								var line = document.createElement('span');
        							line.className = '__p__collect__line';
        							var attrs = collect[i].attributes;
        							if ( collect[i].innerHTML.toString().indexOf('<') != (-1) ) {
        								line.innerHTML = collect[i].tagName;
        							}
        							else {
        								line.innerHTML = collect[i].tagName;
        								line.setAttribute('inner', collect[i].innerHTML);	
        							}
        							if ( attrs.length > 0 ) {
        								for ( var ii = 0; ii < attrs.length; ii++ ) {
        									if ( attrs[ii].value != 'return false' && attrs[ii].value != 'filter: grayscale(0.3);' ) {
        										line.innerHTML += '<span class="__p__collect__line__attr">' + attrs[ii].name + '=' + attrs[ii].value + '</span>';
        									}
        								}
        							}
        							if ( line.getElementsByClassName('__p__collect__line__attr')[0] == undefined ) {
        								line.style.textDecoration = 'line-through';
        							}
        							var sel = document.createElement('span');
        							sel.className = '__p__collect__line__select';
        							sel.innerHTML = 'Add';
        							line.appendChild(sel);
        							wind.appendChild(line);
        							/// ------
    								/// events
    								/// ------
    								sel.addEventListener('click', function() {
    									var tag = this.parentNode.innerHTML.toString().split('<span')[0];
        								var atr = this.parentNode.getElementsByClassName('__p__collect__line__attr');
        								var str = '';
        								var inr = this.parentNode.getAttribute('inner');
        								if ( atr[0] != undefined ) {
        									for ( var o = 0; o < atr.length; o++ ) {
        										if ( atr[o].innerHTML != 'oncontextmenu=return false' && atr[o].innerHTML.indexOf('style') == (-1) ) {
        											if ( o != (atr.length - 1) ) {
        												str += atr[o].innerHTML + ', ';
        											}
        											else {
        												str += atr[o].innerHTML + ', ';
        											}
        										}
        									}
        									document.getElementsByClassName('caropka-headline__text__p')[3].innerHTML = '';
        									document.getElementsByClassName('caropka-headline__text__select')[0].value = '';
        									document.getElementsByClassName('caropka-headline__text__select')[0].value = str;
        									document.getElementsByClassName('caropka-headline__text__p')[0].innerHTML = '<span class="caropka-headline__text__icon"></span>Выбран элемент с тегом ' + tag;
        									document.getElementsByClassName('caropka-headline__text__p')[0].setAttribute('tag-val', tag + '.intag');
        									document.getElementsByClassName('caropka-headline__text__p')[1].innerHTML = '<span class="caropka-headline__text__icon"></span>Число вложенных элементов неизвестно';
        									if ( inr != '' && inr != null ) {
        										document.getElementsByClassName('caropka-headline__text__p')[2].innerHTML = '<span class="caropka-headline__text__icon"></span>Элемент с иннером "' + inr + '"';
        										document.getElementsByClassName('caropka-headline__text__p')[2].setAttribute('inner-val', inr + '.inin');
        										document.getElementsByClassName('caropka-headline__text__select')[0].value += inr + '.inin,';
        									}
        									else {
        										document.getElementsByClassName('caropka-headline__text__p')[2].innerHTML = '<span class="caropka-headline__text__icon"></span>Иннер не определен';
        										document.getElementsByClassName('caropka-headline__text__p')[2].removeAttribute('inner-val');
        									}
        									document.getElementsByClassName('caropka-headline__text__select')[0].value += tag + '.intag,';
        									setTimeout(function() { $(".caropka-headline__text__p__collect").remove(); }, 0);
        								}
    								});
    								/// ------
    								/// events
    								/// ------
    							}
    						}
    					});
    					/// ------
    					/// events
    					/// ------
    					$(".caropka-headline__text__p:eq(2)").html('<span class="caropka-headline__text__icon"></span>Иннер содержит HTML теги');
        			}
        			if ( event.target.attributes.length > 2 ) {
        				document.getElementsByClassName('caropka-headline__text__p')[3].innerHTML = '';
        				for ( var i = 0; i < event.target.attributes.length; i++ ) {
        					var p = domCreate('span', 'caropka-headline__text__p__attr', document.getElementsByClassName('caropka-headline__text__p')[3], []);
        					p.innerHTML = event.target.attributes[i].name + '=' + event.target.attributes[i].value;
        					if ( p.innerHTML == 'oncontextmenu=return false' || p.innerHTML == 'style=filter: grayscale(0.3);' || p.innerHTML.indexOf('filter: grayscale(1)') != (-1) || p.innerHTML.indexOf('style') != (-1) ) { p.style.textDecoration = 'line-through'; p.remove(); }
        					if ( p.innerHTML.indexOf('?param=goals-mode') != (-1) ) { p.innerHTML = p.innerHTML.split('?param')[0]; }
        					if ( document.getElementById('IntModeOn') != undefined ) {
        						document.getElementsByClassName('caropka-headline__text__select')[0].value += event.target.attributes[i].name + '=' + event.target.attributes[i].value + ', ';
        						p.remove();
        						document.getElementsByClassName('caropka-headline__text__p')[3].innerHTML = 'Активирован умный режим. Автосбор пакета триггеров';
        						document.getElementsByClassName('caropka-headline__text__select')[0].setAttribute('disabled', '');
        					}
        					else {
        						document.getElementsByClassName('caropka-headline__text__select')[0].removeAttribute('disabled');
        					}
        					/// ------
    						/// events
    						/// ------
    						p.addEventListener('click', function() {
    							if ( document.getElementsByClassName('caropka-headline__text__select')[0].value.indexOf(this.innerHTML) == (-1) ) {
    								if ( document.getElementsByClassName('caropka-headline__text__select')[0].value == '' ) {
        								document.getElementsByClassName('caropka-headline__text__select')[0].value += this.innerHTML;
        							}
        							else { 
        								document.getElementsByClassName('caropka-headline__text__select')[0].value += this.innerHTML + ', ';
        							}
    							}
    							if ( document.getElementsByClassName('caropka-headline__text__help__messAttr')[0] == undefined ) {
    								var mes = document.createElement('p');
      								mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messAttr';
          							var dt = new Date();
          							var h = dt.getHours();
          							var m = dt.getMinutes();
          							var s = dt.getSeconds();
      								mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span>. Вы выбрали в качестве триггера атрибут элемента. Обращайте внимание на его формат, если он общего характера, к примеру, class=btn, использовать его нежелательно, т.к. возможны пересечения. Старайтесь использовать только длинные и уникальные атрибуты. Также рекомендуется всегда добавлять в набор название тега элемента.';
      								var mesClose = domCreate('span', 'caropka-headline__text__help__mess__close', mes, []);
      								/// ------
    								/// events
    								/// ------
    								mesClose.addEventListener('click', function() {
    									this.parentNode.remove();
    								});
    								/// ------
    								/// events
    								/// ------
    								if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      									document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      								}
    							}
    						});
    						/// ------
    						/// events
    						/// ------
        				}
        			}
        			else {
        				document.getElementsByClassName('caropka-headline__text__p')[3].innerHTML = 'Набор атрибутов не определен';
        			}
        			$(".you-element-here").css("opacity", "0");
        			setTimeout(function() { $(".you-element-here").remove(); }, 300);
        			setTimeout(function() {
        				var here = document.createElement('span');
        				here.className = 'you-element-here';
        				if ( document.getElementsByClassName('you-element-here')[0] == undefined ) {
        					document.body.appendChild(here);
        				}
        				here.style.top = event.pageY - 30 + 'px';
		        		here.style.left = event.pageX - 30 + 'px';
        			}, 340);
    			});
    			/// ------
    			/// events
    			/// ------
    		}
    		var allEl = document.body.querySelectorAll('*');
        	for ( var i = 0; i < allEl.length; i++ ) {
        		allEl[i].style.filter = 'grayscale(0.3)';
        	}
        	console.timeEnd('checkLoad');
    	} 
		else {
			var url = document.location.hostname;
			$.post('https://caropka.ru/insiderCab/addTags.php', {
      			login: url,
      			fork: 'read'
			}, cb);
			function cb(data) {
				var dt = data;
				if ( dt != '' && dt.indexOf('$$') != (-1) ) {
					for ( var i = 0; i < dt.split('$$').length - 1; i++ ) {
						if ( dt.split('$$')[i].split('??')[1].indexOf('</') == (-1) && dt.split('$$')[i].split('??')[1].indexOf('yaCreate') == (-1) ) {
							var scr = document.createElement('script');
      						scr.setAttribute('type', 'text/javascript');
      						scr.setAttribute('scr-type', 'insider-script');
      						scr.innerHTML = dt.split('$$')[i].split('??')[1];
      						document.body.appendChild(scr);
						}
						else if ( dt.split('$$')[i].split('??')[1].indexOf('</') == (-1) && dt.split('$$')[i].split('??')[1].indexOf('yaCreate') != (-1) ) {
							var countNumber = dt.split('$$')[i].split('??')[1].split('::')[1];
							var scr = document.createElement('script');
      						scr.setAttribute('type', 'text/javascript');
      						scr.setAttribute('scr-type', 'insider-script');
      						scr.innerHTML = '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(' + countNumber + ', "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, ecommerce:"dataLayerInsider" });';
      						document.head.appendChild(scr);
						}
						else {
      						document.body.innerHTML += dt.split('$$')[i].split('??')[1];
      					}
					}
				}
			}
			setTimeout(function() {
				var elems = document.querySelectorAll('*');
				for ( var i = 0; i < elems.length; i++ ) {
					if ( elems[i].tagName == 'INPUT' || elems[i].tagName == 'TEXTAREA' ) {
					/// ------
		    			/// events
		    			/// ------
		    			elems[i].addEventListener('keyup', function() {
		    				if ( this.value.toLowerCase() == 'привет инсайдер' || this.value.toLowerCase() == 'привет, инсайдер' ) {
		    					setTimeout(function() {
    								localStorage.setItem('insider', 'on');
    								document.location.href = document.location.href;
    							}, 1000);
		    				}
		    			});
		    			/// ------
    					/// events
    					/// ------
					}
				}
			}, 2000);
		}
	}
}

let cstr = new CelestaverStart();
cstr.init();

(function() {
  	setTimeout(function() {
  		console.log('Anchor module ready');
  		if ( document.location.href.indexOf('#') != (-1) ) {
  			var hash = document.location.href.split('#')[1];
  			console.log(document.getElementById(hash).getBoundingClientRect().top);
  			while ( document.getElementById(hash).getBoundingClientRect().top > 120 ) {
  				document.documentElement.scrollTop = document.documentElement.scrollTop + 60;
  			}}
  	}, 1000);
})();

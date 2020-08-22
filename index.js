function TGC2019(data, count, trigger) {
	
	// document.getElementsByClassName('caropka-headline__text__select')[1].value + '::' + document.getElementsByClassName('caropka-headline__text__select')[0].value
	
	window.dataLayerMetrika = window.dataLayerMetrika || [];
	
	var metrika = count;
	var dt = data;
	var gName = dt.split('::')[0];
	var gParam = dt.split('::')[1];
	var elCollect = document.querySelectorAll('*');
	
	if ( trigger == 'none' ) {
	
	/* fork 1 */ if ( gParam.indexOf('.intag') != (-1) && gParam.indexOf('.inin') != (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].tagName + '.intag') != (-1) && gParam.indexOf(elCollect[i].innerHTML) != (-1) ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >=1 ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 2 */ else if ( gParam.indexOf('.intag') == (-1) && gParam.indexOf('.inin') != (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].innerHTML) != (-1) && elCollect[i].innerHTML != '' ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 3 */ else if ( gParam.indexOf('.intag') != (-1) && gParam.indexOf('.inin') == (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].tagName + '.intag') != (-1) ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1 ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 4 */ else if ( gParam.indexOf('.intag') == (-1) && gParam.indexOf('.inin') == (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( elCollect[i].tagName != 'HTML' && elCollect[i].tagName != 'BODY' && elCollect[i].tagName != 'HEAD' && elCollect[i].tagName != 'SCRIPT' && elCollect[i].tagName != 'BR' && elCollect[i].tagName != 'STYLE' && elCollect[i].tagName != 'META' ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
}

// ОТРАБАТЫВАЕМ ВАРИАНТ КОГДА ЕСТЬ ТРИГГЕРЫ

else {
	
	if ( trigger.split('::')[0] == 'utm' ) {
		
		if ( document.location.href.indexOf(trigger.split('::')[1]) != (-1) ) {
			
		/* fork 1 */ if ( gParam.indexOf('.intag') != (-1) && gParam.indexOf('.inin') != (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].tagName + '.intag') != (-1) && gParam.indexOf(elCollect[i].innerHTML) != (-1) ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 2 */ else if ( gParam.indexOf('.intag') == (-1) && gParam.indexOf('.inin') != (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].innerHTML) != (-1) && elCollect[i].innerHTML != '' ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 3 */ else if ( gParam.indexOf('.intag') != (-1) && gParam.indexOf('.inin') == (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].tagName + '.intag') != (-1) ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1 ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 4 */ else if ( gParam.indexOf('.intag') == (-1) && gParam.indexOf('.inin') == (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( elCollect[i].tagName != 'HTML' && elCollect[i].tagName != 'BODY' && elCollect[i].tagName != 'HEAD' && elCollect[i].tagName != 'SCRIPT' && elCollect[i].tagName != 'BR' && elCollect[i].tagName != 'STYLE' && elCollect[i].tagName != 'META' ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
			
	}
		
	}
	
}
	
}

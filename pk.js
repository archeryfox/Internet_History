let x=0;
let s1 = document.getElementsByClassName('s1')[0];
let sput = document.getElementsByClassName('sputnik')[0];
let sputimg = document.getElementById('imge');
let sender = document.getElementById('ct1');
let taker = document.getElementById('ct2');
let starw = document.getElementById('star')
var cLine = document.getElementById('cLine');
var mosaic = document.getElementById('Mosaic');
var bef = document.getElementById('before');
var aft = document.getElementById('after');
let file = document.getElementById('txt');
let txtL = document.getElementById('list');
let grL = document.getElementById('lGr');
let nextp = document.getElementById('nextp');
let t11 = document.getElementById('t11');
let itapok = document.getElementById('itapok');
let smf = document.getElementById('smf');
let mks = document.getElementById('mks');
let web = document.getElementById('web');
let tv = document.getElementById('tv');
let n = 0;



let Dh = window.screen.height;
let Dw = window.screen.width;
var i = 0;
sender.addEventListener('click', function(){
	
	 i++ ;
		if (i==1) {
			cLine.style.width = '7vw';
			taker.innerHTML = 'LOG';
			starw.play();
		}
		if (i>1) {
			cLine.style.width = '22vw';
			taker.innerHTML = 'LOGON';
			starw.src = 'a6532758e27aac7.mp3';
			starw.play();
		}
		
});

// bef.addEventListener('mousemove', function(){
// 	bef.style.left = -15+'vw';
// 	aft.style = 15+"vw"
// })

var test = setInterval(daty, 10)


var thema = document.getElementById('time');

function daty() {
	let date = new Date();
	var min = date.getMinutes();
	if(min<10){
thema.innerHTML =  date.getHours() + ':' +'0'+date.getMinutes() ;

}else{
	let date = new Date();
	
thema.innerHTML =   date.getHours() + ':'+date.getMinutes() ;
}
}

var l = document.getElementById('showScroll');
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset-300 + 'px';

	l.style.marginLeft=pageYOffset+'px';
if (pageYOffset>=450){
s1.style.background='darkred';
sput.style.marginLeft=50+'vw';
sputimg.style.transform='rotate(552deg)';
} else {
	sputimg.style.transform='rotate(0deg)';
sput.style.marginLeft=0+'cm';
s1.style.background='#010101 ';
}
if(pageYOffset>=(Dh*2)){
	mosaic.style.animation='ms 1s ease forwards';
	if(pageYOffset>=(Dh*4)){
		smf.style.animation = 'smf 2s ease forwards';
		web.style.animation = 'web 2s ease-in forwards';
		itapok.style.animation = 'itapok 3s ease-in-out forwards';
		mks.style.animation = 'mks 3s ease forwards';
	}
}
	
});

file.addEventListener('dblclick', function(){
	txtL.style.display = 'block';
	grL.style.animation = 'lg 1s ease forwards';
	txtL.style.animation = 'l 1s ease forwards';
});
nextp.addEventListener('click', function(){

	n++;
		if(n==1){
	t11.innerHTML = 'С 1994 года основную работу по развитию Всемирной паутины взял на себя консорциум Всемирной паутины (англ. World Wide Web Consortium, W3C), основанный и до сих пор возглавляемый Тимом Бернерсом-Ли. Данный консорциум — организация, разрабатывающая и внедряющая технологические стандарты для Интернета и Всемирной паутины. Миссия W3C: «Полностью раскрыть потенциал Всемирной паутины путём создания протоколов и принципов, гарантирующих долгосрочное развитие Сети». Две другие важнейшие задачи консорциума — обеспечить полную «интернационализацию Сети» и сделать Сеть доступной для людей с ограниченными возможностями.';
		}
		if(n==2){
	t11.innerHTML = 'W3C разрабатывает для Интернета единые принципы и стандарты (называемые «рекомендациями», W3C Recommendations), которые затем внедряются производителями программ и оборудования. Таким образом достигается совместимость между программными продуктами и аппаратурой различных компаний, что делает Всемирную сеть более совершенной, универсальной и удобной. Все рекомендации консорциума Всемирной паутины открыты, то есть не защищены патентами и могут внедряться любым человеком без всяких финансовых отчислений консорциуму.'
		}
		if(n==3){
			t11.innerHTML = 'На этом всё. Спасибо огромное за внимание и до свидания!'
		}
		if(n==4){
			window.close();
		}
	});
javascript:
(
	function(j,f,dom)
	{
		j=['mai_inner_level_milk2.js',
		   'calc_rating_test.js',
		   'maiRatingAnalyzer_body.js'];
		dom='https://shiguren39.github.io/maimai/';
		f=function(s,u)
		{
			if(j.length==0)
			{
				return;
			}
			u=dom+j.shift()+'?'+Date.now();
			s=document.createElement('script');
			document.body.appendChild(s);
			s.charset='UTF-8';
			s.addEventListener('load',f);
			s.src=u;
		};
		(document.readyState=='loading')?document.addEventListener('DOMContentLoaded',f):f();
	}
)();
//Throttle: When you want a function to be called only after certain timeperiod. any request before that time should get ignored. then you should use throttle function.


	function throttle(fn,delay){
	let lastCall=0;
	return (...args)=>{
	let now=Date.now();
		if(now-lastCall<delay){
			return ;
		}
      		else {
		lastCall=now;
		   return fn(...args);
		}
	     }
	}
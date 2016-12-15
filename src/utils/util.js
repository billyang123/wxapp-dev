export function formatTime(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
export function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
export function getParams(obj){
	let arr = [];
	for (index in obj) {
		if(typeof(obj[index]) == "object"){
			obj[index] = JSON.stringify(obj[index])
		}
		arr.push(index+"="+obj[index])
	}
	return arr.join("&");
}


export const date = (item, index, prop) =>{
	if(typeof item === 'string'){
		const reg = /[-,/\s]/;
		let res = '';
		res = item.split(reg);
		return index===2&&parseInt(res[2])<=9?('0'+parseInt(res[2])):parseInt(res[index]);
	}
	return prop=='month'&&(typeof item[prop]==='number')?parseInt(item[prop]+1):prop=='day'&&parseInt(item[prop])<10?('0'+item[prop]):item[prop]
}

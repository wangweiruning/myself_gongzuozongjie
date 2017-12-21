
/*
	对数组排序  按条件排序
    @function     JsonSort 对json排序
    @param        json     用来排序的json
    @param        key      排序的键值
*/
function JsonSort(json,key){
//	    //console.log(json);
     for(var j=1,jl=json.length;j < jl;j++){
        var temp = json[j],
            val  = temp[key],
             i    = j-1;
       while(i >=0 && json[i][key]<val){
            json[i+1] = json[i];
            i = i-1;    
         }
       json[i+1] = temp;
        
	     }
	     //console.log(json);
	     return json;
	 }
	 var json = JsonSort(willSort,'height');
	 console.log(json);


function push(){
	var r = confirm('정말 누르시겠습니까?');
	console.log(r);
	if(r == true){
		alert("확인을 누르셨습니다.");
	}
	else{
		alert("취소를 누르셨습니다.");
	}
}
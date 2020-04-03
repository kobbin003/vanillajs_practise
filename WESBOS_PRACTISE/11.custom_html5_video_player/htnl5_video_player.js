var bideo=document.querySelector(".video_file");
var play_buttan=document.querySelector(".player_button_toggle");

function video_work(){
//	if(bideo.paused)
//		{
//			bideo.play();
//		}
//	else{
//		bideo.pause();
//	}
	//OR
	//bideo.paused?bideo.play():bideo.pause();
	//OR
	const valu=bideo.paused?"play":"pause";
	bideo[valu]();
}

play_buttan.addEventListener("click",video_work);

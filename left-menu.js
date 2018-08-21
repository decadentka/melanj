var id_menu = new Array('sub_menu_1','sub_menu_2','sub_menu_3','sub_menu_4','sub_menu_5','sub_menu_6','sub_menu_7','sub_menu_8','sub_menu_9','sub_menu_10','sub_menu_11','sub_menu_12','sub_menu_13','sub_menu_14','sub_menu_15','sub_menu_16','sub_menu_17','sub_menu_18','sub_menu_19','sub_menu_20','sub_menu_21','sub_menu_22','sub_menu_23','sub_menu_24');
startList = function allclose() {
	for (i=0; i < id_menu.length; i++){
		document.getElementById(id_menu[i]).style.display = "none";
	}
}
function openMenu(id){
	for (i=0; i == id_menu.length; i++){
		if (id != id_menu[i]){
			document.getElementById(id_menu[i]).style.display = "none";
		}
	}
	if (document.getElementById(id).style.display == "block"){
		document.getElementById(id).style.display = "none";
	}else{
		document.getElementById(id).style.display = "block";
	}
}
window.onload=startList;
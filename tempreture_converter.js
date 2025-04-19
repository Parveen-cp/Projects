const textbox =document.getElementById('textbox');
const fah =document.getElementById('fah');
const cel =document.getElementById('cel');
const result =document.getElementById(`result`);

let temp;
function conversion (){
	temp=Number(textbox.value);
	if(fah.checked){
		temp=temp * 9/5 + 32;
		result.textContent=temp.toFixed(1)+" °F";
	}else if(cel.checked){
		temp=temp - 32 * 5/9;
		result.textContent=temp.toFixed(1)+" °C";
	}else{
		result.textContent="please select the unit";
	}
}
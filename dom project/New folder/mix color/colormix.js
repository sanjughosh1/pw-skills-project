function ColorMixcer(){
  const color1 = document.getElementById("color1").value.toLowerCase();
  const color2 = document.getElementById("color2").value.toLowerCase();
  let ResoultColor = "";

  switch(color1){
    case "red":
      switch(color2){
        case "blue": ResoultColor = "purple";
        break;
        case "yellow": ResoultColor = "orange";
        break;
        default : "invaled color combenation";
      }
    break;
    case "blue":
      switch(color2){
        case "red": ResoultColor = "purple";
        break;
        case "yellow": ResoultColor = "green";
        break;
        default : "invaled color combenation";
       }
    break;
    case "yellow":
      switch(color2){
        case "red": ResoultColor = "orange";
        break;
        case "blue": ResoultColor = "green";
        break;
       default : "invaled color combenation";
       }
        break;

    default : "invaled color combenation";
          
  }

document.getElementById("result").innerHTML = ResoultColor;

}
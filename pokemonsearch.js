const fs = require('fs');

function loadPokemonNames(path) {
  try {
    if (typeof(path) === "string") {
      const pokemonValue = fs.readFileSync(path, 'utf8');
      return JSON.parse(pokemonValue);
    } 
  } catch (error) {
    console.error("에러 내용:", error);
  }
}
const data = loadPokemonNames("./pokemonNames.json");



let pn = [];
function nc(ina) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      for(let k = 0; k < ina.length; k++){
        let isa = Array.from(ina);//배열로 만들어가 
        let ifc = ina[k] === data[i][j]
          let k2 = k+1
          let j2 = j+1
          let ifc2 = ina[k2] === data[i][j2]
          let k3 = k+2
          let j3 = j+2
          let ifc3 = ina[k3] === data[i][j3]
          let k4 = k+3
          let j4 = j+3
          let ifc4 = ina[k4] === data[i][j4]
        if(isa.length === 1) { //todo 이걸 해결해보기 주말 
          let ifc = ina[k] === data[i][j]
          if(ifc === true){
            if(pn !== data[i]){
              pn += data[i]+" ";
            }
          }
        }else if(isa.length === 2){// 숫자이상을 나가면 false 과 false를 비교하면 같으니가 true가 나와서 실해되네
          if (data[i][j2],ina[k2] !== undefined) { //마지막 글자가 한글자만 들어오는걸 막음
            if((ifc === true) && (ifc2 === true)){ // * 이놈이 안돌아간다 왜지 해결했는데 해결방안이 이해가 안됨 위쪽에 전 방법으로 실햄됨 이것만 안됨
              if(pn !== data[i]){
                pn += data[i]+ " ";
              }
            }
          }
        }else if(isa.length === 3){
          if (data[i][j2],ina[k2],ina[k3] !== undefined) { 
            if((ifc === true) && (ifc2 === true) && (ifc3 === true)){ 
              if(pn !== data[i]){
                pn += data[i]+" ";
              }
            }
          }
        }else if(isa.length >= 4){
          if (data[i][j2],ina[k2],ina[k3],ina[k4] !== undefined) { 
            if((ifc === true) && (ifc2 === true && (ifc3 === true) && (ifc4 === true))){
              if(pn !== data[i]){
                pn += data[i]+" ";
              }
            }
          }
        }//if문
      } //fir3 k
    }//fro2 j
  }//for1 i
  console.log(pn);
}

nc("이");


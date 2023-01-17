export function separateColorValue(data){
   const separated_value=[]
   for(let i=0;i<data.length;i++){
    let element=data[i];
    if(!separated_value.includes(element.color)){
      separated_value.push(element.color);
    }
   }
   return separated_value;
}
export function separateTypeValue(data){
   const separated_value=[]
   for(let i=0;i<data.length;i++){
    let element=data[i];
    if(!separated_value.includes(element.type)){
      separated_value.push(element.type);
    }
   }
   return separated_value;
}

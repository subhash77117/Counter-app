const counter=document.querySelector('.count');

const minus=()=>{
    let value=parseInt(counter.innerHTML);
    value=value-1;
    counter.innerHTML=value
}

// const increment=()=>{
//     let value=parseInt(counter.innerHTML);
//     value=value+1;
//     counter.innerHTML=value;
// }

const plus=()=>{
    let value=parseInt(counter.innerHTML)
    value=value+1;
    counter.innerHTML=value;
}

const batch223 ={
name:'chandan',
roll:11,
teacher:null,
classTime:'3 pm'
}

// JSON =js objeect notation

console.log('normal object:',batch223);
const convertstringify =JSON.stringify(batch223)
console.log('stringify:', convertstringify);

// convertNormal object json 

const convertNormalobject = JSON.parse(convertstringify);
console.log('convert Normal:', convertNormalobject);
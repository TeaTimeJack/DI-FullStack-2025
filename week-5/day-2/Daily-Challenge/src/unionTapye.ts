
const allTypes = ["number", "string", "boolean", "object"];
function validateUnionType(value: any, allowedTypes: string[]): boolean { 
    for (let i = 0; i < allowedTypes.length; i++) {
        const aType = allowedTypes[i];
        if (typeof value === aType){
        return true;
        }
    }
    return false;
};

console.log(validateUnionType("dog",allTypes));
console.log(validateUnionType(true,allTypes));
console.log(validateUnionType(5,allTypes));
 


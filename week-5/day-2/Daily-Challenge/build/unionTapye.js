"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allTypes = ["number", "string", "boolean", "object"];
function validateUnionType(value, allowedTypes) {
    for (let i = 0; i < allowedTypes.length; i++) {
        const aType = allowedTypes[i];
        if (typeof value === aType) {
            return true;
        }
    }
    return false;
}
;
console.log(validateUnionType("dog", allTypes));
console.log(validateUnionType(true, allTypes));
console.log(validateUnionType(5, allTypes));
//# sourceMappingURL=unionTapye.js.map
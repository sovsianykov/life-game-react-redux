import {LIFE} from "./types";


export function lifeStep1(field) {
    return {
        type : LIFE.STEP1,
        payload : field
    }
}
export function lifeStep2(field) {
    return {
        type : LIFE.STEP2,
        payload : field
    }
}
export function lifeStep3(field) {
    return {
        type : LIFE.STEP3,
        payload : field
    }
}
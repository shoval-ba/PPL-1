import { Result, makeFailure, makeOk, bind, either } from "./lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult = <T>(pred: (x: T) => boolean, a: T[]): Result<T> => {
    const value: T | undefined = a.find(pred);   
    if(value === undefined) {
        return makeFailure("No element found.")
    }  
    return makeOk(value);    
}

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => {
    const result:Result<number> = findResult((x: number)=> { return x % 2 === 0 } , a);
    return bind(result , (x) => { return makeOk(x*x)});
}    

export const returnSquaredIfFoundEven_v3 = (a: number[]): number => {
    const result = returnSquaredIfFoundEven_v2(a);
    return either(result , (value: number)=>{return value} , (message: string) => { return -1});
}

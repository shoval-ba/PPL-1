import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

const isVowel = (char:string) : boolean => vowels.includes(char.toLowerCase());

export const countVowels = (s: string): number => {
  return stringToArray(s).filter(isVowel).length;                 
};

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedText = stringToArray(cleanText).reduce((acc, char) => char + acc, "");
    return cleanText === reversedText;
};
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => { 
    const childrenWords: string[] = t.children.map(treeToSentence);
    return childrenWords.length === 0
        ? t.root
        : [t.root, ...childrenWords].join(" ");
}
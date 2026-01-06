/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const uniqueChars = [...new Set(ransomNote)];

  return uniqueChars.every((char) => {
    const countInNote = [...ransomNote].filter((c) => c === char).length;
    const countInMag = [...magazine].filter((c) => c === char).length;

    return countInMag >= countInNote;
  });
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));

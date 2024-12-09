var lengthOfLastWord = function (s) {
  let lW = s.split(" ").filter((x) => x !== "");
  if (lW[lW.length - 1]) {
    console.log(lW[lW.length - 1].length);
    return lW[lW.length - 1].length;
  }
};

lengthOfLastWord("   fly me   to   the moon  ");

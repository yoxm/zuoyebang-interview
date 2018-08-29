let str = `<ul><li id=0></li><li id=1></li><li id=2></li><li id=3></li></ul>`;
let reg1 = /<li\s.id=(.*?)[^*]*><\/li>/g;

let res = str.replace(reg1, (match, $1, $2) => {
  console.log(match, $1, $2);
});


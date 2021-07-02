const GraphemeSplitter = require('grapheme-splitter')

const splitter = new GraphemeSplitter();
let string = '12🙇‍♀️🙇‍♀️🙇‍♀️🙇‍♀️'

console.log(splitter.splitGraphemes(string).length)
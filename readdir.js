var testFolder = 'data';
var fs = require('fs');

// 어떤 특정디렉토리의 있는 파일의 목록을 배열로만들어서
// 전달 = > 반복문처리 => 결과.
fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
});
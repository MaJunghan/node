var fs = require('fs');

fs.readFile('sample.txt', 'utf8',function(err, data){
    console.log(data);
});

// 여기에서 sample.txt는 fileread랑 같은 디렉토리에서 실행햇지만
// node는 상위디렉토리에있기떄문에 불러오지못하는것임.
// 그래서 cd로 nodsjs 폴더로이동하여 sample.txt를실행한다
// 그럼출력값이 이렇게 나옴
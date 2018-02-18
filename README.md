##폴더 설명 <br/>
* 'db' : 몽고디비 데이터들의 위치다. git상에선 보이지 않게끔 하였다. <br/>
사용시 mongod -dbpath db 명령어를 사용하면 된다. <br/>
<br/>
* 'express' : nodejs의 express를 사용하여 RESTAPI를 구축했다. <br/>
해당 소스들은 몽고디비와 연결되어 사용되므로 사전에 몽고디비를 실행해야만 한다. <br/>
해당 express서버는 reactjs가 데이터에 제한적으로 접근가능하게끔 만들어준다 <br/>
node express/app.js로 실행이 가능하다 <br/>
<br/>
* 'public&src' : 해당 기본 디렉토리 자체가 reactjs인데  <br/>
이런방식을 사용하는 이유는 github에서 지원하는 자체 페이지 실행기능을 <br/>
이용해보려고 한다 <br/>
heokyunam.github.io/Talker_ReactJS를 접속하면 사용가능하게 하려한다 <br/>
하지만 아직 구축이 완벽히 되지 않아 아마 실행은 안될 것이다 <br/>
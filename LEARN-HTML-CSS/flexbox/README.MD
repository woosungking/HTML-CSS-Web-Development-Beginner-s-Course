
<h1> 1 . justify-content: space-betwwen; 이 row에서는 적용이 되지만 colume에서는 왜 안되는 것 인가. </h1>

   <h2> 문제점: </h2>

      .flex-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: antiquewhite;
        }

        위와 같은 css가 있다. 내부 요소를 세로로 배치 한 후 간격을 일정하게 조절하는건데 justify-content가 적용이 되지 않았다.

   <h2> 해결 </h2>

        height: 100vh; 를 추가해줌으로 해결이 되었다.

   <h2> 생각해보자 </h2>

        배경색을 입혀서 보니까 이해가 되었다. div같은 박스요소는 가로축으로는 쭉 공간을 차지하지만 세로축은 컨텐츠 길이 만큼 차지하는것이다.
        
        여기서 컨테이너를 브라우저의 현제 크기에 맞게 100vh 뷰포트를 주면 세로공간 만큼 컨테이너가 늘어나고 거기에 맞게 space-between이 되는것이다.

        뷰포트를 적용하기전에는 늘어날 공간이 없기 때문에 space-between이 되지 않았던 것 이다.

        꼭 뷰포트가 아니더라도 크키를 조정해주면 거기에 맞게 늘어난다.


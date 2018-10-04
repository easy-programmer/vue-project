<template>
  <div>
    <p align="left">
      (2018-09-19) 설치 : npm install --save vue-good-table<br/>
      (2018-09-20) 그리드에 이미지를 넣고 싶다. type에서 image/link를 제공하지 않는 듯 하여 html을 이용해서 입력함.평점을 ★로 formatting 하고 싶다<br/><br/>

      vue-good-table : <a href="https://xaksis.github.io/vue-good-table/">https://xaksis.github.io/vue-good-table/</a><br/>
      영화 포스터 출처 : <a href="https://www.themoviedb.org">https://www.themoviedb.org</a>
    </p>             
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{enabled: true, perPage: 5 }"
      :search-options="{enabled: true}"
      styleClass="vgt-table striped"
      >
    </vue-good-table>
  </div>
</template>

<script>
export default {
  name: 'movieList',
  data () {
    return {
      columns: [
        {
          label: '포스터',
          field: 'poster',
          html: true
        },
        {
          label: '제목',
          field: 'title'
        },
        {
          label: '관람일자',
          field: 'date',
          type: 'date',
          dateInputFormat: 'YYYYMMDD',
          dateOutputFormat: 'YYYY-MM-DD'
        },
        {
          label: '장르',
          field: 'jenre'
        },
        {
          label: '감독',
          field: 'director'
        },
        {
          label: '출연진',
          field: 'people'
        },
        {
          label: '명장면/명대사',
          field: 'favoriteScene',
          html: true
        },
        {
          label: 'Score',
          field: 'score',
          formatFn: this.formatFn
        },
      ],
      rows: [
        { id:1,
          poster: "<a href='https://www.themoviedb.org/movie/6977-no-country-for-old-men?language=ko-KR' target='_blank'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/tPBa3fpQ02Il5gMuipZ7hgLh9PC.jpg' alt='노인을 위한 나라는 없다' height='120' width='78'/></a>",
          title:"노인을 위한 나라는 없다", 
          date: '20180908', 
          jenre: '스릴러, 드라마, 범죄', 
          director: '에단 코엔, 조엘 코엔', 
          people: '하비에르 바르뎀, 조슈 브롤린, 우디 해롤슨...', 
          favoriteScene: '',
          score: '3' 
        },
        { id:2, 
          poster: "<a href='https://www.themoviedb.org/movie/333339-ready-player-one?language=ko-KR' target='_blank'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg' alt='레디 플레이어 원' height='120' width='78'/></a>",
          title:"레디 플레이어 원", 
          date: '20180818', 
          jenre: '액션, SF, 모험', 
          director: '스티븐 스필버그', 
          people: '마크 라이런스, 사이먼 페그, 타이 쉐리던...', 
          favoriteScene: '',
          score: '3' 
        },
        { id:3, 
          poster: "<a href='https://www.themoviedb.org/movie/529859?language=ko-KR' target='_blank'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/AfrzdEP9r7Cjo16qf3rjMjLmKrS.jpg' alt='변산' height='120' width='78'/></a>",
          title:"변산", 
          date: '20180904', 
          jenre: '드라마', 
          director: '이준익', 
          people: '박정민, 김고은...', 
          favoriteScene: '내 고향은 가난해서 보여줄 게 노을 밖에 없네',
          score: '3.5'
        },
        { id:4, 
          poster: "<a href='https://www.themoviedb.org/movie/359940-three-billboards-outside-ebbing-missouri?language=ko-KR' target='_blank'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/5z6uHS30VhInm2MDkbVoa0SegLJ.jpg' alt='쓰리 빌보드' height='120' width='78'/></a>",
          title:"쓰리 빌보드", 
          date: '20180818', 
          jenre: '드라마, 코미디, 범죄', 
          director: '마틴 맥도나', 
          people: '프란시스 맥도맨드, 우디 해롤슨, 샘 록웰...', 
          favoriteScene: '',
          score: '3.5' 
        },
        { id:5, 
          poster: "<a href='https://www.themoviedb.org/movie/402900-ocean-s-eight?language=ko-KR' target='_blank'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/mbE7RoCiFLljulqOhYSlkrnt5b0.jpg' alt='오션스8' height='120' width='78'/></a>",
          title:"오션스8", 
          date: '20180723', 
          jenre: '액션, 범죄', 
          director: '게리 로스', 
          people: '산드라 블록, 케이트 블란쳇, 앤 해서웨이...', 
          favoriteScene: '산드라 블록 백화점 씬<br/>다프네 클루거가 알고 있는게 밝혀지는 장면',
          score: '4' 
        },
        { id:6, 
          poster: "<a href='https://www.themoviedb.org/movie/499028-be-with-you?language=ko-KR' target='_blank'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/c7zp4eeoWKLhUadgEv3SWa0lbFl.jpg' alt='지금 만나러 갑니다' height='120' width='78'/></a>",
          title:"지금 만나러 갑니다", 
          date: '20180909', 
          jenre: '드라마', 
          director: '이장훈', 
          people: '소지섭, 손예진', 
          favoriteScene: '버스 정류장 Scene',
          score: '3.5' 
        },
        { id:7, 
          poster: "<a href='https://www.themoviedb.org/movie/338729?language=ko-KR' target='_blank'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/u1LHo5ObRZA1r8pzSq0OqQ2qlaU.jpg' alt='뷰티 인사이드' height='120' width='78'/></a>",
          title:"뷰티인사이드", 
          date: '20180916', 
          jenre: '드라마', 
          director: '윤종빈', 
          people: '한효주, 김주혁, 박서준...', 
          favoriteScene: '그게 좋을 거 같애<br/>감기 들겠다, 얼른 들어가<br/><br/>스테이크가 좋아요, 초밥이 좋아요?',
          score: '4' 
        }
      ],
      formatFn: function(value) {
        
      }
    }
  }
}
</script>

<style>
</style>
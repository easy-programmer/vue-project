<template>
  <div>
    npm install --save vue-good-table
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
          field: 'poster'
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
          field: 'score'
        },
      ],
      rows: [
        { id:1,
          poster: '',
          title:"노인을 위한 나라는 없다", 
          date: '20180908', 
          jenre: '스릴러, 드라마, 범죄', 
          director: '에단 코엔, 조엘 코엔', 
          people: '하비에르 바르뎀, 조슈 브롤린, 우디 해롤슨...', 
          favoriteScene: '',
          score: '3' 
        },
        { id:2, 
          poster: '',
          title:"레디 플레이어 원", 
          date: '20180818', 
          jenre: '액션, SF, 모험', 
          director: '스티븐 스필버그', 
          people: '마크 라이런스, 사이먼 페그, 타이 쉐리던...', 
          favoriteScene: '',
          score: '3' 
        },
        { id:3, 
          poster: '',
          title:"변산", 
          date: '20180904', 
          jenre: '드라마', 
          director: '이준익', 
          people: '박정민, 김고은...', 
          favoriteScene: '내 고향은 가난해서 보여줄 게 노을 밖에 없네',
          score: '3.5'
        },
        { id:4, 
          poster: '',
          title:"쓰리 빌보드", 
          date: '20180818', 
          jenre: '드라마, 코미디, 범죄', 
          director: '마틴 맥도나', 
          people: '프란시스 맥도맨드, 우디 해롤슨, 샘 록웰...', 
          favoriteScene: '',
          score: '3.5' 
        },
        { id:5, 
          poster: '',
          title:"오션스8", 
          date: '20180723', 
          jenre: '액션, 범죄', 
          director: '게리 로스', 
          people: '산드라 블록, 케이트 블란쳇, 앤 해서웨이...', 
          favoriteScene: '산드라 블록 백화점 씬<br/>다프네 클루거가 알고 있는게 밝혀지는 장면',
          score: '4' 
        },
        { id:6, 
          poster: '',
          title:"지금 만나러 갑니다", 
          date: '20180909', 
          jenre: '드라마', 
          director: '이장훈', 
          people: '소지섭, 손예진', 
          favoriteScene: '버스 정류장 Scene',
          score: '3.5' 
        },
        { id:7, 
          poster: '',
          title:"뷰티인사이드", 
          date: '20180916', 
          jenre: '드라마', 
          director: '윤종빈', 
          people: '한효주, 김주혁, 박서준...', 
          favoriteScene: '그게 좋을 거 같애<br/>감기 들겠다, 얼른 들어가<br/><br/>스테이크가 좋아요, 초밥이 좋아요?',
          score: '4' 
        }
      ],
    }
  }
}
</script>
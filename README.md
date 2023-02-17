# 원티드 프리온보딩 프론트엔드 - Week 1-2

원티드 프리온보딩 **프론트엔드 8팀**의 ```팔팔한 형제들```입니다.<br>

## 📅 프로젝트 기간

기간 : 2022년 10월 29일 ~ 2022년 10월 31일

## 팔팔한 형제들 팀 소개
### FE
<table>
  <tr>
    <td>
        <a href="https://github.com/CodyMan0">            
	    <img src="https://avatars.githubusercontent.com/u/93697790?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/shimeeuisuk">
            <img src="https://avatars.githubusercontent.com/u/104304569?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/jangth0655"> 
            <img src="https://avatars.githubusercontent.com/u/83333409?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/choi2021">
	    <img src="https://avatars.githubusercontent.com/u/80830981?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/strongsongky">
	    <img src="https://avatars.githubusercontent.com/u/102295416?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/KellyPark96">
	    <img src="https://avatars.githubusercontent.com/u/96809147?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/gywn9708">
	    <img src="https://avatars.githubusercontent.com/u/107469939?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/YongHyunKwon">
	    <img src="https://avatars.githubusercontent.com/u/13326980?v=4" width="100px" />
        </a>
    </td>
  </tr>
  <tr>
    <td><b>이주영(팀장)</b></td>
    <td><b>심의석(부팀장)</b></td>
    <td><b>장태희</b></td>
    <td><b>최영준</b></td>
    <td><b>송경용(공지)</b></td>
    <td><b>박경은(서기)</b></td>
    <td><b>강효주</b></td>
    <td><b>권용현</b></td>
  </tr>
  <tr>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
  </tr>
</table>


## 🛠 기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
  <br>
</div>




## 🏁 프로젝트 실행 방법

1. root폴더에 .env 파일을 생성합니다.
```
  REACT_APP_TOKEN={자신의 github에서 Developer-setting 에서 발행한 access-token 사용}
```
2. 의존성 패키지를 설치합니다.
```zsh
$ npm install
```
3. 리눅스와 윈도우 husky 충돌 방지 후 사용을 위해 설치합니다. 
```zsh
$ chmod ug+x .husky/* 
```
4. 프로젝트를 실행합니다.
```zsh
$ npm start
```


## 🔗 위키 링크

[위키 링크 보러가기](https://github.com/wanted-freeOnBoarding-8/1-1_assignment/wiki)
- 저희들의 코드컨벤션, 커밋메시지컨벤션, 1주차 1차 프로젝트를 통해 토론한 Action-Point를 정리해두었습니다.😁




## 📦 디렉토리 구조

<details>
<summary> 구조</summary>
<div markdown="1">

```
📦src 
 ┣ 📂components
 ┃ ┃ ┣ 📂issueItem
 ┃ ┃ ┃ ┣ 📜IssueItem.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂AdBox
 ┃ ┃ ┃ ┣ 📜AbBox.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂errorContent
 ┃ ┃ ┃ ┣ 📜ErrorContent.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂issueContent
 ┃ ┃ ┃ ┣ 📜IssueContent.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂issueList
 ┃ ┃ ┃ ┣ 📜IssueList.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂loader
 ┃ ┃ ┃ ┣ 📜Loader.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┣ 📂context
 ┃ ┗ 📜ListContext.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useFetch.jsx
 ┃ ┗ 📜useObservation.jsx
 ┣ 📂network
 ┃ ┗ 📜httpError.js
 ┣ 📂context
 ┃ ┗ 📜LoginContext.jsx
 ┣ 📂page
 ┃ ┃ ┣ 📂Notfound
 ┃ ┃ ┃ ┣ 📜Notfound.jsx
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📜Detail.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂style
 ┃ ┗ 📜GlobalStyle.js
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜router.js
  ```
</div>
</details>



## 👍 Best Practice 선정 이유

- 커스텀 훅을 활용하여 네트워크 통신을 통해 받아온 데이터를 오브젝트에 저장하여, 한번 참조한 페이지는 
다시 데이터를 받아올 필요 없어 성능이 보다 향상되었기 때문에 선정하였습니다.

```javascript
const useFetch = () => {
  const { issues, setIssues, page } = useContext(ListContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastPage, setLastPage] = useState(false);
  const getList = async () => {
    setIsLoading(true);
    try {
      const data = await getIssueList(page);
      if (data.length === 0) {
        setLastPage(true);
      }
      setIssues(prev => {
        const updated = { ...prev };
        data.forEach(issue => {
          updated[issue.id] = issue;
        });
        return updated;
      });
    } catch (error) {
      setError(error.errorMessage);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getList();
  }, [page]);

  return [isLoading, error, issues, lastPage];
};
```

- 무한스크롤 구현할 때 스크롤이벤트로 발생할 수 있는 리플로 문제를 intersection Observer API로 해결되었기 때문에 선정하였습니다.
<br />
- 커스텀 에러 클래스를 이용하여 status code에 따른 예외처리되었기 때문에 선정하였습니다.

```javascript
export default class HTTPError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = 'HTTPError';
    this.statusCode = statusCode;
  }

  get errorMessage() {
    switch (this.statusCode) {
      case 404:
        this.message = '해당 레포를 찾을 수 없습니다.';
        break;
      case 422:
        this.message = '요청이 잘못된 endpoint로 전달되었습니다';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }
}
```



## ✏️ 개선 부분

 ##### 하루동안 함께 시행착오를 한 기록을 담았습니다 !
 
- 무한 API 호출 문제 해결 : 페이지의 마지막을 확인할 수 있는 상태를 추가하여 페이지 마지막에서 api 호출하고 더이상 불러올 데이터가 없을 시 api 호출을 하지 않도록하였습니다.
<br />
**수정 전**
<img width="500" src="https://user-images.githubusercontent.com/83333409/198885118-10dd9434-34c2-4af1-9055-2684890dcbe6.gif"/>
<br />
**수정 후**
<img width="500" src="https://user-images.githubusercontent.com/83333409/198885336-38510ffe-0e24-4010-9229-ab53ea785dcc.png"/>
<br />

- 원하는 페이지에서만 헤더가 나오도록 개선 : Layout 컴포넌트 내에 해더를 추가하고 issue data가 있을 때만 보여질 수 있도록 처리하였습니다.

- 에러 페이지 추가 : 설정되지 않은 path로 엑세스 했을 때 `/`으로 리다이렉트 해줄 수 있는 Not Found 페이지 추가하였습니다.

---

## ✨ 주요 기능

<img width="500" src="https://user-images.githubusercontent.com/107469939/198880685-1069d460-fc6d-4192-9d05-7c6e7bba2cb0.JPG"/>


1. 이슈 목록 화면
- 이슈 목록 화면 기능 구현(이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수)
- open 상태의 이슈 중 코멘트 수가 많은 순으로 정렬
- Context API를 활용한 API 연동
- 다섯번째 셀에 광고 이미지 출력
	- 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 반응형 웹 구현
- 공통 헤더 공유
</br>


<img width="500" src="https://user-images.githubusercontent.com/107469939/198880655-01bff986-14c0-4096-922c-cc572e704580.JPG"/>


2. 이슈 상세 화면
- 이슈 상세 화면 기능 구현(이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문)
- Context API를 활용한 API 연동
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 반응형 웹 구현
- 공통 헤더 공유

</br>

3. 기능 데모 영상 

- <div>페이지 이동</div>
<img src="https://user-images.githubusercontent.com/93697790/198881444-74b5b296-3daf-463e-85b9-3a03c032b0a3.gif"
width="600px">
</br>

- <div>메인 페이지 반응형</div>
<img src="https://user-images.githubusercontent.com/93697790/198881506-9a40a5d4-73b9-43b5-81ee-73d34b8a8b77.gif"
width="600px">
<br>

- <div>무한스크롤 기능 구현</div>
<img src="https://user-images.githubusercontent.com/93697790/198881566-fd562e4b-5eb4-4587-b8f2-eeecf25cc93f.gif"
width="600px">
<br>

- <div>디테일 페이지 반응형</div> 
<img src="https://user-images.githubusercontent.com/93697790/198881136-64855524-44ba-4715-96ca-8af369315e1b.gif"
width="600px">
<br>

- <div>Detail 페이지에서 Home으로 가기</div>
<img src="https://user-images.githubusercontent.com/93697790/198881230-e3652277-8aef-4c47-a323-fd1dd48cc40a.gif"
width="600px">
<br>

- <div>404 페이지</div>
<img src="https://user-images.githubusercontent.com/93697790/198881263-e41a5046-1c6a-43d4-be62-dd7f21b1df36.gif"
width="600px">
<br>

- <div>NotFound 페이지</div> 
<img src="https://user-images.githubusercontent.com/93697790/198881342-b03ad0e7-086a-48bd-a90a-c6cd595b1a3d.gif"
width="600px">
<br>












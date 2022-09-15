# 💬 PUE: AI 심리 상담 챗봇

[![Pull Requests](https://img.shields.io/github/issues-pr/PUE-AI-ChatBot/PUE-FE?style=for-the-badge)](https://github.com/PUE-AI-ChatBot/PUE-FE/pulls)
[![GitHub issues](https://img.shields.io/github/issues/PUE-AI-ChatBot/PUE-FE?style=for-the-badge)](https://github.com/PUE-AI-ChatBot/PUE-FE/issues)
![GitHub last commit](https://img.shields.io/github/last-commit/PUE-AI-ChatBot/PUE-FE?style=for-the-badge)
>  **:two_hearts: AI 심리상담 챗봇 PUE**  
>
> Open Source <br>
> 프로젝트 시작 : 2022.08 <br> <br>
> 힘든 사람 누구에게나 ***친구가 되어줄*** <br>
> ***따듯한 위로를 전하는*** AI 챗봇 서비스 <br> 
>

## 🥇 Goals

코로나 블루로 우울감을 호소하는 사람이 많아지자 상담사 고용을 늘렸지만 여전히 응답률이 저조하였습니다. <br>
이를 위해 정보 제공용 챗봇을 뛰어넘어 가벼운 심리 상담이 가능한 챗봇을 만들고자 하였습니다. <br>
상담이 여려운 시간대에도 상담이 가능하며 챗봇 상담의 높은 접근성으로 기존 상담에 대한 인식을 개선하고자 개발하게 되었습니다. <br>

## 🔨 Environments

### Development

#### Language 
<img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/dev/typescript?style=flat-square&color=3178c6">

#### Framework
<img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/next?style=flat-square&color=000">

#### Library

<img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/react?style=flat-square&color=61DAFB"> <img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/dev/@testing-library/react?style=flat-square&color=E34F26"> <img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/dev/jest?style=flat-square&color=">
<br/>
<img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/swr?style=flat-square&color=141414"> <img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/socket.io-client?style=flat-square&color=42b983"> <img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/axios?style=flat-square&color=671ddf"> <img src="https://img.shields.io/github/package-json/dependency-version/PUE-AI-ChatBot/PUE-FE/apexcharts?style=flat-square&color=007ACC">


### Communication

<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>  <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/>  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

## ⚙️ Project Settings

#### Install npm  dependencies

```bash
> npm install
```

#### Set `.env.local`

```dotenv
######## 설정 필요 ########
NEXT_PUBLIC_BASE_URL=YOUR_SERVER_HOST
GOOGLE_CLIENT_ID=YOUR_GOOGKE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
KAKAO_CLIENT_ID=YOUT_KAKAO_CLIENT_ID
SECRET=YOUT_SECRET // 무슨 시크릿 키..?
#########################

NEXTAUTH_URL=http://localhost:3000/api/auth
OAUTH_REDIRECT_URI="http://localhost:3000/oauth/redirect"
KAKAO_CLIENT_SECRET="anykey"
GOOGLE_AUTH_URL=NEXT_PUBLIC_BASE_URL+"/oauth/authorization/google?redirect_uri="+OAUTH_REDIRECT_URI
```

#### Start dev-server

```bash
> npm run dev
```

#### Run Test

```bash
> npm run test
```

## 📜 Feature

| <img width="260"  alt="로그인" src="https://user-images.githubusercontent.com/79739512/190325766-470ddbd1-9362-408e-bd40-994b34381461.png"> | <img width="260"  alt="스크린샷 2022-09-15 오후 2 52 16" src="https://user-images.githubusercontent.com/79739512/190325787-fc96abe8-ebf8-43f0-8a5b-77f6eaee7d66.png"> | 
| :---: | :---: | 
| **로그인** | **메인 화면** | 


| <img width="260" alt="스크린샷 2022-09-15 오후 2 52 44" src="https://user-images.githubusercontent.com/79739512/190325801-7534e041-ea18-4aff-8028-bb2260acf3a7.png"> | <img width="260" alt="스크린샷 2022-09-15 오후 2 53 32" src="https://user-images.githubusercontent.com/79739512/190325879-71b3a2f2-8b57-44fc-a496-eee68868a0df.png"> |
| :---: | :---: |
| **상담** | **감정 캘린더** | 

 

| **프로필** |
| :---: |
| <img width="260" alt="스크린샷 2022-09-15 오후 2 53 13" src="https://user-images.githubusercontent.com/79739512/190325889-2bdaae9e-c778-48fe-a043-fe979285fc6c.png"> |
| 마이 페이지에서 이동 | 연도별 필터링, 해당 달의 작성 일수 확인 가능 | 카드 선택시 |

## 💻 Developers
<div align="left">
    <table border="1">
        <th><a href="https://github.com/elbica">김소희</a></th>
        <th><a href="https://github.com/onejuice98">원정수</a></th>
                <th><a href="https://github.com/L2HYUNN">이동현</a></th>
        <tr>
            <td>
                <img src="https://github.com/elbica.png" width='80' />
            </td>
            <td> 
                <img src="https://github.com/onejuice98.png" width='80' />
            </td>
            <td>
                <img src="https://github.com/L2HYUNN.png" width='80' />
            </td>
        </tr>
    </table>
</div>

## 📚 Documentations

- [Branch Strategy](https://github.com/PUE-AI-ChatBot/PUE-FE/wiki/Branch-Strategy)

- [Commit Convention](https://github.com/PUE-AI-ChatBot/PUE-FE/wiki/Commit-Convention)

- [Workflow](https://github.com/PUE-AI-ChatBot/PUE-FE/wiki/Workflow)

## 🔒 LICENSE

Preparing... 









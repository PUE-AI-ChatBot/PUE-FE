# 💬 PUE: AI 심리 상담 챗봇

[![Pull Requests](https://img.shields.io/github/issues-pr/PUE-AI-ChatBot/PUE-FE?style=for-the-badge)](https://github.com/PUE-AI-ChatBot/PUE-FE/pulls)
[![GitHub issues](https://img.shields.io/github/issues/PUE-AI-ChatBot/PUE-FE?style=for-the-badge)](https://github.com/PUE-AI-ChatBot/PUE-FE/issues)
![GitHub last commit](https://img.shields.io/github/last-commit/PUE-AI-ChatBot/PUE-FE?style=for-the-badge)
> **🏃 땅따먹기 기반 운동 장려 앱 NEMODU**
>
> DND 7기 <br>
> 프로젝트 기간 : 2022.07 ~ <br> <br>
> **Healthy Pleasure,** 즐거운 건강관리를 위해 <br>
> 나의 일상 속 움직임을 기록하고, 친구와 재미있게 운동할 수 있는 앱 서비스
>

## 🥇 Goals

As we go through the COVID-19, most of the 'meeting places' are rapidly moving to various virtual conference spaces
started from Zoom. As such, there are many side effects, A typical example is Zoom Fatigue, which causes a lot of
fatigue in virtual conferences than usual conversations. We think the main causes of that are

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

## 📜 Feature ( 팀별 변경 )

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

## LICENSE

Preparing... 


# node:alpine으로 설정 시 node 17버전이 설치되는데 오류가 발생합니다.
# node:16-alpine 설정하시길 권장합니다.
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# deps 에서 설치한 파일중 node_modules만 가져온걸 볼 수 있다.
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# os 사용자 추가
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY .env ./

RUN export $(cat .env.local | xargs)

# builder 에서 복사해야할 파일이 있다면 추가하면 된다.
COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# 외부 포트 사용한다는 알림 없어도 상관없음
EXPOSE 3000

ENV PORT 3000

CMD ["node","server.js"]
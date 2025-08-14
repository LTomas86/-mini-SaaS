FROM node:20-alpine
WORKDIR /app
COPY apps/api ./apps/api
WORKDIR /app/apps/api
CMD ["node", "src/index.ts"]

# Portable container image for the Study Journal API (Railway, Fly, Cloud Run…).
FROM node:22-alpine

WORKDIR /app

# Install production deps first for better layer caching.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# App source (server runs migrate.js on boot, so schema.sql must be present).
COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]

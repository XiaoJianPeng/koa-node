FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY src src/
COPY package.json .
COPY pm2.json .

# 设置淘宝npm代理
RUN npm set registry https://registry.npm.taobao.org

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production --allow-root
# Show current folder structure in logs
# RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json" ]

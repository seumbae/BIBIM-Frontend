# 사용법
## .env
무조건 REACT_APP_으로 시작해야함
```
REACT_APP_API_SERVER_BASEURL= -> axios에서 사용할 API 서버 경로
```
### 예시
```
REACT_APP_API_SERVER_BASEURL="http://IP:PORT/api/v1"
```

## Error: ENOSPC: System limit for number of file watchers reached
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
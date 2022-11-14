# 사용법
## .env
```
API_SERVER_BASEURL= -> axios에서 사용할 API 서버 경로
```

## Error: ENOSPC: System limit for number of file watchers reached
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
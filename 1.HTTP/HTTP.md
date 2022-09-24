# HTTP
HTTP 协议，详细规定了浏览器和服务器之间相互通信的规则  

## 请求报文
重点是格式与参数
```
行      POST /video/BV1WC......  HTTP/1.1
头      Host: atguigu.com
        Cookie: name=bear
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行  
体      username=admin&password=admin
```

## 响应报文
```
行      HTTP/1.1    200 OK
头      Content-Type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行  
体      <html>
            <head>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
```
* 404
* 403
* 401
* 500
* 200
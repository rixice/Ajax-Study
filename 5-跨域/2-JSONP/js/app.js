const data = {
    name: 'Hello World'
}

// 处理数据
function handle(data){
    // 获取result元素
    const result = document.getElementById('result')
    result.innerHTML = data.name
}

handle(data)
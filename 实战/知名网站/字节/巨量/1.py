import requests

cookies = {
}

headers = {

}

json_data = {
    'param': {
        'words': [
            {
                'id': '猕猴桃',
                'name': '猕猴桃',
            },
        ],
        'app_name': 'aweme',
        'start_date': '20240201',
        'end_date': '20240207',
        'begin_date': '20240201',
        'keyword': '西瓜',
    },
}

response = requests.post('https://trendinsight.oceanengine.com/api/v2/index/get_portrait',
    json=json_data,

)
print(response.text)


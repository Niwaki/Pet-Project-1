# from pydantic import BaseModel -- to add news in table

from datetime import datetime

current_dateTime = datetime.now()

# class ValidateNews(BaseModel):
#     title: str
#     text: str
#     date: str
#     url: str
#     image: str

# class News():
#     def __init__(self, title, text, date, url, image):
#         self.title = title
#         self.text = text
#         self.date = date
#         self.url = url
#         self.image = image

#     async def table_news_info(self):
#         return [self.title, self.text, self.date, self.url, self.image]
    
#     async def add_news(title, text, date, url, image):
#         table.append({"title": title, "text": text, "date": date, "url": url, "image": image})

table = [
    {"title": "Обновление #1", "text": "Текст обновления #1", "date": current_dateTime, "url": "https//:google.com", "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190820175612/Why-You-Should-Learn-To-Code.png"},
    {"title": "Обновление #3", "text": "Текст обновления #2", "date": current_dateTime, "url": "https//:google.com", "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190820175612/Why-You-Should-Learn-To-Code.png"},
]



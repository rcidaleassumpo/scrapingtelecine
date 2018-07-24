from bs4 import BeautifulSoup
import requests

html_doc = 'http://telecine.img.estaticos.tv.br/rendered/static/grade_htmls/22_07_2018.html'
r = requests.get(html_doc)

html = r.text
soup = BeautifulSoup(html,'html.parser')

tag = 'p'
sinopses = soup.findAll(tag, class_='sinopse')

for i in sinopses:
	text = i.get_text()
	print(text.encode("cp1252").decode())
	break;
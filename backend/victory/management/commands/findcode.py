"""I want this script to find victory code with a size as small as possible"""

import sys

from django.core.management.base 				import BaseCommand
from selenium 									import webdriver
from selenium.webdriver.firefox.firefox_binary 	import FirefoxBinary
from selenium.webdriver.firefox.options 		import Options

from ...services import Services

opts = Options()
opts.set_headless() #silent mode, no browser open

class Command(BaseCommand):
# 	os.path.dirname(os.path.abspath(__file__))

	def _findcode(self): 
		driver = webdriver.Firefox(options=opts)
		print("envoi de la requête")
		for i in range(1,10): 
			print(f"request {i} : http://localhost:4200/code/{i}")
			driver.get(f'http://localhost:4200/code/{i}')
		assert "Light" in driver.title
		driver.close()
	def handle(self, *args, **options):	 
		self._findcode() 


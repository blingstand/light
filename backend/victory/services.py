from .models import Code

class Services(): 

	def search_existing_code(self, code):
		"""I want to find if the given code is already in base"""
		is_in_base = Code.objects.filter(code=code)
		return True if len(is_in_base) > 0 else False
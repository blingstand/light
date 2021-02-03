#! /usr/bin/python3
from io import StringIO
import os, sys
import unittest
from unittest.mock import patch, MagicMock

from .services import Services
from .models import Code

path = os.path.dirname(__file__)
if path not in sys.path: 
    sys.path.insert(0, path)


class TestServices(unittest.TestCase):

	def setUp(self): 
		self.code = Code(
						code="123", 
						size=3)
		self.service = Services()
	
	def test_search_existing_code_true(self): 

		code = "123"
		response = self.service.search_existing_code(code)
		self.assertTrue(response)

	def test_search_existing_code_false(self): 

		code = "128"
		response = self.service.search_existing_code(code)
		self.assertFalse(response)
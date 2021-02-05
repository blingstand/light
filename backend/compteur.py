#!/usr/bin/env python

from datetime import datetime

start = datetime.now()
i=0
txt = ""
nb_coups = 6
maxi = 10 ** nb_coups

while (i != maxi):
	for chiffre in str(i):
		txt += chiffre + "-"
	print(txt[:-1])
	i += 1 
	txt = ""
end = datetime.now()
print(end-start)
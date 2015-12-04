#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2015 vishalapr <vishalapr@vishalapr-Lenovo-G50-70>
#
# Distributed under terms of the MIT license.

"""

"""
import sys
from bs4 import BeautifulSoup as BS
import urllib2

html=urllib2.urlopen("http://www.instructables.com/member/vishalapr/?show=INSTRUCTABLES&limit=100&sort=FEATURED")

soup=BS(html)
elems = soup.select('div#omni div.container div#member-content div#member-centercontent div.sortable-box div.projects ul.h-list li div.member-cover-item div.cover-info span.title a')
elemimages = soup.select('div#omni div.container div#member-content div#member-centercontent div.sortable-box div.projects ul.h-list li div.member-cover-item a.cover-image img')

cnt=0
for elem in range(len(elems)):
    if cnt<12:
        print elemimages[elem]['src']+","+"http://www.instructables.com"+elems[elem]['href']+","+elems[elem].text
    cnt+=1

sys.stdout.flush()

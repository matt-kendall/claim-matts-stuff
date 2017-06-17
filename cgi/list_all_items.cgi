#!/usr/bin/python

import cgi
import cgitb

from db.query import query

cgitb.enable()
query('SELECT * FROM items')

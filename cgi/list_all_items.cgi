#!/usr/bin/python

import cgi
import cgitb

from db.query import query, output_to_cgi

cgitb.enable()
items = query('SELECT * FROM items')
images = query('SELECT * FROM photos')
bids = query('SELECT * FROM bids')

for item in items:
    item['images'] = [i for i in images if i['item_id'] == item['id']]
    item['bids'] = [b for b in bids if b['item_id'] == item['id']]

output_to_cgi(items)

#!/usr/bin/python

import cgi
import cgitb
import datetime
import uuid

from db.query import query, output_to_cgi

cgitb.enable()

arguments = cgi.FieldStorage()


_id = uuid.uuid4()  # Make new PK
timestamp = datetime.datetime.today()  # str -> ISO format so should work fine in SQL
amount = 0.00
if 'amount' in arguments.keys():
    amount = arguments['amount'].value
user = arguments['user'].value
item_id = arguments['item_id'].value

insert_query = "INSERT INTO `bids` (id, amount, timestamp, user, item_id) " \
               "VALUES ('{id}', {amount}, '{time}', '{user}', '{item_id}');".format(id=_id,
                                                                                    amount=amount,
                                                                                    time=timestamp,
                                                                                    user=user,
                                                                                    item_id=item_id)
check_query = "SELECT * FROM `bids` WHERE id = '{id}';".format(id=_id)

query(insert_query)
check = query(check_query)
output_to_cgi(check)

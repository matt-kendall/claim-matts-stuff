import ConfigParser
import MySQLdb as mysql
import itertools
import json

config = None
db = None


def _load_config():
    global config
    config = ConfigParser.RawConfigParser()
    config.read('db/db.cfg')


def _get_config(key):
    section = 'connection'
    if config is None:
        _load_config()
    return config.get(section, key)


def _connect():
    global db
    db = mysql.connect(host=_get_config('hostname'),
                       user=_get_config('username'),
                       passwd=_get_config('password'),
                       db=_get_config('dbname'))


def _cur_to_dict(cursor):
    desc = cursor.description
    return [dict(itertools.izip([col[0] for col in desc], row)) for row in cursor.fetchall()]


def query(sql):
    if db is None:
        _connect()
    cur = db.cursor()
    cur.execute(sql)
    results = _cur_to_dict(cur)

    # Output to CGI
    print("Content-Type: application/json")
    print("")
    print(json.dumps(results))

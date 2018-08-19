#!/usr/bin/env python
"""

A website that represents my answers for my CTPRJMN final requirement.

"""
import json
from flask import Flask, render_template, jsonify

from urllib.parse import urlparse
import os
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

if __name__ == '__main__':
    app.run()
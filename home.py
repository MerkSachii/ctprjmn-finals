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
@app.route('/main')
def main_web():
    return render_template('main.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
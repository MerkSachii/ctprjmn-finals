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
@app.route('/main2')
def main2_web():
    return render_template('main2.html')
@app.route('/charter')
def charter():
    return render_template('render.html')
@app.route('/transcript')
def template():    
    return render_template('transcript.html')
@app.route('/profile')
def profile():
    return render_template('profile.html')
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
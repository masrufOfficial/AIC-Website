from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/learn')
def learn():
    return render_template('learn.html')

@app.route('/research-project')
def research_and_project():
    return render_template('research&project.html')

@app.route('/community')
def community():
    return render_template('community.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/join-us')
def join_us():
    return render_template('joinus.html')

if __name__ == "__main__":
    app.run(debug=True)

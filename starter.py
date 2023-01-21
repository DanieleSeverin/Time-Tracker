import subprocess

subprocess.run(["git", "pull"], shell=True)
subprocess.run(["npm", "i"], shell=True)
subprocess.run(["start", "chrome", "http://localhost:1000"], shell=True)
subprocess.run(["ng", "serve"], shell=True)
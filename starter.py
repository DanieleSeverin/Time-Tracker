import subprocess
  
subprocess.run(["start", "chrome", "http://localhost:1000"], shell=True)
subprocess.run(["ng", "serve"], shell=True)
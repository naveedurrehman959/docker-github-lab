FROM python:3.10-slim
WORKDIR /APP
RUN apt-get update #ip install --no-cache-dir -r requirement.txt 
#COPY requirement.txt .
COPY app.py .
EXPOSE  5000

CMD ["python", "app.py"]

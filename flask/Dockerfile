FROM python:latest
RUN apt update
WORKDIR /app
COPY ..
RUN pip3 install -r requirments.txt
CMD ["python3", "app.py"]

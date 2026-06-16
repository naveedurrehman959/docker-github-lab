FROM python:3.9-slim
LABEL maintainer="student@example.com"
LABEL description="custom webapp for docker lab"
LABEL version="1.0"
WORKDIR /app
COPY app.py .
COPY index.html .

RUN groupadd -r appuser && useradd -r -g appuser appuser
RUN chown -R appuser:appuser /app
USER appuser
EXPOSE 8080

ENV PORT=8080

ENV PYTHONUNBUFFERED=1

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD python3 -c "import urllib.request; urllib.request.urlopen(http://localhost:8080/health')"

CMD ["python", "app.py"]

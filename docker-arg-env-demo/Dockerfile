
FROM pyhton:3.9-slim

ARG APP_VERSION=1.0.0

ENV APP_ENV=production
RUN echo "building version $APP_VERSION"

WORKDIR /app

COPY . /app

CMD ["python", "app.py"]

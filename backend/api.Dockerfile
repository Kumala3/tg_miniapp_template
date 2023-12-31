FROM python:3.11-slim
ENV WEBHOOK_APP_NAME=api

WORKDIR /usr/src/app/$WEBHOOK_APP_NAME

COPY api.requirements.txt /usr/src/app/$WEBHOOK_APP_NAME/requirements.txt
RUN pip install -r /usr/src/app/$WEBHOOK_APP_NAME/requirements.txt

COPY . /usr/src/app/$WEBHOOK_APP_NAME
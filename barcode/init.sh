#!/bin/sh
set -ea

#echo "initialize ${DB_HOST} - ${DB_NAME}"
#PGPASSWORD=${DB_PASS} psql -h ${DB_HOST} -U ${DB_USER} pguser -tc "SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'" | grep -q 1 || PGPASSWORD=${DB_PASS} psql -h ${DB_HOST} -U ${DB_USER} pguser -c "CREATE DATABASE ${DB_NAME}" -c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER}"

cd /home/node/app
npm start
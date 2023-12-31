read -p "Enter name of migration: " message
docker-compose exec api alembic revision --autogenerate -m "$message"

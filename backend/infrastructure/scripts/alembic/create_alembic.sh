alembic init -t async migrations

mv migrations ../../

mv alembic.ini ../../../
sed -i 's/script_location = .*/script_location = infrastructure\/migrations/g' ../../../alembic.ini

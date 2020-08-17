## set up database

At monorepo root, create `.env` and add:

```
DATABASE_URL="postgresql://postgres@localhost:5433/thegrind_dev?connection_limit=1"
```

Start postgres if not running

```
service postgresql start
```

Enter postgres client

```
PASSWORD=<your-postgres-role-password> psql -U postgres
```

Create DB once inside client

```
postgres=# CREATE DATABASE thegrind_dev;
```

Connect to db

```
PASSWORD=password psql -U postgres -d my_database_dev -h 0.0.0.0 -p 5433
```

Finally migrate and serve

```
yarn rw db up
yarn rw dev
```

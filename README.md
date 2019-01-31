# NodeJS + SQL [Real World Project](http://realworld.io)

This is an implementation of Thinkster's realworld.io API using:

- **Language**	: Javascript
- **Platform**	: NodeJS
- **Framework**	: ExpressJS
- **Database**	: MySQL/SQLite/Postgres
- **ORM**	: Sequelize

## Setup Database

```bash
mysql -u root
```

```mysql-psql
 create database realworlddb;
 create user realworlduser with password 'realworldpass';
 grant all privileges on realworlddb.* to realworlduser;
 flush privileges;
```



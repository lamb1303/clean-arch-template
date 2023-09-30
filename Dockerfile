# Image MySQL
FROM mysql:8.0

# Environment Variables
ENV MYSQL_ROOT_PASSWORD=MySecr3tPassWord
ENV MYSQL_DATABASE=cogsz
ENV MYSQL_USER=cogsz
ENV MYSQL_PASSWORD=MySecr3tPassWord

# Expose the MySQL port
EXPOSE 3306

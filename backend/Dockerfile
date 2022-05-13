FROM openjdk:17 as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN sh mvnw install -DskipTests

EXPOSE 8081

CMD ["java", "-jar", "target/pokemon-0.0.1-SNAPSHOT.jar"]
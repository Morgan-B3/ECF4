FROM maven:3.9.14-eclipse-temurin-11-alpine AS build
WORKDIR /build
COPY pom.xml .
COPY src ./src
RUN mvn -B -DskipTests clean package

FROM eclipse-temurin:11-jre-alpine
WORKDIR /app
COPY --from=build /build/target/authentication-service.jar ./authentication-service.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "authentication-service.jar"]
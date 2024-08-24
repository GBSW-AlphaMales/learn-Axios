# Axios + Spring 

## 1. Build.gradle
- `Build.gradle` 파일을 열어 빌드를 시켜줍니다.

## 2. 데이터베이스 설정
- `src > main > resources` 폴더 안의 `application.yml` 또는 `application.properties` 파일을 열어 데이터베이스 연결 정보를 설정합니다.

**application.yml 예시**
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/스키마이름
    username: 데이터베이스_사용자명
    password: 데이터베이스_비밀번호
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

```

## 3. 서버 실행 방법
- Gradle 로고 클릭 후: `Tasks > Build > bootJar`를 클릭하여 JAR 파일을 빌드합니다.
- 또는, `(프로젝트이름)Application 클래스`를 실행하여 서버를 시작할 수 있습니다.

docker stop subnet-calculator
docker rm subnet-calculator
docker build -t subnet-calculator .
docker compose up -d
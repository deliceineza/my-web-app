
// pipeline {
//     agent any

//     environment {
//         DOCKER_IMAGE = 'damars4/my-web-app'
//         DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Build & Push Image') {
//             steps {
//                 script {
//                     echo "Building & pushing Docker image..."

//                     docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {

//                         def img = docker.build("${DOCKER_IMAGE}:latest")

//                         img.push("latest")
//                     }

//                 }
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 echo "Deployment step goes here (optional)"
//             }
//         }
//     }
// }


pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'damars4/my-web-app'
        DOCKER_USERNAME = 'YOUR_DOCKER_USERNAME'
        DOCKER_PASSWORD = 'YOUR_DOCKER_PASSWORD'
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Cloning the repository if it doesn't exist..."
                bat '''
                if not exist ".git" (
                    git clone https://github.com/deliceineza/my-web-app.git .
                ) else (
                    echo Repository already exists. Skipping clone.
                    git fetch --all
                    git reset --hard origin/main
                )
                '''
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
                bat 'dir'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                // Add actual test commands here later (e.g., npm test)
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                bat "docker build -t %DOCKER_IMAGE% ."
            }
        }

        stage('Login to Docker Hub') {
            steps {
                echo "Logging in to Docker Hub..."
                bat """
                echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                """
            }
        }

        stage('Push Docker Image') {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                bat "docker push %DOCKER_IMAGE%"
            }
        }

        stage('Deploy Locally') {
            steps {
                echo "Deploying Docker container locally..."
                bat """
                docker stop my-web-app || echo Container not running...
                docker rm -f my-web-app || echo No container to remove...
                docker run -d --name my-web-app -p 8090:3000 %DOCKER_IMAGE%
                """
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Check logs."
        }
    }
}


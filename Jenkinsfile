pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'echo Build step here'
                // bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo Test step here'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                bat 'echo Deploy step here'
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npx codeceptjs run'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

pipeline {
    agent {
        node {
            label 'labelName'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/phamxuansanga11/halloween-landing.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
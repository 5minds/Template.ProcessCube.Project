*** Settings ***
Library     Browser


*** Test Cases ***
Check site title
    New Page    http://localhost:8082/
    Get Text    //div[@title="5Minds Portal"]    ==    5Minds Portal

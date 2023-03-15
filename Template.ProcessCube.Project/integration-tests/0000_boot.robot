*** Settings ***
Library     Browser


*** Test Cases ***
Boot
    New Page    http://localhost:8082/
    Set Browser Timeout    timeout=30s    scope=test

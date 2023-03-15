*** Settings ***
Library             OperatingSystem
Library             Browser

Suite Setup         Run Keywords
...                     Remove Directory    /opt/robotframework/reports/screenshots    recursive=true
...                     AND
...                     Create Directory    /opt/robotframework/reports/screenshots
...                     AND
...                     Register Keyword To Run On Failure    Browser.Take Screenshot    filename=%{ROBOT_REPORTS_DIR}/screenshots/${SUITE_NAME}_{index}
...                     AND
...                     New Browser    browser=chromium    headless=false
...                     AND
...                     New Context    viewport={'width': 1920, 'height': 1080}    locale=de-DE    tracing=%{ROBOT_REPORTS_DIR}/trace.zip
Suite Teardown      Run Keywords
...                     Close Context
...                     AND
...                     Remove Directory    /opt/robotframework/reports/browser/    recursive=true

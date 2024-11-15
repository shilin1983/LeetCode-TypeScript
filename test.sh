#!/bin/bash

echo "测试开始..."

bun test --coverage-reporter=lcov

genhtml -o coverage/html coverage/lcov.info

open coverage/html/index.html

echo "测试结束！"

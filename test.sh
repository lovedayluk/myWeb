#!/bin/bash

URL="http://localhost:5000"
#URL="http://api2.sysujwxt.com/v2"

SESSION='"o4ovIlzQxFJLPlainW91ormPfMw=?id=VklEMTAwMDE4MTk4MApwMQou&sno=VjEwMzg5NDM0CnAxCi4="'

SNO='09388448'

# auth
#curl -i -F 'sno=10389434' -F 'password=1111' $URL/signin

# info api
#curl -i --cookie "session=$SESSION" $URL/info

# borrowed books
curl -i --cookie "session=$SESSION" $URL/loan_books

# search
#curl -i $URL/search_result_entry?name=ruby

#curl -i "$URL/search_result?set_number=006082&set_entry=2-3"
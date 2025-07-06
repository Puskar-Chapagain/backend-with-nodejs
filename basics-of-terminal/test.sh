num1=7
num2=4

echo $((num1+num2))
echo "End"

# to create 100 files named app1.js, app2.js ...
for i in {1..1000}; do touch "app$i.js"; done

# to remove 100 files named app1.js, app2.js ...
for i in {1..1000}; do rm "app$i.js"; done


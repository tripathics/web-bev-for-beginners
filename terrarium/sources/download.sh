LINK="https://raw.githubusercontent.com/microsoft/Web-Dev-For-Beginners/main/3-terrarium/solution/images/plant"

for VARIABLE in "1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12" "13" "14"
do
    FULL="${LINK}${VARIABLE}.png";
    wget $FULL;
done
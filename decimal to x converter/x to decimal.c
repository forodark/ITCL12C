#include <stdio.h>
#include <stdlib.h>
#include "glencrypt.h"


int main() {
	char input[32];
	int decimal = 0;
	int value;
	int base = 16;
	int power = 1;
	printf("Enter base %d:", base);
	inputCustom("", &input, "0123456789ABCDEF");
	int length = strlen(input);
	
    for (int i = length - 1; i >= 0; i--) {
        if (input[i] >= '0' && input[i] <= '9') {
        	value = (input[i] - '0') * power;
        }
        else if (input[i] >= 'A' && input[i] <= 'F') {
        	value = (input[i] - 'A' + 10) * power;
        }
        decimal += value;
        printf("%d\t%d\t%d\n",power,value/power,value);
        power *= base;
	}
	printf("Decimal: %d\n", decimal);
	waitEnter();
	system("cls");
	main();
	return 0;
}

#include <stdio.h>
#include "glencrypt.h"


int main() {
	int decimal, remainder;
	int base = 16;
	char converted;
	char output[32];
	input(Int, "Enter decimal: ", &decimal);
	
	while(decimal > 0 && base != 16) {
		remainder = decimal%base;
		printf("%d/%d\t%d\n", decimal, base, remainder);
		decimal = decimal/base;
	}
	while(decimal > 0 && base == 16) {
		remainder = decimal%base;
		if (remainder == 10) {
			converted = 'A';
		}
		else if (remainder == 11) {
			converted = 'B';
		}
		else if (remainder == 12) {
			converted = 'C';
		}
		else if (remainder == 13) {
			converted = 'D';
		}
		else if (remainder == 14) {
			converted = 'E';
		}
		else if (remainder == 15) {
			converted = 'F';
		}
		else {
			converted = remainder + '0';
		}
		printf("%d/%d\t%d\t%c\n", decimal, base, remainder, converted);
		snprintf(output, sizeof output, "%c%s", converted, output);
		decimal = decimal/base;
	}
	
	printf("Base %d: %s", base, output);
	waitEnter();
	system("cls");
	main();
	return 0;
}

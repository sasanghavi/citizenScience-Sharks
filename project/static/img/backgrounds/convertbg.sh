#!/bin/bash

j=1
for i in $( ls imgorig ); do
	OF=bg$((j++)).jpg
	IF=imgorig/$i
	echo converting: $i
	convert $IF -brightness-contrast 0x20 $OF
done
